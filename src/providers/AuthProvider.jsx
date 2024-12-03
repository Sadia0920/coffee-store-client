import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {createContext, useState} from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(true);

  // Create User
  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // Sign in
  const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
  }
    return (
      <AuthContext.Provider value={userInfo} >
        {children}
      </AuthContext.Provider>
    )
  }
  