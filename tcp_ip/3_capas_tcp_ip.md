# Capas del modelo TCP/IP con ejemplos

El modelo TCP/IP tiene 4 capas principales. Cada capa cumple un rol en la comunicación de datos.

---

## 1️⃣ Application Layer (Capa de Aplicación)

- **Qué hace:**  
  Es donde viven los programas y servicios que usan los usuarios.  
  Define cómo se intercambian los datos a nivel de aplicación (ej: navegador, email, chat).

- **Ejemplos de protocolos:**  
  - HTTP/HTTPS → navegación web  
  - SMTP/IMAP/POP3 → correo electrónico  
  - FTP → transferencia de archivos  

- **Ejemplo práctico:**  
  Cuando abres **Google Chrome** y entras a `https://www.google.com`, el navegador usa **HTTP/HTTPS** (capa de aplicación) para pedir la página.

---

## 2️⃣ Transport Layer (Capa de Transporte)

- **Qué hace:**  
  Se encarga de que los datos lleguen **completos y en orden** entre dos aplicaciones.  
  Usa **puertos** para identificar qué programa debe recibir los datos.

- **Protocolos principales:**  
  - **TCP (Transmission Control Protocol):** Confiable, asegura que no falte nada.  
  - **UDP (User Datagram Protocol):** Más rápido, pero no garantiza el orden ni entrega.

- **Ejemplo práctico:**  
  - TCP: Una videollamada necesita que los mensajes lleguen completos y en orden.  
  - UDP: En un streaming de YouTube, si se pierde un par de frames no importa, lo importante es la velocidad.

---

## 3️⃣ Internet Layer (Capa de Internet)

- **Qué hace:**  
  Define la **dirección IP** y se encarga de llevar los datos de un dispositivo a otro, aunque estén en redes diferentes.  
  Aquí entra en juego el **enrutamiento**.

- **Protocolos principales:**  
  - IP (IPv4, IPv6)  
  - ICMP (ping, mensajes de error de red)  

- **Ejemplo práctico:**  
  Si Ana (IP: `190.15.10.5`) envía un mensaje a Luis (IP: `200.55.20.8`), la capa de Internet asegura que el paquete llegue a la **red correcta** usando la IP de destino.

---

## 4️⃣ Network Access Layer (Capa de Acceso a Red)

- **Qué hace:**  
  Es la capa física y de enlace. Se encarga de **cómo los datos viajan realmente** por el medio físico: cable Ethernet, WiFi, fibra óptica, etc.  

- **Ejemplos de tecnologías:**  
  - Ethernet  
  - WiFi  
  - Bluetooth  
  - ARP (Address Resolution Protocol, traduce IP ↔ MAC)  

- **Ejemplo práctico:**  
  Cuando mandas un mensaje de WhatsApp, la información se transmite primero en tu casa por **WiFi**, usando tu **tarjeta de red** y la dirección MAC, hasta llegar al router.

---

# 📦 Resumen visual

- **Application Layer:** Qué quiero comunicar (ej: "Dame la página web").  
- **Transport Layer:** Cómo se envían los datos y a qué aplicación (ej: Puerto 443 para HTTPS).  
- **Internet Layer:** A qué dirección IP debo enviar el paquete (ej: `200.55.20.8`).  
- **Network Access Layer:** Cómo viaja físicamente el paquete (ej: WiFi, Ethernet).
