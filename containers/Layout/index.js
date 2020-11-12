import React, { useContext, useEffect } from 'react';
import { Header, Footer } from 'components';
import { useAuthState, useAuthDispatch, setUser } from "contexts/AuthContext";
import { useDocument } from '@nandorojo/swr-firestore';
//import { setUser } from '../../contexts/AuthContext';


export default function Layout({ children }) {

  const dispatch = useAuthDispatch();

  const { userAuth, userData } = useAuthState();
  console.log(userAuth);

  const { data, update, error } = useDocument(userAuth ? `usuarios/${userAuth.id}` : null, {
    listen: true,
  })
  console.log("DATA", data)


  useEffect(() => {
    if (data) {
      dispatch(setUser({
        user: data,
      }))
    }
  }, [data]);


  console.log("User data", userData);

  return (
    <>
      <Header />
      {children}
      <Footer formato="0" />
    </>
  );
}
