import React from "react";
import ReactDOM from "react-dom/client";
// import * as XYZ from "./components/Header";
import { Title } from "./components/Header";
import Header from "./components/Header";
/*
    Header
     - Logo
     - NavItem(Right Side)
     - Cart
    Body
      - Search Bar
      - Restaurant List
        - Restaurant Card
          -Image
          -Name
          -Rating
          -Cusinies
    Footer
      - Links
      - CopyRight
     */


//Config Driven UI
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offername: "50% off ",
//       },
//       {
//         offername: "No Delivery Charge ",
//       },
//     ],
//   },
//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "Burger King",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b1nbyfvq3wbrcpzbqpmu",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//     ],
//   }
// ];
const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "65085",
      "name": "Mughal Zaika Aminabad",
      "uuid": "4cb63a38-b2d1-465f-bb1d-6a51fd5237f8",
      "city": "15",
      "area": "Aminabad",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "yood4aumr1wbxed1odxk",
      "cuisines": [
        "Mughlai"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "mughal-zaika-aminabad-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "Naaz Cinema Road, AminabadMarket, Aminabad, Lucknow",
      "locality": "Aminabadmarket",
      "parentId": 140984,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5730638~p=1~eid=00000185-b1b1-b54e-3ba8-963500b80167",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "65085",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "231204",
      "name": "Burger King",
      "uuid": "42703785-8706-4834-9459-cbfeeeff451b",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "b1nbyfvq3wbrcpzbqpmu",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "burger-king-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "Burger King, Limited Ground floor Sahu Theater Building,Hazratganj Lucknow 226001",
      "locality": "Sahu Cinemax",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "231204",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "60240",
      "name": "Pizza Hut",
      "uuid": "468e0627-2bd1-494f-b0cc-f33eec698ae8",
      "city": "15",
      "area": "The Mall Avenue",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "exd0x5wjdxovdwbnfqiz",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "pizza-hut-governer-house-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "91 M.G. Marg Opp Governer House, Hazratganj, Lucknow 226001",
      "locality": "Governer House",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "60240",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "424623",
      "name": "The kalika Hut",
      "uuid": "c00c99b8-da0a-4f6e-8569-fec5e14fa34b",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "qmewcacsigu7fsh7xtni",
      "cuisines": [
        "Desserts",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "the-kalika-hut-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "Shop no 5 Near K D Singh Babu Stadium Hazratganj lucknow.226001",
      "locality": "Near K D Singh",
      "parentId": 4848,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5730642~p=7~eid=00000185-b1b1-b54e-3ba8-963700b8075a",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "424623",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "213869",
      "name": "Pocket Bites",
      "uuid": "0b449580-66d8-430c-95d3-eac327bcf3ce",
      "city": "15",
      "area": "Lucknow",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "vmnmq2dtcvztaw7gswmi",
      "cuisines": [
        "Chinese",
        "Snacks",
        "Biryani",
        "North Indian",
        "Desserts",
        "Lucknowi"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "pocket-bites-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "41/591, Seth Ramjas Road, Tarikhana, Narhi, Hazratganj, Lucknow, Uttar Pradesh, India",
      "locality": "Hazratganj",
      "parentId": 373820,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "213869",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "453646",
      "name": "SNACKS & SHAKES",
      "uuid": "c898d04d-7e4d-4aff-bb69-a849aedd917b",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "c3y4gwdmnbqrfhvnqjxi",
      "cuisines": [
        "Snacks",
        "Chinese",
        "Desserts"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "snacks-&-shakes-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "41/591 SETH RAM JAD ROAD LUCKNOW",
      "locality": "Seth Ram Jad Road",
      "parentId": 190225,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "453646",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.4",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "89361",
      "name": "La Pino'z Pizza",
      "uuid": "a23c86ec-1945-49f0-b7be-cf53e2ea052c",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "dek7ifvgfbnddngpqn4r",
      "cuisines": [
        "Pizzas",
        "Italian"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "la-pinoz-pizza-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "6, Sapru Marg, Hazratganj, Lucknow",
      "locality": "Sapru Marg",
      "parentId": 4961,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "89361",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "141379",
      "name": "Burger point",
      "uuid": "4f8caa81-81ee-43d0-9c04-13dafefe853f",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "siez5v7u2ja3h6ab6gnw",
      "cuisines": [
        "Snacks",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "burger-point-nawal-kishore-road-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "Burger Point BM Plaza Nawal Kishore Road Hazratganj",
      "locality": "Nawal Kishore Road",
      "parentId": 168,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "141379",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "82387",
      "name": "Red Dragon (Chopstix)",
      "uuid": "f8fb93a9-9e43-4294-a5b5-ec8269b99ef5",
      "city": "15",
      "area": "Mahanagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "f6etwqizmuaxxe21vxmu",
      "cuisines": [
        "Chinese",
        "Arabian"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 3.9000000953674316,
      "slugs": {
        "restaurant": "red-dragon-chopstick-aliganj-aliganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "B-749, Sector - C, Mahanagar, Next to SBI",
      "locality": "Sector C",
      "parentId": 168369,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5730657~p=10~eid=00000185-b1b1-b54e-3ba8-963800b80a15",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "82387",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 3.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "59201",
      "name": "Rollarappaa",
      "uuid": "b2c1da17-6151-4000-ac1f-5b7efbefc18c",
      "city": "15",
      "area": "Vishal Khand",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "f0ieeg6imomvqxvd0m5x",
      "cuisines": [
        "Street Food",
        "Indian",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 5.800000190734863,
      "slugs": {
        "restaurant": "rollarappaa-episode-03-gomti-nagar-gomti-nagar",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "1/1155, Vishal Khand, Near St. Joseph Hospital, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      "locality": "Mithaiwala Chauraha",
      "parentId": 6263,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5694364~p=19~eid=00000185-b1b1-b54e-3ba8-963b00b8130a",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "59201",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "517970",
      "name": "Hungry Kya",
      "uuid": "3ebbb28f-060b-4507-82c5-d8f46ff3014c",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "qtda3vuvwmzjyms9gfi4",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "hungry-kya-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "41/591 SETH RAM JAS ROAD HAZRATGANJ LUCKNOW  226001",
      "locality": "Seth Ram Jas Road",
      "parentId": 104763,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "517970",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "59654",
      "name": "Subway",
      "uuid": "50a31a98-fa92-4a7b-84ff-adbf0eea1fde",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "l6wwmtxza0muuwxsde91",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "subway-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "6, Sapru Marg, Hazratganj, Lucknow",
      "locality": "Sapru Marg",
      "parentId": 2,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5729450~p=13~eid=00000185-b1b1-b54e-3ba8-963900b80d1f",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "59654",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "482623",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "86b0f42f-412c-4e36-883c-c25472cd3339",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "kvyfk7rtq0fbnziynffg",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "kwality-wall’s-frozen-dessert-&-ice-cream-shop-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "GOLDI ICE CREAM: SHOP NO-1 NEW MARKET HAZRATGANJ LUCKNOW, Nagar Nigam Food Safety Zone-2, Lucknow, Uttar Pradesh-226001 (HUL- I370915P592)",
      "locality": "Nagar Nigam Food Safety Zone-2",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "482623",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "63376",
      "name": "Keventers - Milkshakes & Desserts",
      "uuid": "958e4510-0326-4d69-80df-2ec6e7caf537",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "416741409e6766000c32447336e341e7",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Healthy Food"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "keventers-sas-house-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "ATM 6B, Sas House, Sapru Marg Hazratganj,Lucknow 226001",
      "locality": "Sas House",
      "parentId": 268997,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "63376",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "333677",
      "name": "Wat-a-Burger! - India ka Burger",
      "uuid": "11f76154-1397-4df0-a744-c408847f9390",
      "city": "15",
      "area": "Hazratganj",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "nnc0k18liyz59xlz2a9z",
      "cuisines": [
        "American",
        "Indian",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "wat-a-burger-hazratganj-hazratganj",
        "city": "lucknow"
      },
      "cityState": "15",
      "address": "NEW MARKET, SHOP NO. 4, NEAR MULTI LEVEL PARKING, HAZRATGANJ, LUCKNOW, Lucknow, Uttar Pradesh, 226006",
      "locality": "Near Multi Level Parking",
      "parentId": 384458,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "333677",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  }
];
//Destructing 
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.data;
  return (
    <div className="card">
      <img alt="swiggy" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

//props- properties eg: restaurant={restaurantList[0]}
//name = {restaurantList[0].data.name}
//cuisines = {restaurantList[0].data.cuisines}
//instead of using imndividual props you use 
//{...restaurantList[0].data}
// no key <<< index key(ok way) << unique key (best practice)
const Body = () => {
  return (
    <>

      <div className="restaurant-list">
        {
          restaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })
        }

        {/* map instead of all these */
        /* <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} />
        <RestaurantCard {...restaurantList[6].data} />
        <RestaurantCard {...restaurantList[7].data} />
        <RestaurantCard {...restaurantList[8].data} />
        <RestaurantCard {...restaurantList[9].data} />
        <RestaurantCard {...restaurantList[10].data} />
        <RestaurantCard {...restaurantList[11].data} />
        <RestaurantCard {...restaurantList[12].data} />
        <RestaurantCard {...restaurantList[13].data} />
        <RestaurantCard {...restaurantList[14].data} /> */}
      </div>
    </>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
//Either use   <> or <React.Fragment>
const AppLayout = () => {
  return (
    <>
      {/* <XYZ.Header /> */}
      <Header/>
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
