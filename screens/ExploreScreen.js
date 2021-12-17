import React, { useState } from 'react'
import { StyleSheet, ImageBackground, TextInput, View, TouchableOpacity, Text } from 'react-native';
import SearchSvg from '../images/svg/search-svgrepo-com.svg';

const ExploreScreen = () => {

    const [countries, setCountries] = useState(["NJEMAČKA", "BOSNA I HERCEGOVINA"]);
    const [transferValue, setTransferValue] = useState(0);
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <TextInput
                value={countries[0]}
                style={styles.textInput}
            />
            <TextInput
                value={countries[1]}
                style={styles.textInput}
            />
            <TextInput
                style={styles.numericInput}
                keyboardType="numeric"
                value={Number(transferValue)}
                onChangeText={(v) => setTransferValue(v)}
                placeholder='UNESITE IZNOS (BAM)'
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Menu")}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    PRETRAGA
                </Text>
                <SearchSvg width={40} height={40} />
            </TouchableOpacity>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        marginTop: 100,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#28C0BE',
        backgroundColor: '#fff',
        borderRadius: 29,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    textInput: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#28C0BE',
        backgroundColor: '#fff',
        borderRadius: 15,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    numericInput: {
        alignItems: "center",
        backgroundColor: "#FB2A61",
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        backgroundColor: '#FB2A61',
        borderRadius: 15,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        color: '#FFF'
    },
    inputView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ExploreScreen;