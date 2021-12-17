import React, { useEffect, useRef } from 'react'
import { Image, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            navigation.navigate("Home");
        }, 2500);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
            <Image
                source={require("../images/logo.jpg")}
                style={{ width: 250, height: 250,alignSelf: 'center', borderRadius: 50, borderWidth: 1, borderColor: '#e6e6e6' }}
            />

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
export default SplashScreen;