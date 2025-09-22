# 🔑 Ejemplo de uso de Claves Pública y Privada (RSA simplificado)

Supongamos que tenemos dos personas: **Alice** y **Bob**.  
Alice quiere enviarle un mensaje secreto a Bob.  

Bob tiene:  
- **Clave pública (PUb)** → la comparte con todos.  
- **Clave privada (PRb)** → solo él la conoce.

---

## 📌 Claves de ejemplo (muy simplificadas)
Clave pública de Bob (PUb) = 3
Clave privada de Bob (PRb) = 7
Módulo (n) = 33


*(En la realidad las claves son números enormes, de cientos o miles de bits, pero aquí simplificamos para entender el proceso).*

---

## 📨 Paso 1: Alice cifra un mensaje con la clave pública de Bob
Supongamos que Alice quiere enviar el número `5` (mensaje).  

El cifrado se hace con la fórmula:  

C = (M ^ PUb) mod n

C = (5 ^ 3) mod 33
C = 125 mod 33
C = 26


El mensaje cifrado que viaja por la red es: **26**.

---

## 📩 Paso 2: Bob descifra el mensaje con su clave privada
Para descifrar:  

M = (C ^ PRb) mod n

M = (26 ^ 7) mod 33
M = 8031810176 mod 33
M = 5


Bob recupera el mensaje original: **5** ✅

---

## 🔒 ¿Qué aprendimos?
- Cualquiera puede **cifrar** usando la **clave pública** de Bob.  
- **Solo Bob** puede **descifrar** porque necesita su **clave privada**.  
- Así se garantiza **confidencialidad** en la comunicación.  

---

👉 También se puede usar al revés para **firmas digitales**:  
Bob cifra un "resumen" con su clave privada y cualquiera puede verificarlo con su clave pública.
