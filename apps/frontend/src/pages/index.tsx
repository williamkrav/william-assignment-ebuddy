
import { useState } from 'react'
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useRouter } from "next/router";
import { setCookie } from 'nookies';

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const token = await cred.user.getIdToken()
      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, 
        path: '/',
      });
    
      router.push('/user')
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
      <Paper sx={{paddingTop:2}}>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, paddingX:4, paddingBottom: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" sx={{ textAlign: 'center', marginTop: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
