import { Container, Grid, Card, CardMedia, CardContent, Typography, Slider, FormControl, InputLabel, Select, MenuItem, Box, Button, TextField, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Catalog = ({ products, login }) => {
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const navigate = useNavigate();

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const filteredProducts = products
        .filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1] &&
            (category === '' || product.category === category) &&
            (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else if (sortOrder === 'desc') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" mb={4}>
                <Box width="25%" mr={2} style={{ backgroundColor: grey[200], padding: '20px', borderRadius: '8px' }}>
                    <Typography variant="h6" gutterBottom>Фильтры</Typography>
                    <TextField
                        label="Поиск"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                        margin="normal"
                    />
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel>Категории</InputLabel>
                        <Select value={category} onChange={handleCategoryChange} label="Category">
                            <MenuItem value=""><em>All</em></MenuItem>
                            <MenuItem value="Ноутбук">Ноутбук</MenuItem>
                            <MenuItem value="ПК">ПК</MenuItem>
                            <MenuItem value="Компьютерная мышь">Компьютерная мышь</MenuItem>
                            <MenuItem value="Гарнитура">Гарнитура</MenuItem>
                            <MenuItem value="Приставка">Приставка</MenuItem>
                            <MenuItem value="Клавиатура">Клавиатура</MenuItem>
                            <MenuItem value="Монитор">Монитор</MenuItem>
                            <MenuItem value="Видеокарта">Видеокарта</MenuItem>
                            <MenuItem value="Роутер">Роутер</MenuItem>
                            <MenuItem value="Материнская плата">Материнская плата</MenuItem>
                        </Select>
                    </FormControl>
                    <Box mt={2}>
                        <Typography gutterBottom>Ценовой диапазон</Typography>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            max={50000}
                            sx={{ color: grey[700] }}
                        />
                    </Box>
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel>Сортировка</InputLabel>
                        <Select value={sortOrder} onChange={handleSortOrderChange} label="Sort By Price">
                            <MenuItem value=""><em>Нет</em></MenuItem>
                            <MenuItem value="asc">Меньшая - Большая</MenuItem>
                            <MenuItem value="desc">Большая - Меньшая</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box width="75%">
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <IconButton color="primary" onClick={() => navigate('/cart')}>
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Grid container spacing={4}>
                        {filteredProducts.map(product => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: grey[100] }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.name}
                                        height="200"
                                        image={product.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <Box display="flex" justifyContent="center" m={2}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={!login}
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Добавить в корзину
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Catalog;
