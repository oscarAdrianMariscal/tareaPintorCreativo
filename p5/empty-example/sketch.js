const X=400;
const Y=400;

function setup() {
	createCanvas(X*2,Y*2);
}
/*
function dibujarBandera(x,y,ancho,alto) {
    var ancho,alto;
    
	rect(x,y,ancho,alto);
    rect(x+(ancho),y,ancho,alto);
    rect(x+(ancho*2),y,ancho,alto);
}
*/

function draw() {
    /*
    if (document.getElementById("ordenes").value){
        var pintura = document.getElementById("ordenes").value;
        var cuadrado = /\[(\w*)\s(\w*)(.*)\]/g;
        match = cuadrado.exec(pintura);
        var relleno = match[1];
        var borde = match[2];
        fill (relleno);
        rect(45,100,80,80);
        
    }
    */
    
    if (document.getElementById("ordenes").value){
        console.info("Imagen");
        clear();
        crearFigura(X,Y,X/2,Y/2,document.getElementById("ordenes").value);
        
    }
}

function crearFigura(espacioX,espacioY,cordenadaX,cordenadaY,orden){
    //()
        var circulo = /^\((\w*)\s(\w*)(.*)\)/g;
        var testCirculo = /^\((\w*)\s(\w*)(.*)\)/g;
    //[]
        var cuadrado = /^\[(\w*)\s(\w*)(.*)\]/g;
        var testCuadrado = /^\[(\w*)\s(\w*)(.*)\]/g;
    //<>
        var horizontal = /^\<([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\>/g;
        var testHorizontal = /^\<([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\>/g;
    //{}
    
        var vertical = /^\{([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\}/g;
        var testVertical = /^\{([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\}/g;

    
        if (testHorizontal.test(orden)){
            var match = horizontal.exec(orden);
            console.log("Dibujar una lista vertical con  ");
            var i=1;
            var tamanio=1;
            grupo = match[1];
            
            while (grupo != null) {
                tamanio++;
                grupo=match[tamanio];
            }
            
            grupo = match[1];
            var xTamanio = espacioX/tamanio;
            var yTamanio = espacioY/tamanio;
            while (grupo != null) {
                console.log(grupo);
                crearFigura(xTamanio,yTamanio,espacioX+espacioX/tamanio*i,espacioY+espacioY /tamanio*1,match[i]);
                i++;
                grupo = match[i];
            }
                        

        }
    
        else if (testVertical.test(orden)){
            var match = vertical.exec(orden);
            console.log("Dibujar una lista vertical con  ");
            var i=1;
            var tamanio=1;
            grupo = match[1];
            
            while (grupo != null) {
                tamanio++;
                grupo=match[tamanio];
            }
            
            grupo = match[1];
            var xTamanio = espacioX/tamanio;
            var yTamanio = espacioY/tamanio;
            while (grupo != null) {
                console.log(grupo);
                crearFigura(xTamanio,yTamanio,espacioX+espacioX/2,espacioY+espacioY/tamanio*i,match[i]);
                i++;
                grupo = match[i];
            }

        }
        
        else if (testCirculo.test(orden)){
            var match = circulo.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var subOrden = match[3].trim();
            var testCuadradoTemp = /\[(\w*)\s(\w*)(.*)\]/g;
            var testCirculoTemp = /\((\w*)\s(\w*)(.*)\)/g;
            console.log(subOrden);
            if (testCirculoTemp.test(subOrden) || testCuadradoTemp.test(subOrden)){
                
                fill (relleno);
                stroke(borde);
                strokeWeight(2);
                ellipse(cordenadaX,cordenadaY ,espacioX);
                crearFigura(espacioX/2,espacioY/2,cordenadaX+(cordenadaX/10)*2,cordenadaY + (cordenadaY/10)*2,subOrden);
            }
            else{
                
                fill (relleno);
                stroke(borde);
                strokeWeight(2);
                ellipse(cordenadaX,cordenadaY,espacioX);
                crearFigura(cordenadaX,cordenadaY,espacioX,espacioY,subOrden);
            }
            

        }
        else if (testCuadrado.test(orden)){
            var match = cuadrado.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var subOrden = match[3].trim();
            var testCuadradoTemp = /\[(\w*)\s(\w*)(.*)\]/g;
            var testCirculoTemp = /\((\w*)\s(\w*)(.*)\)/g;
            
            if (testCirculoTemp.test(subOrden) ){
                console.log(subOrden);
                fill (relleno);
                stroke(borde);
                strokeWeight(2);
                rect(cordenadaX,cordenadaY ,espacioX,espacioY);
                crearFigura(espacioX/2,espacioY/2,cordenadaX+espacioX/2+(cordenadaX/10)*2,cordenadaY + espacioX/2+(cordenadaY/10)*2,subOrden);
            }
            else if ( testCuadradoTemp.test(subOrden)){
                console.log(subOrden);
                fill (relleno);
                stroke(borde);
                strokeWeight(2);
                rect(cordenadaX,cordenadaY ,espacioX,espacioY);
                crearFigura(espacioX/2,espacioY/2,cordenadaX+(cordenadaX/10)*2,cordenadaY + (cordenadaY/10)*2,subOrden);
            }
            else{
                
                fill (relleno);
                stroke(borde);
                strokeWeight(2);
                rect(cordenadaX,cordenadaY ,espacioX,espacioY);
                crearFigura(cordenadaX,cordenadaY,espacioX/2,espacioY/2,subOrden);
            }
            

        }
}
















