// 버튼에 이벤트 달기

// addEventListener: 이벤트를 달아주는 친구
// document.addEventListener("DOMContentLoaded"): 돔이 로드가 되면
// document.addEventListener("DOMContentLoaded", () => {}): 돔이 로드가 되면 콜백함수를 하겠다. () => {}: 콜백함수
document.addEventListener("DOMContentLoaded", () => {
    const bt1 =document.querySelector("#bt1") ;

    // bt1.addEventListener('click', () => {}): 클릭이 발생되면, () => {} 를 하겠다.
    bt1.addEventListener('click', () => {
        event.preventDefault();

        let n = Math.floor(Math.random() * 6) + 1;
        
        let user;
    
        const radios = document.querySelectorAll('input[type="radio]');
        for(let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                break;
            }
        }
    
        if (n === parseInt(user)) {
            document.querySelector('article h1').textContent = '주사위게임: 맞음(승)';
        }
        else {
            document.querySelector('article h1').textContent = '주사위게임: 틀림(패)';
        }
    
        document.querySelector(".h2Class").innerHTML = `<img src="./img/${n}.png">`;

    });

})