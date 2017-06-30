const X=400;
const Y=400;

function setup() {
	createCanvas(X,Y);
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
        crearFigura(X,Y,document.getElementById("ordenes").value);
        
        
    }
}

function crearFigura(espacioX,espacioY,orden){
    //()
        var circulo = /\((\w*)\s(\w*)(.*)\)/g;
        var testCirculo = /\((\w*)\s(\w*)(.*)\)/g;
    //[]
        var cuadrado = /\[(\w*)\s(\w*)(.*)\]/g;
        var testCuadrado = /\[(\w*)\s(\w*)(.*)\]/g;
    //<>
        var horizontal = /\<([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\>/g;
        var testHorizontal = /\<([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\>/g;
    //{}
    
        var vertical = /\{([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\}/g;
        var testVertical = /\{([\(\[].*?[\)\]])([\(\[].*?[\)\]])?([\(\[].*?[\)\]])?\}/g;

    
        if (testHorizontal.test(orden)){
            var match = horizontal.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var orden = match[3];
            console.log("Dibujar una lista con ");
            var i=1;
            grupo = match[i];
            while (grupo != null) {
                console.log(grupo);
                i++;
                grupo = match[i];
            }
                        

        }
    /*
        else if (testVertical.test(orden)){
            var match = circulo.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var orden = match[3];
            console.log("dibujar Un Circulo"+espacioX+";"+espacioY);
            crearFigura(espacioX/2,espacioY/2,orden );

        }
        */
        else if (testCirculo.test(orden)){
            var match = circulo.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var orden = match[3];
            console.log("dibujar Un Circulo"+espacioX+";"+espacioY);
            crearFigura(espacioX/2,espacioY/2,orden );
            /*
            fill (relleno);
            stroke(borde);
            strokeWeight(2);
            ellipse(45,100,80);*/

        }
        else if (testCuadrado.test(orden)){
            var match = cuadrado.exec(orden);
            var relleno = match[1];
            var borde = match[2];
            var orden = match[3];
            console.log("dibujar Un Cuadrado"+espacioX+";"+espacioY);
            crearFigura(espacioX/2,espacioY/2,orden );
            /*
            fill (relleno);
            stroke(borde);
            strokeWeight(2);
            rect(45,100,80,80);
            */
        }
}