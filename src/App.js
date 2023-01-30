import './App.scss';
import Nav from './components/Nav'
import Search from './components/Search';
import MoviesGrid from './components/MoviesGrid'
import MyCatalogGrid from './components/MoviesGrid/MyCatalogGrid';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Snackbar } from '@mui/material';

function Home() {
  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <MoviesGrid></MoviesGrid>
      {/* <Snackbar></Snackbar> */}
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
      <MyCatalogGrid></MyCatalogGrid>
      {/* <Snackbar></Snackbar> */}
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
