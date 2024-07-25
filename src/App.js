import logo from './logo.svg';
import './App.css';
import ContextApiComp from './components/ContextApiComp';
import ReduxComp from './components/ReduxComp';
import ZustandComp from './components/ZustandComp';
import { useContext } from 'react';
import { ThemeContext } from './utils/ContextProvider';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme === "light"? "App":"App-dark"}`} >
      <ContextApiComp />
      <ReduxComp />
      <ZustandComp />
    </div>
  );
}

export default App;
