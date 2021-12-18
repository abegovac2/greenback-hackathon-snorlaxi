import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const InfoScreen = ({ route, navigation }) => {
  const content = route.params.question;


  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../images/background.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.pill}>
          <Text style={styles.question}>{content.question}</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.anwser}>{content.anwser}</Text>
        </View>
      </View>
      <View>
        {/*console.log(JSON.stringify(content.additionalInfo))*/}
        {content.additionalInfo.map((additonal) => {
          <View key={"v1" + additonal.id}>
            {/*console.log("IF\n" + JSON.stringify(additonal))*/}
            <TouchableOpacity
              key={"v2" + additonal.id}
              style={styles.buttonShape}
            >
              <View key={"v3" + additonal.id} style={styles.button}>
                <Text key={"v4" + additonal.id} style={styles.buttonText}>
                  {additonal.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>;
        })}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: "10%",
  },
  container: { padding: 10 },
  pill: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  question: {
    fontSize: 40,
    color: "#FB2A61",
  },
  anwser: {
    fontSize: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "left",
  },
  buttonShape: {
    padding: "5%",
    paddingBottom: 0,
  },
});
export default InfoScreen;
