import React, { useState, useEffect } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native';

const Question = ({ question, onClickAnswer }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [primaryActive, setPrimaryActive] = useState(true);
    const [answered, setAnswered] = useState(false);
    const [colors, setColors] = useState(
        new Array(question.answers.length ?? 0).fill({ primaryBgColor: '#fff', secondaryBgColor: '#fff' })
    );


    useEffect(() => {
        let tempColors = new Array(question.answers.length ?? 0).fill('');
        question.answers.forEach(q => {
            let primaryBgColor = '#fff';
            let secondaryBgColor = q.correct ? '#93FF3E' : '#FF4444';

            tempColors.push({ primaryBgColor, secondaryBgColor });
        });
        tempColors = tempColors.filter(el => el !== "");
        setColors([...tempColors]);

    }, []);

    const onPress = (answer) => {
        if (!answered) {
            setPrimaryActive(false);
            onClickAnswer(answer);
            setAnswered(true);
            if (!answer.correct) setModalVisible(true);
        }
    }
    const correctAnswer = question.answers.filter(a => a.correct);
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                style={{ flex: 1 }}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                {correctAnswer.map(ca => <Text key={ca.details}>{ca.details}</Text>)}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text>Zatvori</Text>
                </TouchableOpacity>
            </Modal>
            <Text style={{ padding: 20, backgroundColor: '#fff', margin: 20, borderRadius: 10, borderWidth: 1 }}>{question.text}</Text>
            {question.answers.map((answer, i) =>
                <Text
                    key={question.text + i + primaryActive}
                    style={{ padding: 15, backgroundColor: primaryActive ? colors[i].primaryBgColor : colors[i].secondaryBgColor, marginLeft: 30, marginRight: 20, marginBottom: 5, borderRadius: 10, borderWidth: 1 }}
                    onPress={() => onPress(answer)}
                >
                    {answer.text}
                </Text>
            )
            }
        </View >
    )

}

export default Question;