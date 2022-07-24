import { FC } from 'react'
import { store } from '../src/app/store';
import { Provider } from 'react-redux'
// import CounterCom from './features/counter/index';
import Todos from './views/todos/Todos';
// import Post from './views/posts/index';
const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        {/* <CounterCom /> */}
        {/* <Post /> */}
        <Todos />
      </Provider>
    </>
  )
}

export default App;