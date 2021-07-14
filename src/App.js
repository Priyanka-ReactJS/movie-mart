import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Home from './Container/Home/home';
import store from './redux/store'


function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <Home/>
     </Provider>
    </div>
  );
}

export default App;
