import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
}

function DetalleScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Soy Detalle </Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Detalle')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"    component={HomeScreen} />
        <Stack.Screen name="Detalle" component={DetalleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;