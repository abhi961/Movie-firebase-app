
import React, {useContext,useEffect, useState, createContext} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    
} from 'firebase/auth';
import { auth } from "../firebase";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {

    const [user, setUser] = useState("");
    function signUp(email,password){
     return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return  signInWithEmailAndPassword(auth,email,password)
       }
       useEffect(() => {
     const unsubscribe  =  onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
        });
        return ()=> {
            unsubscribe();
        }
       }, [])
       
return(
    <UserAuthContext.Provider value={{user,signUp,logIn}}>{children}</UserAuthContext.Provider>
)
} 

export function useUserAuth(){
    return useContext(UserAuthContext)
}