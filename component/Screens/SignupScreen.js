
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,

} from "react-native";
import { Card, TextInput, Checkbox, Button } from "react-native-paper";
import EyesOfficon from "react-native-vector-icons/Entypo";
import Eyesvisable from "react-native-vector-icons/Entypo";
import { useUserAuth } from "../../context/UserAuthContext";


  const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [visable, setVisable] = useState(false);
  const [agreed, setagreed] = useState(false);
  const [error, setEroor] = useState();

  const emailValidator = () => {
    email == "" ? setemailError("Email is Required") : setemailError("");
  };

  const passwordValidator = () => {
    password == "" ? setpasswordError("Password is Required") : setPassword("");
  };
  const togglebtn = () => {
    setVisable((perState) => !perState);
  };

  const {signUp} =  useUserAuth();

  const singupHandler = async(e) => {
    e.preventDefault()
    // navigation.navigate('login')
    setEroor("");
    setEmail("")
    setPassword('')
       try {
        await signUp(email,password);
       } catch (err) {
        setEroor(err.message)
       }
  }
  return (
    <>
      <Card style={styles.Conatiner}>
        {/* <ImageBackground
          source={require("../../assets/movies-img.jpg")}
          resizeMode="cover"
          style={styles.imageContainer}
        > */}
          <View style={styles.LogoConatiner}>
            <Image
              source={require("../../assets/e-shop.png")}
              style={styles.logoimage}
            />
          </View>
          <Card style={styles.RegisterConatiner}>
            <Text style={styles.titlextxt}>Signup</Text>
            <Text style={{color:'red'}}>{error && <Text>{error}</Text>}</Text>
            <TextInput
              value={email}
              placeholder="Enter Email"
              style={styles.InputContainer}
              placeholderTextColor={"#060642"}
              onChangeText={(text) => setEmail(text)}
              onBlur={emailValidator}
            />
            <Text style={{ color: "red", marginTop: 10 }}>{emailError}</Text>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={visable}
              style={styles.InputContainer}
              placeholderTextColor={"#060642"}
              value={password}
              name="password"
              textContentType={visable ? "text" : "password"}
              onChangeText={(text) => setPassword(text)}
              onBlur={passwordValidator}
            />
            <TouchableOpacity onPress={togglebtn} style={styles.toggleBtn}>
              {visable ? (
                <Eyesvisable name="eye-with-line" size={22} color={"gray"} />
              ) : (
                <EyesOfficon name="eye" size={22} color={"gray"} />
              )}
            </TouchableOpacity>
            <Text style={{ color: "red", marginTop: 10 }}>{passwordError}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                status={agreed ? "checked" : "unchecked"}
                onPress={() => setagreed(!agreed)}
                color={"green"}
                style={styles.checkbox}
              />
              <Text> I Accept Terms And Conditions</Text>
            </View>
            <Button
              style={{
                backgroundColor: agreed ? "#060642" : "#cccccc",
                padding: 6,
                borderRadius: 20,
                marginTop: 20,
              }}
              mode="contained"
              onPress={singupHandler}
              disabled={!agreed}
            >
              Signup
            </Button>
            <Text style={styles.singntxt}> have an account</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('login')}>
              <Text style={styles.singuptxt}>Login</Text>
            </TouchableOpacity>
            
          </Card>
        {/* </ImageBackground> */}
      </Card>
    </>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  LogoText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  LogoConatiner: {
    // width:50,
    // height:50
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 80,
  },
  logoimage: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  RegisterConatiner: {
    elevation: 5,
    padding: 30,
    flex: 1,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    marginTop:-60,
    margin:10,
    
  },
  titlextxt: {
    fontSize: 25,
    color: "#060642",
    padding: 10,
    fontWeight: "500",
  },
  InputContainer: {
    height: 28,
    borderBottomWidth: 0,
    backgroundColor: "none",
    fontSize: 14,
    marginTop: 20,
  },
  toggleBtn: {
    position: "absolute",
    right: 20,
    top: 140,
  },
  singntxt:{
    fontSize:16,
    textAlign:'center',
    marginTop:15,
    textTransform:'capitalize'
  },
  singuptxt:{
    fontSize:16,
    textAlign:'center',
    marginTop:15,
    textTransform:'capitalize'
  }
});
