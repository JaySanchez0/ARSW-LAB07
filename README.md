# ARSW-LAB07

## Integrantes

- Jeisson Sanchez
- Mateo Gonzalez

## Empezando

Pasos para necesarios para correr el programa 

### Prerrequisitos

#### Java
 Java es necesario para correr el programa, para comprobar si esta instalado desde la linea de comandos:

```
>java -version

java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

#### Maven
El programa corre con maven, para comprobar si esta instalado desde la linea de comandos:

```C:\Users\ASUS\Documents\universidad\ARSW\ARSW-LAB07>mvn -version
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: C:\Users\ASUS\Documents\apache-maven-3.6.3\bin\..
Java version: 13.0.2, vendor: Oracle Corporation, runtime: C:\Program Files\Java\jdk-13.0.2
Default locale: es_CO, platform encoding: Cp1252
OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"

```

#### Git
Para descargar el programa se necesita git, para comprobar si esta instalado desde la linea de comandos:

```
> git --version

git version 2.21.0.windows.1
```
### Instalación

Para instalar el repositorio se instala en la ruta deseada desde git de esta forma

```
> git clone https://github.com/JaySanchez0/ARSW-LAB07

```
Para compilar el proyecto desde gradle:

```
> mvn package

```
## Corriendo el programa
Para ejecutar el programa desde la linea de comandos ejecutamos nuestro proyecto de la siguiente manera:
```
> mvn spring-boot:run

```
A continuación comprobamos que se estan creando los puntos correctamente

![](/img/puntos1.PNG)

Y verificamos que se estan reportando los puntos creados

![](/img/verificarPuntos.PNG)
