import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
//import { Card } from "react-native-elements";
import { Card } from "@rneui/themed";

import Confmodal from "../Components/Confirmmodal";

export default DashBoard = () => {
  const [visible, setvisible] = useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "raju",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "yets",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "garga",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97fy",
      title: "yets",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7i",
      title: "garga",
    },
  ];

  const Item = ({ title }) => (
    <Card>
      <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider />

      <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center"}}>
        <Text style={styles.names}>{title}</Text>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setvisible(true)}
          >
            <Text style={{ color: "white" }}>Revoke</Text>
           
          </TouchableOpacity>
         <Confmodal visibility={visible}
              //passedfn={DeleteTag}
              setvisible={setvisible}
              text={"Do you want to revoke this permission?"}
              txt1={"Yes"}
              txt2={"No"}></Confmodal>
        </View>
      </View>
    </Card>
  );

  const Item2 = ({ title }) => (
    <Card style={{marginBottom:30}}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />

      <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center"}}>
        <Text style={styles.names}>{title}</Text>
       
      </View>
    </Card>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;
  const renderItem2 = ({ item }) => <Item2 title={item.title} />;
  return (
    <View style={styles.container} >
      <Text style={styles.paragraph}>Your Data is accessed by:</Text>
      <SafeAreaView style={{ alignSelf: "center", width: 300,height:250 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={{marginBottom:40,height:250,}}>
      <Text style={styles.paragraph}>Pending Requests</Text>
      <SafeAreaView style={{ alignSelf: "center", width: 300,marginBottom:10 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem2}
          
          keyExtractor={(item) => item.id}
          
        />
      </SafeAreaView>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    //padding: 8,
    //marginLeft: 10,
    marginTop: 20,
    //marginLeft: 15,
    //backgroundColor:"red",
    height:700,
    overflow:"scroll",
    paddingBottom:20,
    marginBottom:20,
  },

  paragraph: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    //
    justifyContent: "center",
    alignItems: "center",
  },
  names: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 14,
  },
  btn: { backgroundColor: "red", width: 65, padding: 9, borderRadius: 5 , marginTop: 14, },
});
