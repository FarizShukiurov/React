import { Container, Typography, Box, Button, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey, blue } from '@mui/material/colors';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const handlePurchase = () => {
        alert('Покупка выполнена');
        localStorage.removeItem('cart');
        setCart([]);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <Container className='full-height' maxWidth="sm" style={{ padding: '20px', backgroundColor: grey[100], borderRadius: '8px' }}>
            <Box className="cart-content">
                <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', color: blue[700] }}>Корзина</Typography>
                <List>
                    {cart.map((item, index) => (
                        <ListItem key={index} style={{ backgroundColor: grey[50], marginBottom: '10px', borderRadius: '4px' }}>
                            <ListItemText 
                                primary={item.name} 
                                secondary={`$${item.price}`} 
                                primaryTypographyProps={{ variant: 'h6' }}
                            />
                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'right' }}>
                    Общая сумма: ${totalPrice.toFixed(2)}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handlePurchase}
                    style={{ backgroundColor: blue[700], color: '#fff' }}
                >
                    Купить
                </Button>
            </Box>
        </Container>
    );
};

export default Cart;
