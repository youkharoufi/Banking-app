import React, {Fragment} from 'react';

import styles from '../CSS/Account.module.css';
import Card from './Card';
import Button from './Button';
import {useHistory} from 'react-router-dom';
import {msg4} from './Withdraw';
import {a} from './Withdraw';




const Account=()=>{

    const history=useHistory();

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
      <p>Mouvements : - {a} €</p>
      <h2>Votre solde est de : {msg4} €</h2>
      
      <Button onClick={preced}>Deconnexion</Button>
      </Card>
      </Fragment>
    )
    
    
}

export default Account;