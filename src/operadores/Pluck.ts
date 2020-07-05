import { range, fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, number>((val) => val * 10))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpKey$ = keyUp$.pipe(map((event) => event.code));

// Pluck
const keyUpPluck$ = keyUp$.pipe(pluck("target", "baseURI"));
keyUp$.subscribe(console.log);
keyUpKey$.subscribe((val) => console.log("map", val));
keyUpPluck$.subscribe((val) => console.log("pluck", val));
