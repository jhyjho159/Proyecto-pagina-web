# **📂 BackEnd - Sistema de Gestión de Libros**  

## **🚀 Tecnologías Principales**
- **Entorno**: Node.js v18+
- **Base de Datos**: MariaDB (compatible con MySQL)
- **Formato de Datos**: JSON para API REST
- **Framework**: Express.js

## **📌 Estructura del Proyecto**
```bash
📁 BackEnd/
├── 📁 node_modules/      # Dependencias instaladas
├── 📁 src/               # Código fuente principal
├── 📄 .env               # Variables de entorno
├── 📄 app.js             # Punto de entrada del servidor
├── 📄 package.json       # Configuración de proyecto y dependencias
├── 📄 package-lock.json  # Versiones exactas de dependencias
└── 📄 README.md          # Este archivo

```

## **🔧 Configuración Inicial**
1. Instalar dependencias:
```bash
npm install express mariadb dotenv cors

```
Configurar .env:

**📡 Endpoints API**
```bash
// Ejemplo de ruta en routes/books.js
router.get('/', bookController.getBooks);       // GET /api/books
router.post('/', bookController.createBook);    // POST /api/books
```
**🗃️ Conexión a MariaDB**
```bash
// En models/db.js
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
```
**⚠️ Solución de Problemas Comunes**
1. Error de conexión:

  Verificar credenciales en .env

  Asegurar que MariaDB esté en ejecución

2. Dependencias faltantes:
```bash
npm install
```
---
**🔗 Integración con FrontEnd**
```bash
// En tu frontend (admin.js)
fetch('http://localhost:3000/api/books')
  .then(response => response.json())
  .then(data => console.log(data));
```
