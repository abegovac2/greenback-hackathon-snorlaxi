import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import TransactionIcon from "../images/svg/product-item-transaction-svgrepo-com.svg";

const InfoScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../images/background.jpg")}
    >

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

});
export default InfoScreen;
