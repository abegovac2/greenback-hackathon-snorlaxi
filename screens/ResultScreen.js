import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native'
import ResultCard from '../components/ResultCard';

const ResultScreen = () => {
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <ScrollView style={{ width: "100%", marginTop: 100, paddingLeft: 30, paddingRight: 30 }}>
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
                <ResultCard
                    amount={1000}
                    fee={5}
                    time={"2 Dana"}
                />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#28C0BE',
        backgroundColor: '#fff',
        borderRadius: 43
    }
})

export default ResultScreen;