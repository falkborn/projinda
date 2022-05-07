import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, StockRecommendations } from './components';
import './style.css'

const App = () => {
  return (
    <div className='App'>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='Main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coindId' element={<CryptoDetails />} />
              <Route exact path='/stockrecommendations' element={<StockRecommendations />} />
            </Routes>

          </div>
        </Layout>

      
      <div className='Footer'>
        <Typography.Title level={4} style={{ color: 'black', textAlign: 'center' }}>
          Cryptotracker <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/" style={{color:'black'}}>Home</Link>
          <Link to="/stockrecommendations" style={{color: 'black'}}>Stock Recommendations</Link>
          <Link to="/cryptocurrencies" style={{color: 'black'}}>Cryptocurrencies</Link> 
        </Space>

      </div>
      </div>

    </div>
  )
}

export default App