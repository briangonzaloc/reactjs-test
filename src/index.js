// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// import Badge from './components/Badge'
import App from './components/App'

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a', {href:'https://platzi.com'}, 'Ir a platzi')
// const name = 'juan';
// // const jsx = <h1>Hola soy, {name}</h1>
// const jsx = (
//     <div>
//         <h1>HOla, soy brian</h1>
//         <p>soy estudiante frontend</p>
//     </div>
// );
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hola apap'),
//     React.createElement('p', {}, 'soy estudiante'),
// )

// const element = React.createElement('h1',{},`hola soy ${name}`)
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(jsx, container);
// ReactDOM.render
//     (<Badge 
//         firstName="Lilly" 
//         lastName="Kaufman" 
//         avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//         jobTitle="Frontend Engineer" 
//         twitter="briangonzaloc"/>, 
//     container);
ReactDOM.render(<App/>, container)

