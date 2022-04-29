import logo from './suisei.png';
import './App.css';

import Sidebar from './Sidebar';
import Intro from './Intro';

function App() {
  return (
    // <div className="App">
    //   <Sidebar />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="two-column">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Sidebar />
      <Intro />
      <div>
        <slot />
        {/* <CopyrightNotice /> */}
      </div>
    </div>
  );
}

export default App;
