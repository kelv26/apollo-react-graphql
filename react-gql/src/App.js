import './App.css';
import CharacterPage from './pages/CharacterPage';
import CharacterList from './pages/CharacterList';
import { Route, Routes } from 'react-router';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' element={<CharacterList/>} />
        <Route strict exact path='/search' element={<Search/>} />
        <Route strict exact path='/:id' element={<CharacterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
