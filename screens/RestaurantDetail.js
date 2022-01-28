import { View ,TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react';
const localRestaurants = [
  {
    name: "udupi upahar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
]
export default function RestaurantDetail() {
  return (
    <>
    {localRestaurants.map((restaurant,index)=>(
     <TouchableOpacity activeOpacity={1} >  
    <View 
      key={index}
      style={{ marginTop: 5, padding: 4, backgroundColor: "white" }}>
      <RestaurantImage image={restaurant.image_url}/>  
  </View>
      </TouchableOpacity>  
      ))} 
   </>
   
    
  );
}
const RestaurantImage=(props) =>(
  <>
  <Image source = {{
    uri:props.image,
  }}
  style={{width: "100%", height:130}}
  />


  </>
);
