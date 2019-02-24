
do{
    var nota = prompt('Introduce la nota');
    if(Number(nota) == nota){
        if(nota >0 && nota <= 10){
            if(nota < 3){
                alert('Muy Deficiente');
            } else if( nota < 5){
                alert('Insuficiente');
            }else if(nota < 6){
                alert('Suficiente');
            }else if(nota < 7){
                alert('Bien');
            }else if(nota < 9){
                alert('Notable');
            }else if(nota >= 9){
                alert('Sobresaliente');
            }
        }else{
            alert('Nota Erronea');
        }
    }else{
        if(nota != undefined){
            alert("Introduce un numero valido");
        }
    }
}while (nota != undefined); // undefined es cuando se pulsa cancelar