import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Picker } from "@react-native-picker/picker";
import  NotifyModel  from "../Components/NotifyModel";
// You can import from local files
//import { Button } from "react-native-elements";
//import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
//import LinearGradient from "react-native-linear-gradient";

export default function ContactDoc() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [visible, setvisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Speciality</Text>

      <View style={styles.inputPicker}>
        <Picker
          selectedValue={selectedLanguage}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Paediatrics" value="Pediatrics" />
          <Picker.Item label="Orthopedics" value="Orthopedics" />
          <Picker.Item label="ENT" value="ENT" />
          <Picker.Item label="Radiology" value="Radiology" />
        </Picker>
      </View>
      <Text style={styles.paragraph}>Brief Description</Text>
      <TextInput style={styles.desc}></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>setvisible(true)}
      >
        <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
          Submit
        </Text>
      </TouchableOpacity>
      <NotifyModel
      visibility={visible}
        setvisible={setvisible}
        text={"Your request has been submitted"}
      ></NotifyModel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-start",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    //padding: 8,
    margin: 30,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPicker: {
    borderColor: "#808080",
    borderWidth: 1,
    borderWidth: 1,
  },
  desc: {
    height: 100,
    // margin: 10,
    marginTop: 5,
    borderWidth: 1,
    padding: 1,
  },
  btn: {
    width: "10",
    justifyContent: "center",
    // alignItems:"center",
    //flexDirection:"row",
    //flex:1,
    //maxWidth:20,
  },
  button: {
    //alignItems: "center",
    backgroundColor: "#2ab576",
    padding: 10,
    width: 100,
    borderRadius: 5,
    justifySelf: "center",
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
});
