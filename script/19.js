// 배열 filter 구현
const myFilter = (item) => {
    // console.log(item);

}

// const updateArr = (arr, temp) {

// }

document.addEventListener("DOMContentLoaded", () => {
    // 만약 id로 땡겨오면 12줄 가져오게 됨.
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");

    const btReset = document.querySelector("#txt1")

    const txt1 = document.querySelector('#txt1');

    // 배열의 초기화
    let arr = [];
    
    // 버튼 이벤트 추가
    // reset 기능 구현
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';
        // 만든 배열도 초기화
        arr = [];
    });

        // 여러 버튼에 이벤트 주는 원형 기억하기
        // for(let cbt1 of cbt1s) {
        //     cbt1.addEventListener('click', () => {

        //     });
        // }
    // 배열에 자료 추가 
    for(let cbt1 of cbt1s) {
        // console.log(cbt1.textContent);
        cbt1.addEventListener('click', (e) => {
            // 클릭이벤트 발생
            e.preventDefault();
            // console.log(cbt1.textContent)  // 버튼이 클릭될 때 값이 출력됨.
            switch (cbt1.textContent) {
                case '사과' :
                    arr.push('🍎');
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '수박':
                    arr.push('🍉');
                    break;    
            }
            // console.log(arr);
            // txt1.value = arr.toString();
            // txt1.value = arr.join();
            txt1.value = arr.join(',');
        });
    }

    // 배열에서 자료 삭제: filter 기능 구현
    for(let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            // console.log(cbt2.textContent);
            e.preventDefault();
            // console.log(cbt2.textContent);

            // 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환
            // arr.filter((item) => 조건식) // item 은 기존 배열의 요소
            let gubun = cbt2.textContent.replace(' 삭제', '');  // replace(' 삭제', ''): 이미 구현되어 있는 ' 삭제'를 ''로 교체, 즉 ' 삭제'는 없어짐.
            // console.log(gubun);

            // filter를 사용하지않는 방법
            // arr = myFilter(gubun, arr);

            let temp = [];
            for(let item of arr) {
                switch (gubun) {
                    case '사과':
                        if (item != '🍎') temp.push(item);  // temp에는 사과가 없는 배열
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;
                }
            }
            arr = temp;

            // switch (cbt2.textContent) {
            // switch (gubun) {
            //     case '사과 삭제':
            //         // arr.filter((item)=> console.log(item)); // filter 함수는 배열을 순회한다.
            //         arr = arr.filter((item)=> item != '🍎');  // arr.filter: 새로운 배열을 만든다.
            //         break;
            //     case '바나나 삭제':
            //         arr = arr.filter((item)=> item != '🍌');
            //         break;
            //     case '오렌지 삭제':
            //         arr = arr.filter((item)=> item != '🍊');
            //         break;
            //     case '수박 삭제':
            //         arr = arr.filter((item)=> item != '🍉');
            //         break;
            // }

            console.log("cbt2", arr);
            // txt1.value = arr.toString();
            // txt1.value = arr.join();
            txt1.value = arr.join(',');
            
        });
    }

    for(let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();

            // let gubun = cbt3.textContent.split(' → ')[0];
            let gubun = cbt3.textContent.split('→')[0].trim();  // trim() 앞뒤 공백 제거

            // console.log(gubun);

            let temp = [];
            for(let item of arr) {
                // switch (gubun) {
                //     case '사과':
                //         // if (item = '🍎') temp = arr.replace('🍎', '🥕');  // array에는 replace가 없음 -> 문자열로 바꿔서 진행 그리고 다시 배열로
                //         if (item == '🍎') temp.push('🥕');
                //         else temp.push(item);
                //         break;
                //     case '바나나':
                //         if (item == '🍌') temp.push('🥒');
                //         else temp.push(item);
                //         break;
                //     case '오렌지':
                //         if (item == '🍊') temp.push('🥑');
                //         else temp.push(item);
                //         break;
                //     case '수박':
                //         if (item == '🍉') temp.push('🥦');
                //         else temp.push(item);
                //         break;
                // }


                switch (gubun) {
                    case '사과':
                        arr = arr.map((item)=> item == '🍎' ? '🥕': item);  
                        break;
                    case '바나나':
                        arr = arr.map((item)=> item == '🍌' ? '🥒': item);
                        break;
                    case '오렌지':
                        arr = arr.map((item)=> item == '🍊' ? '🥑': item);
                        break;
                    case '수박':
                        arr = arr.map((item)=> item == '🍉' ? '🥦': item);
                        break;
                }


                // temp = arr.join(',') ;
                // console.log("temp=", temp)

                // switch (gubun) {
                //     case '사과':
                //         temp = temp.replaceAll('🍎', '🥕');
                //         break;
                //     case '바나나':
                //         temp = temp.replaceAll('🍌', '🥒');
                //         break;
                //     case '오렌지':
                //         temp = temp.replaceAll('🍊', '🥑');
                //         break;
                //     case '수박':
                //         temp = temp.replaceAll('🍉', '🥦');
                //         break;
                // }
                // arr = temp;
                // console.log("cbt3", arr);
                txt1.value = arr.join(',');
            }
            
        });
    }

});