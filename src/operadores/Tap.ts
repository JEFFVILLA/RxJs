import { range, fromEvent, of, from } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 10);

numeros$
  .pipe(
    tap((x) => console.log("antes", x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("Despues", valor),
      complete: () => console.log("Se termino todo"),
    })
  )
  .subscribe((val) => console.log("subs", val));
