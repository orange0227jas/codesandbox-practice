import "./styles.css";

const onClickAdd = () => {
  // id:add-textの要素のvalueを取得
  const inputText = document.getElementById("add-text").value;
  // id:add-textのテキスト情報を初期化
  document.getElementById("add-text").value = "";
  //##########仮想DOMを作成###########
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div を作成
  const div = document.createElement("div");

  //divタグのclassを追加する。
  div.className = "list-row";

  //liタグの作成
  const li = document.createElement("li");

  //liタグのテキスト情報に上記で定義したinputTextを反映させる。
  li.innerText = text;

  //完了ボタンを追加する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //選択したdivを削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素をaddTargetに取得
    const addTarget = completeButton.parentNode;
    //addTargetにある最初の要素のテキスト情報を取得
    const text = addTarget.firstElementChild.innerText;
    //divの情報を初期化
    addTarget.textContent = null;
    const li = document.createElement(li);
    //liタグのテキスト情報に上記で定義したtextを反映させる。
    li.innerText = text;
    // 戻すボタンを定義
    const backButton = document.createElement("button");
    backButton.addEventListener("click", () => {
      //戻すボタンを押すと、ENDエリアから消去する。
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //押した戻すボタンのテキスト情報を取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    backButton.innerText = "戻す";
    //addTargetにliとbackButtonを追加。
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //ENDリストに追加。->complete-listを取得し、その配下にaddTargetを入れる。
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //deleteButtonの親要素を削除
  //削除ボタンを追加。
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押されたボタンの親要素（div)を消去する。
    deleteFromIncompleteList(deleteButton.parentNode); //deleteButtonの親要素を削除
  });

  //divタグの小要素に各要素（上記定義のli)を設定する
  //appendChildは書いた順番（上から）追加される。
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //id:incomplete-listの小要素に上記設定したdivを追加する。
  document.getElementById("incomplete-list").appendChild(div);
};

// add-buttonというIdを持つボタンをクリックすると、OnclickAddを実行する。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
