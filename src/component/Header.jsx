import { Link } from "react-router-dom";
import '../App.css';
import image from "../assets/image.png";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

export default function Header() {
  const { cart, removeFromCart, totalCount, setSearchTerm, searchTerm } = useContext(ProductContext);
  return (
    <>
      <div className="about">
        <ul className="about1">
          <Link to="/" className="link"><img src={image} alt="image" height="30px" width="30px" /></Link>
          <Link to="/" className="link">Products</Link>

          <span className="s-bar">
            <input type="text" placeholder="Search Products..." className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc
               T5zGFJu7uhkulhoUZwBYDDZzNgbPvHjXBwm6APrMRSqvs4ETD7jVyEoZXw-22bceHMk&usqp=CAU" className='Search1' alt="image" width="100px" />
          </span>
          <Link to="/Contact" className="link">Contact</Link>

          <div className="white">
            <div>
              <Link to="/Cart" className="link relative inline-block">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmntaHcjgVrqC7MaR2Ugko-x_l8n85X2oGkQ&s"
                  className="Search2"
                  alt="cart"
                />

                {/* Cart count badge */}
                {cart.length > 0 && (
                  <span className="cart-count">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <Link to="/SignUp" className="link">SignUp</Link>
          <Link to="/Login" className="link">Login</Link>

        </ul>

      </div>

      {/* <div><h2 className='with'>Learn with us</h2></div> */}
      {/* <div>
        <p className="paragraph">
        JavaScript Library, Not a Framework: React is primarily a JavaScript library for building user interfaces, not a full-fledged framework like Angular. 
        It focuses on the view layer and allows developers to choose other libraries for concerns like routing or state management.
        Virtual DOM for Performance: React utilizes a Virtual DOM, an in-memory representation of the actual DOM. 
        When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and efficiently updates only the necessary parts of the real DOM, leading to faster rendering and improved performance.
        Component-Based Architecture: React promotes a component-based architecture, where UIs are built from isolated, reusable components. 
        This modular approach enhances code organization, maintainability, and reusability across different parts of an application.
        </p></div>

        <div>
          <p className="paragraph1"> JavaScript Library, Not a Framework: React is primarily a JavaScript library for building user interfaces, not a full-fledged framework like Angular. 
        It focuses on the view layer and allows developers to choose other libraries for concerns like routing or state management.
        Virtual DOM for Performance: React utilizes a Virtual DOM, an in-memory representation of the actual DOM. 
        When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and efficiently updates only the necessary parts of the real DOM, leading to faster rendering and improved performance.
        Component-Based Architecture: React promotes a component-based architecture, where UIs are built from isolated, reusable components. 
        This modular approach enhances code organization, maintainability, and reusability across different parts of an application.
        </p>  
        </div>

         <div>
          <p className="paragraph"> JavaScript Library, Not a Framework: React is primarily a JavaScript library for building user interfaces, not a full-fledged framework like Angular. 
        It focuses on the view layer and allows developers to choose other libraries for concerns like routing or state management.
        Virtual DOM for Performance: React utilizes a Virtual DOM, an in-memory representation of the actual DOM. 
        When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and efficiently updates only the necessary parts of the real DOM, leading to faster rendering and improved performance.
        Component-Based Architecture: React promotes a component-based architecture, where UIs are built from isolated, reusable components. 
        This modular approach enhances code organization, maintainability, and reusability across different parts of an application.
        </p>  
        </div>

         <div>
          <p className="paragraph1"> JavaScript Library, Not a Framework: React is primarily a JavaScript library for building user interfaces, not a full-fledged framework like Angular. 
        It focuses on the view layer and allows developers to choose other libraries for concerns like routing or state management.
        Virtual DOM for Performance: React utilizes a Virtual DOM, an in-memory representation of the actual DOM. 
        When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and efficiently updates only the necessary parts of the real DOM, leading to faster rendering and improved performance.
        Component-Based Architecture: React promotes a component-based architecture, where UIs are built from isolated, reusable components. 
        This modular approach enhances code organization, maintainability, and reusability across different parts of an application.
        </p>  
        </div>

         <div>
          <p className="paragraph"> JavaScript Library, Not a Framework: React is primarily a JavaScript library for building user interfaces, not a full-fledged framework like Angular. 
        It focuses on the view layer and allows developers to choose other libraries for concerns like routing or state management.
        Virtual DOM for Performance: React utilizes a Virtual DOM, an in-memory representation of the actual DOM. 
        When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and efficiently updates only the necessary parts of the real DOM, leading to faster rendering and improved performance.
        Component-Based Architecture: React promotes a component-based architecture, where UIs are built from isolated, reusable components. 
        This modular approach enhances code organization, maintainability, and reusability across different parts of an application.
        </p>  
        </div> */}

      {/* <div>
        <button className="click">CLICK TO KNOW MORE</button>
       </div> */}
    </>
  )
}