import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { ScrollView, Text, View,TouchableHighlight,TextInput,Button } from 'react-native';
import  React,{useState,useEffect} from 'react'
import { Card,Title,Paragraph } from 'react-native-paper';
import { styles } from '../style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { db } from '../config';
import { initializeApp } from 'firebase/app';
import { doc,getDoc } from 'firebase/firestore';
const Stack = createNativeStackNavigator();

const options = {
  method: 'GET',
  url: 'https://low-carb-recipes.p.rapidapi.com/random',
  headers: {
    'X-RapidAPI-Key': '89b1d9a968msh60bd0851d8b138ep13474djsn004188407865',
    'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
  }
};




export default function Home({navigation}) {
  const [greeting,setGreeting]=useState("Hallo")
  const[lastTraining,setLasTraining]=useState("")
  const[search,setSearch]=useState("")
  const [btnText1,setbtnText1]=useState("ok")
  const[recipes,setRecipes]=useState([])
  const[errorBound,setErrorBound]=useState([])
  const [loading,setLoading]=useState(false)
  const [trainingsEinheit,setTEH]=useState("Beine")
  const[daten, setDaten]=useState([])
  const [store,setStore]=useState([])
  const [view1,setView1]=useState({backgroundColor:"black"})
  
  // ####### Datum#####################
  const datum=JSON.stringify(new Date().getUTCDate())
  const month=JSON.stringify(new Date().getUTCMonth())
  const jahr=JSON.stringify(new Date().getUTCFullYear())

  // ###########ende#################

  const trainingAufruf=async(e)=>{
  // const datum_comp=`${datum}.${month}.${jahr}`
  const saveVal=await AsyncStorage.getItem('training')
  console.log("SaveVal",saveVal)

// hier mit dem for schleifen mode nach dem traing suchen
  
    const docRef = doc(db, trainingsEinheit,saveVal);
const docSnap = await getDoc(docRef);
const aktuellDatum=JSON.stringify(new Date().getUTCDate())

// {datum_welcome_screen===aktuellDatum?setGreeting(`heute ist der ${datum_welcome_screen} und letzemal hast du${docSnap.data().name} trainiert`):setGreeting(greeting)}

// {aktuellDatum?setGreeting(store):null}

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  // setGreeting(`Das Letzte Training war ${docSnap.data().name}`)
  setTimeout(()=>{

    setDaten(docSnap.data())


  },3000)

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  setErrorBound("Nichts gefunden")
}
  
  }

const uhr=new Date().getHours()
useEffect(()=>{
  {uhr>16?setGreeting("Guten Abend viel Spaß beim training"):greeting}
  {uhr<=16?setGreeting("Guten Tag viel Spaß beim training"):greeting}
  {uhr<12?setGreeting("Guten Morgen viel Spaß beim training"):greeting}


// fetchData()

getStore()
  

setTimeout(()=>{

  trainingAufruf()



},3000)

setTimeout(()=>{

setLoading(false)


},3000)

},[])


const value =  AsyncStorage.getItem('training')


const getStore=async()=>{

  const value = await AsyncStorage.getItem('training')

  console.log(value)
  // setStore(value)

setLasTraining(value)


}

