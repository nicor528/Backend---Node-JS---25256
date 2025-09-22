# 🌍 ¿Cómo alcanzan las IPs con tantos dispositivos?

Hoy en día existen miles de millones de dispositivos conectados a Internet (PCs, celulares, tablets, IoT, etc.).  
Entonces surge la pregunta: **¿Cómo alcanzan las direcciones IP para todos?**

---

## 📌 1. IPv4: el estándar original
- IPv4 usa direcciones de **32 bits** → máximo **4.294.967.296 direcciones** (~4.3 mil millones).
- Ejemplo de dirección IPv4:  
192.168.0.1

- Problema: el número de dispositivos superó hace tiempo esa cantidad.

---

## 📌 2. NAT (Network Address Translation)
- Solución temporal al agotamiento de IPv4.  
- Permite que **muchos dispositivos usen una sola IP pública**.  
- Cada dispositivo dentro de una red local tiene una **IP privada** (ej: `192.168.x.x`) y el router traduce esa IP a la pública cuando sale a Internet.

📍 Ejemplo:
PC1 → 192.168.0.2
PC2 → 192.168.0.3 > Router → 200.45.123.10 (IP pública)
Celular → 192.168.0.4 /


Así, **varios equipos comparten la misma IP pública**.

---

## 📌 3. IPv6: la solución definitiva
- Usa direcciones de **128 bits** → ~340 undecillones de direcciones (¡prácticamente infinitas!).  
- Ejemplo de dirección IPv6:  
2001:0db8:85a3:0000:0000:8a2e:0370:7334

- Con IPv6, cada dispositivo puede tener su propia IP pública única, sin necesidad de NAT.

---

## 📌 4. Transición de IPv4 a IPv6
Como todavía no todos los sistemas soportan IPv6, se usan varias técnicas de transición:  
- **Dual Stack** → un dispositivo/servidor maneja IPv4 e IPv6 al mismo tiempo.  
- **Túneles** → encapsulan IPv6 dentro de IPv4 para que pueda viajar por redes antiguas.  
- **Traducción (NAT64)** → permite que equipos solo IPv6 se comuniquen con servicios IPv4.

---

## ✅ Conclusión
- **IPv4** ya no alcanza.  
- **NAT** permitió estirar su vida útil compartiendo IPs públicas.  
- **IPv6** es la solución a largo plazo con espacio prácticamente infinito.  
- Hoy convivimos en un período de **transición** usando ambas versiones.
