import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/SearchField";
import coffees from "./config/coffees";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
       <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    padding:20,
  },
});
