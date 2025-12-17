Backend SISPA

Este proyecto corresponde al backend del sistema SISPA se expone una API REST que permite crear, consultar, actualizar y eliminar usuarios (crud).  
Las pruebas las realizo mediante Postman, que actúa como cliente, mientras el backend funciona como servidor.

 Tecnologías
Node.js – Express – MongoDB Atlas – Mongoose – Render


El desarrollo y las pruebas del backend se realizaron completamente desde la nube, ya que no conte con un computador disponible permanentemente para trabajar en casa,aunq si disponia de uno en clase. Así q base de datos la  configure en MongoDB Atlas (nube).
El backend se desplegó en Render, quedando accesible mediante una URL pública.

Las pruebas del CRUD se realizaron mediante Postman, actuando como cliente del servidor y facilitando mi problematica.

 URL del servidor
https://back-sispa.onrender.com/usuarios

 Endpoints 

json para probar a la hora de hacer el post,get,etc desde postman

{
  "nombre": "vinicius daniel",
  "apellido": "moreira",
  "documento": "110956678",
  "crreo_institu": "vinimore@sena.edu.co"
}
 

ALTERNATIVA AL POSTMAN





