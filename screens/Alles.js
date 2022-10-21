import { 
    addDoc, 
    collection, 
    doc,
    getDoc, 
    setDoc,
    updateDoc,
   
  
    getDocs,
  
    
  } from 'firebase/firestore';
  import { db } from '../config';
import React,{useEffect,useState} from "react";
import { Text,View,Button,TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../style/Style";



const alles=()=>{
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const [input3,setInput3]=useState("")
    const [input4,setInput4]=useState("")
    const [titleText,setTitleText]=useState("")
    const [trainingsEinheit,setTrainingsEinheit]=useState("Alles")
const tag=new Date().getDate()
const month=JSON.stringify(new Date().getUTCMonth()+1)
const jahr=JSON.stringify(new Date().getUTCFullYear())


const trainingFinish=async()=>{
    console.log(trainingsEinheit)
    console.log(datum_comp)
        
    const datum_comp=`${tag}.${month}.${jahr}`
      
      const gesamtSatz=parseInt(input1)+parseInt(input2)+parseInt(input3)+parseInt(input4)
    setTitleText(gesamtSatz)
      const docRef = await setDoc(doc(db, trainingsEinheit,trainingsEinheit), {
        name: trainingsEinheit,
        datum:datum_comp,
        gesamt:gesamtSatz,
       
       
      });
      const val= trainingsEinheit
      try {
        await AsyncStorage.setItem('training', val)
      } catch (e) {
        // saving error
      }
      
      
      
      
      
      }

      const saveInput=async()=>{

       

        await AsyncStorage.setItem("input1",input1)
        await AsyncStorage.setItem("input2",input2)
        await AsyncStorage.setItem("input3",input3)
        await AsyncStorage.setItem("input4",input4)




      }
      const callTheInputs=async()=>{


    const callVal1=await AsyncStorage.getItem("input1")
    const callVal2=await AsyncStorage.getItem("input2")
    const callVal3=await AsyncStorage.getItem("input3")
    const callVal4=await AsyncStorage.getItem("input4")

setInput1(callVal1)
setInput2(callVal2)
setInput3(callVal3)
setInput4(callVal4)

      }
      useEffect(()=>{


callTheInputs()

      },[])


    return(
        <View style={styles.container}>

    <Text>{titleText}</Text>

        
        <View>
        <Text>laufen</Text>
        <TextInput style={styles.input}
        onChangeText={setInput1}
        value={input1} 
        placeholder="Sätze eingeben"/>

        </View>
        <View>
        <Text>LiegeStütze/Burps</Text>
        <TextInput style={styles.input}
        onChangeText={setInput2}
        value={input2} 
        keyboardType="numeric"
        placeholder="Sätze eingeben"/>

        </View>
        <View>
        <Text>Brust/Arme</Text>
        <TextInput style={styles.input}
        onChangeText={setInput3}
        value={input3} 
        keyboardType="numeric"
        placeholder="Sätze eingeben"/>

        </View>
        <View>
        <Text>Rücken/Bauch</Text>
        <TextInput style={styles.input}
        onChangeText={setInput4}
        value={input4} 
        keyboardType="numeric"
        placeholder="Sätze eingeben"/>

        </View>
        
        <Button onPress={()=>{trainingFinish(),saveInput()}} title="Finish"/>
        
        </View>



    )




}

export default alles;