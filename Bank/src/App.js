

import React, { useState, createContext } from 'react';
import Accueil from './Pages/Accueil';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './Pages/Menu';
import Depot from './Pages/Depot';
import Withdraw from './Pages/Withdraw';
import AccountDepot from './Pages/AccountDepot';
import AccountWithdraw from './Pages/AccountWithdraw';
import Account from './Pages/Account';
import { userContext } from './Pages/UserContext';
import { userSomme } from './Pages/UserSomme';


const App=()=>{

  const [value,setValue]=useState(1000);
  

  return(
    <div>
    <Router>
      <Switch>
      <userContext.Provider value={0}>
      <userSomme.Provider value={1000}>
        <Route exact path='/' component={Accueil}/>
        <Route exact path='/Menu' component={Menu}/>
        <Route exact path='/Depot' component={Depot}/>
        <Route exact path='/Withdraw' component={Withdraw}/>
        <Route exact path='/Account' component={Account}/>
        <Route exact path='/AccountDepot' component={AccountDepot}/>
        <Route exact path='/AccountWithdraw' component={AccountWithdraw}/>
        </userSomme.Provider>
        </userContext.Provider>
      </Switch>
    </Router>
    <div>
      
    </div>
    </div>
    
  )
}

export default App;
