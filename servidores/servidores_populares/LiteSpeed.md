## LiteSpeed

- **Descripción**:  
    Servidor web comercial (también con una versión gratuita llamada OpenLiteSpeed). Es conocido por su alto rendimiento y compatibilidad con Apache.
  
- **Características**:  
    - Rendimiento superior a Apache en sitios con alto tráfico.

    - Compatible con archivos .htaccess de Apache.

    - Integración nativa con cPanel y paneles de hosting.

    - Optimizado para WordPress y PHP.

    - Licencia comercial en LiteSpeed Enterprise.

- **Uso típico**:  
    - Hosting de alto rendimiento.

    - Alternativa a Apache en entornos donde se necesita compatibilidad con .htaccess.

- **Ejemplo de inicio (Linux)**:  
```bash
    sudo apt install openlitespeed
    sudo systemctl start lsws
    sudo systemctl enable lsws
```