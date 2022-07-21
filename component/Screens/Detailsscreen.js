import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import Backicon from "react-native-vector-icons/Ionicons";
import Favoriteicon from "react-native-vector-icons/MaterialIcons";
import { Card } from "react-native-paper";
import Satricon from "react-native-vector-icons/AntDesign";
import Movies from "../../movies/movieData";

const Detailsscreen = ({ navigation }) => {
  const movie = useSelector((state) => state.MovieReducer);
  console.log("CartsItem:", movie);

  const NavHeader = () => {
    return (
      <View style={Styles.headerNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backicon name="chevron-back-outline" color={"#fff"} size={28} />
        </TouchableOpacity>
        <Text style={Styles.titleTxt}>Details</Text>
        <TouchableOpacity>
          <Favoriteicon name="favorite-border" size={28} color={"#fff"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00004d" }}>
      <NavHeader />
      <ScrollView style={{ backgroundColor: "#00004d" }}>
        <View style={Styles.imageContainer}>
          <Image
            source={movie.image}
            style={Styles.cardimages}
            resizeMode="contain"
          />
        </View>

        <View style={Styles.Detailscontainer}>
          <Text style={Styles.textContainer}>{movie.tile}</Text>
          <View style={Styles.genContainer}>
            <Text style={Styles.movietypetxt}>{movie.movietype}</Text>
            <Text style={Styles.durationConatiner}>
              Duration: {movie.duration}
            </Text>
          </View>
          <Text style={Styles.ratingContainer}>
            Rating: ({movie.rating})
            <Satricon name="star" size={16} color={"yellow"} />
          </Text>
          <Text style={Styles.tyeContainer}>{movie.genre}</Text>
          <View>
            <Text style={Styles.descContainer}>{movie.desc}</Text>
          </View>
        </View>
        <Text style={Styles.starCastTxt}>Star Cast</Text>
        <View style={Styles.castContainer}>
          <View style={Styles.castdetails}>
            <Image source={movie.cast[0].castpic} style={Styles.castImage} />
            <Text style={Styles.castName}>{movie.cast[0].name}</Text>
          </View>

          <View style={Styles.castdetails}>
            <Image source={movie.cast[1].castpic} style={Styles.castImage} />
            <Text style={Styles.castName}>{movie.cast[1].name}</Text>
          </View>

          <View style={Styles.castdetails}>
            <Image source={movie.cast[2].castpic} style={Styles.castImage} />
            <Text style={Styles.castName}>{movie.cast[2].name}</Text>
          </View>
        </View>
        <View style={Styles.cast1Container}>
         <View style={Styles.castdetails}>
            <Image source={movie.cast[3].castpic} style={Styles.castImage} />
            <Text style={Styles.castName}>{movie.cast[3].name}</Text>
          </View>

          <View style={Styles.castdetails1}>
            <Image source={movie.cast[4].castpic} style={Styles.castImage} />
            <Text style={Styles.castName}>{movie.cast[4].name}</Text>
          </View>
         </View>
          <Text style={Styles.directorTxt}>Director </Text>
          <Image source={movie.cast[5].castpic} style={Styles.directortImage}  />
          <Text style={Styles.directorName}>{movie.cast[5].name}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#00004d",
    padding: 20,
    marginTop: 40,
  },
  titleTxt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },

  cardimages: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 390,
    height: 500,
    justifyContent: "center",
  },
  Detailscontainer: {
    margin: 20,
    marginTop: 10,
  },
  movietypetxt: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    width: 85,
    textAlign: "center",
    padding: 8,
    marginVertical: 10,
  },
  genContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  durationConatiner: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    width: 150,
    textAlign: "center",
    padding: 8,
    marginLeft: 10,
  },
  ratingContainer: {
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "400",
    marginTop: 8,
  },
  descContainer: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 18,
    marginVertical: 8,
    lineHeight: 30,
    letterSpacing: 0.5,
  },
  tyeContainer: {
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    fontSize: 16,
    width: 180,
    padding: 8,
    textAlign: "center",
    borderRadius: 60,
    marginVertical: 20,
  },
  castContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  starCastTxt: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "500",
    marginLeft: 20,
  },
  castName: {
    color: "#fff",
    marginVertical: 15,
    textAlign: "center",
  },
  cast1Container: {
    flexDirection: "row",
    margin:20,
  },
  castdetails1:{
    marginLeft:60,
  },
  directorTxt:{
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "500",
    marginLeft: 20,
    color:'#fff'
  },
  directortImage:{
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft:20,
  },
  directorName:{
    color: "#fff",
    marginVertical: 15,
    marginLeft:20,
  }
});

export default Detailsscreen;
