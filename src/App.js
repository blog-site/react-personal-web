// import logo from './logo.svg';
import AppStyle from './App.module.scss';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import * as pages from "./pages/index";

function App() {
  return (
    <div className={AppStyle.App}>
      {/* <header className={AppStyle.header}>
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
      </header> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<pages.Home />} />
          <Route path="about" element={<pages.About />} />
          <Route path="archive" element={<pages.Archive />} />
          <Route path="*" element={<pages.NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
