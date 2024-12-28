import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { CrystalsPage } from './pages/CrystalsPage'
import { CollectablesPage } from './pages/CollectablesPage'
import { ElementsPage } from './pages/ElementsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CollectablesPage />} />
          {/* <Route path="collectables" element={<CollectablesPage />} /> */}
          <Route path="crystals" element={<CrystalsPage />} />
          <Route path="elements" element={<ElementsPage />} />
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
