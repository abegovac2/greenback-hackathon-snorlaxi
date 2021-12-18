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

import TextIcon from "../images/svg/test-svgrepo-com.svg";
import CheckIcon from "../images/svg/kvakica.svg";
import ErrorIcon from "../images/svg/error-svgrepo-com.svg";
import BankIcon from "../images/svg/bank-svgrepo-com.svg";
import ArrowDownIcon from "../images/svg/arrow-down-svgrepo-com.svg";

const TransactionDetailsScreen = ({route, navigation }) => {
  const ttt = route.params;
  const info = {
    bank_name: "Temp Bank",
    selected_ammount: 1000,
    fee_proc: 2,
    fee_num: 2,
    time: "2 days",
    transparency: true,
    notes: "notes",
    coverage: "coverage",
    pickup_method: "nogama",
  };
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../images/background.jpg")}
    >
      <Text style={styles.title}>Details</Text>
      <View style={styles.container}>
        <View style={styles.transferInfo} /*slika i bih->njem*/>
          <View style={{alignContent:"center"}}>
            <BankIcon width={80} height={80} />
            <Text style={{ fontSize: 15, paddingTop: "3%", fontSize: 15 }}>
              {info.bank_name}
            </Text>
          </View>

          <View style={styles.countryNames}>
            <Text>DEU</Text>
            <ArrowDownIcon width={30} height={30} />
            <Text>BiH</Text>
          </View>
        </View>
        <View style={styles.atributeList}>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Količina</Text>
            <Text style={[styles.text, styles.textVal]}>
              {info.selected_ammount}
            </Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Naknada(%)</Text>
            <Text style={[styles.text, styles.textVal]}>{info.fee_proc}</Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Naknada(val)</Text>
            <Text style={[styles.text, styles.textVal]}>{info.fee_num}</Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Ukupna cijena</Text>
            <Text style={[styles.text, styles.textVal]}>
              {info.fee_num + info.selected_ammount}
            </Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Transparentni</Text>
            <View style={{ alignSelf: "center" }}>
              {info.transparency ? <CheckIcon /> : <ErrorIcon />}
            </View>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Ukratko o</Text>
            <Text style={[styles.text, styles.textVal]}>{info.notes}</Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Pokrivenost</Text>
            <Text style={[styles.text, styles.textVal]}>{info.coverage}</Text>
          </View>
          <View style={styles.atributes}>
            <Text style={[styles.text, styles.textAtr]}>Nacin preuzimanja</Text>
            <Text style={[styles.text, styles.textVal]}>
              {info.pickup_method}
            </Text>
          </View>
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
  title: {
    fontSize: 35,
    padding: "10%",
    paddingBottom: 0,
  },
  container: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "80%",
    flex: 0.75,
    borderRadius: 20,
  },
  atributes: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  textAtr: {
    color: "#FB2A61",
  },
  transferInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10%",
  },
  countryNames: {
    justifyContent: "center",
  },
  atributeList: {
    padding: "5%",
  },
  text: {
    padding: "2%",
  },
  textVal: {
    fontSize: 18,
  },
});
export default TransactionDetailsScreen;
