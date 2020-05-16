import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>

        <PlanetInfo id={value} />
      </div>
    )
  } else {
      return <button onClick={() => setVisible(true)} >show</button>
  }
}

const PlanetInfo = ({ id }) => {

  const [ planetName, setPlanetName ] = useState('');

  useEffect(() => {
    let cancelled = false;

    fetch( `https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setPlanetName(data.name))

    return () => cancelled = true;
  }, [ id ])

  return (
    <div>
      {id} - {planetName}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
