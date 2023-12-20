import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  const handlePress = (goal) => {
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
      <GoalInput handlePress={handlePress} />
      <View style={styles.goalsListContainer}>
        <Text>List of goals</Text>

        <FlatList data={listOfGoals} style={styles.goalsList} alwaysBounceVertical={false} renderItem={(item) => (
          <GoalItem handleDelete={handleDelete} item={item} />
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
  goalsListContainer: {
    flex: 5,
    gap: 16
  },
  goalsList: {
    paddingHorizontal: 8
  }
});
