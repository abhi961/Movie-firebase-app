
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

const Moviescategory = ({navigation}) => {
  const categories = [
    {
      category: "Super Hero",
      image: require("../assets/movies/thor-love.jpg"),
    },
    {
      category: "South Indian",
      image: require("../assets/movies/south/kgf2.jpg"),
    },
    {
      category: "Cartoon",
      image: require("../assets/movies/animation/the_frog.jpg"),
    },
    {
      category: "Adventure",
      image: require("../assets/movies/adven/jungle.jpg"),
    },
    {
      category: "BollyWood",
      image: require("../assets/movies/bolly/The_Kashmir.jpg"),
    },
  ];
  const openFiler = ()=> {
   navigation.navigate('Filterscreen',{
    screen:'Filterscreen',
   })
  }
  return (
    <>
    <View>
        <Text style={Styles.categorytitletxt}> Movies category</Text>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     
      {categories.map((item) => (
        <TouchableOpacity style={Styles.categoryContainer}
        onPress={()=> navigation.navigate('Filterscreen')}
        >
          <Card style={Styles.CardConatiner}>
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={Styles.backGroungImage}
            >
              <Card.Content>
                <Text style={Styles.categoryText}>{item.category}</Text>
              </Card.Content>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  categoryText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    marginTop: 80,
    fontWeight: "bold",
    backgroundColor:'#000'
  },
  categoryContainer: {
    margin: 5,
    borderRadius:10,
   
  },
  CardConatiner: {
    width: 140,
    height: 200,
    overlayColor: "#000",
    borderRadius:10,
  },
  backGroungImage: {
    height: "100%",
  },
  categorytitletxt:{
    fontSize:18,
    fontWeight:'500',
    color:'#fff',
    margin:18
  },
  
});

export default Moviescategory;
