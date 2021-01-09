import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
