const show = () => {
    event.preventDefault();  // form에 묶여 있기 때문에 랜더링이 안 되게 설정

    let n = Math.floor(Math.random() * 6) + 1;
    
    let user;

    //// 사용자 입력 수: 라디오의 체크값을 찾음. ////
    // 사용자가 무엇을 찍었는가?
    // user = document.querySelector('input[name="num"]:checked').value;
    // // if (user) {
    // //     alert(user);
    // // }

    // //// 랜덤수와 사용자입력수 같은지 검사 후 결과 출력
    // if (n == user) {
    //     console.log("값이 같음.");
    //     // document.querySelector("#h1Id").innerHTML = '<h2>주사위게임: 맞춤(승)</h2>'
    //     document.querySelector("#h1Id").innerHTML = '주사위게임: 맞춤(승)'


    // } else {
    //     console.log("값이 다름.");
    //     // document.querySelector("#h1Id").innerHTML = '<h2>주사위게임: 틀림(패)</h2>'
    //     document.querySelector("#h1Id").innerHTML = '주사위게임: 틀림(패)'
    // }

    // document.querySelector(".h2Class").innerHTML = `<img src="./img/${n}.png">`;


    // 교수님 방법
    //// 사용자 입력 수: 라디오의 체크값을 찾음. ////
    // querySelectorAll에서 태그를 가져와서 대괄호([])를 사용하여 속성값을 가져올 수 있음.
    // 현재 코드에서는 속성 필요 없이 input 태그만 가져와도 됨.
    const radios = document.querySelectorAll('input[type="radio]');
    for(let item of radios) {
        console.log(item);
        if (item.checked) {
            user = item.value;
            break;
        }
    }

    console.log(typeof n);
    console.log(typeof user);

    //// 랜덤수와 사용자입력수 같은지 검사 후 결과 출력
    // if (n === user) {  // 이렇게 사용하면 데이터 타입이 다를 경우 내가 원하는 값이 안 나옴. n과 user의 데이터 타입이 다르기 때문임. 이때, user의 데이터 타입을 number로 바꿔주면 됨.
    if (n === parseInt(user)) {
        document.querySelector('article h1').textContent = '주사위게임: 맞음(승)';
    }
    else {
        document.querySelector('article h1').textContent = '주사위게임: 틀림(패)';
    }

    // console.log(typeof n);  // number
    // console.log(typeof user); // undefined



    document.querySelector(".h2Class").innerHTML = `<img src="./img/${n}.png">`;

}