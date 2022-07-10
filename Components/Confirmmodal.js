import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const Confmodal = (props) => {
  let confirmfunc = () => {
    props.setvisible(false);

    props.passedfn();
  };
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={props.visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.text}</Text>
            <View style={styles.buttonRow}>
              <Button
                buttonStyle={{ width: 70, height: 35, borderColor: "black" }}
                containerStyle={{ margin: 5 }}
                disabledStyle={{
                  borderWidth: 0,
                }}
                disabledTitleStyle={{
                  color: "grey",
                }}
                onPress={() => props.setvisible(false)}
                linearGradientProps={null}
                loadingProps={{ animating: true }}
                loadingStyle={{}}
                title={props.txt2}
                titleProps={{}}
                titleStyle={{
                  marginHorizontal: 5,
                  color: "#1D1E26",
                  //fontFamily: "Mulish",
                  fontSize: 15,
                }}
                type="outline"
              />
              <Button
                buttonStyle={{
                  width: 70,
                  backgroundColor: "#22d667",
                  height: 35,
                }}
                containerStyle={{ margin: 5 }}
                disabledStyle={{
                  backgroundColor: "#302444",
                  color: "#E1E4E8",
                }}
                disabledTitleStyle={{
                  color: "grey",
                }}
                linearGradientProps={null}
                iconContainerStyle={{ backgroundColor: "red" }}
                loadingProps={{ animating: true }}
                loadingStyle={{}}
                onPress={() => confirmfunc()}
                title={props.txt1}
                titleProps={{}}
                titleStyle={{
                  marginHorizontal: 5,
                  //fontFamily: "Mulish",
                  fontSize: 15,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  buttonRow: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalView: {
    width: "70%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    //fontFamily: "Mulish",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Confmodal;
