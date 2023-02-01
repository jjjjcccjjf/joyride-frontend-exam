import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { AppProvider } from './AppContext'
import MoviesGrid from './components/MoviesGrid'
import Search from './components/Search'

describe('<App />', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders without crashing', () => {
    // ...
  })

  it('renders the movie search bar', async () => {
    const movieSearchBar = screen.getByRole('textbox', { name: /movie-search-bar/i })
    expect(movieSearchBar).toBeInTheDocument()
  })

  it('renders my catalog link', async () => {
    const myCatalogLink = screen.getByRole('link', { name: /my-catalog-link/i })
    expect(myCatalogLink).toBeInTheDocument()
  })
})

describe('<MoviesGrid />', () => {
  it('renders the default movies grid when empty', async () => {
    render(<AppProvider><MoviesGrid/></AppProvider>)

    const moviesGrid = screen.getByRole('region', { name: /movies-grid/i })
    expect(moviesGrid).toBeInTheDocument()

    expect(moviesGrid.children.length).toBe(1)

    const startTyping = screen.getByText(/Start typing to begin search/i)
    expect(startTyping).toBeInTheDocument()
  })

  it('renders movies when the grid has items', async () => {
    render(<AppProvider><Search/><MoviesGrid /></AppProvider>)

    const movieSearchBar = screen.getByRole('textbox', { name: /movie-search-bar/i })
    expect(movieSearchBar).toBeInTheDocument()

    fireEvent.change(movieSearchBar, {
      target: {
        value: 'The Avengers'
      }
    })

    expect(movieSearchBar.getAttribute('value')).toBe('The Avengers')

    const movies = await waitFor(() => {
      return screen.getAllByRole('figure', { name: 'real-movie-card' })
    }, { timeout: 5000 })

    expect(movies.length).toBeGreaterThan(1)
  })
})
