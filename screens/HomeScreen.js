import React from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode='cover'
            source={require('../images/background.jpg')}
        >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center'
    }
})
export default HomeScreen;