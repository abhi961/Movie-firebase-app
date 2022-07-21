import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Card } from "react-native-paper";
 import { useSelector, useDispatch } from "react-redux";

const Profilescreen = ({navigation}) => {
  
  const [products, setProducts] = useState([]);
  const [isLoading,setIsloading] = useState(true)

  console.log(products, "products from firebase Store*************");
  const ProductArray = [];
  const fetchProduct = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        ProductArray.push({ ...doc.data(), key: doc.id });
      });
      setProducts(ProductArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    console.log("GEt PRODUCTS:", products);
  }, []);

  const moviehandle = ()=> {
    navigation.navigate('Moviedetails',{
      screen:'Moviedetails'
    })
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#00004d", padding: 20 }}>
        <Text style={{ color: "#fff", fontSize: 20 }}>MovieList</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ marginTop: 20 }}
      >
        <View style={{ flexDirection: "row" }}>
          {products.map((pro) => {
            return (
              <TouchableOpacity
              >
                <Card style={{ margin: 10, width: 150, height: "auto" , paddingBottom:10}}>
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: pro.image }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, textAlign: "center" }}>
                      {pro.name}
                    </Text>
                  </View>
                  {/* <Image style={{width:100, height:100,}} source={{uri:imgUrl}} /> */}
                  <Text style={{ fontSize: 16, textAlign: "center" }}>
                    ₹{pro.price}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    {" "}offer Price
                    ₹{pro.offerPrice}
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilescreen;
