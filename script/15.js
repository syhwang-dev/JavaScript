document.addEventListener("DOMContentLoaded", () => {

    // const bts = document.querySelector('button');
    const bts = document.querySelectorAll('button');
    console.log(bts);

    // document.querySelector('#h2Id').textContent = bts.textContent;

    // querySelectorAll 사용시
    // 배열에 있는 것을 하나씩 가져오는 방법
    // 배열을 순회하는 방법: case1
    // for(let i=0; i<bts.length; i++) {
    //     console.log(bts[i].textContent);
    //     // console.log(bts[i]);  // 버튼에 쌓여서 출력
    // }

    // 배열을 순회하는 방법: case2
    // forEach는 함수를 써야 해서 화살표 함수를 사용함.
    // bts.forEach((item) => {
    //     // console.log(item);
    //     console.log(item.textContent);
    // });

    // case2의 확장
    // bts.forEach((item, idx) => {
    //     // console.log(item);
    //     console.log(idx, item.textContent);
    // });

    // case3
    // for(let idx in bts) {
    //     // console.log(idx);
    //     console.log(btx[idx].textContent);
    // }

    // case4
    // for(let item of bts) { // 파이썬의 for in
    //     console.log(item.textContent)
    // }

    // case4의 확장
    // for(let [k, v] of bts.entries()) { 
    //     // console.log(k, v.textContent);
    //     // console.log(v.textContent);
    // }

    // for(let [k, v] of bts.entries()) { 
    //     document.querySelector("#h2Id").innerHTML = `<ul><li>${v.textContent}</li></ul>`;
    // }

    // 마지막 항목만 출력됨.
    // for(let [k, v] of bts.entries()) { 
    //     document.querySelector("#h2Id").innerHTML = `<ul><li>${v.textContent}</li></ul>`;
    // }
    
    let arr = [];
    for(let [k, v] of bts.entries()) { 
        arr.push(v.textContent) 
        
    }
    console.log(arr)

    for (let i=0; i <arr.length; i++) {
        
    }
    
    // document.querySelector("#h2Id").innerHTML = `<ul><li>${v.textContent}</li></ul>`;
    





});

// const fruits = ["바나나", "딸기", "수박", "사과"];
// let fruitsLength = fruits.length;

// let text = "<ul>";

// for (let i = 0; i < fruitsLength; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("test").innerHTML = text;