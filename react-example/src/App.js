
import './App.css';
import HelloClass from './HelloClass';
import HelloFunction from './HelloFunction';
import { Sample } from './Sample';
import HelloState from './HelloState';
import UserStateEx from './UserStateEx';
import TestRoutes from './TestRoutes';
import TestReducer from './TestReducer';
import UseEffectHook from './UseEffectEx';
function App() {
  return (
    <div className="App">
      <h1>welcome to react js sobiya S</h1>
      <HelloClass/>
      <HelloFunction/>
       <Sample name='sutherland'/>
       <HelloState/>
       <UserStateEx/>
       <TestRoutes/>
       <TestReducer/>
       <UseEffectHook/>

    </div>
  );
}

export default App;
