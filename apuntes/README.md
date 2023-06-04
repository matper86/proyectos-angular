
# ANGULAR

## Instalar CLI

```
npm install -g @angular/cli
```
Instala **CLI** de manera global en la computadora (Ejecutar en consola).

## Crear nuevo proyecto

| Código          | Descripción                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------|
| `ng new my-app` | Crea un nuevo proyecto, donde **my-app**, será el nombre personalizado de nuestro nuevo proyecto. |
| `ng n my-app`   | Metodo abreviado.                                                                                 |

```
? Would you like to add Angular routing? (y/N)
```
Puedes responder **N** en principio, luego puedes agregar las rutas manualmente.
```
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
Less   [ https://lesscss.org                                            ]
```
Puedes reponder **CSS** como hoja de estilo, en principio.

## Crear nuevo componente

```
ng generate component shared/header
```
Crea un nuevo componente, donde **Shared/header**, será una nombre personalizado de una carpeta principal y una subcarpeta.
```
ng g c shared/header
```
Metodo abreviado.

## Crear nuevo servicio

```
ng generate service ruta/my-service
```
Crea un nuevo servicio, donde **ruta/my-servivio**, será la ruta y el nombre personalizado del nuevo servivio.
```
ng g s ruta/my-service
```
Metodo abreviado.

## Lanza un servidor

```
ng serve
```
Lanzar servidor.
```
ng serve -o
```
Lanzar servidor y abrir el navegador por defecto automáticamente.
