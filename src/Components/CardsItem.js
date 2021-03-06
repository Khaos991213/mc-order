import React, { useContext, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";
import { projectFirestore } from "../Firebase";
import {Link} from "react-router-dom";
function CardItem(props) {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const foodItem = {
      name: props.text,
      price: props.price,
      series:props.series,
      id: Math.random().toString(36).substr(2, 9),
      qty: 1,
    };
    console.log(foodItem.name)
    let exists = false;
    if (cart) {
      exists = cart.find((x) => x.name === foodItem.name); // check if cart already has the foodItem in cart
    }
    if (exists) {
      setCart(
        cart.map((x) =>
          x.name === foodItem.name ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart((currentState) => [...currentState, foodItem]);
    }
  };

  const removeCard = () => {
    projectFirestore.collection("images").doc(props.id).delete();
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <li className='cards__item bg-light'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Food'
              src={props.src}
              loading='lazy'
            />
          </figure>
          <div className='cards__item__info'>
            <div className='cards__item__text'>
              {props.text}{}
              <h6 className='cards__item__price'>NT${props.price}</h6>
              
              
              <div className="text-md-left mb-4">
              { props.series===("signature")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
              { props.series===("chicken")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
                { props.series===("pork_and_seafood")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
                { props.series===("beef")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
                { props.series===("crispy")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
                { props.series===("Mcnuggets")&&(
                <Link to={{
                  pathname:"/custom" ,aboutProps:{
                  picture:props.src,
                  price:props.price, 
                  text:props.text,
                  series:props.series
                  }}}
                className  ="card_item_custome">
                  ??????  
                </Link>)}
              </div>
              <button
                onClick={addToCart}
                className='btn btn-secondary btn-lg rouned btn-sm'
              >
                <i className='fas fa-plus'></i> <small>??????</small>
              </button>
              
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
