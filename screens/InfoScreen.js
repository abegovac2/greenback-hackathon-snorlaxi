import React from "react";
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

import ArrowRight from "../images/svg/arrow-right-svgrepo-com.svg";

const InfoScreen = ({ navigation }) => {
  const questions = require("../data/info.json");
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../images/background.jpg")}
    >
      <View>
        <Text style={styles.title}>Dodate informacije</Text>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        {questions.map((q) => (
          <View key={"v1"+q.id} style={styles.question}>
            <TouchableOpacity key={"t" +q.id}
              onPress={() =>
                navigation.navigate("Anwser", {
                  question: q,
                })
              }
              style={styles.buttonShape}
            >
              <View key={"v2" + q.id} style={styles.button}>
                <Text key={"text" + q.id} style={styles.buttonText}>
                  {q.question}
                </Text>
                <ArrowRight key={"arr" + q.id} width={15} height={15} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  title: {
    fontSize: 25,
    padding: "10%",
    paddingBottom: 0,
  },
  scrollViewStyle: {
    width: "100%",
    padding: "5%",
    paddingBottom: 0,
    marginTop: "5%",
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
  question: {
    margin: "2%",
  },
});
export default InfoScreen;
