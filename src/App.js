import './App.scss';
import Nav from './components/Nav'
import Search from './components/Search';
import MoviesGrid from './components/MoviesGrid'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Home() {
  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <MoviesGrid></MoviesGrid>
    </>
  )
}

function MyCatalog() {
  return (
    <>
      <Nav></Nav>
      <section className="hero-search">
        <h1>My Catalog</h1>
      </section>
      {/* <MoviesGrid></MoviesGrid> */}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-catalog" element={<MyCatalog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
