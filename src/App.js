import {Route} from 'react-router-dom';
import FirstScreen from './pages/FirstScreen';
import SecondScreen from './pages/SecondScreen';

function App() {
  return (
    <div>
      <Route path="/firstscreen">
        <FirstScreen/>
      </Route>
      <Route path="/secondscreen">
        <SecondScreen/>
      </Route>
    </div>
  );
}

export default App;
