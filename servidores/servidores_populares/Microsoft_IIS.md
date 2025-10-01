## Microsoft IIS (Internet Information Services)

- **Descripción**:  
    Servidor web desarrollado por Microsoft, integrado con el ecosistema de Windows Server.  

- **Características**:  
    - Configuración sencilla con interfaz gráfica (IIS Manager).

    - Integración nativa con ASP.NET, .NET Core y Windows Authentication.

    - Menos flexible fuera de entornos Windows.

    - Compatible con HTTP/2, HTTPS, FTP, SMTP.

- **Uso típico**:  
    - Aplicaciones web y APIs en entornos empresariales con .NET.

    - Hosting interno en organizaciones con infraestructura Microsoft.

- **Ejemplo de inicio (Linux)**:  

```bash
    Install-WindowsFeature -name Web-Server -IncludeManagementTools
```