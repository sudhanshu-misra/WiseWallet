import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './navigation/Screens';
import 'react-native-gesture-handler';
import Splash from './screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import host from './constants/config';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if (!token) {
      setIsAuthenticated(false);
      console.log('set loading to false');
      setIsLoading(false);
      return;
    }
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/user/profile`,
        config,
      );
      console.log(response.data);
      if (response.data.user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('set loading to false');
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // console.log('set loading to true');
    // setIsLoading(true);
    checkAuth();
    // console.log('set loading to false');
    // setIsLoading(false);
  }, []);
  console.log('isAuthenticated', isAuthenticated);

  if (isLoading) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            // initialRouteName="Splash"
            initialRouteName={isAuthenticated ? 'DrawerNav' : 'Onboarding'}>
            {/* <Stack.Screen name="Splash" component={Splash} /> */}
            {/* {isAuthenticated
              ? Screens['AUTHENTICATED'].map(Screen => (
                  <Stack.Screen
                    key={Screen.name}
                    name={Screen.name}
                    component={Screen.component}
                    options={Screen.options}
                  />
                ))
              : Screens['UNAUTHENTICATED'].map(Screen => (
                  <Stack.Screen
                    key={Screen.name}
                    name={Screen.name}
                    component={Screen.component}
                    options={Screen.options}
                  />
                ))} */}
            {Screens['AUTHENTICATED'].map(Screen => (
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
  }
};

export default App;
