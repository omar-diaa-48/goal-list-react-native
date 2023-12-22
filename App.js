import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [listOfGoals, setListOfGoals] = useState([]);

  const handleAddGoal = (goal) => {
    if (goal) {
      setListOfGoals((prevValue) => [...prevValue, goal])
      handleEndAddGoal();
    }
  }

  const handleStartAddGoal = () => {
    setIsModalVisible(true)
  }

  const handleEndAddGoal = () => {
    setIsModalVisible(false)
  }


  const handleDelete = (idx) => {
    setListOfGoals((prevValue) => prevValue.filter((goal, index) => index !== idx))
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add your goal' onPress={handleStartAddGoal}></Button>
      <GoalInput handleAddGoal={handleAddGoal} handleEndAddGoal={handleEndAddGoal} isVisible={isModalVisible} />
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
