
let listaNumero = ['cA','c2', 'c3', 'c4', 'c5', 'c6','c7', 'c8','c9','cx','cJ','cQ','cK',
            'oA','o2', 'o3', 'o4', 'o5', 'o6','o7', 'o8','o9','ox','oJ','oQ','oK',
            'eA','e2', 'e3', 'e4', 'e5', 'e6','e7', 'e8','e9','ex','eJ','eQ','eK',
            'pA','p2', 'p3', 'p4', 'p5', 'p6','p7', 'p8','p9','px','pJ','pQ','pK',
]



function carConteudo(){

const newlista =[]
var newhtml = "";
var x = 0;
while (x < 20){
newlista[x]= (Math.floor(Math.random()*52))+1
x++;
}
const arrUnique = [...new Set(newlista)];
newhtml+="<div class='mesa'>"
/*alert(newlista)*/
/*alert(arrUnique)*/

/*quantas cartas */
var porta= 0;
var valor = document.getElementById("quant").value;
if (valor <1){
valor = 3;
alert("valor baixo de mais, padrão 3 cartas entregues!");
}
else if(valor>15){
if (valor != 666 && valor != 0903){
    valor = 3;
    alert(" apenas 10 para baixo, padrão 3 cartas entregues");
}
else if(valor == 666  || valor ==0903){
    /*Topo NUMERO E TIPO das cartas */
    porta= 1;
    if (valor == 666){
        var brasao = "🔥";
        var card_alert=  brasao+"opss! você invocou a carta proibida! 😱😱😱!!!"+brasao;
        var value_card = "666";
        var img_card = "<img class='b5' src='card/capeteemo.jpg'>";
        var card_style ="<div style ='margin-top:55px;' class='front' style='color:red; background-color:black;'>";
        var txt_card = "Ousado serás ao virar esta maldita carta, pois mal tu sabes ó ser enfermo de curiosidades, que terás que purificar tua alma, já que o corrompido te olhas de volta com total intensidade CAPETOSA!!!!";
    }
    else if(valor == 0903){
        var brasao = "✝️";
        var card_alert= brasao+"bençãos! você invocou a carta santa!"+brasao;
        var value_card = "JESUS";
        var img_card = "<img style ='margin-top:55px;' class='b5' src='https://i.etsystatic.com/17734837/r/il/35d230/3121833220/il_fullxfull.3121833220_axzj.jpg'>"; 
        var card_style ="<div class='front' style='color:red; background-color:aliceblue;'>"
        var txt_card = "Bençãos para toda sua família, tudo que há de ruim será expurgado de sua vida, pois não há nada mais maravilhoso que as Bençãos de Jesus.<br> Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que n'Ele crê não pereça, mas tenha a vida eterna.";
    }
    alert(card_alert);
    newhtml += "<div class='campo'> <input type='checkbox' id='card-"+0+"' /><label class='flip-container-"+0+"'  for='card-"+0+"'><div class='flipper'><div class='back'><img src='card/back2.png' /></div>";
    newhtml+= card_style
    /*Topo NUMERO E TIPO das cartas */
    newhtml+= "<div class='valor_up'> <div class='quebrar_valor'><p class='valor'>"+value_card+"</p><p class='brasao_valor'>"+brasao+"</p> </div>   </div>"
    newhtml+="<div class='brasao'>"
    newhtml+=img_card
    /*Pé NUMERO E TIPO das cartas */
    newhtml+= "</div><div class='valor_down' ><div class='quebrar_valor' ><p class='brasao_valor' id='inverter'>"+brasao+"</p><p id='inverter'>"+value_card+"</p></div></div></div></div></label></div></div><p class='capetoso'>"+txt_card+"</p>"
}

}

if (porta == 0){



for(i = 0; i<valor;i++){
    /*alert(i+'='+listaNumero[arrUnique[i]])*/
    /*a trás das cartas*/
    var jqk= "";

    var inverter= (Math.floor(Math.random()*10));
    if(inverter >5){
    newhtml += "<div class='campo'> <input type='checkbox' id='card-"+(i)+"' /><label class='flip-container-"+(i)+"'  for='card-"+(i)+"'><div class='flipper'><div class='back'><img src='card/back2.png' /></div>";
    }
    else if(inverter < 6){
        newhtml += "<div class='campo'style='transform: rotate(180deg);'> <input type='checkbox' id='card-"+(i)+"' /><label class='flip-container-"+(i)+"'  for='card-"+(i)+"'><div class='flipper'><div class='back'><img src='card/back2.png' /></div>";

    }
    /*a frente das cartas e suas cores e naipe*/ 
    /*alert(listaNumero[arrUnique[i]])
    var brasao =""/*espadas (♠), paus (♣), copas (♥) e ouros (♦).*/
    if (listaNumero[arrUnique[i]].substr(0,1) === 'c'){
        brasao ="♥";newhtml+= "<div class='front' style='color:red'>"
        jqk="card/copas/"
    }
    else if ( listaNumero[arrUnique[i]].substr(0,1) === 'o'){
        brasao ="♦";newhtml+= "<div class='front' style='color:red'>"
        jqk="card/ouros/"
    }
    if (listaNumero[arrUnique[i]].substr(0, 1) === 'e'){
        brasao ="♠";newhtml+= "<div class='front' style='color:black'>"
        jqk="card/espadas/"
    }
    else if ( listaNumero[arrUnique[i]].substr(0,1) === 'p'){
        brasao ="♣";newhtml+= "<div class='front' style='color:black'>"
        jqk="card/paus/"
    }

    /*Topo NUMERO E TIPO das cartas */
    if (listaNumero[arrUnique[i]].substr(1,2) != 'x'){
        newhtml+= "<div class='valor_up'> <div class='quebrar_valor'><p class='valor'>"+listaNumero[arrUnique[i]].substr(1,2)+"</p><p class='brasao_valor'>"+brasao+"</p> </div>   </div>"
    }
    else if (listaNumero[arrUnique[i]].substr(1,2) == 'x'){
    newhtml+= "<div class='valor_up'> <div class='quebrar_valor'><p class='valor'>10</p><p class='brasao_valor'>"+brasao+"</p> </div>   </div>"
        }



    newhtml+="<div class='brasao'>"
    if(listaNumero[arrUnique[i]].substr(1,2) == 'A'){newhtml+="<div class='l_brasao'><p class='b1'></p><p class='b2'></p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p><p class='b5' style='font-size: 70px;'>"+brasao+"</p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'></p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '2'){newhtml+="<div style ='margin-top:55px;' class='l_brasao'><p class='b1'></p><p class='b2'>"+brasao+"</p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p><p class='b5'></p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'>"+brasao+"</p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '3'){newhtml+="<div style ='margin-top:50px;'class='l_brasao'><p class='b1'></p><p class='b2'>"+brasao+"</p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p></p><p class='5'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'>"+brasao+"</p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '4'){newhtml+="<div style ='margin-top:55px;'class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='b5'></p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '5'){newhtml+="<div style ='margin-top:55px;' class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='b5'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '6'){newhtml+="<div style ='margin-top:55px;' class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p></p><p class='6'></p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '7'){newhtml+="<div  style ='margin-top:55px;'class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='6'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '8'){newhtml+="<div style ='margin-top:55px;' class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '9'){newhtml+="<div style ='margin-top:55px;' class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'></p>"+brasao+"<p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'x'){newhtml+="<div style ='margin-top:55px;'class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'J'){newhtml+="<img style ='margin-top:55px;' class='b5' src='"+jqk+"v.bmp'>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'Q'){newhtml+="<img  style ='margin-top:55px;'class='b5' src='"+jqk+"ra.bmp'>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'K'){newhtml+="<img style ='margin-top:55px;' class='b5' src='"+jqk+"re.bmp'>"}

    /*Pé NUMERO E TIPO das cartas */
    if (listaNumero[arrUnique[i]].substr(1,2) != 'x'){
        newhtml+= "</div><div class='valor_down' ><div class='quebrar_valor' ><p class='brasao_valor' id='inverter'>"+brasao+"</p><p id='inverter'>"+listaNumero[arrUnique[i]].substr(1,2)+"</p></div></div></div></div></label></div></div>"


    }
    else if (listaNumero[arrUnique[i]].substr(1,2) == 'x'){
            newhtml+= "</div><div class='valor_down' ><div class='quebrar_valor' ><p class='brasao_valor' id='inverter'>"+brasao+"</p><p id='inverter'>10</p></div></div></div></div></label></div></div>"
            }
}
}
newhtml+="</div>"/*mesa*/

let newcss = document.getElementById("Deck");
newcss.style.cssText= 'display:none;';
let carta = document.getElementById("carta");
carta.style.cssText = 'display:flex;';

let embaralhe = document.getElementById("back")
embaralhe.style.cssText= 'display:flex;';

document.getElementById("carta").innerHTML = newhtml
let puche = document.getElementById("inputquant")
puche.style.cssText= 'display:none;';

}

function back(){
let mesa = document.getElementById("Deck");
mesa.style.cssText ='display:flex;'
let carta = document.getElementById("carta");
carta.style.cssText = 'display:none;'
let embaralhe = document.getElementById("back")
embaralhe.style.cssText= 'display:none;';
let puche = document.getElementById("inputquant")
puche.style.cssText= 'display:block;';

}
