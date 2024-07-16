//서버를 띄우기 위한 기본 셋팅(express 라이브러리)
//설치한 라이브러리 참고
const express = require('express');
//express를 이용해서 새로운 객체를 만듦
const app = express();

//listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
//8080 포트로 웹 서버 열어주라는 뜻
app.listen(8080, function(){
    console.log('listening on 8080')
});

//.get() 여러개로 경로를 많이 생성 가능
//GET 요청 -> /fruit 으로 방문하면 fruit 관련 안내문 띄어주기
app.get('/fruit', function(req, res){
    res.send('과일 페이지');
});
//GET 요청 -> /beauty 으로 방문하면 beauty 관련 안내문 띄어주기
app.get('/beauty', function(req, res){
    res.send('화장품 페이지');
});
//GET 요청 -> / 으로 방문하면 index.html 화면 보여줌
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});