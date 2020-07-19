import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const fetchPromesa = fetch(url);
const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};
// Fetch API sin interceptar el error.

// fetchPromesa
// .then((resp) => resp.json())
// .then(console.log)
// .catch((err) => console.warn("Error en usuarios", err));

// Fetch Api interceptando el error. Por medio de una funcion

// fetchPromesa
//   .then(manejaErrores)
//   .then(console.log)
//   .catch((err) => console.warn("Error en usuarios", err));

// Rxjs Ajax y cathError
ajax(url)
  .pipe(
    pluck("response"),
    catchError(atrapaError)
    // map((resp) => resp.response)
  )
  .subscribe(console.log);
