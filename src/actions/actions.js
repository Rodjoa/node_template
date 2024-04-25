//implementamos acciones

//El timestamp esta en milisegundos, lo tomo como el tiempo en que ocurre 

let array_eventos = [] //aqui meteremos los eventos , despues se lo daremos de argumento a la funcion 
                        //que los ordene en sus respectivos sucesos       
                       
exports.addEvento = (eventoData) => {
    //Se crea un nuevo objecto de producto con sus respectivos datos, pero id es 1 en caso de que no exista ningun producto dentro del arreglo y en caso de que exista un producto, tomara el ultimo producto obtendra su id y le sumara 1
      const evento = {

            event_id: eventoData.event_id, 
            context: eventoData.context,
            metadata: eventoData.metadata,
            timestamp: eventoData.timestamp
      }

      // Se agrega el evento al un arreglo de eventos
      array_eventos.push(evento)
      return evento //retorna el ultimo evento agregado
  }


  //ahora tomamos el array de eventos y los agrupamos en sus respectivos sucesos
exports.create_sucess = (array_eventos) =>{   //ordenar arreglo ascendentemente por timestamp
    array_eventos = array_eventos.sort((evento_1, evento_2) => (evento_1.timestamp >= evento_2.timestamp) 
    ? 1 : (evento_1.timestamp < evento_2.timestamp) ? -1:0)

    //ahora recorremos el arreglo ya ordenado de forma ascendente y comparamos los timestamp
    //partiendo del primero, todos los eventos con diferencia de timestamp menor a 5 van al mismo suceso
    //cada suceso es un sub arreglo de eventos dentro de un arreglo
    //se retorna ese arreglo de sucesos



}

