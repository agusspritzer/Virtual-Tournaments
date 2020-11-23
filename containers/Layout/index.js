import React, { useContext, useEffect } from 'react';
import { Header, Footer } from 'components';
import { useAuthState, useAuthDispatch, setUser } from "contexts/AuthContext";
import { useDocument } from '@nandorojo/swr-firestore';
//import { setUser } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Layout({ children }) {

  const router = useRouter();


  const dispatch = useAuthDispatch();


  const { userAuth, userData } = useAuthState();
  console.log(userAuth);

  const { data, update, error } = useDocument(userAuth ? `usuarios/${userAuth.id}` : null, {
    listen: true,
  })


  useEffect(() => {
    if (data) {
      dispatch(setUser({
        user: data,
      }))
    }
  }, [data]);

  return (
    <>
      { router && router.pathname !== "/" && <Header />}
      {children}
      { router && router.pathname !== "/" && <Footer formato="0" />}

    </>
  );
}
