import { View, Text , TouchableOpacity} from 'react-native';
import React from 'react';

export default function ViewCart() {
  return (
    <View style={{ 
      flex:1,
      alignItems:"center",
      flexDirection:"row",
      position:"absolute",
      bottom:110,
      zIndex:199,
    }}>
    <View style={{ 
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",

    }}>
        <TouchableOpacity style={{
          marginTop:20,
          backgroundColor: 'black',
          alignItems: 'flex-end',
          padding:13,
          borderRadius:25,
          width:150,
          postion:"relative"
        }}>
    <Text style={{ color: "white", fontSize: 20, marginRight: 20 }}>
                View Cart
              </Text>
        </TouchableOpacity>
      
    </View>
    </View>
  );
}
