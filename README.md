# Conexa News - Challenge tecnico  

Este proyecto es una aplicación desarrollada con **React Native** utilizando **Expo**. Realizado para Conexa
## Librerías adicionales  

### Estilos  
- **nativewind**: Permite aplicar estilos utilizando la nomenclatura de TailwindCSS en lugar de `styles` convencionales. Esto es una preferencia personal para facilitar el manejo de estilos.  

### Gestión de estado  
- **redux**: Se utiliza para la gestión de estados globales, en este caso, la lista de favoritos.  
- **redux-persist**: Extiende redux para guardar datos en el almacenamiento local, permitiendo que la información persista incluso cuando se cierra completamente la aplicación.  

### Multilenguaje  
- **i18next**: Gestiona la traducción y adaptación de contenido al idioma preferido del usuario. En esta app se incluyen traducciones para español e inglés.  

### Iconos  
- **ion-icons**: Proporciona una amplia gama de iconos personalizados, fáciles de integrar y personalizar.  

### Pruebas  
- **React Native Testing Library**: Herramienta para realizar pruebas unitarias en componentes de la app.  
- **JestJS**: Framework utilizado para ejecutar las pruebas unitarias.

## Patrón de Diseño: MVC

En este proyecto, implementé el patrón de diseño **Modelo-Vista-Controlador (MVC)** para estructurar y organizar el código de manera clara y escalable, para que cada capa tenga una funcion especifica.

### Pasos para levantar la aplicación 
- Tener instalado un simulador (ANDROID: Android Studio / IOS: XCode)  

- Clonar este repositorio.  
- En la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias: 

   ```bash
   npm install

- *PARA ANDROID* es preferible tener corriendo el emulador de antemano
- Ejecutar el siguiente comando y seleccionar la opcion deseada:  

   ```bash
   npm expo start
   
## Ejecutar suite de pruebas

- Ejecutar el siguiente comando:  

   ```bash
   npm test

