import React from 'react';
import HomeLogin from './src/components/Home';
import styles from './src/css/styles';
import { View } from 'react-native';
import PlayScreen from './src/components/PlayScreen';

 function App() {
  return (
    
     <View style={styles.container}>
       {/* <HomeLogin/> */}
      <PlayScreen></PlayScreen>
     </View> 
      
  );
}
export default App;

