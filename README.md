# 🚀 **Astro Starter Kit: Basics**

¡Bienvenido a tu nuevo proyecto con Astro! Usa este kit para comenzar rápidamente y explorar las bases del desarrollo con **Astro**.

## 🌟 Comenzar con Astro

```sh
npm create astro@latest -- --astro-template basics
```

[![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Abrir en CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Abrir en GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **¿Usuario experimentado?** Si ya conoces Astro, ¡puedes eliminar este archivo y comenzar directamente!

![Demo del proyecto básico](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

---

## 📁 **Estructura del proyecto**

Dentro de tu proyecto de Astro, encontrarás la siguiente estructura de carpetas:

```text
/
├── public/                # Archivos estáticos (favicon, imágenes, etc.)
│   └── favicon.svg
├── src/                   # Código fuente del proyecto
│   ├── components/        # Componentes de interfaz
│   │   └── Card.astro
│   ├── layouts/           # Layouts reutilizables
│   │   └── Layout.astro
│   └── pages/             # Páginas expuestas como rutas
│       └── index.astro
└── package.json           # Configuración del proyecto y dependencias
```

### 📌 **Notas importantes**:
- Las páginas en la carpeta `src/pages/` se exponen como rutas según su nombre de archivo.
- Los componentes pueden alojarse en `src/components/` para organizar tu interfaz.
- Los archivos estáticos (imágenes, íconos) deben colocarse en la carpeta `public/`.

---

## 🛠️ **Comandos útiles**

Ejecuta estos comandos desde la raíz del proyecto usando tu terminal:

| **Comando**               | **Acción**                                         |
|---------------------------|----------------------------------------------------|
| `npm install`             | Instala las dependencias necesarias                |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`    |
| `npm run preview`         | Previsualiza la versión de producción localmente   |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add` o `astro check` |
| `npm run astro -- --help` | Muestra ayuda para los comandos CLI de Astro       |

---

## 📚 **¿Quieres aprender más?**

Visita la [documentación oficial](https://docs.astro.build) o únete a nuestra [comunidad en Discord](https://astro.build/chat) para resolver dudas y compartir con otros desarrolladores.

---

## 💻 **Plantillas adicionales y soporte**

Si buscas algo más que las bases, explora otras plantillas disponibles o agrega integraciones con `astro add`.

---

Este README no solo explica las funcionalidades básicas del proyecto, sino que también mejora la presentación general con una estructura clara y un enfoque atractivo para cualquier desarrollador.