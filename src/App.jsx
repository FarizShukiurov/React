import Header from './Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import NewsPage from './NewsPage'
import AboutUsSlider from './AboutUsSlider'
function App() {

  const products = [
    {
      id: 1,
      name: 'CLUTCH GM11 WHITE',
      price: 1500,
      image: 'https://asset.msi.com/resize/image/global/product/product_16348857744fdf2727d44fc5b151c235180de77300.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 2,
      name: 'VIGOR GK30 INFRARED',
      price: 2000,
      image: 'https://asset.msi.com/resize/image/global/product/product_171557826193d96168e99dcff56a239724a92d8abc.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 3,
      name: 'MPG 341CQPX QD-OLED',
      price: 12000,
      image: 'https://asset.msi.com/resize/image/global/product/product_1720164891142aeac97ecad037a2d5b39031f76556.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 4,
      name: 'TITAN GT77 HX 13V',
      price: 50000,
      image: 'https://asset.msi.com/resize/image/global/product/product_16680748471283fe0d09aff81b8ea184a179a08ba1.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 5,
      name: 'GeForce RTX™ 4080 SUPER 16G SUPRIM X',
      price: 3000,
      image: 'https://asset.msi.com/resize/image/global/product/product_1704703437c0d7e4a9c6fcc6352c1a46ca5192db79.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 6,
      name: 'RadiX AX6600 WiFi 6 Tri-Band Gaming Router',
      price: 800,
      image: 'https://asset.msi.com/resize/image/global/product/product_1675148205d078b3fde25021d9357d3ec893970d57.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 7,
      name: 'IMMERSE GH61',
      price: 2500,
      image: 'https://asset.msi.com/resize/image/global/product/product_0_20200925101736_5f6d53407b9a7.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 8,
      name: 'MEG Aegis Ti5 13th',
      price: 3500,
      image: 'https://asset.msi.com/resize/image/global/product/product_16763382067718ee4143d29ee665aa678fa9acc1f1.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 9,
      name: 'MEG Z790 GODLIKE MAX',
      price: 7000,
      image: 'https://asset.msi.com/resize/image/global/product/product_1695177568f52d7dd3586a5af6365171c3fa6a3d01.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    },
    {
      id: 10,
      name: 'Claw - A1M',
      price: 10000,
      image: 'https://asset.msi.com/resize/image/global/product/product_1704705807d94cc9a8aa676f72c81e0978bde2fb84.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
    }
  ];

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element ={<Home products={products}></Home>}></Route>
          <Route path='/news' element ={<NewsPage></NewsPage>}></Route>
          <Route path='/about' element ={<AboutUsSlider></AboutUsSlider>}></Route>
        </Routes>
      </main>
        <Footer></Footer>
    </div>
  )
}

export default App
