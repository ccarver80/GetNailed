import React, { useEffect, useState } from "react";
import api from "../api";

export default function Header(props) {
  const [showModal, setShowModal] = useState(false);

  const [cartCount, setCartCount] = useState();
  const [cartItems, setCartItems] = useState();

  let cartTotal = 0;

  useEffect(() => {
    function countCart() {
      setCartCount(props.cart.length);
      setCartItems(props.cart)
    }

    countCart();
    
   
  });

  return (
    <div className="mx-5 flex h-[120px] bg-space  rounded-xl ">
      <h1 className="lg:text-8xl md:text-6xl text-5xl text-white mx-auto my-auto font-Shadows">
        Get Nailed
      </h1>{" "}
      <div className="absolute left-8 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <button type="button" onClick={() => setShowModal(true)}>
        <div className="absolute right-5 top-3">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mr-5 text-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartCount ? (
            <p className="bg-red-500 text-center absolute right-12 text-white w-7 border-black border rounded-full">
              {cartCount}
            </p>
          ) : (
            ""
          )}
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" p-2 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Cart</h3>
                  <button className="" onClick={() => setShowModal(false)}>
                    <span className="text-slate-500 text-4xl">×</span>
                  </button>
                </div>
                {/*body*/}
        
                  <div>
                    {
                    cartItems ? (
                        cartItems.map(item => {
                          cartTotal += item.price;
                          return(
                            <div className="flex flex-row border border-black mb-2 p-2 ">
                            <img  className="h-24 my-auto rounded shadow-lg shadow-black"
                    alt="press-on nail"
                    src={`${api}/nails/${item.id}`} />
                            <div className="mx-auto text-2xl font-serif my-auto flex flex-col">
                            <h1>The "{item.title}"</h1>
                            <h1>${item.price}.00</h1>
                            <button onClick={() => {
                              props.setCartItem([...cartItems.filter(data => data.id != item.id)]);
                              props.setStoreData([...props.storeData, item])
                            
                            
                            }}>Remove</button>
                            </div>
                            </div>
                            
                          )
                        })
                        
                      ) : ""
                    }

                    <h1 className="mx-auto text-2xl font-serif">Subtotal: ${cartTotal}.00 + Shipping</h1>
                  </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Checkout 
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
