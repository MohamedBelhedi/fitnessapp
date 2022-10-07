
import React, { useState,useEffect } from 'react';
import {Text, View,TextInput,Image,Button} from 'react-native';
import { styles } from '../style/Style';




const Beine = () => {
const [text1,onChangeText1]=useState("")
const [text2,onChangeText2]=useState("")
const [text3,onChangeText3]=useState("")
const [text4,onChangeText4]=useState("")
const [rep1,setRep1]=useState("")
const [rep2,setRep2]=useState("")
const [rep3,setRep3]=useState("")
const [rep4,setRep4]=useState("")
const [gesamt,setGesamt]=useState("")
const [gesamtWiederholung,setGesamtWiederholung]=useState("")
const [titeText,setTitleText]=useState("Hallo")
const countSatz=()=>{

console.log("Hallo!")

gesamtSumme=parseInt(text1)+parseInt(text2)+parseInt(text3)

// setGesamt(Number(text1+text2+text3))
setGesamt(gesamtSumme)

}

const countreps=()=>{
  gesamtReps=parseInt(rep1)+parseInt(rep2)+parseInt(rep3)
  setGesamtWiederholung(gesamtReps)
console.log("hallo!2")

}



    return(
        <View style={styles.welcomeScreen}>
        <Text>{titeText}</Text>
        <Text>BeinPresse</Text>

        <View style={styles.row}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Satz"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        onChangeText={setRep1}
        value={rep1}
        placeholder="Wiederholung"
        keyboardType="numeric"
      />
     
      <Image
        style={styles.tinyLogo}
        source={require('../assets/fitnessbilder/Beine/Beine.jpg')}
      />
      </View>
      <Text>FrontBeuger</Text>

        <View style={styles.row}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Satz"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        onChangeText={setRep2}
        value={rep2}
        placeholder="Wiederholung"
        keyboardType="numeric"
      />
     
      <Image
        style={styles.tinyLogo}
        source={require('../assets/fitnessbilder/Beine/Beine.jpg')}
      />
      </View>
      <Text>Beinbeugerhinten</Text>

        <View style={styles.row}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Satz"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        onChangeText={setRep3}
        value={rep3}
        placeholder="Wiederholung"
        keyboardType="numeric"
      />
     
      <Image
        style={styles.tinyLogo}
        source={require('../assets/fitnessbilder/Beine/Beine.jpg')}
      />
      </View>

<Button onPress={()=>{countSatz();countreps()}} title="Gesamtübung"/>

<View>
<Text>Sätze:{gesamt}</Text>
<Text>Reps:{gesamtWiederholung}</Text>

</View>
         </View>

         
    );

};
  
export default Beine;