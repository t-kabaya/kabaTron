import kabaTron from 'kabaTron';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const onPressSendLog = () => {
    const ipAddress = '192.168.0.32'
    kabaTron({ message: 'Hello, KabaTron!' }, `http://${ipAddress}:7777/`);
  }

  return (
    <View style={styles.container}>
      <Text onPress={onPressSendLog}>Send log</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default App;
