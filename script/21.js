// document.addEventListener('DOMContentLoaded', () => {  // dom 로드
//     // url 주소 가져오기
//     let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230419';

//     // 땡겨오기
//     fetch(url)
//     .then((resp) => {
//         console.log(resp);
//         resp.json();  // json으로 변경 / resp.json(); 비동기 통신을 함.
//     })
        
//     .then((data) => {
//         console.log("data", data)
//     })

//     .catch((err) =>{  // err가 발생하면~
//         console.log(err);
//     })
//     ;
// });

// 위의 코드로 실행 시, data: undefine가 보임
// 실행이 안 되므로 resp를 한 줄 짜리 함수로 사용해야 함. 이유는 모르겠음;


//// 중요 - 아래의 코드는 순수 자바스크립트로 구현한 것임.
// document.addEventListener('DOMContentLoaded', () => {  // dom 로드
//     // url 주소 가져오기
//     let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220314';

//     // 땡겨오기
//     fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//         // console.log("data", data)
//         // console.log(data.boxOfficeResult)
//         // console.log(data.boxOfficeResult.dailyBoxOfficeList)  // 배열임을 알아야 함.
//         let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
//         // console.log(boxlist);

//         let boxTag = '';
//         for(let box of boxlist) {  // box가 Object임
//             // console.log("box", box)
//             // console.log(box.movieNm);
//             console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
//             boxTag = boxTag + '<details>';
//             boxTag = boxTag + `<summary>${box.movieNm}</summary>`;
//             boxTag = boxTag + '<ul>';
//             boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
//             // boxTag = boxTag + `<li>매출액 : ${box.salesAmt}</li>`;
//             // 단위 콤마 넣기
//             boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
//             boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
//             boxTag = boxTag + '</ul>';
//             boxTag = boxTag + '</details>';
//         }
//         // console.log(boxTag)
//         document.querySelector('#boxDiv').innerHTML = boxTag;
        
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
//     ;
// });


// 여기까지 해보고 나니... 날짜를 내가 직접 찍어서(input에서) 결과를 보고 싶지 않니...?
document.addEventListener('DOMContentLoaded', () => {  // dom 로드
    const boxDt = document.querySelector("#boxDt");
    boxDt.addEventListener('change', () => {
        // url = url + boxDt.value;
        // console.log(url);  // 마이너스가 있으면 안 되므로 replace를 사용하자.
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';

        url = url + boxDt.value.replaceAll('-', '');
        console.log(url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {

            let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
            // console.log(boxlist);

            let boxTag = '';
            for(let box of boxlist) { 
                console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
                boxTag = boxTag + '<details>';
                boxTag = boxTag + `<summary>${box.movieNm}</summary>`;
                boxTag = boxTag + '<ul>';
                boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
                boxTag = boxTag + `<li>개봉일 : ${box.openDt}</li>`;
                boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
                boxTag = boxTag + `<li>관객수 : ${parseInt(box.audiAcc).toLocaleString()}명</li>`;
                boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
                boxTag = boxTag + '</ul>';
                boxTag = boxTag + '</details>';
            }
            // console.log(boxTag)
            document.querySelector('#boxDiv').innerHTML = boxTag;
        })
        .catch((err) =>{
            console.log(err);
        })
        ;
    })
});