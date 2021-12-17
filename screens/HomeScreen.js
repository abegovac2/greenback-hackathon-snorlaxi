import React from 'react'
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import UndrawTransferMoney from '../images/svg/undraw_transfer_money_rywa.svg';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <View style={{alignSelf: 'center'}}>
                <UndrawTransferMoney width={250} height={350} />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Menu")}
            >
                <Text>Započni avanturu</Text>
            </TouchableOpacity>
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
export default HomeScreen;