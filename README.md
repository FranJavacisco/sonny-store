# SONNY-STORE
Página de producto de comercio electrónico moderna con animaciones flotantes y diseño elegante.

![Captura de pantalla 2024-12-04 185903](https://github.com/user-attachments/assets/25b46608-6fb8-4380-a098-9e605b4fb7a9)


## 🚀 Características
- Diseño responsive
- Animaciones flotantes
- Vista interactiva del producto
- Componentes de UI modernos
- Efectos hover dinámicos
- Efectos de texto vertical
- Galería de imágenes del producto

## 🛠️ Construido Con
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## 📦 Instalación

1. Clona el repositorio
```bash
git clone https://github.com/tuusuario/sonny-store.git
```

2. Navega al directorio del proyecto
```bash
cd sonny-store
```

3. Instala las dependencias
```bash
npm install
```

4. Inicia el servidor de desarrollo
```bash
npm run dev
```

## 🎯 Dependencias
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.316.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.12"
  }
}
```

## 🌟 Estructura del Proyecto
```
sonny-store/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navbar.jsx
│   │   │   └── NavLink.jsx
│   │   └── Product/
│   │       ├── ProductImage.jsx
│   │       └── ProductInfo.jsx
│   ├── pages/
│   │   └── ProductPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Componentes Principales

### ProductPage
Componente principal que integra todos los demás componentes e incluye el efecto de texto vertical.

### ProductImage
Maneja la visualización de la imagen del producto con animaciones flotantes y galería de miniaturas.

### ProductInfo
Muestra los detalles del producto, precio y botones de acción con efectos hover.

### Navbar
Componente de navegación con funcionalidad de búsqueda e icono de carrito.

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de la construcción de producción

## 🌐 Soporte de Navegadores
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 📝 Cómo Contribuir
1. Haz un fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles

## 👤 Autor
Francisco Lopez
- LinkedIn: [Francisco A.Lopez](https://www.linkedin.com/in/francisco-lopez-cl/)

## 🙏 Agradecimientos
- Inspiración de diseño de plataformas modernas de comercio electrónico
- Comunidad de React por herramientas y bibliotecas increíbles
- Tailwind CSS por su framework CSS utility-first
- Pinterest Images

## 💻 Requisitos de Desarrollo
- Node.js 14.0.0 o superior
- npm o yarn
- Navegador web moderno

## 🚨 Problemas Comunes
- Si las animaciones no funcionan, verifica que tu navegador soporte las propiedades CSS utilizadas
- Para problemas de instalación, asegúrate de tener la versión correcta de Node.js
- Si los estilos no se aplican, ejecuta `npm run build` para regenerar los estilos de Tailwind

---
⭐️ Si encontraste útil este proyecto, ¡dale una estrella en GitHub! ⭐️
