import React, {Fragment, useState, useContext, createContext} from 'react';
import Button from './Button';
import styles from '../CSS/Depot.module.css';
import Card from './Card';
import NotificationDepot from './NotificationDepot';
import {useHistory} from 'react-router-dom';
import ErrorModal from './ErrorModal';
import {userContext} from './UserContext';
import {userSomme} from './UserSomme';

let msg3=createContext(userSomme);
let a=createContext(userContext);


        

        
        const Depot=(props)=>{

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
                    title:'Votre depot a bien ete pris en compte',
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
                history.push('/AccountDepot')
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

            msg3 = parseInt(msg2)+parseInt(amount);     
            a=parseInt(amount);      

        
            return(
                <Fragment>
                    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
                    {stateNotif && <NotificationDepot title={msg.title} message={msg.message} onConfirm={stateHandler}/>}
                    
                    <form>
                      <Card className={styles.depot}>  
                        
                                <h2>Dépôt d'argent : </h2>
                            
                            
                                <label htmlFor='amount'>Montant à déposer :</label>
                                <input type='number' id='amount' min='10' max='1000000' onChange={amountHandler}/>
                            
                            
                                <Button onClick={notif}>Déposer</Button>
                                <Button onClick={state1}>Accéder à vos comptes</Button>
                                <Button onClick={preced}>Deconnexion</Button>
                                <h2>Votre solde est de : {msg3} €</h2>
                                <h2>Mouvement : + {a} €</h2>
                                </Card>   
                        </form>

                        </Fragment>
                        
                    
                
            )
        }
        

    
export default Depot;
export {msg3};
export {a};