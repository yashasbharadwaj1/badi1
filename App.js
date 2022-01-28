import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import LogoutScreen from "./screens/LogoutScreen";
import RestaurantDetail from "./screens/RestaurantDetail";
import ViewCart from "./components/ViewCart";
import RestaurantItem from './components/RestaurantItem';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen options={{headerShown:false}}name="Login" component={LoginScreen} />
   <Stack.Screen name="Home" component={HomeScreen} />
   <Stack.Screen name="RestaurantDetails" component={RestaurantDetail} />
   <Stack.Screen name="cart" component={ViewCart} />
   <Stack.Screen name="Restaurants" component={RestaurantItem} />
   <Stack.Screen name="Logout" component={LogoutScreen} />
   </Stack.Navigator >
   </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
