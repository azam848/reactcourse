import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

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
