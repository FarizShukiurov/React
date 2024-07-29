import './Login-Reg.css';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        onLogin(true);
    };

    return (
        <Container className="full-height">
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <Paper elevation={3} className="form-container">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h4" gutterBottom>Вход</Typography>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmailChange}
                            margin="normal"
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={handlePasswordChange}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                            Войти
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;
