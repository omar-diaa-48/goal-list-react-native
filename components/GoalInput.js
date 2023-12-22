import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ isVisible, handleAddGoal, handleEndAddGoal }) => {
    const [goal, setGoal] = useState("")

    return (
        <Modal visible={isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your goal goes here!' value={goal} onChangeText={setGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' disabled={!goal} onPress={() => handleAddGoal(goal)} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={handleEndAddGoal} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        marginBottom: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput