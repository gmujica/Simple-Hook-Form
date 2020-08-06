import React from 'react'
import { SnackbarProvider } from 'notistack';
import SignIn from './components/signIn/SignIn'

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SignIn />
    </SnackbarProvider>
  )
}


