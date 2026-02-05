import {
  TextField,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Box,
  Paper
} from '@mui/material'
import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const temp = {}

    if (!email) temp.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email))
      temp.email = 'Invalid email format'

    if (!password) temp.password = 'Password is required'
    else if (password.length < 6)
      temp.password = 'Minimum 6 characters'

    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Form submitted successfully')
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          fontWeight={600}
        >
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
          </Box>

          <FormControl margin="normal">
            <FormLabel>Login Type</FormLabel>
            <RadioGroup row defaultValue="user">
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, py: 1.2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
