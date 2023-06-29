function evaluar(){
    let dato = document.getElementById(`data1`);
    let option = dato.value;
    let dato2 = document.getElementById(`data2`);
    let option2 = dato2.value;
    let dato3 = document.getElementById(`data3`);
    let option3 = dato3.value;
    let dato4 = document.getElementById(`data4`);
    let option4 = dato4.value;
    let dato5 = document.getElementById(`data5`);
    let option5 = dato5.value;
    let dato6 = document.getElementById(`data6`);
    let option6 = dato6.value;

    let dato7 = document.getElementById(`data7`);
    let option7 = dato7.value;
    let dato8 = document.getElementById(`data8`);
    let option8 = dato8.value;
    let dato9 = document.getElementById(`data9`);
    let option9 = dato9.value;

    let dato10 = document.getElementById(`data10`);
    let option10 = dato10.value;
    let dato11 = document.getElementById(`data11`);
    let option11 = dato11.value;
    let dato12 = document.getElementById(`data12`);
    let option12 = dato12.value;
    let dato13 = document.getElementById(`data13`);
    let option13 = dato13.value;
    let dato14 = document.getElementById(`data14`);
    let option14 = dato14.value;

    let dato15 = document.getElementById(`data15`);
    let option15 = dato15.value;
    let dato16 = document.getElementById(`data16`);
    let option16 = dato16.value;
    let dato17 = document.getElementById(`data17`);
    let option17 = dato17.value;

    document.getElementById(`re`).innerText = `${option}`;
    document.getElementById(`re2`).innerText = `${option2}`;
    document.getElementById(`re3`).innerText = `${option3}`;
    document.getElementById(`re4`).innerText = `${option4}`;
    document.getElementById(`re5`).innerText = `${option5}`;
    document.getElementById(`re6`).innerText = `${option6}`;
    document.getElementById(`re7`).innerText = `${option7}`;
    document.getElementById(`re8`).innerText = `${option8}`;
    document.getElementById(`re9`).innerText = `${option9}`;
    document.getElementById(`re10`).innerText = `${option10}`;
    document.getElementById(`re11`).innerText = `${option11}`;
    document.getElementById(`re12`).innerText = `${option12}`;
    document.getElementById(`re13`).innerText = `${option13}`;
    document.getElementById(`re14`).innerText = `${option14}`;
    document.getElementById(`re15`).innerText = `${option15}`;
    document.getElementById(`re16`).innerText = `${option16}`;
    document.getElementById(`re17`).innerText = `${option17}`;


    resultado=0;
    total=document.querySelectorAll('td+td+td');
    for (i=0;i<6;++i){
        resultado+=parseFloat(total[i].firstChild.data);
    }
    resultado2=0;
    total2=document.querySelectorAll('td+td+td');
    for (i=6;i<9;++i){
        resultado2+=parseFloat(total2[i].firstChild.data);
    }
    resultado3=0;
    total3=document.querySelectorAll('td+td+td');
    for (i=9;i<14;++i){
        resultado3+=parseFloat(total3[i].firstChild.data);
    }
    resultado4=0;
    total4=document.querySelectorAll('td+td+td');
    for (i=14;i<17;++i){
        resultado4+=parseFloat(total4[i].firstChild.data);
    }

    document.getElementById(`total1`).innerText = resultado;
    document.getElementById(`total2`).innerText = resultado2;
    document.getElementById(`total3`).innerText = resultado3;
    document.getElementById(`total4`).innerText = resultado4;
    document.getElementById(`total5`).innerText = (resultado+resultado2+resultado3+resultado4)/4;
    
}