import React from "react";
import ReactDOM from "react-dom/client";

/* *
 *header
 *logo
 *nav-item
 *body
 *search
 *restaurant-conainer
 *restaurant-card
 *img
 *name of restaurant,star rating ,cuisine,delivery time
 *footer
 *- -copyright
 *- -link
 *- -adress
 *- -contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us </li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/08bed38c-b2df-4778-bb45-431ea2198d75_485420.JPG"
      />
      <h3> zayka </h3>
      <h4>biryani,north indian,asian</h4>
      <h4>4.4 star</h4>
      <h4>38 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />

      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
