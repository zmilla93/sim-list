import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { CreditsPage } from './pages/CreditsPage'
import { CrystalsPage } from './pages/CrystalsPage'
import { ElementsPage } from './pages/ElementsPage'
import { MetalPage } from './pages/MetalPage'
import { PageWrapper } from './pages/PageWrapper'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWrapper />} >
            {/* <Route path="collectables" element={<CollectablesPage />} /> */}
            <Route path="credits" element={<CreditsPage />} />
            <Route path="crystals" element={<CrystalsPage />} />
            <Route path="elements" element={<ElementsPage />} />
            <Route path="metals" element={<MetalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <div>
        <div className=" text-7xl m-2">Sims 4 Cheat Sheets</div>
        <CollectableContainer>
          <Collectable name="Citrine"></Collectable>
          <Collectable name="Diamond"></Collectable>
          <Collectable name="Sapphire"></Collectable>
        </CollectableContainer>

      </div> */}

    </>
  )
}

export default App
