import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from './SignInScreen';  // Substitua pelo caminho correto
import HomeScreen from './HomeScreen';      // Substitua pelo caminho correto

const SplashViewRouter = () => {
  const navigation = useNavigation();

  // Função para navegar para a tela de login (SignIn)
  const makeSignInView = () => {
    navigation.navigate('SignIn');
  };

  // Função para navegar para a tela inicial (Home)
  const makeHomeView = () => {
    navigation.navigate('Home');
  };

  return {
    makeSignInView,
    makeHomeView,
  };
};

export default SplashViewRouter;
