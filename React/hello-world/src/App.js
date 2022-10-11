import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Welcome } from './components/Welcome'
import { Message } from './components/Message';
import Parent from './components/Parent';
import UserList from './components/UserList';
import Styling from './components/Styling';
import Form from './components/Form';
import Table from './Table';
import RefsDemo from './components/RefsDemo';
import RefParent from './components/RefParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HowerCounter from './components/HoverCounter';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import RenderProps from './components/RenderProps';
// import ComponentA from './components/ComponentA';
import { userContext } from './components/userContext';
import PostList from './components/PostList';
import Hooks1 from './components/Hooks1';
import Hooks2 from './components/Hooks2';
import UseEffect from './components/UseEffect';
import HookMouse from './hookComponents/HookMouse';
import Toggle from './hookComponents/Toggle';
import IntervalHook from './hookComponents/IntervalHook';
import ComponentA from './hookComponents/ComponentA';
import React from 'react';
import CountWithUseReducer from './hookComponents/CountWithUseReducer';
import FetchData1 from './hookComponents/FetchData1';
import ParentComponent from './hookComponents/ParentComponent';
import CustomeHook from './hookComponents/CustomeHook';


export const hookContext = React.createContext()
export const secondContext=React.createContext()
function App() {
  return (
    <div className="App">
      {/* <Greet name="mukul">
        <h1>hi</h1>
        <h2>by</h2>
      </Greet>
      <Welcome/>
      <Message/> */}
      {/* <Parent/> */}
      {/* <UserList/> */}
      {/* <Styling/> */}
      {/* <Form/> */}
      {/* <Table/> */}
      {/* <RefsDemo/> */}
      {/* <RefParent/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary><Hero heroName="SuoerMAn"/></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Batman"/></ErrorBoundary>
      <ErrorBoundary><Hero heroName="hanuman"/></ErrorBoundary> */}
      {/* <ClickCounter/>
      <HowerCounter/> */}
      {/* <RenderProps render={(count,clickHandler)=>(
      <Counter1 count={count} clickHandler={clickHandler}/>  
      )}/>

      <RenderProps
      render={
        (count,clickHandler)=>(
          <Counter2 count={count} clickHandler={clickHandler}/>
        )
      }
      />
       */}
      {/* <userContext.Provider value="mukul">
       <ComponentA/>
      </userContext.Provider>
      
       */}
      {/* <PostList/>
        */}
      {/* <Hooks1/>
        <Hooks2/> */}
      {/* <UseEffect/>
         */}
      {/* <HookMouse/> */}
      {/* <Toggle/>
          */}
      {/* <IntervalHook/>
           */}
      {/* <hookContext.Provider value="mukul">
        <secondContext.Provider value="malviya">
          <ComponentA />
        </secondContext.Provider>
      </hookContext.Provider> */}
      {/* <CountWithUseReducer/> */}
      {/* <FetchData1/> */}
      {/* <ParentComponent/> */}
    
    <CustomeHook/>



    </div>
  );
}

export default App;
