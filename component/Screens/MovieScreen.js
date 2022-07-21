import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-native-paper";
import Movies from "../../movies/movieData";
import Backicon from "react-native-vector-icons/Ionicons";
import Favoriteicon from "react-native-vector-icons/MaterialIcons";
import { selectedMovies } from "../../redux/actions/action";

const MovieScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(Movies);
  console.log(data);
  const openMovies = (e) => {
    dispatch(selectedMovies(e))
    console.log(e)
    navigation.navigate("Details", {
      screen: "Details",
    });
  };

  // const NavHeader = () => {
  //   return (
  //     <View style={Styles.headerNav}>
  //       <TouchableOpacity onPress={() => navigation.goBack()}>
  //         <Backicon name="chevron-back-outline" color={"#fff"} size={28} />
  //       </TouchableOpacity>
  //       <Text style={Styles.titleTxt}>Movie</Text>
  //       <TouchableOpacity>
  //         <Favoriteicon name="favorite-border" size={28} color={"#fff"} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  return (
    <SafeAreaView style={{ backgroundColor: "#00004d", marginBottom: 100 }}>
      {/* <NavHeader /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between", margin: 10 }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => openMovies(item)}>
              <Card>
                <Card.Actions>
                  <Image source={item.image} style={Styles.images} />
                </Card.Actions>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  images: {
    width: 160,
    height: 200,
  },
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00004d",
    padding: 20,
    marginTop: 40,
  },
  titleTxt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  titleConatiner: {
    width: 150,
  },
});
export default MovieScreen;
