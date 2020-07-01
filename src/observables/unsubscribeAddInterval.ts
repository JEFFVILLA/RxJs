import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear contador
  let count = 0;
  const intervalo = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);
  setTimeout(() => {
    subscriber.complete();
  }, 2500);
  return () => {
    clearInterval(intervalo);
    console.log("Intervalo destruido");
  };
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2).add(subs3);
setTimeout(() => {
  subs.unsubscribe();
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();
  console.log("Completado TimeOut");
}, 5000);
