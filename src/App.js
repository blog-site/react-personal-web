import logo from './logo.svg';
import AppStyle from './App.module.scss';

function App() {
  return (
    <div className={AppStyle.App}>
      <header className={AppStyle.header}>
        <img src={logo} className={AppStyle.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={AppStyle.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
