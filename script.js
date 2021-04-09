function zmien_kolor(){
    document.getElementById("zmien").style.backgroundColor="red";
}
function wyslij(){
    var mail = document.getElementById("pole1").value;
    var text1 = document.getElementById("pole2").value;
    var text2 = document.getElementById("pole3").value;
    document.getElementById("result").innerHTML = "Mail:" +mail +"</br>Temat:" +text1  +"</br>Tresc:"+ text2;
}