import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen!</Text>
        </View>
    )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
