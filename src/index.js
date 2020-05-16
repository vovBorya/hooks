import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value}/>
        <HookCounter value={value}/>
      </div>
    )
  } else {
      return <button onClick={() => setVisible(true)} >show</button>
  }
}

const HookCounter = ({ value }) => {

  //only mount
  useEffect(() => console.log(' mount '), []);

  //only update
  useEffect(() => console.log('update'));

  //only unmount
  useEffect(() => () => console.log('unmount'), []);

  return(
    <p>{value}</p>
  )
}

class ClassCounter extends React.Component {
  componentDidMount() {
    console.log('class: mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('class: update')
  }

  componentWillUnmount() {
    console.log('class: unmount')
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
