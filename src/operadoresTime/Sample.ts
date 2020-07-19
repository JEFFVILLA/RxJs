import { fromEvent, interval } from "rxjs";
import { sampleTime, map, sample } from "rxjs/operators";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);
