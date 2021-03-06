import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen!</Text>
            <Button title="Go to Details!" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }} />
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
