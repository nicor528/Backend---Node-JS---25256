# 🔒 SSL/TLS — Seguridad en la Web

## ✅ Qué hace
- Cifra los datos (nadie puede leerlos).
- Autentica al servidor (es el correcto).
- Garantiza integridad (nadie modifica datos).

---

## 📌 Cómo se consigue
1. Generar clave privada + CSR.
2. Enviar CSR a una Autoridad de Certificación (CA).
3. La CA valida el dominio.
4. Recibís un certificado firmado (.crt, .pem).
5. Lo instalás en el servidor.

---

## 📬 Ejemplo simplificado de certificado
- Dominio: midominio.com
- Emitido por: Let's Encrypt
- Validez: 01/01/2025 → 31/03/2025
- Clave pública: RSA 2048 bits

---

## 🔑 Cómo funciona (resumido)
1. Cliente pide conexión segura.
2. Servidor envía certificado + clave pública.
3. Cliente verifica el certificado.
4. Cliente genera clave de sesión → la cifra con la clave pública.
5. Servidor la descifra con su clave privada.
6. Ambos usan la clave de sesión para hablar cifrado.

---

## 🌐 Señales en el navegador
- 🔒 en la barra de direcciones.
- HTTPS en la URL.
- Certificado válido al inspeccionarlo.

