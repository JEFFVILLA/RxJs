import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "ABC1234",
  },
  body: {
    id: 1,
    nombre: "Jeffri",
  },
}).subscribe(console.log);
