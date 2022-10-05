
import React, { useState,useEffect } from 'react';
import {Text, View,TextInput,Image} from 'react-native';
import { styles } from '../style/Style';




const Beine = () => {
const [text,onChangeText]=useState("")


    return(
        <View style={styles.container}>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Satz"
        keyboardType="text"
      />
     
      <Image
        style={styles.tinyLogo}
        source={require('../assets/fitnessbilder/Beine/Beine.jpg')}
      />

         </View>
    );

};
  
export default Beine;