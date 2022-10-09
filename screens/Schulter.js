
import React, { useState,useEffect } from 'react';
import {Text, View,TextInput,Image,Button,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../style/Style';
import { db } from '../config';
import { initializeApp } from 'firebase/app';
import { 
  addDoc, 
  collection, 
  doc,
  getDoc, 
  setDoc,
  updateDoc,
 

  getDocs,

  
} from 'firebase/firestore';

const datum=JSON.stringify(new Date().getUTCDate())
const month=JSON.stringify(new Date().getUTCMonth())
const jahr=JSON.stringify(new Date().getUTCFullYear())



const Schulter = () => {
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
const [trainingsEinheit,setTEH]=useState("Schulter")

const [goal,setGoal]=useState("")
const countSatz=()=>{

console.log("Hallo!")



const gesamtSumme=parseInt(text1)+parseInt(text2)+parseInt(text3)
text1,text2,text3===NaN?Alert.alert("keine Null werte"):null



// setGesamt(Number(text1+text2+text3))
setGesamt(gesamtSumme)

}

const countreps=()=>{
  const gesamtReps=parseInt(rep1)+parseInt(rep2)+parseInt(rep3)
  setGesamtWiederholung(gesamtReps)
console.log("hallo!2")

}
const trainingFinish=async()=>{

const gesamtSatz=parseInt(text1)+parseInt(text2)+parseInt(text3)
{gesamtSatz>goal?setTitleText("Nice Workout ab nach Hause"):setTitleText(`Du hast so viel Sätze:${goal-gesamtSatz}`)}
const docRef = await setDoc(doc(db, trainingsEinheit,`${datum} ${month} ${jahr}`), {
  name: trainingsEinheit,
  datum:datum,

});

const val=`letzes mal hast du  ${trainingsEinheit}`
try {
  await AsyncStorage.setItem('training', val)
} catch (e) {
  // saving error
}




}



    return(
      <>
        <View style={styles.welcomeScreen}>
      
        <View style={styles.row}>
        <Text>Ziel:</Text>
      <TextInput
      style={styles.input}
      onChangeText={setGoal}
      value={goal}
      placeholder="Ziel"
      keyboardType="numeric"
    />
    </View>
        <Text>Seiten Heben</Text>

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
      <Text>Frontheben</Text>

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
      <Text>Kabelturm</Text>

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
<Button onPress={()=>{

trainingFinish()


}} title="Fertig"/>


         </View>
         <View style={styles.bottView}>
        <Text style={{fontSize:20}}>{titeText}</Text>

<Text >Sätze:{gesamt}</Text>
<Text>Reps:{gesamtWiederholung}</Text>

{/* entweder über eine interne APP JSON abspeichern das abgeschlosssne Training oder über Firebase und Abrufen  mit async Storage abzuspeichern*/}

</View>
</>
         
    );

};
  
export default Schulter;