import { Observable, Observer } from "rxjs";

// const obs$ = Observable.create();

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [NEXT]:", value),
  error: (error) => console.warn("Error [observer]", error),
  complete: () => console.info("Complete [observer]"),
};

const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");
  subscriber.next("Jeffri");
  subscriber.complete();
});

obs$.subscribe(observer);
