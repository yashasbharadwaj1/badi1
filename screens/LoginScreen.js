import { View, Text ,KeyboardAvoidingView, TextInput} from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
      <View style={styles.inputContainer}>
       <TextInput
         placeholder="Email"
         style={styles.input}
         
         
         />

       <TextInput
       
       placeholder="Password"
       style={styles.input}
       secureTextEntry
       
       
       />
      
      </View>
    
    </KeyboardAvoidingView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})