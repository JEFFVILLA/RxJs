import { of } from "rxjs";

const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

console.log("Inicio del Obs");
obs$.subscribe(
  (next) => console.log("next", next),
  null,
  () => console.log("Terminamos la secuencia")
);
console.log("Fin del Obs");
