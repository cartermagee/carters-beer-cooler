import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import elalba from './fonts/Elalba/elalba-regular.ttf'
import App from './App';

injectGlobal`
  @font-face {
    font-family: 'Elalba';
    src: url(${elalba}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
html {
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
body {
  backface-visibility: hidden;
  background: #222;
  color: #fff;
  font: 18px/1.5 'Elalba';
  letter-spacing: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
}
button {
  color: #fff;
  background: inherit;
  text-decoration: none;
  cursor: pointer;
  border: 0;
}
h1 {
  font-size: 30px;
}
button:focus {outline:0;}
ul {
  list-style-type: none !important;
}
nav {
  list-style-type: none !important;
}
section {
  width: 100%;
  height: 100vh;
  display: grid;
  box-shadow: inset 0 0 10px #000;
}
`

ReactDOM.render(<App/>, document.getElementById('root'));
