// 함수
// 섭씨온도 화씨온도 변환
const cTof = (temp) => {
    let ftemp = (temp * (9/5)) + 32;
    return ftemp;
}

// 화씨온도 섭씨온도 변환
const fTof = (temp) => {
    let ctemp = (temp -32) + (5/9);
    return ctemp;
}


// select 토글
const selToggle = (s1, s2, t1, t2) => {
    t1.value = '';
    t2.value = '';

    if (s1.value == '℃') {
        s2.value = '℉';
    }
    else if (s1.value == '℉') {
        s2.value = '℃';
    }
}


document.addEventListener("DOMContentLoaded", () => { // 돔이 완성되고 나면 이벤트를 달겠다 라는 의미
    // 돔이 완성되면 아래를 실행

    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    // 단위 표시
    d1.textContent = sel1.value;
    d2.textContent = sel2.value;

    // select 값이 변경이 될 때
    // sel1.addEventListener('change', () => {
    //     d1.textContent = sel1.value;
    // });
    // 위의 코드와 같음.
    // sel1.addEventListener('change', (event) => {
    //     d1.textContent = event.target.value;
    //     t1.value = '';
    //     t2.value = '';

    //     // 서로 바뀌게 만들기
    //     if (sel1.value == '℃') {
    //         sel2.value = '℉';
    //     }
    //     else if (sel1.value == '℉') {
    //         sel2.value = '℃';
    //     }

    //     d1.textContent = sel1.value;
    //     d2.textContent = sel2.value;
    // });

    // 함수: 중복되는 부분을 함수 처리
    sel1.addEventListener('change', (event) => {
        selToggle(sel, sel2, t1, t2);

        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });

    // sel2.addEventListener('change', () => {
    //     d2.textContent = sel2.value;
    // });
    // sel2.addEventListener('change', (event) => {
    //     d2.textContent = event.target.value;
    //     t1.value = '';
    //     t2.value = '';

    //     // 서로 바뀌게 만들기
    //     if (sel2.value == '℃') {
    //         sel1.value = '℉';
    //     }
    //     else if (sel2.value == '℉') {
    //         sel1.value = '℃';
    //     }

    //     d1.textContent = sel1.value;
    //     d2.textContent = sel2.value;
    // });
    sel2.addEventListener('change', (event) => {
        selToggle(sel, sel2, t1, t2);

        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });

    // input에 값이 입력되었을 때
    // t1.addEventListener('input', (event) => {  // event: 이벤트를 주는 것
    t1.addEventListener('input', (e) => {
        // console.log(e.target.value)
        if (sel1.value == sel2.value) {
            t2.value = t1.value;
        }
        // else if (sel1.value == '℃' && sel1.value == '℉') // && sel1.value == '℉' 논리적으로 없어도 된다.
        else if (sel1.value == '℃') {
            // 섭씨온도 -> 화씨온도
            // t2.value = (t1.value * (9/5) + 32);
            t2.value = cTof(t1.value);
        }
        else if (sel1.value == '℉' && sel1.value == '℃') {
            // 섭씨온도 -> 화씨온도
            t2.value = fTof(t1.value);
        }


    })



})