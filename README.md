# Guillermo González

**Evaluación técnica Backend - RokketLab**

# Aplicacion
* [Backend](https://rokketlab-backend.herokuapp.com/) - Hosteada en Heroku (Cloud).
* [MongoDB](https://cloud.mongodb.com/) - Base de datos en la nube.

# Índice

* [Solución](#solución)

* [Tecnologías](#Tecnologías)

* [Configuración](#Configuración)

* [Rutas](#Rutas)

* [Comandos](#Comandos)


# Solución

Desarrollo de una API REST que permita leer, escribir,
modificar y eliminar el contenido de la librería.

# Tecnologías
* [Node.js](https://nodejs.org/es/) 
* [Express.js](https://expressjs.com/)
* [Yarn](https://yarnpkg.com/)
* [Body-parser](https://www.npmjs.com/package/body-parser)
* [CORS](https://yarnpkg.com/package/cors)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB](https://cloud.mongodb.com/)

# Configuración

Para el correcto funcionamiento de la API REST, es necesario configurar el endpoint de la base de datos [MongoDB](https://cloud.mongodb.com/) a consumir en el archivo `config.json`.

# Rutas

* `/movie/search/:id`
* `/movie/getAll`
* `/movie/insert`
* `/movie/delete/:id`
* `/movie/update/:id`

# Como utilizar
~ `git clone `

~ `cd rokketlab-backend`

~ `yarn install o npm install`

~ `yarn start o npm start`
