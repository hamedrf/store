// import logo from "./logo.svg"; // Logo import (currently unused)

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome icons
import Counter from "./components/Counter"; // Import Counter component
import NavbarStore from "./components/NavbarStore"; // Import Navbar component
import {
  faBasketShopping,
  faComment,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons
import CategorieBtn from "./components/CategorieBtn"; // Import category button component
import { categories, product } from "./redux/ProductSlice"; // Import categories and product types from Redux slice
import Products from "./components/Products"; // Import Products component
import { useSelector } from "react-redux"; // Import useSelector for Redux state access
import { RootState } from "./redux/store"; // Import RootState type for Redux state
import { useEffect, useState } from "react"; // Import React hooks
import {
  faApple,
  faFacebook,
  faGooglePlay,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { Nav } from "react-bootstrap"; // Import Nav component from React Bootstrap

const App = () => {
  const [productCount, setProductCount] = useState(0); // State to keep track of number of products displayed
  const [showProducts, setShowProducts] = useState<product[]>([]); // State to manage shown products
  const products = useSelector(
    (state: RootState) => state.counter.showProducts // Access products from Redux state
  );

  useEffect(() => {
    console.log(window.innerWidth); // Log window width for debugging
    switch (true) {
      case window.innerWidth < 768:
        setProductCount(3); // Set product count for mobile view
        break;
      case window.innerWidth >= 768 && window.innerWidth < 992:
        setProductCount(4); // Set product count for tablet view
        break;
      case window.innerWidth >= 992:
        setProductCount(6); // Set product count for desktop view
        break;
    }
  }, [window.innerWidth]); // Effect to update product count on window resize

  useEffect(() => {
    setShowProducts(products.slice(0, productCount)); // Update displayed products based on count
  }, [productCount, products]); // Effect to update shown products when count or products change

  return (
    <>
      <NavbarStore />
      <header className="container m-auto row ">
        <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-evenly  flex-column">
          <div>
            <h1 className="display-3 fw-bold text-danger shadow-text p2 text-center text-md-start p-0 px-lg-3">
              order your favourite food
            </h1>
            <p className="h4 des-text-color shadow-text my-3 text-center text-md-start">
              hamburger has many flavors , have you tried cheese beef hamburger
              ?
            </p>
          </div>
          <div className="mt-5 d-none d-md-block">
            <span className="h3 fw-normal des-text-color ">
              total order <span className="h1 text-dark">: $ 5.39 </span>
            </span>
            <div className="d-flex justify-content-evenly align-items-center mt-3">
              <Counter />
              <button className="btn text-nowrap btn-warning shadow rounded-start-5 rounded-end-5 btn-text">
                {" "}
                <FontAwesomeIcon icon={faBasketShopping} className="me-2 " />
                order now
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 col-12  position-relative">
          <img
            src="./images/Group.png"
            alt="hamburger"
            className="w-100 h-100"
          />
          <div className="flex-column note-img shadow position-absolute  bg-light px-lg-4 py-lg-2 py-1 px-2  justify-content-center d-flex align-items-center  border-1 border border-secondary-subtle ">
            <span className="h4 fw-medium">
              <FontAwesomeIcon icon={faStopwatch} /> Delivery
            </span>
            <span className="des-text-color fs-5">30 mins</span>
          </div>
        </div>
        <div className="mt-5 d-md-none ">
          <span className="h3 fw-normal des-text-color ">
            total order <span className="h1 text-dark">: $ 5.39 </span>
          </span>
          <div className="d-flex justify-content-evenly align-items-center mt-3">
            <Counter />
            <button className="btn btn-warning shadow rounded-start-5 rounded-end-5 btn-text">
              {" "}
              <FontAwesomeIcon icon={faBasketShopping} className="me-2" />
              order now
            </button>
          </div>
        </div>
      </header>
      <section className="container p-0 pb-5 ">
        <h1 className="background-header-text px-1 my-5 fw-bold text-danger ">
          MENU
        </h1>
        <div className="overflow-x-auto text-nowrap d-flex categories">
          {Object.keys(categories).map((e) => {
            return (
              <CategorieBtn
                key={e}
                value={categories[e as keyof typeof categories]}
              />
            );
          })}
        </div>
        <div className="row justify-content-center p-0 m-0">
          {showProducts.map((product, index) => {
            return <Products key={index} product={product} />;
          })}
        </div>
        {productCount !== 6 && (
          <div className="text-center my-5">
            <span
              onClick={() => setProductCount(6)}
              className="border-bottom border-1 border-secondary h4  cursor-pointer"
            >
              see all{" "}
            </span>
          </div>
        )}
      </section>
      <section className="container p-0 py-5 ">
        <h1 className="background-header-text px-1 fw-bold text-danger mx-sm-auto my-5">
          SALE OFF
        </h1>
        <div className="row m-0 d-flex justify-content-center justify-content-sm-between px-3 ">
          <div
            className="col-11 col-sm-6 col-lg-4 bg-secondary bg-opacity-10 rounded rounded-4 d-flex align-items-start flex-column p-2 p-sm-4 position-relative overflow-hidden"
            style={{ height: "335px", transform: "scale(0.9)" }}
          >
            <img
              src="./images/products/2.png"
              className="position-absolute col-8"
              style={{
                right: "-10%",
                bottom: "10%",
              }}
              alt="Product"
            />

            <div className="d-flex w-100 align-items-center mb-3">
              <span className="bg-white px-2 text-nowrap bg-secondary bg-opacity-10 ">
                Fast Food
              </span>
              <hr className="flex-grow-1" />
            </div>

            <h1 className="text-danger fw-bold h2">COMBO FUNNY</h1>
            <span>
              buy 1 funny combo <br /> get 1 coca cola
            </span>
            <div className="h4 fw-bold text-danger my-auto">
              {" "}
              <del className="h6  text-secondary">10.3$</del> 10.3$
            </div>
            <div className="my-auto">
              <button className="btn btn-secondary rounded-5">
                <FontAwesomeIcon icon={faBasketShopping} /> Order Now
              </button>
            </div>
          </div>
          <div
            className="col-11 col-sm-6 col-lg-4 bg-danger  rounded rounded-4 d-flex align-items-start flex-column p-2 p-sm-4 position-relative overflow-hidden"
            style={{ height: "335px" }}
          >
            <img
              src="./images/products/4.png"
              className="position-absolute col-8"
              style={{
                right: "-10%",
                bottom: "10%",
              }}
              alt="Product"
            />

            <div className="d-flex w-100 align-items-center mb-3">
              <span className="bg-danger text-light px-2 text-nowrap ">
                Fast Food
              </span>
              <hr className="flex-grow-1 text-light" />
            </div>

            <h1 className="text-warning h2">
              SALAD MIXED <br /> VINEGAR
            </h1>
            <div className="h3 fw-bold text-warning my-auto">
              {" "}
              <del className="h6  text-light">10.3$</del> 3.4$
            </div>
            <div className="my-auto">
              <button className="btn btn-light rounded-5">
                <FontAwesomeIcon icon={faBasketShopping} /> Order Now
              </button>
            </div>
          </div>
          <div
            className="col-11 col-sm-6 col-lg-4 bg-secondary bg-opacity-10 rounded rounded-4 d-flex align-items-start flex-column p-2 p-sm-4 position-relative overflow-hidden"
            style={{ height: "335px", transform: "scale(0.9)" }}
          >
            <img
              src="./images/products/5.png"
              className="position-absolute col-8"
              style={{
                right: "-10%",
                bottom: "10%",
              }}
              alt="Product"
            />

            <div className="d-flex w-100 align-items-center mb-3">
              <span className="bg-white px-2 text-nowrap bg-secondary bg-opacity-10 ">
                Fast Food
              </span>
              <hr className="flex-grow-1" />
            </div>

            <h1 className="text-danger fw-bold h2">CHICKEN BUGGER</h1>
            <span>fried chicken</span>
            <div className="h4 fw-bold text-danger my-auto">
              {" "}
              <del className="h6  text-secondary">8.3$</del> 6.3$
            </div>
            <div className="my-auto">
              <button className="btn btn-secondary rounded-5">
                <FontAwesomeIcon icon={faBasketShopping} /> Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 py-5 position-relative">
        <div
          className="container-fluid border border-1  bg-raduis bg-secondary bg-opacity-10 position-relative"
          style={{ borderRadius: "0 25rem 25rem 0", padding: "0" }}
        >
          <div
            className=" position-absolute"
            style={{
              borderRadius: "inherit",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              zIndex: "-1",
            }}
          ></div>

          <div className="container-xl">
            <div className=" flex-row-reverse d-flex justify-content-center justify-content-sm-end justify-content-lg-start flex-wrap">
              <div className="d-flex flex-column col-12 col-sm-10 col-lg-6 my-5 pt-5 justify-content-around  align-items-md-start align-items-center me-md-4 pe-md-5 ps-md-1">
                <h5 className="text-secondary">Exclusive offers and more</h5>
                <h1 className="display-4 text-danger ps-2 pe-1 py-4 fw-medium">
                  MCDONALD’S MOBILE APP
                </h1>
                <p className="h4 ps-3">
                  As a global No. 1 fast food brand, McDonald's wishes to bring
                  customers not only delicious and hygienic food of
                  international standards but also the best service experience.
                </p>
                <div className="d-flex justify-content-center py-5 w-100">
                  <button className="btn btn-dark px-3 py-1  me-2 d-flex align-items-center rounded-5">
                    <div className="fs-2">
                      <FontAwesomeIcon icon={faApple} />
                    </div>
                    <div className="mx-sm-2 mx-0">
                      <span className=" fw-light text-nowrap">
                        Download on the
                      </span>
                      <h4 className="text-nowrap">App Store</h4>
                    </div>
                  </button>
                  <button className="btn btn-dark px-3 py-1  me-2 d-flex align-items-center rounded-5">
                    <div className="fs-2">
                      <FontAwesomeIcon icon={faGooglePlay} />
                    </div>
                    <div className="mx-sm-2 mx-0 ">
                      <span className=" fw-light  text-nowrap">
                        Download on the
                      </span>
                      <h4 className="text-nowrap">Google play</h4>
                    </div>
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-end   m-0">
                <img
                  src="./images/Group2.png"
                  className="img-fluid"
                  style={{
                    transform: "scale(1.1) translateY(-1%)",
                  }}
                  alt="McDonald's App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center w-100 row m-0"
        style={{ padding: "10rem 4vw" }}
      >
        <div
          className=" position-relative overflow-hidden rounded-5 d-flex justify-content-center align-items-center flex-column"
          style={{ background: "#323232", padding: "calc(4rem + 9vw) 0" }}
        >
          <img
            src="./images/products/4.png"
            alt=""
            className="position-absolute opacity-50"
            style={{ top: "7%", left: "-2%", width: "calc(4rem + 10vw)" }}
          />
          <img
            src="./images/products/5.png"
            alt=""
            className="position-absolute opacity-25"
            style={{
              bottom: "-5%",
              left: "15%",
              width: "calc(4rem + 10vw)",
            }}
          />
          <h1
            className="text-light fw-medium z-1"
            style={{ fontSize: "calc(0.4rem + 3.5vw)" }}
          >
            FIND A FOODELI STORE NEAR YOU
          </h1>
          <span
            className="text-light fw-lighter my-sm-4 my-2 h3 z-1"
            style={{ fontSize: "calc(0.3rem + 2vw)" }}
          >
            see the convenience store address with you most
          </span>
          <div className="position-relative col-xl-6 col-lg-7 col-md-8 col-11 mt-5">
            <input
              type="text"
              className="form-control w-100 rounded-5 p-3 bg-warning border-0"
              placeholder="Typing location"
              aria-label="Input"
            />
            <button
              className="btn btn-light rounded-5 position-absolute h-100 btn-lg"
              type="button"
              style={{ right: "0%", top: "0", transform: "scale(0.85)" }}
            >
              See on map
            </button>
          </div>
        </div>
      </section>
      <footer
        className="d-flex flex-row-reverse justify-content-center flex-wrap py-3"
        style={{ background: "#FFFDE6" }}
      >
        <div className=" col-lg-3 col-6">
          <h1 className="my-5">OPENING HOUR</h1>
          <ul className="list-unstyled">
            <li className="my-4">Monday - Friday: 9:00 - 23:00h</li>
            <li className="my-4">Saturday: 09:00 - 16:00h</li>
            <li className="my-4">Sunday: 12:00 - 18:00h</li>
          </ul>
        </div>
        <div className=" col-lg-3 col-6">
          <h1 className="my-5">USEFUL LINKS</h1>
          <Nav className="flex-column my-2 my-lg-0" style={{}} navbarScroll>
            <Nav.Link href="#action1">Homepage</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
            <Nav.Link href="#action3">Sale off</Nav.Link>
            <Nav.Link href="#action4">News</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center col-lg-3 col-12">
          <div className="d-flex align-items-center ">
            <img src="./images/icon.png" alt="Mc Donald’s" className="me-4" />
            <h1 className="h3 fw-bold">Mc Donald’s</h1>
          </div>
          <div className="my-5 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-3 text-secondary cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="mx-3 text-secondary cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faComment}
              className="mx-3 text-secondary cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
