import AppStyle from './App.module.scss';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from './hocs/Layout';
import { Navbar } from './components';
import * as pages from './pages';

import PrivateRoute from './hocs/PrivateRoute';

function App() {
  return (
    <div className={AppStyle.App}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} wait>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navbar />}>
          <Route index element={<pages.Home />} />
          <Route path='about' element={<pages.About />} />
          <Route path='archives' element={<pages.Archives />} />
          <Route path='archive/:slug' element={<pages.Archive />} />
          <Route exact path='login' element={<pages.Login />}/>
          <Route exact path='admin' element={<PrivateRoute />}>
            <Route exact path='admin' component={<pages.Admin />} />
          </Route>
          <Route exact path='admin/update-archive/:slug' element={<PrivateRoute />}>
            <Route exact path='admin/update-archive/:slug' component={<pages.UpdateArchive />} />
          </Route>
        </Route>
        <Route path='*' element={<pages.NoMatch />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
