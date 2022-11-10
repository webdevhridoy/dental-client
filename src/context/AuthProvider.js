import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signin provider for google and github
    const googleProvider = new GoogleAuthProvider();
    const gitubProvider = new GithubAuthProvider();

    // sign in google section
    const LoginInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // sign in github section
    const LoginInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitubProvider);
    };

    // new user account creation with email and password section
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // existing user sign in with email and password section
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // user sign out option
    const userSignOut = () => {
        localStorage.removeItem('bandaid-token');
        return signOut(auth);
    };

    // user email and profile images updated
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // state change section
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = { user, createNewUser, userSignIn, userSignOut, loading, LoginInWithGoogle, LoginInWithGithub, userProfileUpdate, setLoading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;