import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare orci sed enim auctor euismod. In tempor, dui in sodales sagittis, dolor risus efficitur ante, eu posuere eros massa eget orci. Mauris dictum, diam vel scelerisque faucibus, arcu risus auctor leo, eget commodo lacus purus vitae metus. Nunc id enim luctus, scelerisque nisi sed, volutpat nunc. Integer laoreet risus quam, in rutrum sem finibus ac. Cras sit amet maximus ipsum. Sed vitae ex sit amet diam lacinia molestie quis porttitor diam. Sed sit amet ipsum sed sem mollis cursus. In tincidunt nulla augue, placerat laoreet magna varius vel. Sed leo leo, placerat quis lobortis sed, laoreet in lacus. Donec eget risus faucibus, pellentesque nibh at, vestibulum neque. Morbi finibus velit massa, tempor volutpat ipsum hendrerit elementum. Pellentesque sodales accumsan tellus, a pulvinar dui aliquet in. Fusce elementum lorem cursus malesuada varius.
<br/>
<br/>
Nunc quam purus, vestibulum ac mauris vitae, finibus eleifend orci. Praesent dapibus nunc sit amet efficitur iaculis. Proin pulvinar non tortor nec tempus. In ante dolor, lacinia eu malesuada vestibulum, efficitur id purus. Quisque sodales aliquam erat, sit amet malesuada justo efficitur vitae. Sed ullamcorper, ante nec tincidunt posuere, tortor dui interdum nisl, eget commodo ligula nibh nec turpis. Maecenas mauris felis, ullamcorper ut ornare sit amet, blandit nec velit.
<br/>
<br/>
Sed volutpat luctus nunc. Aliquam erat volutpat. Sed urna justo, condimentum vitae consequat at, feugiat non nulla. Donec sodales id enim non pretium. Pellentesque arcu purus, sodales sit amet tellus et, euismod interdum massa. Duis mollis ante quam, vitae placerat nibh blandit eget. Aliquam at diam in purus dignissim posuere.
<br/>
<br/>
Nulla blandit neque tortor, id commodo magna viverra vitae. Duis ac justo in quam pretium fringilla ac nec lectus. Praesent vitae leo vitae felis rutrum venenatis. Nulla efficitur ligula quis mauris dictum dapibus non ut sapien. Maecenas nec ipsum porttitor, venenatis urna at, cursus lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consectetur vitae nulla dictum pellentesque. Quisque at metus aliquam, commodo ante nec, sollicitudin risus. Aenean faucibus efficitur mauris, sed vulputate nisi molestie in. Ut tempor id ex eget aliquam. Curabitur ac dui in metus placerat malesuada ac in ligula. Cras blandit, neque vel ultrices sollicitudin, sem risus maximus nisi, eu pellentesque dui odio vitae quam.
<br/>
<br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur orci dui, varius ut augue at, eleifend porta augue. Nunc ut sapien ac ex luctus interdum. Sed enim lorem, egestas quis lacinia a, sagittis vel odio. Mauris nec orci elit. Aenean neque nibh, pharetra quis mi sit amet, pulvinar molestie justo. Duis non libero dignissim, mollis est eget, feugiat turpis. Praesent non consectetur felis. Nulla non vestibulum diam, et lacinia erat. Integer vulputate lorem vel suscipit varius. Ut et ex aliquam, posuere risus et, vulputate erat. Vestibulum augue tellus, pharetra sit amet ex vitae, pulvinar hendrerit dui. Proin molestie venenatis convallis. Maecenas nisl arcu, porta sed blandit ut, vestibulum ut velit. Curabitur gravida a velit ut sollicitudin. Aliquam ac tortor ac quam eleifend auctor vitae eget risus. `;


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

// Funcion de calculo.
const calcularScroll = (event) => {
      const { 
        clientHeight ,
        scrollTop ,
        scrollHeight } = event.target.documentElement;
      console.log(clientHeight,scrollTop, scrollHeight);
      return (scrollTop/ (scrollHeight - clientHeight))*100;
}

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  map(calcularScroll),
  tap(console.log)
);

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
})