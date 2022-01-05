
const readline = require('readline-sync'); //CON EL READLINE NORMAL NO SE PUEDE HACER EL TIPICO WHILE(TRUE)

let tarea = {
    id: 0,               
    terminada: false,   
    descipcion: 'Estudiar Estructuras de datos'
}
let listaTareas = [];


//INTRODUCE UNA TAREA EN UNA LISTA, POR DEFECTO A FALSE Y CON ID: EL TAMAÑO DEL ARRAY
function introTarea(tareaDescripcion, lista){
    let nuevoID = listaTareas.length;
    lista.push({id: nuevoID, terminada: false, descipcion: tareaDescripcion});   
}

//PERMITE INTRODUCIR MULTIPLES TAREAS DE UNA FORMA MAS RAPIDA, HASTA QUE SE ESCRIBA FIN
function introMuchasTareas(lista){
    let desc = readline.question('Introducir descripcion de la tarea (escribir fin para acabar): ');
        if(desc==='fin'){
            console.log('YA NO SE INTRODUCEN MAS TAREAS, LA LISTA ES:');

            imprimirLista(lista);
        }else{
            introTarea(desc,listaTareas);
            introMuchasTareas(lista);
        }

}

//IMPRIME LA LISTA DE TAREAS COMPLETA
function imprimirLista(lista){
    for(let tarea of lista){
        
        if(tarea.terminada==false) console.log(tarea.id+' [] ' + tarea.descipcion);
        else console.log(tarea.id+' [X] ' + tarea.descipcion);
    }
}

//IMPRIME SEGUN EL PARAMETRO, LISTA DE TAREAS HECHAS O POR HACER
function imprimirListaFiltrada(lista, hechas){
    for(let tarea of lista){
        if (hechas!=true && tarea.terminada==false) console.log(tarea.id+' [] ' + tarea.descipcion);
        else if (hechas!=false && tarea.terminada==true) console.log(tarea.id+' [X] ' + tarea.descipcion);
    }
}


function completarTarea(n, lista){
    console.log();
    
    if(n<lista.length)  lista[n].terminada=true;
    else console.log('ERROR: ESA TAREA NO EXISTE'); console.log();

    imprimirLista(lista);
}

function completarMuchasTareas(lista){
    let aux = readline.question('Introduce las tareas que quieres eliminar (escribe fin para acabar): ');
    if(aux==='fin') imprimirLista(listaTareas);
    else{
        completarTarea(aux, lista);
        completarMuchasTareas(lista)
    }
}

//EJEMPLO
//IMPRIMIR MI LISTA
introTarea('Entrenar piernas y tronco', listaTareas);
introTarea('Clases de estructuras de datos, leccion 1', listaTareas);
introTarea('Pasear al perro', listaTareas);
//imprimirLista(listaTareas);



  function menu(){
    console.log('########## GESTOR DE TAREAS ###########');
    console.log('1. PARA VER LAS TAREAS PENDIENTES');
    console.log('2. PARA VER LAS TAREAS FINALIZADAS');
    console.log('3. PARA AÑADIR NUEVA TAREA');
    console.log('4. PARA COMPLETAR TAREA');

    
    let opcion = readline.question('Elegir opcion: ');
    

        switch (Number(opcion)){
            case 1:
                console.log(); console.log('---- OPCION 1 ----');
                imprimirListaFiltrada(listaTareas, false);
            break;
            case 2:
                console.log(); console.log('---- OPCION 2 ----');
                imprimirListaFiltrada(listaTareas, true);

            break;


            case 3:
                console.log(); console.log('---- OPCION 3 ----');
                introMuchasTareas(listaTareas);

            break;

            case 4:
                console.log(); console.log('---- OPCION 4 ----');
                imprimirLista(listaTareas);
                completarMuchasTareas(listaTareas);
            

            break;

            default:
                console.log(); console.log('ERROR: OPCION NO VALIDA');
        }  
   
readline.close;
  }


  //BUCLE INFINITO CON EL MENU
  while(1){
      console.log();console.log();console.log();
          
      
      menu();
  }