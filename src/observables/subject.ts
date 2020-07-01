import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  const intervalId = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo Destruido");
  };
});

/**
 * 1- Casteo múltiple
 * 2- También es un Observer
 * 3- Next, error, y complete
 */

const subject$ = new Subject();

const intervalSubject = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("Subs1", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("Subs2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubject.unsubscribe();
}, 3500);
