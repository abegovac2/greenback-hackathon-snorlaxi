import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import Question from '../components/Question';

const QuizScreen = ({ navigation }) => {

    const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
    const questions = [
        {
            text: "Pitanje 1",
            answers: [
                {
                    "text": "Odgovor 1",
                    "correct": false
                },
                {
                    "text": "Odgovor 2",
                    "correct": true,
                    "details": "Odgovor 2 je tacan zato sto..." /* Izbacit popup da se fino da razlog sto je ovo ovako, UI UX :)*/
                },
                {
                    "text": "Odgovor 3",
                    "correct": false,
                },
            ]
        },
        {
            text: "Pitanje 2",
            answers: [
                {
                    "text": "Odgovor 1",
                    "correct": false
                },
                {
                    "text": "Odgovor 2",
                    "correct": true,
                    "details": "Odgovor 2 je tacan zato sto..." /* Izbacit popup da se fino da razlog sto je ovo ovako, UI UX :)*/
                },
            ]
        },
    ];
    const totalQuestions = questions.length;
    const onClickAnswer = (answer) => {
        if (answer.correct) setNumOfCorrectAnswers(numOfCorrectAnswers + 1);
    }

    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <ScrollView contentContainerStyle={{ paddingTop: 30, width: "100%" }}>
                {questions.map(question => <Question key={question.text} question={question} onClickAnswer={onClickAnswer} />)}
            </ScrollView>

            {/* Sredit ovo ljepse da bude */}
            <Text>
                {(numOfCorrectAnswers / totalQuestions) * 100} %
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    }
})
export default QuizScreen;