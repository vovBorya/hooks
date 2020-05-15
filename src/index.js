import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
}

const HookSwitcher = () => {

  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(20);

  return(
    <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize, color: 'green' }}>
      Hello
      <button
        onClick={() => {
          setColor('black')
          setFontSize(20)
        }}>
        Dark
      </button>
      <button onClick={() => {
        setColor('white')
        setFontSize(12)
      }}>
        Light
      </button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
