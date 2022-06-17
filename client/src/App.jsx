import { BrowserRouter } from 'react-router-dom'
import { Header, Main, Wrapper } from './layout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </div>
    </BrowserRouter>
  )
}

export default App
