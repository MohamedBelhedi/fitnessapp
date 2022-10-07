import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import  React,{useState,useEffect} from 'react'
import { Card,Title,Paragraph,Button } from 'react-native-paper';
import { styles } from '../style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
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
  const [btnText1,setbtnText1]=useState("ok")
  const[recipes,setRecipes]=useState([])
  const[errorBound,setErrorBound]=useState([])
  const [loading,setLoading]=useState(false)

const uhr=new Date().getHours()
useEffect(()=>{
  {uhr>16?setGreeting("Guten Abend viel Spaß beim training"):greeting}
  {uhr>12?setGreeting("Guten Tag viel Spaß beim training"):greeting}
  {uhr<12?setGreeting("Guten Morgen viel Spaß beim training"):greeting}

fetchData()

setTimeout(()=>{

setLoading(false)


},3000)

},[])

const fetchData=async()=>{




  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    setRecipes(response.data.steps) // das bearbeiten
    // setRecipes(response.data.tags)

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
      <Text>{greeting}</Text>
      <StatusBar style="auto" />
   
    <ScrollView horizontal={true}>
    <View style={styles.row}>
    <View>
    <Card.Content style={styles.card}>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    
    <Button onPress={async()=>{
      setLoading(true)
      
       await setTimeout(()=>{

        navigation.navigate("Beine")


      },3000)
    
    }}>{btnText1}</Button>
  </Card.Actions>
    </View>
    <View>
    <Card.Content style={styles.card}>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
  <Button onPress={()=>{navigation.navigate("Beine")}}>{btnText1}</Button>
   
  </Card.Actions>
    </View>
    <View>
    <Card.Content style={styles.card} >
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
  
    <Button >{btnText1}</Button>
  </Card.Actions>
    </View>
    </View>
    
    </ScrollView>
    <Text>{errorBound}</Text>
    <ScrollView>
    <View style={styles.row}>
    <Text>Random Recipe</Text>
    {recipes.map((recipe)=>(
      <>
      <Text>{recipe}</Text>
      <Text>{recipe}</Text>
      </>
      
      ))
    
    }
 
    
    </View>

    
    
    </ScrollView>
   
    
    </View>

    </>
  );
}


