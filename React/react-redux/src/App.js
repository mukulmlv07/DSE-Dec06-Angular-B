import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CakeContainerWithHooks from './components/CakeContainerWithHooks';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer2 from './components/CakeContainer2';
import ItemContainer from './components/ItemContainer';
import UserComponent from './components/UserComponent';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <CakeContainer />
        <CakeContainerWithHooks/>
        <IceCreamContainer/>
        <CakeContainer2/>
        <ItemContainer cake/> */}
        <UserComponent/>
      </Provider>
    </div>
  );
}

export default App;
