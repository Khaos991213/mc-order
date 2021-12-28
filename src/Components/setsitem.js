import React from "react";

function SetsItem(props) {
  // eslint-disable-next-line
//   const [cart, setCart] = useContext(CartContext);
  
//   const addToCart = () => {
//     const foodItem = {
//       name: props.text,
//       price: props.price,
//       series:props.series,
//       id: Math.random().toString(36).substr(2, 9),
//       qty: 1,
//     };
//     let exists = false;
//     if (cart) {
//       exists = cart.find((x) => x.name === foodItem.name); // check if cart already has the foodItem in cart
//     }
//     if (exists) {
//       setCart(
//         cart.map((x) =>
//           x.name === foodItem.name ? { ...x, qty: x.qty + 1 } : x
//         )
//       );
//     } else {
//       setCart((currentState) => [...currentState, foodItem]);
//     }
//   };
  
  
  const addToSet = () => {
    // const foodItem = {
    //   text: props.text,
    //   price: props.price,
    //   id: Math.random().toString(36).substr(2, 9),
    //   qty: 1,
    // };
    if(props.series==="side_dish"){
        localStorage.setItem("side_dish",props.text)
    }
    if(props.series==="drink"){
        localStorage.setItem("drink",props.text)
    }
    if(props.series==="extra"){
        localStorage.setItem("extra",props.text)
    }
    if(props.series==="side_dish"){
        localStorage.setItem("side_dishP",props.price)
    }
    if(props.series==="drink"){
        localStorage.setItem("drinkP",props.price)
    }
    if(props.series==="extra"){
        localStorage.setItem("extraP",props.price)
    }
  };
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);
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
              </div>
              
              <button
                onClick={addToSet}
                name={props.text}
                id={props.price}
                className='btn btn-secondary btn-lg rouned btn-sm'
              >
                <small>選擇</small>
              </button>
              
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default SetsItem;
