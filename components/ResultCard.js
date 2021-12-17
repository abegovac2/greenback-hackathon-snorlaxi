import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ResultScreen from '../screens/ResultScreen'

const ResultCard = ({ amount, fee, time }) => {
    return (
        <View style={styles.view}>
            <View style={styles.viewNested}>
                <Text>
                    DEU -{'>'} BIH
                </Text>
                <Text>
                    <Text style={{ color: '#FB2A61' }}>Iznos:</Text> {amount}
                </Text>
                <Text>
                    <Text style={{ color: '#FB2A61' }}>Porez:</Text> {fee}%
                </Text>
                <Text>
                    <Text style={{ color: '#FB2A61' }}>Vrijeme:</Text> {time}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
        width: '100%',
        borderRadius: 15,
        padding: 20,
        marginBottom: 30
    },
    viewNested: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})

export default ResultCard;
