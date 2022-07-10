import React, { useState,useEffect } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
const NotifyModel = (props) => {

    const myTimeout = setTimeout(()=>props.setvisible(false), 4000);
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={props.visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.text}</Text>
    
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



export default NotifyModel