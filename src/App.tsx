import { useState } from 'react'
import { SideBar } from './components/SideBar/SideBar'
import { Body } from './components/Body/Body'
import './App.css'

export const App = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>("Autor");

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar setSelectedScreen={setSelectedScreen}/>
      </div>

      <div className="main body">
        <Body selectedScreen={selectedScreen}/>
      </div>
    </div>
  )
};

export default App;
