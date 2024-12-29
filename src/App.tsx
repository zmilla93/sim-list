import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import { DataProvider, useDatasets } from './context/DataContext';
import { CreditsPage } from './pages/CreditsPage';
import { CrystalsPage } from './pages/CrystalsPage';
import { ElementsPage } from './pages/ElementsPage';
import { MetalPage } from './pages/MetalPage';
import { PageWrapper } from './pages/PageWrapper';

function App() {

  return (
    <>
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<PageWrapper />} >
              <Route index element={<TempHomepage />} />
              <Route path="credits" element={<CreditsPage />} />
              <Route path="crystals" element={<CrystalsPage />} />
              <Route path="elements" element={<ElementsPage />} />
              <Route path="metals" element={<MetalPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
}

function TempHomepage() {
  const data = useDatasets();
  if (data.crystals != null) {
    console.log(data.crystals[0].name);
  }
  return (
    <div>
      Home!
      <br></br>

    </div>
  )
}

export default App;
