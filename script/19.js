document.addEventListener("DOMContentLoaded", () => {
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

    for(let cbt2 of cbt2s) {
        cbt2.addEventListener('click', () => {
            
        });
    }

    for(let cbt3 of cbt3s) {
        cbt3.addEventListener('click', () => {
            
        });
    }

});