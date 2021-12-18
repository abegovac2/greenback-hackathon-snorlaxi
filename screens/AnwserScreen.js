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

import TransactionIcon from "../images/svg/product-item-transaction-svgrepo-com.svg";

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
  container:{padding: 10},
  pill: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  question:{
      fontSize: 40,
      color: "#FB2A61",
  },
  anwser:{
    fontSize: 20
  }
});
export default InfoScreen;
