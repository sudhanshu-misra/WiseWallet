import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './navigation/Screens';
import 'react-native-gesture-handler';
import Splash from './screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

   console.log(isAuthenticated);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Tabs">
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          {isAuthenticated
            ? Screens['AUTHENTICATED'].map(Screen => (
                <Stack.Screen
                  key={Screen.name}
                  name={Screen.name}
                  component={Screen.component}
                  options={Screen.options}
                />
              ))
            : Screens['AUTHENTICATED'].map(Screen => (
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
