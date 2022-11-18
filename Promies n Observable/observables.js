import { Observable } from "rxjs";

let observable = new Rx.Observable((observer) => {
  setTimeout(() => {
    observer.next("Hi This will invoke Observables");
  }, 5000);
});
observable.subscribe((result) => {
  console.log(result);
});
