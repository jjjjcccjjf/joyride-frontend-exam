import './App.scss';
import Nav from './components/Nav'
import Search from './components/Search';
import MoviesGrid from './components/MoviesGrid'

function App() {
  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <MoviesGrid></MoviesGrid>
    </>
  );
}

export default App;
