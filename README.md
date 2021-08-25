# API-SQLite
Rest API hecha con SQLite, TypeScript y ExpressJS

# Este repositorio es parte del proyecto final de Desarrollo de Aplicaciones Moviles
# Nota:
  Solo esta disponible el paquete de Machu Picchu junto a sus lugares.
  
# Puedes usar las siguientes rutas:

- Lista de todos los paquetes disponibles
  ```
  http://localhost:5500/paquete
  ```
- Ver solo un paquete por su id
  ```
  http://localhost:5500/paquete/only/{ id de paquete }
  http://localhost:5500/paquete/only/12
  ```
- Lista de todos los lugares disponibles
  ```
  http://localhost:5500/paquete
  ```
- Ver solo un lugar por su id
  ```
  http://localhost:5500/lugar/only/{ id de lugar }
  http://localhost:5500/lugar/only/1
  ```
- Ver una lista de lugares en base a su id
  ```
  http://localhost:5500/lugar/only/paquete/{ id de paquete }
  http://localhost:5500/lugar/only/paquete/12
  ```
