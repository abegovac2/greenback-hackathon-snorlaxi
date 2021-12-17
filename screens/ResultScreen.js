import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native'
import ResultCard from '../components/ResultCard';

const ResultScreen = ({route, navigation}) => {

    const {transferValue} = route.params;
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <ScrollView style={{ width: "100%", marginTop: 100, paddingLeft: 30, paddingRight: 30 }}>
                <ResultCard
                    amount={transferValue}
                    fee={1}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
                />
                <ResultCard
                    amount={transferValue}
                    fee={2}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
                />
                <ResultCard
                    amount={transferValue}
                    fee={3}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
                />
                <ResultCard
                    amount={transferValue}
                    fee={4}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
                />
                <ResultCard
                    amount={transferValue}
                    fee={5}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
                />
                <ResultCard
                    amount={transferValue}
                    fee={6}
                    time={"2 Dana"}
                    showDetails={() => navigation.navigate("TransactionDetalis")}
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