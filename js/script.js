var pw;
pw = prompt('写真を見るにはパスワードが必要だよ。','');
if(pw != ''){
    location.href = pw+'.html';
}else{
    alert('パスワードが違うよ');
}