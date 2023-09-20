import React from 'react';
import HomeLogin from './src/components/Home';
import styles from './src/css/styles';
import { View } from 'react-native';

 function App() {
  return (
     <View style={styles.container}>
       <HomeLogin/>
     </View> 
      
  );
}
export default App;

