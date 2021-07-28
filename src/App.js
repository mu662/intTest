import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Update from './components/Update';
import List from './components/List';

class App extends React.Component {
 
  render() {
   
      return (
        <div>
          <Switch>
            <Route exact path="/" component={List}/>
            <Route path="/register" component={Register} />
            <Route path="/update/:id" component={Update} />
          </Switch>
        </div>
      );
    }
}



export default App;
