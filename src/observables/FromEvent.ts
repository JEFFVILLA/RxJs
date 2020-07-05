import { fromEvent } from "rxjs";

const scrl1$ = fromEvent<MouseEvent>(document, "click");
const scrl2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

scrl1$.subscribe(({ x, y }) => {
  console.log(x, y);
});
scrl2$.subscribe(({ key }) => {
  console.log(key);
});
