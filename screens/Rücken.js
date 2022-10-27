
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
import React from 'react'

const Rücken = () => {
  return (
    <View>
      <Text>Rücken</Text>
    </View>
  )
}

export default Rücken