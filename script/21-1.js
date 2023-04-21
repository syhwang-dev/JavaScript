
// Step1.
// 일반적인 프로그램: 순서대로 처리
// const funB = () => {
//     console.log('funB');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('A');
//     // console.log('B');
//     funB();
//     console.log('C');
// })


// Step2.
// 시간 걸리는 예제
// 통신하는데 시간이 걸리는 다른 것을 먼저하겠다 -> Ajax
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('A');
//     setTimeout(() => {
//         console.log('B')
//     }, 1000)
//     console.log('C');
// })


// Step3.
// 가장 빠른 것이 먼저
// 시간이 지연되지 않으니 좋음.
// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         console.log('A')
//     }, 700)

//     setTimeout(() => {
//         console.log('B')
//     }, 1000)

//     setTimeout(() => {
//         console.log('C')
//     }, 500)
// })


// Step4.
// 하지만 기다렸다가 받아서 해야 하는 경우도 있을 것임. 시간과 상관없이 ABC가 차례대로 출력되길 원할 땐?
// 콜백 안에 콜백이 들어감.
// Ajax 통신 후에 차례대로 수행되길 원할 때, 콜백 안에 콜백을 사용
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('A');
        setTimeout(() => {
            console.log('B')
            setTimeout(() => {
                console.log('C')
            }, 500)
        }, 1000)
    }, 700)
});
// 이것은 "콜백 지옥"이며, 이것 때문에 Promise가 등장하게 됨.
// 이런 코드를 지양하게 위해 Promise가 등장
// 패치는 Promise 형태로 나옴.