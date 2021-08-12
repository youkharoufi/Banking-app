import React, {Fragment, useContext} from 'react';

import styles from '../CSS/Account.module.css';
import Card from './Card';
import Button from './Button';
import {useHistory} from 'react-router-dom';
import {userSomme} from './UserSomme';
import {msg3} from './Depot';
import {a} from './Depot';



const Account=()=>{

    const history=useHistory();
    let msg2=useContext(userSomme);

    const preced=()=>{
        history.push('/')
    }

    let showdate=new Date();
    let displayDate=showdate.toDateString();
    let displayHour=showdate.getHours()+'h : '+showdate.getMinutes()+' min';

    return (
        <Fragment>
            <Card className={styles.account}>
            <center>
          <input type='text' value={displayDate} readOnly='true'/>
          <input type='text' value={displayHour} readOnly='true'/>
      </center>
      <p>Mouvements : +{a} €</p>
      <h2>Votre solde est de : {msg3} €</h2>
      
      <Button onClick={preced}>Deconnexion</Button>
      </Card>
      </Fragment>
    )
    
    
}

export default Account;