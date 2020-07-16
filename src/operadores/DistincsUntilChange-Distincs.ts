import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";




const numeros$ = of<number|string>(1,2,"1",1,5,3,3,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: "Megaman"},
    {nombre: "X"},
    {nombre: "Zero"},
    {nombre: "Dr. Willy"},
    {nombre: "Megaman"},
    {nombre: "Megaman"},
    {nombre: "Zero"},
    {nombre: "X"},
  
];

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);