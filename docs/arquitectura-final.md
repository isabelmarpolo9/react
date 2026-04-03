# Arquitectura final — TypeScript vs JavaScript

## Genéricos
`DataTable<T>` y `obtenerRecurso<T>` serían imposibles de hacer correctamente
en JavaScript. En JS tendríamos que usar `any` o hacer una función por cada tipo.
Con genéricos, una sola implementación sirve para todos los tipos con seguridad total.

Por ejemplo, `DataTable<Estudiante>` sabe exactamente qué columnas puede mostrar.
Si intentas pasar una columna con una clave que no existe en `Estudiante`, 
TypeScript da error en tiempo de compilación, no en producción.

## Uniones Discriminadas
Sin TypeScript, `EstadoMatricula` sería un objeto con campos opcionales mezclados.
Cualquier desarrollador podría acceder a `estado.asignaturas` cuando el estado
es "SUSPENDIDA" y obtener `undefined` en runtime sin ningún aviso.

Con la Unión Discriminada es imposible compilar ese error. TypeScript sabe
exactamente qué propiedades existen en cada estado.

## El tipo `never` y análisis exhaustivo
Si el equipo añade un nuevo estado de matrícula, el compilador fuerza a actualizar
`generarReporte`. En JavaScript ese olvido generaría un bug silencioso en producción
que podría tardar días en detectarse.

## Tipos de utilidad
`Partial<T>` evita tener que crear