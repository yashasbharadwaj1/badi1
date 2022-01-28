import { View, Text,Image,ScrollView ,StyleSheet} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
  {
   title:"biriyani",
   description:"hot and spicy",
   price:" 150 Rupees",
   image:"https://www.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_20051621.htm#query=biriyani&position=0&from_view=search",
  },
  {
    title:"masala dosa",
    description:"roasted with love",
    price:" 100 Rupees",
    image:"https://www.freepik.com/free-photo/delicious-indian-dosa-composition_17876226.htm#query=masala%20dosa&position=0&from_view=search",
  },
  {
    title:"pani puri",
    description:"food u dont wannna miss",
    price:" 60 Rupees",
    image:"https://www.freepik.com/free-photo/panipuri-fuchka-fhuchka-gupchup-golgappa-pani-ke-patake-is-type-snack-that-originated-indian-subcontinent_20648322.htm#query=pani%20puri&position=1&from_view=search",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});


export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food,index)=>(

    
    <View key={index}>
        <View style={styles.menuItemStyle}>
          <BouncyCheckbox 
            iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
            fillColor="green" />
          <FoodInfo food={food} />
          <FoodImage food={food} />
        </View>
      
      </View>
    ))}
    </ScrollView>
  );
}
const FoodInfo =(props) => (
  <View style={{width:240,justifyContent: 'space-evenly'}}>
  <Text style={styles.titleStyle}>{props.food.title}</Text>
  <Text>{props.food.description}</Text>
  <Text>{props.food.price}</Text>
  </View>
);

const FoodImage =(props) =>(
  <View>
    <Image source = {{uri: props.food.image}}   style={{
        width: 100,
        height: 100,
        borderRadius: 8,
    
      }}
       />
  </View>
);
