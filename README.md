Backend SISPA

Este proyecto corresponde al **backend del sistema SISPA**.  
Se implementa una **API REST** que permite realizar operaciones **CRUD** (crear, consultar, actualizar y eliminar usuarios).

Las pruebas del sistema se realizan siguiendo el modelo **cliente-servidor**, donde:
- El **backend** actúa como servidor
- El **cliente** puede ser Postman o una aplicación web



Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Render


Despliegue en la nube

El desarrollo y las pruebas del backend se realizaron completamente desde la **nube**, debido a la disponibilidad limitada de equipos.

Los datos se almacenan en MongoDB Atlas

El backend puede ser probado desde cualquier dispositivo con acceso a internet

El backend fue desplegado en **Render**, quedando accesible mediante una URL pública.

URL del backend

https://back-sispa.onrender.com/usuarios


Pruebas del CRUD

Opción 1: Postman (cliente)
Las pruebas CRUD se realizaron mediante **Postman**, que actúa como cliente consumiendo la API REST.

JSON de ejemplo para POST
json
{
  "nombre": "Vinicius Daniel",
  "apellido": "Moreira",
  "documento": "110956678",
  "crreo_institu": "vinimore@sena.edu.co"
}

Con el ID generado se pueden realizar:

GET (listar o buscar)

PUT (actualizar)

DELETE (eliminar)

Opción 2: Aplicación web (cliente)

También se desarrolló una aplicación web básica que permite realizar las operaciones CRUD sin necesidad de Postman.

URL del cliente web:

https://villno55.github.io/front_sispa/






