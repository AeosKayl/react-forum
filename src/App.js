import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<SinglePostPage/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
