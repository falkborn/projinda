import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'; 
import { Layout, Typography, Space } from 'antd'; 
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, StockRecommendations } from './components'; 

const App = () => {
  return (
    <div className='App'>
        <div className='Navbar'>
            <Navbar/>
        </div>
        <div className='Main'>
          <Layout>
            <div className= "routes">
              <Routes>
                <Route exact path='/' element={<Homepage/>}/>
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route exact path='/crypto/:coindId' element={<CryptoDetails/>}/>
                <Route exact path='/stockrecommendations' element={<StockRecommendations/>}/>
              </Routes>

            </div>
          </Layout>

        </div>
        <div className='Footer'>

        </div>
       
    </div>
  )
}

export default App