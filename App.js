import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Content from './components/containers/content';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo(a)!</Text>
      <Content />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    margin: 20,
    marginLeft: '-110px',
    fontFamily: 'Verdana'
  }
});