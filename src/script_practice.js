/**
 * 分割代入の練習
 */

// const myProfile = {
//   name: "もち",
//   age: 30
// };

// const message1 = `名前は${myProfile.name}で、年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}で、年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["もち", 30];
// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}才です。`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `名前は${name}で、年齢は${age}才です。`;
// console.log(message4);

/**
 * スプレッド構文
 */

//  const arr2 =[ 1, 2, 3, 4, 5];
//  const [num1, num2, ...arr3] =arr2;
//  console.log(num1);
//  console.log(num2);
//  console.log(arr3);

//配列のコピーと結合

// const arr4 =[10, 30, 50];
// const arr5 =[70, 90];

//コピー
// const arr6 = [...arr4];
// console.log(arr6);
// //配列の結合

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

//実験 参照をひきついでしまう話。

// const arr8 =arr4;
// arr8[0] = 100;
//  console.log(arr8); //arr8[0]=100は反映されて[100, 30, 50]となる。
//  console.log(arr4); //[100,30,50]となってしまう。

/**
 * map,filterについて
 */
// for文で出力
//  const nameArr =["もち", "rice" , "orange"];
//  for (let index = 0; index <nameArr.length;index++){
//    console.log(nameArr[index]);  //もち、rice,orangeで出力される。
//  }

//mapを使用
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2); // ["もち", "rice", "orange"]

//nameArr.map((name)=> console.log(name)); //上記と同じ結果を得られる。
/**
 * 三項演算子
 */
// const val1 = 1> 0 ? 'OK!':'NG!!';
// console.log(val1); //OK!
// const val2 = 1> 2 ? 'OK!':'NG!!';
// console.log(val2); //NG!!

//文字列判定
// const num1 = 2020;
// console.log(num1.toLocaleString()); //2,020
// const num2 = "2020";
// console.log(num3.toLocaleString()); //Error　文字列には適用不可

// const num3 = 2020;
// const formattedNum1 =
//   typeof num3 === "number" ? num3.toLocaleString() : "数値を入力！！";
// console.log(formattedNum1); //2,020

// const num4 = "omoti";
// const formattedNum2 =
//   typeof num4 === "number" ? num4.toLocaleString() : "数値を入力！！";
// console.log(formattedNum2); //数値を入力
// const checkSum1 =(num1,num2)=>{
//   return num1 + num2 > 200 ? '200を超えています。' : '200以下です。'
// }
// console.log(checkSum1(60,150)); //200を超えています。
// console.log(checkSum1(100,90)); //200以下です。

//論理演算子
// ||の用法  左が偽のとき、右を出力
// const tmp1 =100;
// const buf1 = tmp1 || "設定されていません。";
// console.log(buf1); //100

// const tmp2 =null;
// const buf2 = tmp2 || "設定されていません。";
// console.log(buf2); //設定されていません。

// &&の用法　左が真のとき、右を出力する。
// const tmp3 =100;
// const buf3 = tmp3 && "設定されていません。";
// console.log(buf3); //100

// const tmp4 =null;
// const buf4 = tmp4 && "設定されていません。";
// console.log(buf4); //設定されていません。
