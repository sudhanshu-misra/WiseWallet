import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './navigation/Screens';
import 'react-native-gesture-handler';
import Splash from './screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import host from './constants/host.js';
import GlobalContextProvider from './helpers/GlobalContextProvider.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMarket, setIsMarket] = useState(false);
  const [wishlistData, setWishlistData] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [fetchOrders, setFetchOrders] = useState(0);
  const [fetchProducts, setFetchProducts] = useState(0);
  const [sortType, setSortType] = useState('');
  const [filterType, setFilterType] = useState({
    category: '',
    price: '',
    programName: '',
    courseName: '',
    semester: '',
  });

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
        setProfileData(response.data.user);
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
    checkAuth();
  }, []);

  if (isLoading) {
    return <Splash />;
  } else {
    return (
      <GlobalContextProvider
        value={{
          isMarket,
          setIsMarket,
          wishlistData,
          setWishlistData,
          fetchOrders,
          setFetchOrders,
          isAuthenticated,
          setIsAuthenticated,
          profileData,
          setProfileData,
          fetchProducts,
          setFetchProducts,
          sortType,
          setSortType,
          filterType,
          setFilterType,
        }}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={isAuthenticated ? 'DrawerNav' : 'Onboarding'}>
              {isAuthenticated
                ? isMarket
                  ? Screens['MARKET'].map(Screen => (
                      <Stack.Screen
                        key={Screen.name}
                        name={Screen.name}
                        component={Screen.component}
                        options={Screen.options}
                      />
                    ))
                  : Screens['WALLET'].map(Screen => (
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
                  ))}
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </GlobalContextProvider>
    );
  }
};

export default App;
