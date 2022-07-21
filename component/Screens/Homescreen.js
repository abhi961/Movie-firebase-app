import React,{useState} from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet,Dimensions} from 'react-native'
import { Searchbar } from 'react-native-paper'
import Carousel from '../Carousel';
import Moviescategory from '../Moviescategory';
import MovieScreen from './MovieScreen';
import Profilescreen from './Profilescreen';

const Homescreen = () => {
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchHandler = (ele) => {
      setSearchQuery(ele)
  }
  return (
  <>
   <ScrollView style={styles.container}>
   <Searchbar
      placeholder="Search"
      onChangeText={searchHandler}
      value={searchQuery}
      style={styles.serachContainer}
    />
    <Carousel/>
  <Profilescreen />
   </ScrollView>
  </>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:'#00004d'
  },
  serachContainer:{
  borderWidth:1,
    marginTop:50,
    marginHorizontal:10,
    height:45,
    borderRadius:50,
  }
})

export default Homescreen