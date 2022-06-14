import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories';
import Pagenation from './components/Pagenation';
import Search from './components/Search';
// import { useGlobalContext } from './context/context';
// import { useContext } from 'react';
// import { AppContext } from './context/context';

function App() {

  //const data = useContext(AppContext);
  //const data = useGlobalContext();

  return (
    <>
      {/* <h1>Welcome to haved tehc  {data}</h1> */}
      <Search />
      <Pagenation />
      <Stories />
    </>
  );
}

export default App;
