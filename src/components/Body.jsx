import RestaurantCard from "./RestaurantCard.jsx";
import { useState } from "react";

const Body = () => {
  const [ListofRestaurant, setListofrestaurant] = useState([
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
        avgRating: 3.9,
        parentId: "2",
        avgRatingString: "3.9",
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
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListofrestaurant(filteredList);

            console.log(ListofRestaurant);
          }}
        >
          top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurant.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
