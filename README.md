# Patricia Lobo Tejedor - Evaluación Final Módulo 3 - Promo M

En este repositorio de GitHub puedes encontrar los archivos generados fruto de la **Evaluación final del Módulo 3 para la Promo M de Patricia Lobo Tejedor**

## Guía de inicio rápido

### **_Visualización online_**

Sigue el [siguente enlace](http://beta.adalab.es/modulo-3-evaluacion-final-PatriciaLoboTejedor/#/) con el cual, a través de GitHub Pages podrás visualizar el proyecto directamente a través de un servidor online.

![image](https://user-images.githubusercontent.com/81681513/122241947-3babee00-cec3-11eb-9b57-524e66361dd2.png)

### **_Visualización en local_**

Para poder realizar un arranque en local de este proyecto debes:

1. Clona este repositorio en tu equipo.
2. Realiza la instalación del paquete y sus dependencias mediante:
   ```bash
   npm install
   ```
3. Una vez finalizada la instalación encontrarás que se ha añadido una carpeta denominada `node_modules/`.
4. Por último, ejecuta el siguiente comando para que cargue un servidor local y poder hacer la visualización:
   ```bash
   npm start
   ```
   > **NOTA:** Es necesario tener instalado **NodeJS**

## Enunciado y requisitos del ejercicio

El ejercicio consiste en desarrollar una **página web con un listado de personajes de Rick and Morty**, que podemos filtrar por el nombre del personaje, **usando React para realizarlo**.

1. **Listado de personajes**
   Pintamos un listado de personajes de Rick and Morty gracias a esta[API](https://rickandmortyapi.com/documentation/#get-all-characters , de la cual extraeremos de cada personaje:

   - Foto
   - Nombre
   - Especie

2. **Filtrado de personajes**
   Añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

3. **Componentes del listado de personajes**

   ```
   src
   ├─ components
   |  ├─ App.js
   |  ├─ CharacterCard.js
   |  ├─ CharacterDetail.js
   |  ├─ CharacterList.js
   |  ├─ Error.js
   |  ├─ FilterByName.js
   |  ├─ FilterBySpecies.js
   |  └─ Filters.js
   |
   ├─ images
   |  └─ Rick_and_Morty_logo.png
   |
   ├─ stylesheets
   |  └─ ...
   |
   └─ index.js
   ```

4. **Detalle de personajes**
   Implementamos la funcionalidad con la que al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa usando rutas y React router.

   - En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## ¿Consideras que puedo aplicar alguna mejora?

Si has llegado hasta aqui, y has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que abras un nuevo issue y conocer tu opinión, cada mejora es importante y necesaria para mi, muchas gracias por tu tiempo.
