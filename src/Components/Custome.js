import React, { useEffect,useContext,useState } from "react";
import {useLocation} from'react-router-dom';
import useFirestore from "../hooks/useFireStore";
import { CartContext } from "../Contexts/CartContext";
import "./Cards.css";
import { Link } from "react-router-dom";
import SetsItem from "./setsitem";

function Custome(props){
    const [cart, setCart] = useContext(CartContext);
    const [side_dish,setDish] = useState("");
    const [drinks,setDrinks]=useState("");
    const [extra ,setExtra]=useState("");
    let { docs } = useFirestore("set");
    const location = useLocation();
    console.log(docs);
    const text=location.aboutProps.text;
    const price=location.aboutProps.price;
    const picture=location.aboutProps.picture;
    const data=[docs];

    const addToCart = () => {
        const foodItem = {
          name: text + " + " + localStorage.getItem("side_dish") + " + " + localStorage.getItem("drink")+ " + "  + localStorage.getItem("extra"),
          price: parseInt(price) + parseInt(localStorage.getItem("side_dishP"))+ parseInt(localStorage.getItem("drinkP")) - 38  + parseInt(localStorage.getItem("extraP")) ,
          series:props.series,
          id: Math.random().toString(36).substr(2, 9),
          qty: 1,
        };
        console.log(localStorage.getItem("side_dish"))
        console.log(localStorage.getItem("drink"))
        console.log(localStorage.getItem("extra"))
        console.log(foodItem.price)
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
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
    console.log(picture);
    let sortFood = (id) => {
        setDish(id);
    };
    return (
        <>
        <div
        className="col-sm col-2 mt-5 text-center sortSmall">
            <img className="main-dish d-block mx-auto"src={picture}/>
            
        </div>
        <div className="container mt-5  d-block mx-auto">
            <div className="col-10 removepadding">
            <h1 className="mt-5">配餐</h1>
            <hr className="line"></hr>{" "}
            <div className="cards">
              
              <div className="cards__container">
                <div className="cards__wrapper">
                  {data.map((childs, index) => {
                    return (
                      <ul className="cards__items">
                        {childs.map((c, cindex) => {

                          return (
                            <>
                              {c.series === "side_dish" && (
                                <SetsItem
                                  src={c.url}
                                  main_text={text}
                                  main_price={price}
                                  text={c.text}
                                  text_en={c.text_en}
                                  price ={c.price}
                                  id={c.id}  
                                  series={c.series}
                                ></SetsItem>
                              )}
                            </>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="container mt-5">
            
            <div className="col-10 removepadding">
            <h1 className="mt-5">飲料</h1>
            <hr className="line"></hr>{" "}
            <div className="cards">
              
              <div className="cards__container">
                <div className="cards__wrapper">
                  {data.map((childs, index) => {
                    return (
                      <ul className="cards__items">
                        {childs.map((c, cindex) => {
                          return (
                            <>
                              {c.series === "drink" && (
                                <SetsItem
                                  src={c.url}
                                  text={c.text}
                                  textd={c.text}
                                  text_en={c.text_en}
                                  price ={c.price}
                                  id={c.id}  
                                  series={c.series}
                                ></SetsItem>
                              )}
                            </>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="container mt-5">
            
            <div className="col-10 removepadding">
            <h1 className="mt-5">加購物</h1>
            <hr className="line"></hr>{" "}
            <div className="cards">
              
              <div className="cards__container">
                <div className="cards__wrapper">
                  {data.map((childs, index) => {
                    return (
                      <ul className="cards__items">
                        {childs.map((c, cindex) => {
                          return (
                            <>
                              {c.series === "extra" && (
                                <SetsItem
                                  src={c.url}
                                  text={c.text}
                                  texte={c.text}
                                  text_en={c.text_en}
                                  price ={c.price}
                                  id={c.id}  
                                  series={c.series}
                                ></SetsItem>
                              )}
                            </>
                          );
                        })}
                      </ul>
                    );
                  })}
                  <Link to="/menu">
                  <button
                        onClick={addToCart}
                        className='btn btn-secondary btn-lg rouned btn-sm'
                    >
                    <small>加入</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </>
    )
}

export default Custome
