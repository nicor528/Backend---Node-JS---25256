# Ejemplo de IPs y el camino de los datos

- Una dirección IP (IPv4) tiene 4 números separados por puntos, ej:
  `192.168.1.15`

- Se compone de:
  - **Red**: Identifica la red local (`192.168.1`)
  - **Host**: Identifica al dispositivo dentro de la red (`15`)

📍 Supongamos que Ana envía información a `200.55.20.8` (la IP pública de Luis).

1. La PC de Ana crea un paquete con destino `200.55.20.8`.
2. El router de Ana **no sabe dónde está esa IP**, entonces envía el paquete a su **gateway (ISP)**.
3. El ISP consulta las **tablas de enrutamiento** y envía el paquete al siguiente nodo más cercano al destino.
4. El paquete puede pasar por varios routers/nodos en Internet.
5. Finalmente, llega al router de Luis, que lo entrega a su PC con la IP local correcta.

🔑 Clave:
- **Yo no envío datos directamente a la PC de Luis.**
- Envío datos a la **IP pública de la red de Luis**.
- El router de Luis se encarga de entregarlos a la **IP privada de su PC**.

📦 Ejemplo del camino de los datos:
PC Ana → Router Ana → ISP → Internet (varios routers) → ISP de Luis → Router de Luis → PC Luis
