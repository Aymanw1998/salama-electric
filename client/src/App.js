import './App.css';
import About from './Component/About/About';
import ListPost from './Component/ListPost/ListPost';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ListImages from './Component/ListImages/ListImages';
import { useMediaQuery } from '@mui/material';
function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className="App">
      {!isMobile && <Header/>}
      <About/>
      <ListImages/>
      <ListPost/>
      <Footer/>
    </div>
  );
}

export default App;
