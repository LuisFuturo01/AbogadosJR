# AbogadosJR
# ⚖️ Proyecto Web para Asociación de Abogados

Este repositorio contiene la base de un sitio web moderno desarrollado con **React**, **TypeScript** y **SCSS**, pensado para la gestión y presentación digital de una asociación de abogados.

---

## 🧠 Tecnologías principales

* **React** → Librería para la interfaz de usuario.
* **TypeScript** → Tipado estático y robustez en el desarrollo.
* **SCSS (SASS)** → Estilos avanzados y personalizables.
* **Vite** → Herramienta de desarrollo rápida y moderna.

---

## 📦 Paquetes principales

* `react`, `react-dom` → Núcleo de React.
* `typescript` → Soporte para tipado estático.
* `sass` → Preprocesador para SCSS.
* `vite` → Entorno de desarrollo y compilación.

---

## ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   https://github.com/LuisFuturo01/AbogadosJR.git
   ```

2. Entrar al directorio del proyecto:

   ```bash
   cd ABOGADOSJR
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

---

## 🧩 Estructura básica

```
asociacion-abogados/
 ├─ src/
 │   ├─ assets/
 │   │   └─ styles/
 │   │       ├─ _variables.scss
 │   │       ├─ _mixins.scss
 │   │       └─ main.scss
 │   ├─ components/
 │   │   └─ Navbar.tsx
 │   ├─ pages/
 │   │   └─ Home.tsx
 │   ├─ App.tsx
 │   └─ main.tsx
 ├─ index.html
 ├─ package.json
 └─ vite.config.ts
```

---

## 🎨 Uso de SCSS

Ejemplo de uso de variables:

```scss
$primary-color: #003366;
$accent-color: #d4af37;

.title {
  color: $primary-color;
  font-weight: bold;
}
```

---

## 🚀 Despliegue en Netlify

1. Ejecutar el build:

   ```bash
   npm run build
   ```
2. Configurar Netlify:

   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
3. Conectar el repositorio desde GitHub.

---

## 📜 Autor

**Luis Alejandro Zeballos**
Desarrollador FullStack | Especialista en IA y Sistemas Web
✉️ Contacto: [correo@ejemplo.com](mailto:correo@ejemplo.com)
