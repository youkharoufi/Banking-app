import React from 'react';
import Button from './Button';
import {useHistory} from 'react-router-dom';
import styles from '../CSS/Menu.module.css'
import Card from './Card';
import {a} from './Accueil';

const Menu=(props)=>{

    let history=useHistory();

    const state1=()=>{
        history.push('/Account')
    }

    const state2=()=>{
        history.push('/Depot')
    }

    const state3=()=>{
        history.push('/Withdraw')
    }

    const preced=()=>{
        history.push('/')
    }

    
    


    return(
        <Card className={styles.menu}>
            
                <h2>Bienvenue {a}!</h2>
            
            <h2>Que Voulez-vous Faire ?</h2>
                <br></br>
                <div onClick={state1}>Voir vos comptes ?</div>
                <br></br>
                <div onClick={state2}>Effectuer un Dépôt ?</div>
                <br></br>
                <div onClick={state3}>Effectuer un Retrait ?</div>
                <br></br>
                <Button onClick={preced}>Deconnexion</Button>
            
        </Card>
    )
}

export default Menu;