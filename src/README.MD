## Pasos para implementar un metodo

1. Definir Tipos e Inputs (Salidas, Entradas)
2. Declarar el resolve que va a usar los inputs y los tipos
3. DEclarar el tipo especial (Query, Mutation)

## Despliegue

1. `heroku login`
2. `heroku create -a <nombre_app>`
3. `heroku container:login`
4. `heroku container:push web -a <nombre_app>`
5. `heroku container:release web -a <nombre_app>`
6. `heroku open -a <nombre_app>`
