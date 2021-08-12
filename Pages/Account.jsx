import React, {Fragment, useContext} from 'react';

import styles from '../CSS/Account.module.css';
import Card from './Card';
import Button from './Button';
import {useHistory} from 'react-router-dom';
import {userSomme} from './UserSomme';



const Account=()=>{

    const history=useHistory();

    const preced=()=>{
        history.push('/')
    }

    const Menu=()=>{
        history.push('/Menu')
    }

    let msg2=useContext(userSomme);

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
      <h2>Votre solde est de : {msg2} €</h2>
      
      <Button onClick={preced}>Deconnexion</Button>
      <Button onClick={Menu}>Retour au Menu</Button>
      </Card>
      </Fragment>
    )
    
    
}

export default Account;
