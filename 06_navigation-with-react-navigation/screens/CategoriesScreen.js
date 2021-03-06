import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList,
    TouchableOpacity 
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const renderGridItem = (itemData) => {
    return (
        <TouchableOpacity style={styles.gridItem}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const CategoriesScreen = (props) => {
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})
