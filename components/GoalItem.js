import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ item, handleDelete }) => {
    return (
        <View style={styles.goalItem}>
            <Text>#{item.index + 1} {item.item}</Text>
            <Text style={styles.goalDeleteItem} onPress={() => handleDelete(item.index)}>x</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    goalDeleteItem: {
        color: 'red',
        fontSize: 20
    }
})

export default GoalItem