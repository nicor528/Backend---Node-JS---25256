| Script      | Comando                           | Para qué sirve                                                                |
| ----------- | --------------------------------- | ----------------------------------------------------------------------------- |
| `start`     | `node index.js`                   | Inicia la aplicación en modo producción.                                      |
| `dev`       | `nodemon index.js`                | Inicia el servidor en modo desarrollo y se reinicia al cambiar el código.     |
| `test`      | `jest`                            | Corre los tests unitarios con Jest.                                           |
| `build`     | `webpack --mode production`       | Genera la versión optimizada para producción.                                 |
| `lint`      | `eslint .`                        | Revisa la calidad del código y posibles errores.                              |
| `clean`     | `rm -rf dist`                     | Limpia archivos o carpetas temporales (ej: `dist`).                           |
| `prestart`  | `echo "Preparando el entorno..."` | Script que se ejecuta **antes de `start`**.                                   |
| `poststart` | `echo "Servidor iniciado!"`       | Script que se ejecuta **después de `start`**.                                 |
| `format`    | `prettier --write .`              | Formatea el código con Prettier.                                              |
| `prepare`   | `husky install`                   | Se ejecuta automáticamente después de `npm install` (útil para hooks de git). |
