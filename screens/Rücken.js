
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


const Rücken = () => {


  const [trainingsEinheit,setEth]=useState("Rücken")
  const[input1,setInput1]=useState("")
  const[input2,setInput2]=useState("")
  const[input3,setInput3]=useState("")
  const[input4,setInput4]=useState("")
  const[titleText,setTitleText]=useState("Satz 0")

 
    

  





  const tag=new Date().getUTCDay()
  const month=new Date().getUTCMonth()
  const jahr=new Date().getUTCFullYear()

  const trainingFinish=async()=>{
    console.log(trainingsEinheit)
    console.log(datum_comp)
        
    const datum_comp=`${tag}.${month}.${jahr}`
      
      const gesamtSatz=parseInt(input1)+parseInt(input2)+parseInt(input3)+parseInt(input4)
    setTitleText(gesamtSatz)

  { gesamtSatz<12?setTitleText("minmum 12 Sätze"):
    
      await setDoc(doc(db, trainingsEinheit,trainingsEinheit), {
        name: trainingsEinheit,
        datum:datum_comp,
        gesamt:gesamtSatz,
       
       
      });}
      const val= trainingsEinheit
      try {
        await AsyncStorage.setItem('training', val)
      } catch (e) {
        console.log("Fehler im System",e.message)
      }
      
    
      
      
      
      }
  useEffect(()=>{




  },[])


  return (
    <View style={styles.container}>
      <Text>Rücken</Text>
      <Text>{titleText}</Text>
      <Text>{titleText}</Text>
    <View>
    <Text>OberRücken</Text>
    <TextInput 
    style={styles.input}
   keyboardType="numeric"
    
    onChangeText={setInput1}
    value={input1}
    placeholder="Satz"
    />
    
    </View>
    <View>
    <Text>MittelRücken/Rudern</Text>
    <TextInput 
    style={styles.input}
    keyboardType="numeric"
   
    onChangeText={setInput2}
    value={input2}
    placeholder="Satz"
    />
    
    </View>
    <View>
    <Text>UnterRücken</Text>
    <TextInput
    style={styles.input} 
   keyboardType="numeric"
    onChangeText={setInput3}
    value={input3}
    placeholder="Satz"
    />
    
    </View>
    <View>
    <Text>Arme</Text>
    <TextInput
    style={styles.input} 
    keyboardType="numeric"
  
    onChangeText={setInput4}
    value={input4}
    placeholder="Satz"
    />
    
    </View>

<Button onPress={trainingFinish} title="Finish"/>


    </View>
  )
}

export default Rücken