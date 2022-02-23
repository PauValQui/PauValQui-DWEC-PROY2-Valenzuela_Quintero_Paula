export default{
    Ejercicio1:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul id="Listadesordenada"></ul>
    
        <script>
    
            function añadirLista(info,cm){
    
                var li = document.createElement('li');
                document.getElementById('Listadesordenada').appendChild(li).innerHTML = info + cm;
    
            }
                //Pedimos el radio de una circunferencia
                var radio=prompt("Introduce el numero que quieras:");
                var info = radio;
                
                var cm=" cm"
                var cm2=" cm2"
                var cm3=" cm3"
    
                if (radio>0) {
                    añadirLista(info,cm);
    
                    //valor del diametro
                    var diametro = (radio*2).toFixed(2)
                    añadirLista(diametro,cm);
    
                    //valor del perímetro de la circunferencia
                    var perimetro = (radio*2*Math.PI).toFixed(2)
                    añadirLista(perimetro,cm);
    
                    //valor del area del circulo
                    var areaC = (Math.PI*Math.pow(radio,2)).toFixed(2)
                    añadirLista(areaC,cm2);
    
                    //valor del area de la esfera
                    var areaE = (4*Math.PI*Math.pow(radio,2)).toFixed(2)
                    añadirLista(areaE,cm2);
    
                    //valor del volumen de la esfera
                    var volumen = (4/3*Math.PI*Math.pow(radio,3)).toFixed(2)
                    añadirLista(volumen,cm3);
    
                    //alert("Circunferencia: \nRadio: "+radio+cm+"\nDiametro: "+diametro+cm+"\nPerimetro: "+perimetro+cm+"\nArea del Circulo: "+areaC+cm2+"\nArea de la Esfera: "+areaE+cm2+"\nVolumen de la Esfera: "+volumen+cm3)
                }else{
                    alert("El numero introducido no es valido. Recarga para volver a introducir")
                }
    
        </script>
    </body>
    </html>`,
    Ejercicio2:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            var nombreCompleto = prompt("Introduce tu nombre y apellidos: ")
    
            //El tamaño del nombre más los apellidos (sin contar espacios).
            console.log(nombreCompleto.trim().length)
    
            //La cadena en minusculas
            
            console.log(nombreCompleto.toLowerCase())
    
            //La cadena en mayuscula
            console.log(nombreCompleto.toUpperCase())
    
            //Separar el nombre y los apellidos
            var posicionEspacio2=nombreCompleto.lastIndexOf(" ")
            var posicionEspacio1=nombreCompleto.lastIndexOf(" ",posicionEspacio2-1)
    
            console.log(posicionEspacio2)
            console.log(posicionEspacio2)
    
            var nombre= nombreCompleto.substring(0,posicionEspacio1)
            var apellido1= nombreCompleto.substring(posicionEspacio1+1,posicionEspacio2)
            var apellido2= nombreCompleto.substring(posicionEspacio2+1)
            
            console.log("Nombre: "+nombre)
            console.log("Apellido 1: "+apellido1)
            console.log("Apellido 2: "+apellido2)
    
            //Propuesta de nombre de usuario 1
            var propuestaUsuario1= nombre.substring(0,1)+apellido1.substring(0,apellido1.length)+apellido2.substring(0,1)
            
            console.log(propuestaUsuario1.trim().toLowerCase())
    
            //Propuesta de nombre de usuario 2
            var propuestaUsuario2= nombre.substring(0,3)+apellido1.substring(0,3)+apellido2.substring(0,3)
    
            console.log(propuestaUsuario2.substring(0,1).toUpperCase()+propuestaUsuario2.substring(1,propuestaUsuario2.length).toLowerCase())
        </script>
    </head>
    <body>
        
    </body>
    </html>`,
    Ejercicio3:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            /*Pide la fecha*/
            var fecha=prompt("Introduce la fecha actual (YYYY-MM-DD)")
            
            function Semana(fecha){
                /*Creo la variable fecha*/
                var fechaActual= new Date(fecha)
                /*Busco el 1 de enero*/
                const UnoEnero= new Date(fechaActual.getFullYear(),0,1)
                
                /*Saco el num de dias */
                var numdias = Math.floor((fechaActual - UnoEnero)/(24*60*60*1000))
                /*Y sumo la fecha actual mas el num de dias entre 7 para sacar la semana*/
                var semanas = Math.ceil((numdias + fechaActual.getDay() + 1 ) / 7)
    
                if(((fechaActual.getFullYear() % 4 == 0 ) && (fechaActual.getFullYear() % 100 != 0)) || (fechaActual.getFullYear() % 400 == 0)){
                    semanas;
                }else{
                    semanas -= 1
                }
    
                return semanas;
            }
            
            
            alert("Estas en la semana"+Semana(fecha))
        </script>
    </head>
    <body>
        
    </body>
    </html>`,
    Ejercicio4:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventana</title>
    
        <script>
            
            let nuevaVentana;
    
            function crearVentana(){
    
                const posicionX = Math.floor(Math.random() * 800)
                const posicionY = Math.floor(Math.random() * 675)
    
                nuevaVentana = window.open("", "", top=posicionY, left=posicionX, width=400, height=400)
                
                setInterval(encogerVentana, 1000);
            }
    
            function encogerVentana(){
                nuevaVentana.resizeBy(-40,-40)
                nuevaVentana.focus()
    
                if(nuevaVentana.innerWidth <= 160){
                    clearInterval(encogerVentana)
                    setInterval(agrandarVentana,1000)
                }
            }
    
            function agrandarVentana(){
                nuevaVentana.resizeBy(+40,+40)
                nuevaVentana.focus()
    
                if (nuevaVentana.innerWidth >= 400) {
                    clearInterval(agrandarVentana)
                    setInterval(encogerVentana,1000)
                }
            }
    
        </script>
    </head>
    <body>
        <button onClick="crearVentana()">Pulsa el boton</button>
    </body>
    </html>`,
    Ejercicio5:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
    
            function reloj(){
                /*Defino la fecha*/
                var f=new Date
                /*diferencio hora,min y sec*/
                var hora=f.getHours()
                var min=f.getMinutes()
                var sec=f.getSeconds()
                var amOpm="";
    
                var insertarReloj = document.getElementById('Reloj');
                
                if (hora<10) {
                    hora = "0"+hora;
                }
                    
                if(min<10){    
                    min = "0"+min
                }
    
                if(sec<10){
                    sec= "0"+sec
                }
    
                if(hora>12){
                    hora = hora%12;
                    amOpm="pm"
                }else if(hour == 12){
                    amOpm="pm"
                }else{
                    amOpm="am"
                }
    
                return insertarReloj.innerHTML = hora + " : " + min + " : " +sec+ " " +amOpm;
    
            }
    
            function llamar(){
                setInterval(reloj, 1000);
            }
    
            window.onload = llamar();
            
    
            
    
        </script>
    </head>
    <body onload="reloj()">
        <div id="Reloj">
    
        </div>
    </body>
    </html>`,
    Ejercicio6:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body id="body">
        <button onclick="Eliminar()">Eliminar receta</button>
    
        <script>
            /*Creo el elemento ol*/
            let Ol=document.createElement('ol')
            let Body = document.getElementById('body')
            let OlBody = Body.appendChild(Ol)
    
            /*Defino dos arrays uno con el titulo de cada receta y otro con los ingredientes*/
            let ArrayTitulo = ["Bizcocho de limon", "Spaguettis carbonara", "Tortilla de Patatas"]
            let ArrayIngredientes = ["Ingredientes: 3 huevos, 1 sobre de levadura en polvo (16 gr de polvo para hornear), 1 yogur de limón (125 gramos), harina (3 medidas de yogur), azúcar (2 medidas de yogur), aceite de oliva virgen extra (1 medida de yogur), ralladura de 1 limón",
                                    "Ingredientes: 3 Yemas de huevo, 1 huevo, 100g Panceta, 50g Queso Pecorino, Pimienta negra molida al gusto, Sal, Agua,320 g Espaguetis",
                                    "Ingredientes: 8 huevos camperos, 1 kg de patatas gallegas, Aceite de oliva virgen extra para la fritura de las patatas, 1 cebolla grande (opcional), Sal (al gusto)"]
    
        
            let id;
    
            for (let i = 1; i < 4; i++) {
                /*Defino el elemento li y lo añado en la posicion i*/
                let li = document.createElement('li')
                Ol.appendChild(li)[i]
                /*defino el id de li como el valor de i*/
                id = li.id = i;
    
                /*creo el elemento titulo y lo añado a li con el contenido del valor del array en la posicion*/
                let titulo = document.createElement('h1')
                let ingredientes = document.createElement('p')
    
                li.appendChild(titulo).innerHTML = ArrayTitulo[i-1]
                li.appendChild(ingredientes).innerHTML = ArrayIngredientes[i-1]
            }
    
            let recetasEliminadas=[];
            let numReceta;
    
            function Eliminar()
            {   
                /*Pido el num de la receta a borrar*/
                numReceta= +prompt("¿Que numero de receta quieres borrar?")
                
                if(recetasEliminadas.includes(numReceta)){
                    alert("La receta no existe")
                }else{ 
                    
                    for (let i = 1; i < 4; i++) {
                        let removeElem = document.getElementById(i)
    
                        if(numReceta === i){
                            removeElem.remove();
                            recetasEliminadas.push(numReceta)
                        } 
                    }
                }
            }
    
        </script>
    </body>
    </html>`,
    Ejercicio7:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <script>
            
            function aplicar(){
    
                let posicion = document.getElementById('posicion').value;
                let equipo = document.getElementById('equipo').value;
                let puntos = document.getElementById('puntos').value;
    
                const a = [posicion, equipo, puntos]
                let tr;
                let td;
    
                for (let j = 0; j < 3; j++) {
                    tr = document.getElementById(posicion)
                    td = tr.children[j]
                    td.innerHTML = a[j]
                    
                }
    
            }
    
        </script>
    </head>
    <body>
        <table style="width: 300px;" id="table_list">
            <tr>
                <th> Posición</th>
                <th> Equipos</th>
                <th> Puntos</th>
            </tr>
            <tr id= 1>
                <td > 1</td>
                <td > F.C. Barcelona</td>
                <td > 20</td>
            </tr>
            <tr id= 2>
                <td > 2</td>
                <td > Real Madrid</td>
                <td > 17</td>
            </tr>
            <tr id= 3>
                <td > 3</td>
                <td > At. Madrid</td>
                <td > 12</td>
            </tr>
            <tr id= 4>
                <td > 4</td>
                <td > Sevilla FC</td>
                <td > 9</td>
            </tr>
        </table><br><br>
        <label for="">Posición: </label><input type="text" name="" id="posicion">
        <label for="">Equipo: </label><input type="text" name="" id="equipo">
        <label for="">Puntos: </label><input type="text" name="" id="puntos"><br><br>
        <button onclick="aplicar()">Aplicar</button>
    </body>
    </html>`,

    Ejercicio8LocalStorage:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <script>
            var existe
    
            /*Si localStorage tiene algun valor existen cookies*/
            if (localStorage.length==0) {
                existe=false
            }else{
                existe=true
            }
    
            if(!existe){
                /*Pedimos el nombre, la direccion, la edad y la profesion*/
                let nombre=prompt("Introduce tu nombre")
                let direccion=prompt("Introduce la direccion")
                let edad=prompt("Introduce tu edad")
                let profesion=prompt("Introduce tu profesion")
    
                /*Almacenarlos*/
                localStorage.setItem('nombre',nombre)
                localStorage.setItem('direccion',direccion)
                localStorage.setItem('edad',edad)
                localStorage.setItem('profesion',profesion)
            }else{
                for(let i=0; i<localStorage.length; i++){
                    /*Mostramos los datos*/
                    let key = localStorage.key(i)
                    console.log({key} : {localStorage.getItem(key)})
                    //Delante de cada {} debe haber colocado un simbolo dolar y desde el = hasta el ; con comillas inversas
                }
                /*Y los borro*/
                localStorage.clear()
            }
    
        </script>
    </head>
    <body>
        
    </body>
    </html>`,
    Ejercicio8Cookies:`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <script>
                let nombre;
                let edad;
                let direccion;
                let profesion;

                //Crear la fecha en la que expirarán las cookies
                let expire = new Date();
                expire.setTime(expire.getTime() + (24 * 60 * 60 * 1000)); //las cookies expiran mañana
                expire.toUTCString();// Paso la variable expire a string para poder trabajar con ella en el objeto Date

                let ayer = new Date(expire); 
                ayer.setDate(ayer.getDate() - 2);


                function newCookies(){ //Entrada de los datos a guardar en la cookie
                    nombre    = prompt("Introduce tu nombre: ");
                    edad      = parseInt(prompt("Introduce tu edad: "));
                    direccion = prompt("Introduce tu direccion: ");
                    profesion = prompt("Introduce tu profesión: ");
                }


                function saveCookies(nombre, edad, direccion, profesion, expire){
                    //Uso del document.cookie para definir las cookies con su fecha de eliminación
                    document.cookie = nombre={nombre};expires={expire};path=/;
                    document.cookie = edad={edad};expires={expire};path=/;
                    document.cookie = direccion={direccion};expires={expire};path=/;
                    document.cookie = profesion={profesion};expires={expire};path=/;
                    //Delante de cada {} debe haber colocado un simbolo dolar y desde el = hasta el ; con comillas inversas
                }


                function deleteCookies(ayer){
                    //Uso del document.write para borrarlas introduciendo una fecha ya pasada.
                    document.cookie = nombre={ayer};path=/;
                    document.cookie = edad=;{ayer};path=/;
                    document.cookie = direccion=;{ayer};path=/;
                    document.cookie = profesion=;{ayer};path=/;
                    //Delante de cada {} debe haber colocado un simbolo dolar y desde el = hasta el ; con comillas inversas
                }


                if (document.cookie == ""){
                    console.log("No existían cookies previas");
                    newCookies();
                    saveCookies(nombre, edad, direccion, profesion, expire);
                    console.log("Guardando cookies");
                } else {
                    console.log("Borrando cookies previas");
                    console.log(document.cookie);
                    deleteCookies(ayer);
                    console.log("Cookies borradas");
                }
            </script>
        </body>
    </html>`


};