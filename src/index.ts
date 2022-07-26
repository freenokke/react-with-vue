import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { App } from './test';
import { vueApp } from './vueApp';

vueApp.$props.onclick = () => {
  value++;
  vueApp.$props.postTitle = value;
  console.log(`hello ${value}`);
  render();
  console.log('hello props');
};

let value = 0;
vueApp.$props.postTitle = value;

(window as any).vueApp = vueApp;

// const render = () => {
//   ReactDOM.render(App({
//     value,
//     onClick: () => {
//       value++;
//       console.log(`hello ${value}`);
//       render();
//     }
//   }), document.getElementById('app'));
// };

// render();

const container = document.getElementById('app');
const root = createRoot(container!);

const render = () => {
  root.render(App({
      value,
      onClick: () => {
        value++;
        vueApp.$props.postTitle = value;
        console.log(`hello ${value}`);
        render();
      }
    }
  ));
};

render();

