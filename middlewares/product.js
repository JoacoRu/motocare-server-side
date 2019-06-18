module.exports = (req, res, next) => {
    const payload = req.body;
    let objValidator = {
        title: true, 
        description: true, 
        marca: true, 
        modelo: true, 
        ano: true, 
        estado: true, 
        kilometraje: true, 
        precio: true, 
        moneda: true, 
        cilindrada: true, 
        user: true
    }

    if(payload.title.length != 0 && !payload.title.length >= 120 || !payload.title.length <= 10) {
        objValidator.title = true;
    } else {
        console.log('titulo',  payload.title.length)
        objValidator.title = false;
    }

    if(payload.description && typeof payload.description == 'string') {
        objValidator.description = true;
    } else {
        console.log('description', 'err')
        objValidator.description = false;
    }

    if(payload.marca && typeof payload.marca == "string") {
        objValidator.marca = true;
    } else {
        console.log('marca', 'err')
        objValidator.marca = false;
    }

    if(payload.modelo && typeof payload.modelo == "string") {
        objValidator.modelo = true;
    } else {
        console.log('modelo', 'err')
        objValidator.modelo = false;
    }

    if(payload.ano && typeof payload.ano == 'number') {
        objValidator.ano = true;
    } else {
        console.log('ano', 'err')
        objValidator.ano = false;
    }

    if(payload.estado && payload.estado >! 1 || payload.estado <! 0 && payload.moneda && payload.moneda >! 1 || payload.moneda <! 0) {
        objValidator.estado = true;
        objValidator.moneda = true;
    } else {
        console.log('estado', 'err')

        objValidator.estado = false;
        objValidator.moneda = false
    }

    if(payload.user && typeof payload.user == 'string') {
        objValidator.user = true;
    } else {
        console.log('user', 'err')        
        objValidator.user = false
    }

    let contador = 0;

    for (const item in objValidator) {
        if (objValidator.hasOwnProperty(item)) {
            const element = objValidator[item];
            if(element) {
                contador++;
            }
        }
    }

    if(contador != 11) {
        console.log(contador);
        res.status(403).send('Uno o mas campos contienen errores');
    } else {
        next();
    }
}