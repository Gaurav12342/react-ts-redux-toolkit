import { FC } from 'react'
import { store } from '../src/app/store';
import { Provider } from 'react-redux'
import CounterCom from './features/counter/index';
const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <CounterCom />
      </Provider>
    </>
  )
}

export default App;