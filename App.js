import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'; // Substitua pelo caminho correto do SplashScreen
import SignInScreen from './SignInScreen'; // Substitua pelo caminho correto do SignInScreen
import HomeScreen from './HomeScreen';     // Substitua pelo caminho correto do HomeScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Definindo as rotas */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Oculta o header na tela de splash
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
