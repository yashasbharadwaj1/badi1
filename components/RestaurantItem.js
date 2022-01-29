import {useNavigation} from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity,Button,ScrollView } from "react-native";
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
    {
      name: "hotel annapurna",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "panchami grand",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];


const RestaurantItem = () => {
  const navigation = useNavigation();

  return (
    <>
    <ScrollView>
    {localRestaurants.map((restaurant,index)=>(
     <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Home")} title="details">
         
        
    
    
    <View 
      key={index}
      style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
      <RestaurantImage image={restaurant.image_url}/>
    
      <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
  </View>
     
    
      </TouchableOpacity>  
      
      ))} 
      </ScrollView>
   </>
  );
  
}


useEffect(() => {
  setProducts(getProducts());
});
export default RestaurantItem
const RestaurantImage=(props) =>(
    <>
    <Image source = {{
      uri:props.image,
    }}
    style={{width: "100%", height:180}}
    />

  
    </>
  );
  const RestaurantInfo=(props)=>(
    <View
    style={{
      flexDirection:"row",
      justifyContent: "space-between",
      
      marginTop:10,
    }}
    >
      <View>
    <Text style={{fontSize:17,fontWeight:"bold"}}>{props.name}</Text>
    <Text style={{fontSize:15,fontWeight:"bold"}}>30-45 min</Text>
    </View>
    <View style={{backgroundColor:"#eee",height:30,width:30,
    alignItems: "center",justifyContent: "center",borderRadius:15,}}>
      <Text >{props.rating}</Text>
      </View>
   </View>
  )
  
