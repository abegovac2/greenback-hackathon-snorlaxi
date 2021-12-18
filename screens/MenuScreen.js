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
import InfoIcon from "../images/svg/info-svgrepo-com.svg";
import TextIcon from "../images/svg/test-svgrepo-com.svg";

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../images/background.jpg")}
    >
      <View>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity
          style={styles.buttonShape}
          onPress={() => navigation.navigate("Explore")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pretraži moguće transakcije</Text>
            <TransactionIcon width={30} height={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonShape}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Informiši se</Text>
            <InfoIcon width={30} height={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonShape} onPress={() => navigation.navigate("Quiz")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Testiraj svoje znanje</Text>
            <TextIcon width={30} height={30} />
          </View>
        </TouchableOpacity>
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
  content: {
    width: "100%",
    height: "100%",
    flex: 1,
    margin: "10%",
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
  title: {
    fontSize: 35,
    padding: "10%",
    paddingBottom: 0,
  },
});
export default MenuScreen;
