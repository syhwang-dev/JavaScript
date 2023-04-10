// 안녕하세요 창이 발생
function show() {
    // alert("안녕하세요.");
    // document.getElementById("h2Id").innerHTML = "안녕하세요.";
}

// dom이 다 로드되고 된 다음에 글자가 나오게 한다.
// document 객체가
// DOMContentLoaded: DOM이 만들어지고 나면, 뭘 할 것이다. 이때 뭘 할 것인지는 함수 안에 적는다.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("h2Id").innerHTML = "안녕하세요.";
});