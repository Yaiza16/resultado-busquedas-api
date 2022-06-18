import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Header, Main, Wrapper } from './layout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Wrapper>
            <Header />
            <Main />
          </Wrapper>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
