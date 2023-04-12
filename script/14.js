const show = () => {
    // event에 중간선: VSC에서 하는 명령 / 이제 안 쓴다는...?
    event.preventDefault();

    // 랜덤 생성
    let n = Math.floor(Math.random() * 6) + 1;

    // src 속성 갖다 붙이기
    document.querySelector(".h2Class > img").setAttribute("src", `./img/${n}.png`);
}