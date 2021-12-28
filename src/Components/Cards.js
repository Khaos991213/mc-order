import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
//import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
import SortFood from "./SortFood";
const Cards = () => {
  let { docs } = useFirestore("images");
  
  console.log(docs);
  const [selectedFood, setSelectedFood] = useState("signature");
  useEffect(() => {
    return () => {};
  }, [selectedFood]);

  //splits into 2
  
  // var chunks = function (array, size) {
  //   var results = [];
  //   while (array.length) {
  //     results.push(array.splice(0, size));
  //   }

  //   return results;
  // };
  //const data = chunks([...docs], 3);
  const data=[docs];
  //分等分
  let sortFood = (id) => {
    setSelectedFood(id);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-sm col-2 mt-5 text-center sortSmall"
            data-toggle="buttons"
          >
            <SortFood sortFood={sortFood}></SortFood>
            
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="signature"
            >
              極選系列
            </button>
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="beef"
            >
              牛肉系列
            </button>
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="chicken"
            >
              雞肉系列
            </button>
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="Mcnuggets"
            >
              麥克雞塊系列
            </button>
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="crispy"
            >
              麥脆雞系列
            </button>
            <button
              className="btn btn-info mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="pork_and_seafood"
            >
              海鮮和豬系列
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="drink"
            >
              飲料
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="share_box"
            >
              麥當勞分享盒
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="happy_meal"
            >
              快樂分享餐
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="dessert"
            >
              點心
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="drink"
            >
              飲料
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="McCafe"
            >
              McCafe
            </button>
            
          </div>
          <div className="col-10 removepadding">
            <h1 className="mt-5">Menu</h1>
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
                              {c.series === selectedFood && (
                                <CardItem
                                  src={c.url}
                                  text={c.text}
                                  text_en={c.text_en}
                                  price ={c.price}
                                  id={c.id}  
                                  series={c.series}
                              ></CardItem>
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
      </div>
    </>
  );
};

export default Cards;
