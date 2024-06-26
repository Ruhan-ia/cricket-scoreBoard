import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.config';

export const AuthContext = createContext(null);
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true) 
  
    const createUser = (email, password) => {
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const logIn = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    const logOut = () => {
        setLoader(true)
       return signOut(auth)
        
    }
    const google = () =>{
        return signInWithPopup(auth, provider)
    } 

    useEffect(()=>{

        const unsubscribe =  onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser)
            setLoader(false)
        });

        return () =>{
            return unsubscribe()
        } 
    }, [])

    const authInfo = {

        user,
        loader,
        createUser,
        logIn,
        logOut,
        google
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;