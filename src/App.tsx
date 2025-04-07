import { useState, useEffect } from 'react'
import { SideBar } from './components/SideBar/SideBar'
import { Loading } from './components/Loading/Loading';
import { Body } from './components/Body/Body'
import './App.css'
import { Login } from './components/Login/Login';

export const App = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>("Autor");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    loadData();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  if (isLoading) return <Loading />

  if (!isAuthenticated) return <Login onLogin={handleLogin} />

  return (
    <>
    <div className="container">
      <div className="sidebar">
        <SideBar setSelectedScreen={setSelectedScreen}/>
      </div>

      <div className="main body">
        <Body selectedScreen={selectedScreen}/>
      </div>
    </div>
    </>
  )
};

export default App;
