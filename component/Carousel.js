import React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

const Carousel = () => {
  const slide = [
    {
      image: require("../assets/banner3.jpg"),
      key: "1",
    },
    {
      image: require("../assets/banner2.jpg"),
      key: "2",
    },
    {
      image: require("../assets/banner4.jpg"),
      key: "3",
    },
    {
      image: require("../assets/banner1.jpg"),
      key: "4",
    },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin:5}}>
      {slide.map((item) => (
        <View style={Styles.imageConatiner}>
          <Image source={item.image} style={Styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  image: {
    width: 400,
    height: 180,
    borderRadius:10,
    elevation:2
  },
  imageConatiner:{
    width:430,
    borderRadius:10,
    marginTop:20
  }
});
export default Carousel;
