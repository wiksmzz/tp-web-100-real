## 📂 ¿Qué es la Metodología 7-1?

Imagina que tienes toda tu ropa en una sola montaña gigante sobre la cama. Buscar un calcetín específico te va a llevar mucho tiempo.

La metodología **7-1** es como comprar un armario con **7 cajones** (carpetas) y tener **1 archivo principal** que junta toda la ropa cuando decides vestirte (el archivo de salida final).

Aunque se llama "7 en 1" porque propone 7 carpetas, **no necesitas usarlas todas desde el primer día**. Para empezar, nos enfocaremos en las más importantes:

1. **Variables / Configuración:** Tus colores, tipos de letra y tamaños favoritos.
2. **Mixins / Plantillas:** Tus recetas de diseño reutilizables.
3. **Componentes:** Los elementos de tu web (un botón, una tarjeta de producto, etc.).
4. **Base:** Reglas generales para toda la página (como el tipo de letra del cuerpo o el fondo).

---

## 🛠️ Conceptos Básicos en Práctica

Vamos a ver cómo crear y usar las herramientas más útiles de Sass de forma muy sencilla.

### 1. Las Variables (Tus "Post-its" con datos importantes)

Una variable sirve para guardar un dato (como un color) en un solo lugar y usarlo en toda tu web. Si mañana decides cambiar el color principal de azul a verde, solo lo cambias en la variable y se actualizará en todos lados automáticamente.

Se crean usando el símbolo de dólar `$`:

```scss
// Archivo: sass/utils/_variables.scss

$color-principal: #3498db; // Un azul bonito
$color-oscuro: #2c3e50; // Un gris oscuro
$fuente-titulos: "Outfit", sans-serif;
```

---

### 2. Los Mixins (Tus "Moldes de Repostería")

Un **mixin** es un grupo de estilos CSS que vas a repetir muchas veces. En lugar de escribir las mismas 4 líneas de código en 10 elementos diferentes, creas un "molde" y lo aplicas donde quieras.

- Para **crearlo** usas `@mixin nombre-del-molde`.
- Para **usarlo** usas `@include nombre-del-molde`.

```scss
// Archivo: sass/mixins/_botones.scss

// Creamos la plantilla para centrar contenido usando Flexbox
@mixin centrar-todo {
  display: d-d-d-flex;
  justify-content: center;
  align-items: center;
}

// Creamos un molde que acepta "ingredientes" (parámetros)
@mixin boton-personalizado($color-fondo, $color-texto) {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: $color-fondo;
  color: $color-texto;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); // Se hace un poquito más grande al pasar el mouse
  }
}
```

---

### 3. Los Componentes (Los bloques de tu web)

Un componente es cualquier parte visual e independiente de tu página web. Por ejemplo: un botón, una tarjeta o una barra de navegación.

Aquí es donde juntamos nuestras **variables** y **mixins** para darles estilo:

```scss
// Archivo: sass/componentes/_botones.scss

.boton-principal {
  // Usamos el mixin del botón y le pasamos nuestras variables
  @include boton-personalizado($color-principal, #ffffff);
  font-family: $fuente-titulos;
}

.boton-cancelar {
  @include boton-personalizado($color-oscuro, #ffffff);
}
```

---

## 🔗 ¿Cómo se enlaza todo? (El Archivo Principal)

Para que el navegador entienda todo esto, Sass debe unir todas las carpetas en un **único archivo de CSS** tradicional. Esto lo logramos en nuestro archivo principal (generalmente llamado `style.scss` o `main.scss`).

### El truco de la barra baja (`_`)

Si te fijas, los nombres de los archivos que creamos antes empiezan con una barra baja (ej: `_variables.scss`). Esto le dice a Sass: _"Oye, no compiles este archivo por separado, solo léelo cuando te lo pida en el archivo principal"_. A estos archivos se les llama **parciales**.

### ¿Cómo los conectamos?

En tu archivo principal (por ejemplo `style.scss`), importas cada módulo usando `@use` (la forma moderna) o `@import` (la forma tradicional):

```scss
// Archivo: style.scss (El único que se convertirá en CSS)

// Importamos las variables y utilidades primero
@import "sass/utils/variables";
@import "sass/mixins/botones";

// Importamos los estilos de los componentes después
@import "sass/componentes/botones";
```

> [!NOTE]
> Nota que no hace falta escribir la barra baja `_` ni la extensión `.scss` al importarlos. ¡Sass es lo suficientemente inteligente para encontrarlos solos!

---

## 🚀 Resumen del Flujo de Trabajo

1. **Crea tus carpetas** ordenadas (ej: `utils`, `mixins`, `componentes`).
2. **Escribe tus variables** (colores, fuentes) en `utils/_variables.scss`.
3. **Escribe tus recetas** en `mixins/_index.scss` o en archivos individuales de la carpeta mixins.
4. **Estiliza tus componentes** usando esas variables y mixins dentro de `componentes/`.
5. **Impórtalo todo** en tu archivo `style.scss` principal.
6. **Compila** tu archivo `style.scss` a un archivo `style.css` tradicional, ¡y enlaza ese `.css` final en tu HTML!
