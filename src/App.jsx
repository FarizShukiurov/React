import Header from './Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import NewsPage from './NewsPage'
function App() {

  const products = [
    {
      id: 1,
      name: 'Компьютерная мышь',
      price: 1500,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6qcWYjE1ZKh2mA1yk241YtY-XgsgzlM8-w&s'
    },
    {
      id: 2,
      name: 'Клавиатура',
      price: 2000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMfoBAq9jYnAQvaZN_xBe0LurbKi_4PKEtQ&s'
    },
    {
      id: 3,
      name: 'Монитор',
      price: 12000,
      image: 'https://cdn.thewirecutter.com/wp-content/media/2021/05/27-inch-monitor-2048px-1572.jpg'
    },
    {
      id: 4,
      name: 'Ноутбук',
      price: 50000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mSe1YiLgV29zB1_81fhGxZd8Trh52zU3Rg&s'
    },
    {
      id: 5,
      name: 'Внешний жесткий диск',
      price: 3000,
      image: 'https://www.store.pcimage.com.my/image/shoppcimage/image/data/Category/ext-hdd.png'
    },
    {
      id: 6,
      name: 'USB флешка',
      price: 800,
      image: 'https://m.media-amazon.com/images/I/61TgILXQH1L._AC_SL1500_.jpg'
    },
    {
      id: 7,
      name: 'Наушники',
      price: 2500,
      image: 'https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 8,
      name: 'Веб-камера',
      price: 3500,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE5nMSX5ZTrrK0I-HVnu4MyFmC1JnzM_hLQ&s'
    },
    {
      id: 9,
      name: 'Принтер',
      price: 7000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEypjdrPH1kFnZifBlnAjiGL8MojzNiSZrA&s'
    },
    {
      id: 10,
      name: 'Смарт-часы',
      price: 10000,
      image: 'https://strgimgr.umico.az/sized/840/444085-2d58832407c78ab057514b950881cfd6.jpg'
    }
  ];

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element ={<Home products={products}></Home>}></Route>
          <Route path='/news' element ={<NewsPage></NewsPage>}></Route>
        </Routes>
      </main>
        <Footer></Footer>
    </div>
  )
}

export default App
