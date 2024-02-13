import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './navigation/Screens';
import 'react-native-gesture-handler';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Splash'}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          {Screens['UNAUTHENTICATED'].map(Screen => (
            <Stack.Screen
              key={Screen.name}
              name={Screen.name}
              component={Screen.component}
              options={Screen.options}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
