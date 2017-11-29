import React from 'react';


const Product = (props) => {

  return (
    <div className="card">
      <img className="product-image" src={props.item && props.item.imageUrl} />
      <h3>{ props.item && props.item.name }</h3>
      <div className="item-info">
        <p>{ props.item && props.item.merchant }</p>
        <p className="price">${ props.item && props.item.price }</p>
        <p><button className="button button--product" onClick= { ()=> {window.open(props.item.link);}} >Buy Product</button>
        { !props.item.added && <button className="button button--product" onClick= {()=>{ props.addItem(props.item, props.index) } } >Add to Shopping List</button>
        }
        </p>

      </div>
    </div>
  );
};


export default Product;
/*
    <div className="card"> ITEM 1
      <img className="product-image" src={props.item && props.item.imageUrl} />
      <h3>{ props.item && props.item.name }</h3>
      <div className="item-info">
      <p>{ props.item && props.item.merchant }</p>
       <p className="price">${ props.item && props.item.price }</p>
      <p><button className="button button--product" onClick= { ()=> {window.open(props.item.link);}} >Buy Product</button>
      <button className="button button--product" onClick= {()=>{ props.addItem(props.item) } } >Add to Shopping List</button>

      </p>

      </div>

    </div> */

      // {
      //   !props.added && <button className="button button--product" onClick= {()=>{ props.addItem(props.item) } } >Add to Shopping List</button>
      // }
      // {
      //   props.added && <button className="button button--product" onClick= {()=>{} } > Remove From Shopping List</button>
      // }
// var Product = {
//   id: Number,
//   name: String,
//   imageUrl: String,
//   description: String,
//   merchant: String,
//   link: String,
//   priceHistory: Array,
//   userPricing: Array of tuples [user, price]
// }
