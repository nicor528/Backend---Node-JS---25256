
## Apache HTTP Server

- **Descripción**:  
  Es uno de los servidores web más antiguos y populares. Desarrollado por la Apache Software Foundation.
  
- **Características**:  
  - Muy flexible gracias a módulos (mod_rewrite, mod_ssl, etc.).  
  - Compatible con Linux, Windows y macOS.  
  - Gran comunidad y soporte.  
  - Menor rendimiento bajo alta concurrencia comparado con Nginx.

- **Uso típico**:  
  Se utiliza para servir sitios dinámicos con **PHP**, **Perl** o **Python**, y también para hosting compartido.

- **Ejemplo de inicio (Linux)**:  
```bash
  sudo apt install apache2
  sudo systemctl start apache2
  sudo systemctl enable apache2
```