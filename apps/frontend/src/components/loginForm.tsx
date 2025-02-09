
import { useState } from 'react'
import { TextField, Container, Typography, Box, Paper, Button } from '@mui/material'

interface Props {
    handleLogin: ((email:string, password:string) =>{})
    error: string
}
export default function LoginForm(props:Props) {
  const {handleLogin,error}=props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
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
            onClick={()=>handleLogin(email,password)}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
