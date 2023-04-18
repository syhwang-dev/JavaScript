document.addEventListener('DOMContentLoaded', ()=>{
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');

    // 초기 배열: 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];

    // 클릭 확인
    let flag = true;

    // 하트 개수
    let cnt = 0;

    // 눌러진 순서
    let selarr = [];

    // 폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);
            // 중요!
            flag = false;  // 한번 폭탄 섞기 버튼이 눌려지고 나면 더이상 버튼이 눌러지면 안 됨. 폭탄이 찾아지고 난 후 눌러져야 함.
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = "";
            for (let box of boxs) {
                box.innerHTML = box.getAttribute('id').replace('box', '');
            }
            
        }
    });

    // div 박스 제어
    for (let box of boxs) {
        // 박스 번호 넣기 - 10이 넘어가는 숫자에 대해 온전히 다 가져올 수 없음.
        // box.innerHTML = box.getAttribute('id').slice(-1);
        // replace로 변경하기 - 10이 넘어가는 숫자를 넣기 좋음.
        box.innerHTML = box.getAttribute('id').replace('box', '');

        // 박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            let n = parseInt(box.textContent);
            // console.log("n = ", n, " selarr =", selarr);

            // 기존의 하트나 폭탄이 들어있는 경우
            if (isNaN(n)) return;

            if (!flag) {
                // 선택 항목 추가
                selarr.push(n);
                console.log("n = ", n, " selarr =", selarr);
                cnt++;
                console.log("cnt= ", cnt)

                // 몇 번째 버튼이 눌러졌는지 알 수 있음.
                // let n = parseInt(box.getAttribute('id').replace('box', ''));


                // 폭탄인지 하트인지 구분
                if (arr[n-1] == 0) {
                    // 하트
                    box.innerHTML = '<img src="./img/hart.png">';

                    if (cnt == 8) {
                        document.querySelector('h2').innerHTML = "성공";

                        // let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item)=> !selarr.includes(item))
                        // console.log(lastArr[0]);
                        // // 8개의 하트를 다 찾은 후, 마지막을 하트로 로드하는 방법1 - 차집합 이용
                        // boxs[lastArr[0]-1].innerHTML = '<img src="./img/hart.png">';

                        // 8개의 하트를 다 찾은 후, 마지막을 하트로 로드하는 방법2
                        // 배열에서 1을 찾기
                        let lastn = arr.findIndex((item)=>item == 1);
                        console.log('find = ', lastn);
                        boxs[lastn].innerHTML = '<img src="./img/hart.png">';
                    }
                }
                else {
                    // 폭탄
                    box.innerHTML = '<img src="./img/boom.png">';
                    flag = true;

                    // 폭탄을 만나면 더이상 진행되지 않게 하기
                    // box.disable

                    document.querySelector('h2').innerHTML = "실패";
                }
            }
        });
    }
});