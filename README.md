# MercadoLibre - NodeJS [BACK]

### Tecnologías

MercadoLibre - NodeJS [BACK] usa varios proyectos de código abierto para funcionar correctamente:

* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.
* [express-validator](https://www.npmjs.com/package/express-validator) - conjunto de middlewares express.js que envuelve las funciones validator.js validator y sanitizer.
* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [axios](https://www.npmjs.com/package/axios) - Cliente HTTP basado en promesas para el navegador y node.js
* [dotenv](https://www.npmjs.com/package/dotenv) - Módulo de dependencia cero que carga variables de entorno de un archivo .env en process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación The Twelve-Factor.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

MercadoLibre - NodeJS [BACK] requiere [Node.js](https://nodejs.org/) >= v16.5.0 para ejecutarse.

Clonar Repositorio
```sh
$ git clone https://github.com/jgromero7/mercadolibre-backend.git
```

Copia el archivo `.env` en base al archivo `.env.example` y modifica los siguientes valores
```sh
    APP_PORT=3000
    API_MERCADOLIBRE=https://api.mercadolibre.com/
```

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd mercadolibre-backend
$ npm install
$ npm run start:dev
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run start:dev
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:3000 || http://localhost:3000
```

### Información adicional

1 Realizar una búsqueda de items
```JOSN
    GET /api/items/?q={query}
```
* Res: {status}: 500, 200

1.1 Respuesta
```JSON
    STATUS 200
    {
    "author": {
        "name": "",
        "lastname": ""
    },
    "categories": [],
    "items": [
        {
            "id": "MLA1103247633",
            "title": " Moto E7i Power 32 Gb Azul 2 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 21149,
                "decimals": 16
            },
            "picture": "http://http2.mlstatic.com/D_636897-MLA47136057632_082021-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
    ]
```

1 Obtener Item por id
```JOSN
    GET /api/items/{id}
```
* Res: {status}: 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
    {
        "author": {
            "name": "",
            "lastname": ""
        },
        "item": {
            "id": "MLA1103247633",
            "title": " Moto E7i Power 32 Gb Azul 2 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 21149,
                "decimals": 16
            },
            "picture": "https://http2.mlstatic.com/D_636897-MLA47136057632_082021-O.jpg",
            "condition": "new",
            "sold_quantity": 250,
            "description": "Pensado para vos el Motorola E7i Power...."
        }
    }
```
* Param: {id}: Debe ser tipo cadena

Autor: José Romero
----
**Software Libre!**