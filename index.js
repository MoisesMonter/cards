let listaNumero = ['cA','c2', 'c3', 'c4', 'c5', 'c6','c7', 'c8','c9','cx','cJ','cQ','cK',
                    'oA','o2', 'o3', 'o4', 'o5', 'o6','o7', 'o8','o9','ox','oJ','oQ','oK',
                    'eA','e2', 'e3', 'e4', 'e5', 'e6','e7', 'e8','e9','ex','eJ','eQ','eK',
                    'pA','p2', 'p3', 'p4', 'p5', 'p6','p7', 'p8','p9','px','pJ','pQ','pK',
]

function carConteudo(){

    const newlista =[]
    var newhtml = ""
    var x =0
    while (x < 20){
        newlista[x]= (Math.floor(Math.random()*52))+1
        x++;
    }
    const arrUnique = [...new Set(newlista)];
    newhtml+="<div class='mesa'>"
    /*alert(newlista)*/
    /*alert(arrUnique)*/
    for(i = 0; i<3;i++){
        /*alert(i+'='+listaNumero[arrUnique[i]])*/
        /*a trás das cartas*/
        newhtml += "<div class='campo'> <input type='checkbox' id='card-"+(i)+"' /><label class='flip-container-"+(i)+"'  for='card-"+(i)+"'><div class='flipper'><div class='back'><img src='card/back2.png' /></div>";
       /*a frente das cartas e suas cores e naipe*/ 
       /*alert(listaNumero[arrUnique[i]])
       var brasao =""/*espadas (♠), paus (♣), copas (♥) e ouros (♦).*/
       if (listaNumero[arrUnique[i]].substr(0,1) === 'c'){
        brasao ="♥";newhtml+= "<div class='front' style='color:red'>"
       }
       else if ( listaNumero[arrUnique[i]].substr(0,1) === 'o'){
        brasao ="♦";newhtml+= "<div class='front' style='color:red'>"
       }
       if (listaNumero[arrUnique[i]].substr(0, 1) === 'e'){
        brasao ="♠";newhtml+= "<div class='front' style='color:black'>"
       }
       else if ( listaNumero[arrUnique[i]].substr(0,1) === 'p'){
        brasao ="♣";newhtml+= "<div class='front' style='color:black'>"
       }

       /*Topo NUMERO E TIPO das cartas */
       if (listaNumero[arrUnique[i]].substr(1,2) != 'x'){
        newhtml+= " <div class='quebrar_valor'><p class='valor'>"+listaNumero[arrUnique[i]].substr(1,2)+"</p><p class='brasao_valor'>"+brasao+"</p> </div><br></br>  "/*!=10*/
       }
       else if (listaNumero[arrUnique[i]].substr(1,2) == 'x'){
        newhtml+= " <div class='quebrar_valor'><p class='valor'>"+10+"</p><p class='brasao_valor'>"+brasao+"</p> </div><br></br>  "/*!=10*/
       }
    

    newhtml+="<div class='brasao'>"
    if(listaNumero[arrUnique[i]].substr(1,2) == 'A'){newhtml+="<div class='l_brasao'><p class='b1'></p><p class='b2'></p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p><p class='b5' style='font-size: 70px;'>"+brasao+"</p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'></p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '2'){newhtml+="<div class='l_brasao'><p class='b1'></p><p class='b2'>"+brasao+"</p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p><p class='b5'></p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'>"+brasao+"</p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '3'){newhtml+="<div class='l_brasao'><p class='b1'></p><p class='b2'>"+brasao+"</p><p class='b3'></p></div><div class='l_brasao'><p class='b4'></p></p><p class='5'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'></p><p class='b9'>"+brasao+"</p><p class='b10'></p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '4'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='b5'></p><p class='6'></p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '5'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='b5'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '6'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p></p><p class='6'></p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '7'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'></p><p class='6'>"+brasao+"</p><p class='b7'></p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '8'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'></p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == '9'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'></p>"+brasao+"<p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'></p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'x'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'J'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'Q'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    else if(listaNumero[arrUnique[i]].substr(1,2) == 'K'){newhtml+="<div class='l_brasao'><p class='b1'>"+brasao+"</p><p class='b2'>"+brasao+"</p><p class='b3'>"+brasao+"</p></div><div class='l_brasao'><p class='b4'>"+brasao+"</p><p class='b5'>"+brasao+"</p><p class='6'>"+brasao+"</p><p class='b7'>"+brasao+"</p></div><div class='l_brasao' id='inverter'><p class='b8'>"+brasao+"</p><p class='b9'>"+brasao+"</p><p class='b10'>"+brasao+"</p></div>"}
    
    /*Pé NUMERO E TIPO das cartas */
    if (listaNumero[arrUnique[i]].substr(1,2) != 'x'){
        newhtml+= "</div><br><div class='valor_down' ><div class='quebrar_valor' ><p class='brasao_valor' id='inverter'>"+brasao+"</p><p id='inverter'>"+listaNumero[arrUnique[i]].substr(1,2)+"</p></div></div></div></div></label></div>"
        }
   else if (listaNumero[arrUnique[i]].substr(1,2) == 'x'){
        newhtml+= "</div><br><div class='valor_down' ><div class='quebrar_valor'><p class='brasao_valor' id='inverter'>"+brasao+"</p><p id='inverter'>"+10+"</p></div></div></div></div></label></div>"
        }
    }
    newhtml+="</div>"/*mesa*/
    /*alert(newhtml)*/
    /*console.log(newhtml)*/
    document.getElementById("carta").innerHTML = newhtml
}