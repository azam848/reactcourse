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

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisine,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "76663",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/4d2e2d5b-8ae2-434e-a852-409fed329f4c_76663.jpg",
      locality: "Ach Market",
      areaName: "Sector 72",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-22 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/subway-ach-market-sector-72-rest76663",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "177495",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
      locality: "Sector 104",
      areaName: "Hajipur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 9.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-23 05:29:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "15",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-104-hajipur-rest177495",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "42808",
      name: "Rollsking",
      cloudinaryImageId: "rpoiziw5dhc1h59y5tje",
      locality: "Sector 62",
      areaName: "Sector 62",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Rolls & Wraps", "North Indian", "Snacks"],
      avgRating: 4.3,
      parentId: "4697",
      avgRatingString: "4.3",
      totalRatingsString: "45K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-22 07:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "999",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/rollsking-sector-62-rest42808",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "523321",
      name: "Boba Chai By Chai Point",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/16/cbbd74b1-3a88-42ec-a9e5-a799f29be0f5_523321.jpg",
      locality: "Sector 73",
      areaName: "Sarfabad",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
      ],
      avgRating: 4.1,
      parentId: "312141",
      avgRatingString: "4.1",
      totalRatingsString: "24",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/boba-chai-by-chai-point-sector-73-sarfabad-rest523321",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481848",
      name: "Peppy Parathas & Rolls By Chai Point",
      cloudinaryImageId: "zzhwpyssitvcpoknzrho",
      locality: "Sector 75",
      areaName: "Sector 72",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
      ],
      avgRating: 4.7,
      parentId: "289265",
      avgRatingString: "4.7",
      totalRatingsString: "54",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/peppy-parathas-and-rolls-by-chai-point-sector-75-sector-72-rest481848",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "383492",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/a2d05bc9-d9d6-4af2-9bb9-c43be4dd9659_383492.JPG",
      locality: "Sector 73",
      areaName: "Sector 72",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.3,
      parentId: "1",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-29 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d484a69-e2b0-4c21-83a8-acf3c4d8a517",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/cafe-coffee-day-sector-73-sector-72-rest383492",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
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
