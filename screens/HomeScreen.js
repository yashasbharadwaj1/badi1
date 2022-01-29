

import {useNavigation} from "@react-navigation/native"
import { View, Text, ScrollView, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import RestaurantDetail from "./RestaurantDetail";
import MenuItem from "../components/MenuItem";
import ViewCart from "../components/ViewCart"

export default function HomeScreen() {
 const navigation = useNavigation();
  return (
   
    <SafeAreaView>
      <ScrollView>
        
        <RestaurantDetail />
        <MenuItem  />
        <ViewCart onPress={() => navigation.navigate("cart")} title="Viewcart"  />

     
      </ScrollView>
    </SafeAreaView>
   
  );
}
