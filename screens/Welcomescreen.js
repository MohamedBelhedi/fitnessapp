import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import  React,{useState,useEffect} from 'react'
import { Card,Title,Paragraph,Button } from 'react-native-paper';
import { styles } from '../style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();




export default function Home({navigation}) {
  const [greeting,setGreeting]=useState("Hallo")
  const [btnText1,setbtnText1]=useState("ok")

const uhr=new Date().getHours()
useEffect(()=>{
  {uhr>16?setGreeting("Guten Abend viel Spaß beim training"):greeting}
  {uhr>12?setGreeting("Guten Tag viel Spaß beim training"):greeting}
  {uhr<12?setGreeting("Guten Morgen viel Spaß beim training"):greeting}



},[])
  return (
    <>
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <StatusBar style="auto" />
   
    <ScrollView>
    <View>
    <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button onPress={()=>{navigation.navigate("Beine")}}>{btnText1}</Button>
  </Card.Actions>
    </View>
    <View>
    <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
    </View>
    <View>
    <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button >{/*btnText1*/}</Button>
  </Card.Actions>
    </View>
    
    
    </ScrollView>
    
    
    </View>

    </>
  );
}


