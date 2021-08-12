import React,{Fragment,useState,createContext} from 'react';
import Button from './Button';
import ErrorModal from './ErrorModal';
import {useHistory} from 'react-router-dom';
import '../CSS/Accueil.module.css';
import Card from './Card';
import classes from '../CSS/Accueil.module.css';
import {userContext} from './UserContext';
import {userLogin} from './UserLogin';

let a=createContext(userLogin);

const Accueil=(props)=>{

    let history=useHistory();

    const [name, setName]=useState('');
    const [surname, setSurname]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState();
    

    const usernameChangeHandler=(event)=>{
        setName(event.target.value);
    }

    const surnameChangeHandler=(event)=>{
        setSurname(event.target.value);
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value);
    }

    const errorHandler=()=>{
        setError(null);
    }

    const portal1=(event)=>{
        event.preventDefault();

        if(name.trim().length===0 ||surname.trim().length===0 ||password.trim().length===0){
            setError({
                title:'invalid input !',
                message:'Veuillez entrer des identifiants (pas de valeurs vides)'
            });
            return;
        }
        history.push('/Menu');
    }

    a = JSON.stringify(name);


    return(
        <Fragment>
            
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            
            <form>
            <Card className={classes.accueil}>
                
                <h2>Zsoft Bank</h2>
                
                
                <label htmlFor='name'>Nom</label>
                <input type="text" id="name" onChange={usernameChangeHandler} value={name}/>
                
                
                <label htmlFor='surname'>Prenom</label>
                <input type="text" id="surname" onChange={surnameChangeHandler} value={surname}/>
                
                
                <label htmlFor='password'>Mot de passe</label>
                <input type="password" id="password" onChange={passwordChangeHandler} value={password}/>
                
                <h2>{a}</h2>

                
                
                <Button onClick={portal1}>Log In</Button>
                
                </Card>
            </form>
            
            
            </Fragment>
            
        
    )
}

export default Accueil;
export {a};