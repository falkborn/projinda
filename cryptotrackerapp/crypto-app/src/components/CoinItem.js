import React from 'react'
import './Coins.css'
import millify from 'millify'

const CoinItem = (props) => {

  let profit = props.coins.price_change_percentage_24h >= 0; 

  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt= '' />
            <p>{props.coins.symbol.toUpperCase()}</p>

        </div>
    <p>${props.coins.current_price}</p>
    <div className={profit > 0 ? 'plus' : 'minus'}>
    <p>{profit && '+'}{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
    <p className='hide-mobile'>${props.coins.total_volume}</p>
    <p className='hide-mobile'>${millify(props.coins.market_cap)}</p>
    
    </div>
  )  
}

export default CoinItem