## Nginx

- **Descripción**:  
    Nginx (pronunciado "engine-x") es un servidor web ligero y de alto rendimiento, también usado como proxy inverso y balanceador de carga.
  
- **Características**:  
    - Excelente rendimiento con muchas conexiones simultáneas.

    - Consume menos recursos que Apache.

    - Soporta SSL/TLS, HTTP/2, y streaming de video.

    - Menos flexible en configuraciones dinámicas que Apache (pero más eficiente en estáticos).

- **Uso típico**:  
    - Servir contenido estático (HTML, imágenes, videos).

    - Como proxy inverso delante de aplicaciones en Node.js, Python (Django, Flask) o PHP-FPM.

- **Ejemplo de inicio (Linux)**:  
```bash
    sudo apt install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
```