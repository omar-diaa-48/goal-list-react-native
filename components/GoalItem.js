import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ item, handleDelete }) => {
    return (
        <View style={styles.goalItem}>
            <Text>#{item.index + 1} {item.item}</Text>
            <Pressable onPress={() => handleDelete(item.index)}>
                <Text style={styles.goalDeleteItem}>x</Text>
            </Pressable>
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