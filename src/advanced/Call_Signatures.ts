
/* 
es tipar funciones como si fueran “contratos” reutilizables, especialmente cuando las funciones
tienen un patrón consistente o cuando quieres tratar funciones como objetos configurables.

1. Estandarizar funciones con la misma forma (callbacks, handlers, estrategia, etc.)

Cuando muchas funciones deben tener exactamente la misma firma, defines un contrato común.

Ejemplo: distintos algoritmos de cálculo:
Esto permite intercambiar funciones sin romper tipado.
 */

interface Calculate {
    (x: number, y: number): number;
}

const add: Calculate = (x, y) => x + y;
const subtract: Calculate = (x, y) => x - y;
const multiply: Calculate = (x, y) => x * y;

/* 
2. Diseñar APIs basadas en funciones (pattern Strategy o Command)

Ideal cuando tu programa debe recibir una función como comportamiento.


Esto es muy usado en:
lógica de negocio intercambiable,
validadores,
comparadores,
procesamientos dinámicos.

*/

function operate(calc: Calculate, a: number, b: number) {
    return calc(a, b);
}

operate(add, 10, 3);          // 13
operate(subtract, 10, 3);     // 7

/* 
3. Callbacks tipados (eventos, promesas, streams, middleware)

Cuando un componente debe “avisar con una función”, y quieres evitar errores de tipos.
Sin el contrato, cualquier callback incorrecto generaría errores más tarde.
 */

interface OnData {
    (data: string, timestamp: number): void;
}

function listen(onData: OnData) {
    onData("evento", Date.now());
}

/* 4. Funciones como objetos (mezclar call signature + propiedades)

Este es uno de los casos más fuertes: TypeScript permite que una interfaz represente una función que además tiene propiedades.

Esto es común en:

librerías,
utilidades configurables,
pipes,
transformaciones con estado.
*/

interface Formatter {
    (value: number): string;
    prefix: string;
}

const format: Formatter = function (value: number) {
    return format.prefix + value.toFixed(2);
};

format.prefix = "$";

console.log(format(10));   // "$10.00"

/* 
5. Sobrecargas tipadas dentro de la interfaz

Este patrón sirve cuando tu función puede recibir múltiples tipos de entradas. 

Luego implementas una función que soporte ambas firmas.
Esto hace que tu API sea clara y sólida para el usuario.
*/

interface Parser {
    (input: string): number;
    (input: number): string;
}

