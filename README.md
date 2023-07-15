# CIIS-XXIV-BackEnd
Proyecto back-end del CIIS XXIV. Lado cliente

## Instalación
El proyecto ha sido trabajado con la versión 16.20.0 de node.js, 
en el caso tengas la version sigue los siguientes pasos
1. Configurar las variables de entorno(guiate del fichero env.example)
estos seran importantes para la conexión a la DB.
2. Ejecutar npm run server

En caso no tengas la version mencionada, puedes correr la aplicación con docker, siguiendo los siguientes pasos
1. Configurar las variables de entorno(guiate del fichero env.example)
estos seran importantes para la conexión a la DB.
2. Ejecutar el comando docker compose up

Una vez ejecutada la aplicacion, no dirigimos a la ruta CIIS/db/insertData.sql e ingresamos a nuestro servidor de base de datos para ejecutar las consultas.

Tenga en cuenta que si corre la aplicacion desde docker, la ruta del servidor para la aplicación corre en el puerto 4000, si no fuera por docker entonces funciona en el puerto 3000.
