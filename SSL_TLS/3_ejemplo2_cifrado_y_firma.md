# 🔐 Ejemplo de uso de Claves Pública y Privada (SSL/TLS)

En la criptografía de clave pública (RSA, por ejemplo), se usan **dos claves diferentes**:

- **Clave pública** → se comparte libremente. Sirve para **cifrar información** o **verificar firmas**.  
- **Clave privada** → se guarda en secreto. Sirve para **descifrar información** o **firmar datos**.

---

## 📌 1. Ejemplo de Claves (simples de demostración)
*(En la práctica son mucho más largas, pero aquí usamos claves cortas para entender el concepto)*

Clave Pública = PU = 12345
Clave Privada = PR = 67890


---

## 📌 2. Escenario A: Cifrado de un Mensaje

### 🔒 Paso 1: El Cliente cifra con la Clave Pública
Supongamos que el cliente quiere enviar el mensaje:  

"Hola"


Usa la **clave pública** del servidor (PU = 12345) para cifrar:

Mensaje cifrado = Encrypt("Hola", PU)
Mensaje cifrado = "X9A12B"


---

### 🔓 Paso 2: El Servidor descifra con la Clave Privada
El servidor recibe `"X9A12B"` y lo descifra con su clave privada (PR = 67890):

Mensaje original = Decrypt("X9A12B", PR)
Mensaje original = "Hola"


✅ Así se asegura que **solo el dueño de la clave privada puede leer el mensaje**.

---

## 📌 3. Escenario B: Firma Digital

### ✍️ Paso 1: El Servidor firma con su Clave Privada
El servidor quiere enviar un mensaje con garantía de autenticidad:  

Mensaje = "Transacción Aprobada"
Firma = Sign(Mensaje, PR)
Firma = "ZXC123"


---

### 🔎 Paso 2: El Cliente verifica con la Clave Pública
El cliente recibe:  

Mensaje: "Transacción Aprobada"
Firma: "ZXC123"


Y usa la **clave pública (PU)** para verificar:


✅ Así el cliente sabe que el mensaje fue enviado por el **dueño de la clave privada** y que **no fue alterado**.

---

## 📌 4. Resumen Visual

[Cliente] ---Cifrado con PU---> [Servidor]
[Servidor] ---Firma con PR---> [Cliente]


- Para **confidencialidad** → el cliente cifra con la clave pública y el servidor descifra con la privada.  
- Para **autenticidad** → el servidor firma con la privada y el cliente verifica con la pública.  

---

## ✅ Conclusión
- **Clave Pública (PU)** → Compartida libremente. Se usa para cifrar y verificar.  
- **Clave Privada (PR)** → Secreta. Se usa para descifrar y firmar.  
- Este mecanismo asegura tanto **confidencialidad** (nadie más puede leer) como **autenticidad** (nadie más puede falsificar).

