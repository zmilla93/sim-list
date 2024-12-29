import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import { CollectableContainer } from './components/CollectableContainer';
import { DataProvider, useDatasets } from './context/DataContext';
import { CreditsPage } from './pages/CreditsPage';
import { CrystalsPage } from './pages/CrystalsPage';
import { ElementsPage } from './pages/ElementsPage';
import { MetalPage } from './pages/MetalPage';
import { PageWrapper } from './pages/PageWrapper';

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <RouteComponent />
      </HashRouter>
    </DataProvider>
  );
}


function RouteComponent() {
  const data = useDatasets();
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />} >
        <Route index element={<TempHomepage />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="crystals" element={<CollectableContainer collectables={data.crystals} />} />
        <Route path="elements" element={<CollectableContainer collectables={data.elements} />} />
        <Route path="metals" element={<CollectableContainer collectables={data.metals} />} />
      </Route>
    </Routes>
  );
}

function TempHomepage() {
  const data = useDatasets();
  if (data.crystals.length > 0) {
    console.log(data.crystals[0].name);
  }
  return (
    <div>
      Home!
      <br></br>
    </div>
  );
}

export default App;
