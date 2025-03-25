import { useState, useEffect } from 'react'
import { SideBar } from './components/SideBar/SideBar'
import { Loading } from './components/Loading/Loading';
import { Body } from './components/Body/Body'
import './App.css'

export const App = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>("Autor");

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    loadData();
  }, []);

  return (
    <>
    {isLoading ? <Loading /> : (
    <div className="container">
      <div className="sidebar">
        <SideBar setSelectedScreen={setSelectedScreen}/>
      </div>

      <div className="main body">
        <Body selectedScreen={selectedScreen}/>
      </div>
    </div>
    )}
    </>
  )
};

export default App;
