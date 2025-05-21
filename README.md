# 📚 SCDBooks - Librería Digital  

**Integrantes:**  
- **David Fernando Rojas Vasquez** (Master/Desarrollador)  
- **Carlos Eduardo Contreras López** (Tester/Desarrollador)  
- **Juan Sebastian Gonzalez Arcos** (Tester/Desarrollador)  

---

## 🔧 Arquitectura  
**Frontend**: HTML5, CSS3, JavaScript (ES6+)  
**Backend**: Node.js + Express + MariaDB (MySQL Workbench)  
**Autenticación**: JWT  
**Persistencia**: Base de datos relacional (MariaDB)  

---

## 🛠 Tecnologías  
| **Frontend**       | **Backend**               | **Base de Datos**    |  
|--------------------|--------------------------|----------------------|  
| ![HTML5](https://img.shields.io/badge/HTML5-333333?style=flat&logo=html5)              | Node.js                  | ![MariaDB](https://img.shields.io/badge/MariaDB-333333?style=flat&logo=mariadb)              |  
| ![CSS3](https://img.shields.io/badge/CSS3-333333?style=flat&logo=css3&logoColor=white)         | Express.js               | ![MySQL Workbench](https://img.shields.io/badge/MySQL_Workbench-4479A1?style=flat&logo=mysql)      |  
| ![JavaScript](https://img.shields.io/badge/JavaScript-333333?style=flat&logo=javascript)  | JWT (Autenticación)      | ![SQL](https://img.shields.io/badge/SQL-003B57?style=flat&logo=postgresql)                  |  

---
![GitHub Activity](https://github-readme-stats.vercel.app/api?username=jhyjho159&show_icons=true)

---
# 📂 Estructura del Proyecto

```bash
.
├── 📁 BackEnd/
│   ├── 📁 Documentation/      # Documentación técnica
│   │   └── 📄 README.md.txt   # Guía de configuración
│   └── 📁 BasDat/
│       └── 🔒 libreriadb.sql.gpg  # Script SQL encriptado
│
├── 📁 FrontEnd/
│   ├── 📁 img/                # Assets visuales
│   ├── 🌐 buscador.html       # Interfaz de búsqueda
│   ├── 🌐 comprar.html        # Página de compras
│   ├── 🌐 contactanos.html    # Formulario de contacto
│   ├── 🌐 detalle-libro.html  # Vista detallada
│   ├── 🌐 index.html          # Página principal
│   ├── 🎨 globals.css         # Estilos globales
│   ├── 🎨 style.css          # Estilos principales
│   ├── 🎨 styleguide.css     # Guía de diseño
│   ├── ⚙️ buscador.js        # Lógica de búsqueda
│   └── ⚙️ script.js          # Funcionalidad core
│
└── 📁 Documentation/          # Documentación general
Documentation/ # Documentación


```

## 🏗️ Arquitectura del Sistema

### 🔷 Modelo Cliente-Servidor
```mermaid
flowchart LR
    subgraph FrontEnd
        A[HTML/CSS] --> B[JavaScript]
    end
    subgraph BackEnd
        C[MariaDB]
    end
    B -->|HTTP/JSON| C
    C -->|Respuesta| B
    D[Usuario] -->|Interactúa| A

```



## 🏗️ Arquitectura Híbrida (Cliente-Servidor + MVC)

```mermaid
flowchart TD
    subgraph Cliente[FrontEnd]
        A[Vista\nHTML/CSS] -->|Eventos| B[Controlador\nJavaScript]
        B -->|Actualiza| A
        B -->|Consulta| C[(Modelo\nLocalStorage/MariaDB)]
    end
    subgraph Servidor[BackEnd]
        C -->|HTTP/JSON| D[MariaDB]
    end
    Usuario -->|Interactúa| A
    D -->|Respuesta| B
```
- 🎯 **MVC (Modelo-Vista-Controlador)**
  - Modelo: `libreriadb.sql` (Estructuras SQL)
  - Vista: `*.html` + `*.css` (Renderizado)
  - Controlador: `*.js` (Gestión de eventos)
    
- 🔗 **Singleton** 
  - Conexión única a la base de datos
  - Ejemplo: `dbConnection.js` (Si se usa Node.js)

- 🔄 **Observer**
  - Notificaciones en tiempo real (Ej: actualización de carrito)
