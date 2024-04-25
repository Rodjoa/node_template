//enrutamiento de acciones al endpoint
import actions from '/actions/actions'

exports.addEvento = (ctx) => {
    // Chequeo de variables previamente a crear un producto, en caso de que estas no existan enviar mensaje de error con su codigo de estado
    if (ctx.request.body.event_id === undefined || ctx.request.body.context === undefined || ctx.request.body.metadata === undefined || ctx.request.body.timestamp === undefined){
        ctx.status = 400
        ctx.body = { message: 
            "status": "NOK",
            "error_message": "One or more attributes did no came on the request"
            } 
        return ctx

    }

    else if( ctx.request === undefined) {
        ctx.status = 500
        ctx.body = { message: 
            "status": "NOK",
            "error_message": "INTERNAL SERVER ERROR"
            }
        return ctx
    }
    
    else {
        ctx.status = 200
        ctx.body ={

            data...

        }
    }

    

    // Action que crea el producto dentro del arreglo de JSONs
    let product = productActions.addProduct(ctx.request.body)
    ctx.body = { message: 'El producto ha sido creado', product }
    return ctx
}

export.mostrarSucesos = (ctx) => {


}