# KARDEX TODO1

_Proyecto de kardex/inventario para prueba tecnica de la empresa TODO1_

## Comenzando 馃殌

_Este proyecto fue realizado en Angular versi贸n 11, Loopback versi贸n 3, Nx y PrimeNG en su ultima versi贸n._

Mira **Deployment** para conocer como desplegar el proyecto.

### Instalaci贸n 馃敡

_Descarga el repositorio, se encuentra una carpeta llamada apikardex donde debes instalar loopback en su versi贸n 3 y la carpeta kardex instala Angular en su versi贸n 11 y sigue las dem谩s intrucciones_

_Para inicializar loopback dentro de la carpeta /apikardex debes ejecutar el comando . node este te ayudara a desplegar la API falsa en el puerto :3000 e ingresando a la ruta http://localhost:3000/explorer te encontraras con dos API, una llamada Users nativa de loopback y otra productos, en el metodo POST de User debes cargar el siguiente JSON_

```
{
  "realm": "Fabian Garcia",
  "username": "fabiancho",
  "email": "fgarcia@gmail.com",
  "emailVerified": true,
  "password": "123456"
}
```

_Ahora simplemente debes desplegar angular en la carpeta Kardex y ejecutar el comando ng serve el cual te ayudara a iniciar en la siguiente ruta por defecto http://localhost:4200 ahora solo debes ingresar el usuario y el password que te entrego acontinuaci贸n_

```
Email: fgarcia@gmail.com
Password: 123456
```

_Y ya tienes el ambiente listo para poder empezar a probar, recuerda que si tienes dudas puedes ver el siguiente video_

- [Youtube](https://youtu.be/bSeD-HV8QAo) - El paso a paso y muestra

## Construido con 馃洜锔?

- [Angular](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
- [NX](https://nx.dev/) - Manejador de mono repositorios
- [PrimeNG](https://rometools.github.io/rome/) - Usado para el dise帽o
- [Loopback](https://rometools.github.io/rome/) - Usado para generar API's falsas
