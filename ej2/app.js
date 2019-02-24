let edad = prompt('Que edad tienes?');

if(Number(edad) == edad){
    if(edad >= 18){
        document.write('Puedes conducir');
    }else{
        alert("vaya a jugar carritos");
    }
}