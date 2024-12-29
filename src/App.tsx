import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import { CreditsPage } from './pages/CreditsPage';
import { CrystalsPage } from './pages/CrystalsPage';
import { ElementsPage } from './pages/ElementsPage';
import { MetalPage } from './pages/MetalPage';
import { PageWrapper } from './pages/PageWrapper';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PageWrapper />} >
            <Route index element={<div>Home</div>} />
            <Route path="credits" element={<CreditsPage />} />
            <Route path="crystals" element={<CrystalsPage />} />
            <Route path="elements" element={<ElementsPage />} />
            <Route path="metals" element={<MetalPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}



export default App;
