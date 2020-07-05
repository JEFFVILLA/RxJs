import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, number>((val) => val * 10))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyUpKey$ = keyUp$.pipe(map((event) => event.code));
keyUpKey$.subscribe((val) => console.log("map", val));
