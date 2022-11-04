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
    const [input1,setInput1]=useState(0)
    const [input2,setInput2]=useState("")
    const [input3,setInput3]=useState("")
    const [input4,setInput4]=useState("")
    const [titleText,setTitleText]=useState("")
    const [trainingsEinheit,setTrainingsEinheit]=useState("Alles")
    const [running, setRunning] = useState(true);
    const [view,setView]=useState(false)
    const [counter1,setCounter1]=useState(60)
    const[color,setColor]=useState({backgroundColor:"red"})
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
        console.log("Fehler im System",e.message)
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

const clearIputs=()=>{

  setInput1("")
  setInput2("")
  setInput3("")
  setInput4("")



}    
let interval;  
      useEffect(()=>{
      

  

callTheInputs()


      },[interval])

      const CounterReps1=()=>{
        
    
    if(running){
      setView(true)
      setCounter1(counter1)
       interval=setInterval(()=>{
        let prevTime;
        setCounter1((prevTime)=>prevTime-1)
        if(prevTime===0){


          setRunning(true)


        }

        console.log("")},1000)
    }else{

      setRunning(false);
      clearInterval(interval)

    }  



    }

   const stop=()=>{
   

    clearInterval(interval)
    setRunning(false)
 

   }

    return(
        <View style={styles.container}>

    <Text>{titleText}</Text>
<Text>{
  
  counter1<0?clearInterval(interval)|setCounter1("Finish restart again"):counter1

}

</Text>

<View>

{view?
  <Button onPress={()=>{setRunning(false);setCounter1(60)}} title="Restart"/>


  :<Button onPress={CounterReps1} title="Training Counter"/>


}

</View>
        
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
        <Button onPress={()=>{clearIputs()}} title="Clear"/>
{ /* <Button onPress={()=>{stop()}} title="stop"/>*/}
        
        </View>



    )




}

export default alles;