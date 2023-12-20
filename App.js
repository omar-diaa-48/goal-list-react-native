import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState("")
  const [listOfGoals, setListOfGoals] = useState([]);

  const handlePress = () => {
    if (goal) {
      setListOfGoals((prevValue) => [...prevValue, goal])
      // handleResetInput();
    }
  }

  const handleDelete = (idx) => {
    setListOfGoals((prevValue) => prevValue.filter((goal, index) => index !== idx))
  }

  const handleResetInput = () => {
    setGoal("")
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goal goes here!' value={goal} onChangeText={setGoal} />
        <Button title='Add Goal' disabled={!goal} onPress={handlePress} />
      </View>
      <View style={styles.goalsListContainer}>
        <Text>List of goals</Text>

        <FlatList data={listOfGoals} style={styles.goalsList} alwaysBounceVertical={false} renderItem={(item) => (
          <View style={styles.goalItem}>
            <Text>#{item.index + 1} {item.item}</Text>
            <Text style={styles.goalDeleteItem} onPress={() => handleDelete(item.index)}>x</Text>
          </View>
        )}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1
  },
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
  goalsListContainer: {
    flex: 5,
    gap: 16
  },
  goalsList: {
    paddingHorizontal: 8
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  goalDeleteItem: {
    color: 'red',
    fontSize: 20
  }
});
