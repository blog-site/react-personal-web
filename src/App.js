import AppStyle from './App.module.scss';

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import * as pages from './pages';

import PrivateRoute from './hocs/PrivateRoute';

function App() {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<pages.Home />} />
          <Route path="about" element={<pages.About />} />
          <Route path="archives" element={<pages.Archives />} />
          <Route path="archive/:slug" element={<pages.Archive />} />
          <Route exact path='login' element={<pages.Login />}/>
          <Route exact path='admin' element={<PrivateRoute />}>
            <Route exact path="admin" component={<pages.Admin />} />
          </Route>
          <Route exact path='admin/:slug/update' element={<PrivateRoute />}>
            <Route exact path="admin/:slug/update" component={<pages.UpdateArchive />} />
          </Route>
        </Route>
        <Route path="*" element={<pages.NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
