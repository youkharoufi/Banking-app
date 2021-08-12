import React,{useState, Fragment, useContext, createContext} from 'react';
import {userContext} from './UserContext';
import Button from './Button';
import styles from '../CSS/Withdraw.module.css';
import Card from './Card';
import {useHistory} from 'react-router-dom';
import ErrorModal from './ErrorModal';
import NotificationWithdraw from './NotificationWithdraw';
import {userSomme} from './UserSomme';

let msg4=createContext(userSomme);
let a=createContext(userContext);

const Withdraw=(props)=>{
    let history=useHistory();

    let msg2=useContext(userSomme);

    const[amount,setAmount]=useState(0);
    const [stateNotif,setStateNotif]=useState(false);
    const [error, setError]=useState();
    const [msg, setMsg]=useState();

    const amountHandler=(event)=>{
        setAmount(event.target.value);
    }

    

    const notif=(event)=>{
        event.preventDefault();

        if(amount<10 || amount>10000){
            setError({
                title:'Veuillez entrer un montant superieur a 10 euros et inferieur a 10000 euros',
                message:'Merci de recommencer...'
            })
            return;
            
        }
    
        setStateNotif(true);
        setMsg({
            title:'Votre retrait a bien ete pris en compte',
            message:'Merci de votre confiance...'
        })

        

    }


    const state1=(event)=>{
        event.preventDefault();

        if(amount<10 || amount>10000){
            setError({
                title:'Veuillez entrer un montant superieur a 10 euros et inferieur a 10000 euros',
                message:'Merci de recommencer...'
            })
            return;
            
        }
        history.push('/AccountWithdraw')
    }

    const errorHandler=()=>{
        setError(null);
    }

    const stateHandler=()=>{
        setStateNotif(false);
    }

    const preced=()=>{
        history.push('/')
    }

    msg4 = parseInt(msg2)-parseInt(amount);
    a=parseInt(amount);


    return(
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            {stateNotif && <NotificationWithdraw title={msg.title} message={msg.message} onConfirm={stateHandler}/>}
            
            <form>
                <Card className={styles.withdraw}>
                    
                        <h2>Retrait d'argent : </h2>
                    
                    
                        <label htmlFor='amount'>Montant à Retirer :</label>
                        <input type='number' id='amount' min='10' max='1000000' onChange={amountHandler}/>
                    
                    
                        <Button onClick={notif}>Retirer</Button>
                        <Button onClick={state1}>Accéder à vos comptes</Button>
                        <Button onClick={preced}>Deconnexion</Button>

                        <h2>Votre solde est de : {msg4} €</h2>
                        <h2>Mouvement : - {a} €</h2>
                    
                </Card>
                </form>
            </Fragment>
        
    )
}




export default Withdraw;
export {msg4};
export {a};

