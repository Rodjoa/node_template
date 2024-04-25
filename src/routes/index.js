//implementamos los endpoints
import Router from 'koa-router'
import getHealth from './health/health'
import eventos from './eventos/eventos'

const router = new Router()

router.get('/health', getHealth)

//Creamos los endpoint: Uno sube el evento y el otro muestra los sucesos

router.post('/eventos/eventos', eventos.addEvento)
router.get('/eventos/eventos', eventos.mostrarSucesos)

export default router



