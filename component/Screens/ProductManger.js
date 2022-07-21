import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Card, TextInput } from "react-native-paper";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";

export default function ProductManger() {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setofferPrice] = useState("");
  const [image, setImage] = useState(null);
  //   const [uplaod, setUpload] = useState(false);

  const submitHandle = async () => {
    console.log("submit data");
    // console.log(image, "add image in firebase");

    // to do make some have value is not empty
    try {
      const mountainsRef = ref(storage, `${new Date().getTime()}.jpg`);
      console.log(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image.uri, true);
        xhr.send(null);
      });
      //   uploadBytes(storageRef, file)
      await uploadBytes(mountainsRef, blob);

      //  mountainsRef.fullPath === mountainImagesRef.fullPath;

      const docRef = await addDoc(collection(db, "products"), {
        name: pname,
        price: price,
        offerPrice: offerPrice,
        image: await getDownloadURL(mountainsRef),
      });

      // set data everything is empty

      //   console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // upload image on fireStore //
  };

  // uplaod image section //

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View style={{ backgroundColor: "#00004d", padding: 20 }}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Product Manager</Text>
      </View>

      <Card style={{ margin: 20, padding: 20 }}>
        <TextInput
          value={pname}
          onChangeText={(text) => setPname(text)}
          placeholder="Prouct Name"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          value={price}
          placeholder="Price"
          keyboardType="numeric"
          style={{ marginBottom: 10 }}
          onChangeText={(txt) => setPrice(txt)}
        />
        <TextInput
          value={offerPrice}
          placeholder="offer Price"
          onChangeText={(txt) => setofferPrice(txt)}
          keyboardType="numeric"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              marginTop: 20,
              backgroundColor: "green",
              width: 120,
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Uplaod Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={submitHandle}
            style={{
              marginTop: 20,
              backgroundColor: "green",
              width: 120,
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </SafeAreaView>
  );
}
