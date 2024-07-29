import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import './Login-Reg.css';

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRegister = () => {
        if (password === confirmPassword) {
            onRegister(true);
        } else {
            alert('Пароли не совпадают');
        }
    };

    return (
        <Container className="full-height">
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <Paper elevation={3} className="form-container">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h4" gutterBottom>Регистрация</Typography>
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
                            switched margin="normal"
                        />
                        <TextField
                            label="Подтвердите пароль"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
                            Зарегистрироваться
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Register;
