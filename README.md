# E-commerce API Backend - Gabriel Saúl

Desarrollo de una API RESTful para e-commerce enfocada en la gestión de inventario. El sistema permite estructurar una base de datos de productos con sus respectivas categorías y administrar el stock de manera precisa, diferenciando cantidades disponibles por cada combinación de color y tamaño. En la sección del front, se puede ver en la página principal los productos, donde se ve el nombre y descripción junto con el código de color y precio de la prenda. Yendo a la sección de categorias, se ven cada categoría creada y haciendo click, aparecen los productos dentro de cada una.

## Tecnologías Utilizadas

- **Entorno de ejecución:** Node.js
- **Framework Web:** Express.js
- **Base de Datos:** MongoDB
- **ODM:** Mongoose
- **Otros:** CORS, Express JSON (Body Parser)

## Prerequisitos

- **Node.js**

## Instalacion y Configuración

1. **Clonar el repositorio**:
 ```bash
    git clone https://github.com/Gbosaul/Utnbackend.git
    cd Utnbackend
 ```

2. **Instalar dependencias**:
Debes instalar las librerías tanto para el servidor como para la interfaz. Abre tu terminal y ejecuta:

**Para el backend**
\`\`\`bash
cd Backend
npm install
\`\`\`

**Para el frontend**
\`\`\`bash
cd ..
cd Frontend
npm install
\`\`\`

3. **Configurar Variables de Entorno (.env)**
Crea un archivo llamado `.env` dentro de la carpeta /Backend y pega lo siguiente dentro del archivo:
\`\`\`env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gbomarket
\`\`\`
*(Nota: Asegúrate de tener el servicio de MongoDB corriendo localmente en el puerto 27017).*

4. **Levantar los servidores**
Abre dos terminales distintas (una para el Backend y otra para el Frontend si lo tienes en la misma carpeta) y ejecuta:

*Para el Backend:*
\`\`\`bash
npm run dev
\`\`\`

*Para el Frontend:*
\`\`\`bash
npm run dev
\`\`\`

## Estructura del Proyecto

Backend/
├── config/             # Configuración de DB, Servidor y Socket.io
├── controllers/        # Controladores de la lógica de las rutas
├── helpers/            # Funciones de ayuda (checkExist)
├── models/             # Esquemas de Mongoose (Producto, Category, Color, Size)
├── routes/             # Definición de endpoints de la API
├── services/           # Lógica de negocio (Cálculos de stock)
└── utils/              # Funciones de utilidad (Error Handler)

## Esquema de la Base de Datos

La base de datos (DB: `gbomarket`) se compone de las siguientes colecciones principales:

- **Products:** Almacena la información principal (`name`, `price`, `description`, `status`, `category`). Contiene un array de `variants` que relaciona el producto con talles y colores específicos, manejando el `stock` y la `image` por variante individual.
- **Categories:** Define las agrupaciones de productos (`name`, `description`).
- **Colors:** Organiza por color de la prenda (`name`, `hexCode`).
- **Sizes:** Gestiona los talles disponibles (`name`, ej: S, M, L).


## Rutas y Endpoints

### Categorías (`/api/category`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/category` | Obtiene todas las categorías. |
| `POST` | `/api/category` | Crea una nueva categoría. |
| `DELETE` | `/api/category/:id` | Elimina una categoría por su ID. |

### Talles (`/api/size`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/size` | Obtiene todos los talles. |
| `POST` | `/api/size` | Crea un nuevo talle. |
| `DELETE` | `/api/size/:id` | Elimina un talle por su ID. |

### Colores (`/api/color`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/color` | Obtiene todos los colores. |
| `POST` | `/api/color` | Crea un nuevo color con su código HEX. |
| `DELETE` | `/api/color/:id` | Elimina un color por su ID. |

### Productos (`/api/product`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/product` | Obtiene todos los productos. |
| `GET` | `/api/product/:id` | Obtiene un producto específico por ID. |
| `GET` | `/api/product/category/:id`| Obtiene todos los productos de una categoría específica. |
| `POST` | `/api/product` | Crea un nuevo producto con sus variantes. |
| `PATCH`| `/api/product/:id` | Modifica/Actualiza un producto existente. |

## Datos Mock para Pruebas (JSON)

Ejemplos de `body` para utilizar en las peticiones **POST** de los distintos endpoints:

### Crear Categoría
\`\`\`json
{
  "name": "Remeras",
  "description": "Remeras 100% algodón",
  "image": "https://acdn-us.mitiendanube.com/stores/004/905/476/products/remera-oversize-negra-de-algodon-para-estampar-hombre-espalda-899372308515765cc817699742724485-1024-1024.webp"  
}
\`\`\`

### Crear Talle
\`\`\`json
{
  "size": "S"
}
\`\`\`

### Crear Color
\`\`\`json
{
  "name": "rosa",
  "hexCode": "#F52ADC"
}
\`\`\`

### Crear Producto
\`\`\`json
{
  "name": "Remera Star Wars",
  "price": 120000,
  "description": "Muy buena calidad",
  "status": "AVAILABLE",
  "category": "69e299f66bfc6e3935588b9f",
  "profitRate": 1.25,
  "variants":[
    {
      "size": "69d57d270cfbdbf5666cfbb7",
      "color": "69de6f74675ec520182098a1",
      "stock": 10,
      "image": "https://acdn-us.mitiendanube.com/stores/004/905/476/products/remera-oversize-negra-de-algodon-para-estampar-hombre-espalda-899372308515765cc817699742724485-1024-1024.webp"
    }
  ]
}
\`\`\`