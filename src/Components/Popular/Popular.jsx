import React from 'react';
import './Popular.css';
import Item from '../Item/Item'
import data_product from '../Assets/data';

const Popular=()=>{
    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className='popular-item'>
                {data_product.map((item)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old-price={item.old_price}></Item>
                })}
            </div>
        </div>
    )
}

export default Popular;