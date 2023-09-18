import React, {  useState } from 'react';
import { TfiHeart ,TfiShoppingCart} from "react-icons/tfi";
import {BiGitCompare} from 'react-icons/bi'
import './Product.css';

const Product = () => {

  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)

 
  const images=[
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto-compress&cs-tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto-compress&cs-tinysrgb&w=1600&lazy=load"
  ]
  return (
    <div className='product'>
        <div className="product-left">
           <div className="product-imgs">
            <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
            <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
           </div>
           <div className="product-mainImg">
            <img src={images[selectedImg]} alt=""  />
           </div>
        </div>
        <div className="product-right">
          <h1>Title</h1>
          <span className='price'>$99</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aliquam ipsa repellat quis, eos, harum perferendis rerum minus suscipit neque aspernatur quidem, labore saepe quasi aliquid hic cumque sunt eveniet!</p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=>prev?1:prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className='add'>
           <TfiShoppingCart/> ADD TO CART
          </button>
          <div className="extra-link">
            <div className="stuff">
              <TfiHeart/> ADD TO WISHLIST
            </div>
            <div className="stuff">
             <BiGitCompare/> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className='shr'/>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
        </div>
    </div>
  )
}

export default Product