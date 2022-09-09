import AppStyle from './App.module.scss';

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import * as pages from './pages';

function App() {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<pages.Home />} />
          <Route path="about" element={<pages.About />} />
          <Route path="admin" element={<pages.Admin />} />
          <Route path="admin/update-archive" element={<pages.UpdateArchive />} />
          <Route path="archives" element={<pages.Archives />} />
          <Route path="archive/:slug" element={<pages.Archive />} />
          <Route path="*" element={<pages.NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
