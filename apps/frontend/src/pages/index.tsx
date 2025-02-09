
import { useState } from 'react'
import { Container,  Paper } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useRouter } from "next/router";
import { setCookie } from 'nookies';
import LoginForm from '../components/loginForm';

export default function LoginPage() {
  const [error, setError] = useState('')
  const router = useRouter();

  const handleLogin = async (email:string,password:string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const token = await cred.user.getIdToken()
      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, 
        path: '/',
      });
    
      router.push('/user')
    } catch (err) {
      setError('Please use email: williamkrav@gmail.com and password: 12345678')
    }
  }

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>

      <title>
        Login
      </title>
      <Paper sx={{paddingTop:2}}>
        <LoginForm
          error={error}
            handleLogin={(email,password)=>handleLogin(email, password)}
          />
      </Paper>
    </Container>
  )
}
