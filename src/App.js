import React from 'react';

import './App.css';

function App() {
  const [text, setText] = React.useState('');

  return (
    <div className="App">
      <div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows="20"
          style={{ width: 700 }}
        ></textarea>
      </div>
      <span>{text.length}/100자</span>
    </div>
  );
}

export default App;
