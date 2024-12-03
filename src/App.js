import React from 'react';
import Block from './Block';
import './App.css';
import icon1 from './images/f3.png';
import icon2 from './images/f4.png';
import icon3 from './images/f5.png';

const App = () => (
  <div className="container">
    <h1>Что Вам необходимо?</h1>
    <div className="blocks-container">
      <Block
        title="Первый блок"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        icon={icon1}
      />
      <Block
        title="Второй блок"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit?"
        icon={icon2}
      />
      <Block
        title="Третий блок"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit!"
        icon={icon3}
      />
    </div>
  </div>
);

export default App;