const fetchData=async()=>{




  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    // setRecipes(response.data.steps)
     // das bearbeiten
    // setRecipes(response.data.tags)
// versuche mal Firebase anzubiben mit Axios
  }).catch(function (error) {
    console.error(error);
    setErrorBound(error.message)
    
  });

}
  return (
    <>
    <View style={styles.container}>
    <Spinner
    visible={loading}
    textContent={'Loading...'}
    textStyle={styles.spinnerTextStyle}
  />
  

      <Text style={styles.überschrift}>{greeting}</Text>
      <Text style={styles.überschrift}>dein Letztes Trainig war {lastTraining}</Text>
      <StatusBar style="auto" />
   
    <ScrollView horizontal={true}>
    <View style={styles.row}>
    <View style={styles.cardDistance}>
    <Card.Content style={view1}  >
    <Title>BeinTraining</Title>
    <Paragraph>Beine Trainieren</Paragraph>
  </Card.Content>
  <TouchableHighlight onPress={async()=>{
    setView1({backgroundColor:"red"})
   
    setLoading(true)
    
     await setTimeout(()=>{
      navigation.navigate("Beine")

setLoading(false)
    },3000)
  
  }}>

  
  <Card.Cover source={require('../assets/fitnessbilder/Beine/Beine.jpg')} />
  </TouchableHighlight>
  <Card.Actions>

  </Card.Actions>
    </View>
    <View style={styles.cardDistance} >
    <Card.Content>
    <Title>Schultern</Title>
    <Paragraph>Schulter trainieren</Paragraph>
  </Card.Content>
  <TouchableHighlight onPress={async()=>{
    setLoading(true)
    setView1({})
    
    await setTimeout(()=>{
      navigation.navigate("Schulter")

setLoading(false)
   },3000)
 
    
  
  }}>
  <Card.Cover  source={require('../assets/fitnessbilder/schulter/shoulder.jpg')} />
  
  
  </TouchableHighlight>
  <Card.Actions>
  <View style={styles.btn} >

  </View>
   
  </Card.Actions>
    </View>
    <View style={styles.cardDistance} >
    <Card.Content >
    <Title>BrustTraining</Title>
    <Paragraph>Die Brust trainieren</Paragraph>
  </Card.Content>
  <TouchableHighlight onPress={async()=>{
setLoading(true)    
    await setTimeout(()=>{

      navigation.navigate("Brust")

setLoading(false)
    },3000)
  }}>
  <Card.Cover  source={require('../assets/fitnessbilder/Brust/chest.jpg')} />
  
  
  </TouchableHighlight>
  <Card.Actions>
  <View style={styles.btn} >

  </View>
   
  </Card.Actions>
    </View>
    <View style={styles.cardDistance} >
    <Card.Content >
    <Title>Alles</Title>
    <Paragraph>Alles trainieren ganz Körper</Paragraph>
  </Card.Content>
  <TouchableHighlight onPress={async()=>{
setLoading(true)    
    await setTimeout(()=>{

      navigation.navigate("Alles")

setLoading(false)
    },3000)
  }}>
  <Card.Cover  source={require('../assets/fitnessbilder/alles.jpg')} />
  
  
  </TouchableHighlight>
  <Card.Actions>
  <View style={styles.btn} >

  </View>
   
  </Card.Actions>
    </View>
    <View style={styles.cardDistance} >
    <Card.Content >
    <Title>Rücken</Title>
    <Paragraph>Rücken trainieren</Paragraph>
  </Card.Content>
  <TouchableHighlight onPress={async()=>{
setLoading(true)    
    await setTimeout(()=>{

      navigation.navigate("Rücken")

setLoading(false)
    },3000)
  }}>
  <Card.Cover  source={require('../assets/fitnessbilder/alles.jpg')} />
  
  
  </TouchableHighlight>
  <Card.Actions>
  <View style={styles.btn} >

  </View>
   
  </Card.Actions>
    </View>

    </View>
    
    </ScrollView>
    <Text>{errorBound}</Text>

 
    <ScrollView>
    
    {/*<Text>Random Recipe</Text>*/}

   {/* 
    <TextInput
    style={styles.input}
    onChangeText={setSearch}
    // onKeyPress={}
    value={search}
    placeholder="suche nach dein Gesamt trainining in der DB"
    keyboardType="text"
/>*/}
{ /*  <Text onPress={trainingAufruf} >suchen....</Text>*/}
<View style={styles.row}>
    </View>
    {!daten?<Text>Daten zu dein Letzten Training werden geladen bitte warten....</Text>:
      <Paragraph>
    
    


      <Text>
      <Text>{errorBound}</Text>
     
     
    TrainingsEinheiten: {daten.name }
   
      
      
      </Text>
      <Text> Datum: {daten.datum}</Text>

    
    
    </Paragraph>
    }

    {
      // recipes.map((recipe)=>(
      // <>
      // <Text>{recipe}</Text>
      // <Text>{recipe}</Text>
      // </>
      
      // ))
    
    }
 
    
   

    
    
    </ScrollView>

    
    </View>

    </>
  );
}


