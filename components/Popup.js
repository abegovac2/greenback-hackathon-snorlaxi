import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const Popup = ({ question, onClickAnswer }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [primaryActive, setPrimaryActive] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [colors, setColors] = useState(
    new Array(question.answers.length ?? 0).fill({
      primaryBgColor: "#fff",
      secondaryBgColor: "#fff",
    })
  );

  useEffect(() => {
    let tempColors = new Array(question.answers.length ?? 0).fill("");
    question.answers.forEach((q) => {
      let primaryBgColor = "#fff";
      let secondaryBgColor = q.correct ? "#93FF3E" : "#FF4444";

      tempColors.push({ primaryBgColor, secondaryBgColor });
    });
    tempColors = tempColors.filter((el) => el !== "");
    setColors([...tempColors]);
  }, []);

  const onPress = (answer) => {
    if (!answered) {
      setPrimaryActive(false);
      onClickAnswer(answer);
      setAnswered(true);
      if (!answer.correct) setModalVisible(true);
    }
  };
  const correctAnswer = question.answers.filter((a) => a.correct);
  return (
    <View style={styles.whyWindow}>
      
      <Text
        style={{
          padding: 20,
          backgroundColor: "#fff",
          margin: 20,
          borderRadius: 10,
          borderWidth: 1,
        }}
      >
        {question.text}
      </Text>
      {question.answers.map((answer, i) => (
        <Text
          key={question.text + i + primaryActive}
          style={[
            styles.textSyle,
            {
              backgroundColor: primaryActive
                ? colors[i].primaryBgColor
                : colors[i].secondaryBgColor,
            },
          ]}
          onPress={() => onPress(answer)}
        >
          {answer.text}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {},
  textSyle: {
    padding: 15,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  back: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "gray",
  },
  modalCont: {
    backgroundColor: "white",
    flex: 0.5,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1%",
  },
  title: {
    fontSize: 30,
  },
});

export default Popup;
