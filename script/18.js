// 회문 체크 함수
const palindrome = (t1, t2) => {  // t1, t2가 왜 오는지 알아야 한다.
    // console.log('palindrome');
    let s = t1.value;
    // console.log(s);

    // 입력 내용이 없는 경우
    // if(s.length == 0) return // 문자열의 길이가 0, 즉 없는 경우 리턴
    if(s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요';
        return;
    }

    // 입력 내용이 있는 경우 - 회문 판별
    let rs = '';  // rs: s를 뒤집은 것
    // 방법1
    // for(let i = s.length-1; i>=0; i--) {  // i가 0보다 크거나 같을 동안
    //     rs = rs + s[i];
    // }

    // 방법2: 배열 이용
    // 문자열.split(): 문자열을 분리자로 분리해서 배열
    s = s.split('');  // '' 기준으로 쪼개져서 배열로 들어감. / '': 한글자 씩 쪼개줌  // s는 배열
    
    // 배열.reverse(): 배열의 요소를 뒤집어줌
    s = s.reverse();  // 뒤집어짐.

    // rs = s.toString();  // 배열을 쉼표로
  
    // 배열.join(): 배열의 요소를 문자열로 묶어줌
    rs = s.join('');

    // 출력
    console.log("s=", s, ",rs=", rs)  // 글자가 뒤집어 쓰는 것을 확인할 수 있음.
//    if (s == rs) { 방법2에서 s는 훼손(?)이 되었으므로 원래 값을 넣어야 함.
    if (t1.value == rs) {

        // console.log("회문입니다");  // 출력됨.
        // document.querySelector('#txt2').textContent = '회문입니다';  // 값 출력이 안 된다.
        // document.querySelector("#txt2").innerHTML = `회문입니다`; // 값 출력이 안 된다.

        // 왜? 위의 방식을 쓰면 안 되는가? input 태그 텍스트이기 때문에 텍스트를 넣기 위해 value를 써야 한다.
        // document.querySelector('#txt2').value = '회문입니다'; 
        t2.value = rs + ': 회문입니다.'
        // t2.value = `${rs}: 회문입니다.`;
    }
    else {
        // t2.value = `${s}: 회문이 아닙니다.`;  // 방법1에서 사용
        t2.value = `${t1.value}: 회문이 아닙니다.`;
    }
}

// 숫자 합계
const numSum = (t1, t2) => {
    // console.log('numSum');
    let s = t1.value;  // form 안에 있는 값을 가져올 땐 value 사용  // 태그일 땐 textContent 나 innerHTML 사용
    let sum = 0;
    
    // 문자열 순회
    for(let ch of s) {
        console.log(ch, isNaN(ch));

        // 방법1
        // if (isNaN(ch) == false){
        //     // 문자인 것 중에서 숫자인 것만 더하기
        //     // sum = sum + ch  // 이렇게 한다면 ch는 '문자'이므로 문자와 문자가 더해져 sum에 저장될 것이다.
        //     sum = sum + parseInt(ch)
        //     t2.value = sum;
        // }

        // 방법2
        if (!isNaN(ch)) sum = sum + parseInt(ch);
    }
    t2.value = sum;
}

document.addEventListener("DOMContentLoaded", () => {  // 돔이 다 만들어진 다음에 콜백함수를 수행하겠음. 이벤트가 발생하면 계속 실행함.
    // 4개의 컨포넌트들을 계속 제어할 것이므로 변수로 잡는다. / <button type="reset">취소</button> -> 취소 버튼은 단순한 기능
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    // 위처럼 하나씩 가져올 수도 있으나 querySelectorAll을 사용할 수도 있다.
    // const txts = document.querySelectorAll("input[type=text]");  // input 태그에서 type이 text인 것을 가지고 오겠다는 의미

    // button으로 가지고 오면 취소 버튼도 가져와야 하니 class 값으로 버튼을 가지고 온다.
    // querySelectorAll: 값을 배열로 가지고 옴.
    const bts = document.querySelectorAll(".bt");
    
    // 클릭이 눌러질 때 마다 콜백함수가 실행되어야 함.

    // 버튼 배열에 클릭이벤트 작성
    // 배열의 값을 하나씩 가져오는것: 순회
    // 반복문으로 클릭이벤트를 넣겠다.
    for(let bt of bts) {  // bt는 bt1이 될 수도 있고, bt2가 될 수도 있음.
        // console.log(bt);
         
        // bt.addEventListener('click', () => {});
        // 하지만! bt는 두 개이며, 각각 다른 일을 할 것이다.

        bt.addEventListener('click', (event) => {  // bt.addEventListener('click', (event) => { 에서 bt가 bt1이 되면 이벤트가 bt1에만 걸릴 것이다.
            // 클릭이벤트가 발생하고 reload되는 것을 방지 / 클릭이벤트 후 값 유지 / form은 실행되고 페이지를 다시 로드한다.
            event.preventDefault();

            // 버튼의 값을 하나씩 가져오기 방법1.
            // let gubun = bt.innerHTML;
            // console.log(gubun);

            // 버튼의 값을 하나씩 가져오기 방법2.
            // let gubun2 = bt.getAttribute('id');
            // console.log(gubun2);  // id값이 출력됨.

            // 버튼의 값을 하나씩 가져오기 방법3. - 문자열 슬라이스 사용하기
            let gubun3 = bt.getAttribute('id').slice(-1);
            // console.log(gubun3);
            if (gubun3 == 1) palindrome(txt1, txt2) ;  // ===: 데이터 타입 확인 / gubun3 === '1' / txt1, txt2가 왜 오는 거야? 정의된 컨포넌트를 함수로 넘겨버림
            else numSum(txt1, txt2); // gubun3이 2가 나오는 경우
        });
    }
});  
