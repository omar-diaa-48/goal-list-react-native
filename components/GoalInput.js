import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ handlePress }) => {
    const [goal, setGoal] = useState("")

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your goal goes here!' value={goal} onChangeText={setGoal} />
            <Button title='Add Goal' disabled={!goal} onPress={() => handlePress(goal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 24,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        gap: 8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8
    },
})

export default GoalInput