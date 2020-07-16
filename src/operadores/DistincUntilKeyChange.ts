import {  from } from "rxjs";
import {  distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";



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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);