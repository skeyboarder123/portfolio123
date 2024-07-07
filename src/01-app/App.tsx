import { HomePage, ProjectsPage } from '@pages/';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@entities/ScrollUp';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
