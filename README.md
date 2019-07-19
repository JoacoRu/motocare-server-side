# motocare-server-side

Api de un ecommerce de motos con una db en mongodb.

El flujo es de la siguiente manera.

El controlador es de donde empezaria todo, ahi se captura el request. El mismo controlador le pega al servicio, en el servicio es donde iria
la logica. El servicio le pega al modelo, el modelo seria el modelo de la tabla.

Las rutas estan en ./routes/index.js

El server se levanta con "npm run serve" (si se require cambiar, se debe modificar del package.json)
