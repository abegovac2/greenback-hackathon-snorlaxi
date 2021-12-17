import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ResultCard = ({ amount, fee, time, showDetails }) => {
    return (
        <TouchableOpacity onPress={showDetails} style={styles.view}>
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
                <Text>
                    <Text style={{ color: '#FB2A61' }}>Ukupan iznos:</Text> {amount*(1-fee/100)}
                </Text>
            </View>
        </TouchableOpacity>
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
