import React from 'react';
import './Home.css';
import img1 from './images/amazon.jpg'
import Product from './Product';
function Home() {
  return (
    <div className='Home'>
        <div className='home__container'>
            <img className='home__image'
              src={img1}
              alt = ''
            />

            <div className='home__row'>
                <Product
                  id = "2312345"
                  title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                  price={49.99}
                  image= 'https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg'
                  rating={5}
                />
                <Product
                  id = "1987626"
                  title= 'Apple iPhone 13 Pro Max (128GB) - Sierra Blue'
                  price = {1099.99}
                  image= 'https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UY327_FMwebp_QL65_.jpg'
                  rating={5}
                />
            </div>

            <div className='home__row'>
                <Product
                  id='2314212'
                  title='Nike Mens WMNS Air Jordan 1 High Og Basketball Shoe'
                  price={290.49}
                  image= 'https://m.media-amazon.com/images/I/71KWXi5FbYL._AC_UL480_FMwebp_QL65_.jpg'
                  rating={4}
                />
                <Product
                  id='1245673'
                  title='Jordan Men'
                  price= {230.78}
                  image='https://m.media-amazon.com/images/I/71Rys3Ka7OL._AC_UL480_FMwebp_QL65_.jpg'
                  rating={4}
                />
                <Product
                  id='234212'
                  title='Nike Airforce'
                  price= {210.78}
                  image = 'https://m.media-amazon.com/images/I/51y-010G7VL._AC_UL480_FMwebp_QL65_.jpg'
                  rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                  id='432677'
                  title='LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55A2PSA (Rocky Black)'
                  price= {890.89}
                  image='https://m.media-amazon.com/images/I/713Q2pEePmL._AC_UY327_FMwebp_QL65_.jpg'
                  rating={5}
                />
                <Product
                  id='567212'
                  title='LG 164 cm (65 inches) 4K Ultra HD Smart OLED TV 65C1PTZ (Dark Steel Silver) (OLED65C1PTZ)'
                  price= {1255.89}
                  image='https://m.media-amazon.com/images/I/71tU03UNI1L._AC_UY327_FMwebp_QL65_.jpg'
                  rating={4}
                />
            </div>

            <div className='home__row'>
              <Product
                id="675217"
                title="MuscleBlaze Phirse Zidd Kar, Shaker Bottle, 100% Leakproof, BPA-Free Blender Bottle, Ideal for Whey Protein, Preworkout, and BCAA Shakes (Back, 650 ml)"
                price={23.9}
                image='https://m.media-amazon.com/images/I/51D4gmJsO3L._AC_UL480_FMwebp_QL65_.jpg'
                rating={4}
              />
              <Product
                id="897281"
                title="Apple 20W charger fast charger"
                price={50.9}
                image='https://images-eu.ssl-images-amazon.com/images/I/61vtLhO6fDL._AC_UL160_SR160,160_.jpg'
                rating={4}
              />
            </div>
            
        </div>
    </div>
  )
}

export default Home