// Referencias

import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const txtInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(txtInput, orderList);

// Streams

const input$ = fromEvent<KeyboardEvent>(txtInput, "keyup");

input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target["value"];
      return ajax.getJSON(`https://api.github.com/users/${texto}`);
    })
  )
  .subscribe((resp) => {
    resp.subscribe(console.log);
  });
