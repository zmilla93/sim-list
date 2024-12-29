import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import { CollectableContainer } from './components/CollectableContainer';
import { DatasetProvider, useDatasets } from './context/DatasetContext';
import { CreditsPage } from './pages/CreditsPage';
import { PageWrapper } from './pages/PageWrapper';

function App() {
  return (
    <DatasetProvider>
      <HashRouter>
        <RouteComponent />
      </HashRouter>
    </DatasetProvider>
  );
}

// Separate component mainly for using datasets inside provider
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
