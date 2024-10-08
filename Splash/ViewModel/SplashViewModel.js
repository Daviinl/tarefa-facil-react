import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

// Definindo os estados da UI que estavam no enum Swift
const SplashUIState = {
  LOADING: 'loading',
  GO_TO_SIGN_IN_SCREEN: 'goToSignInScreen',
  GO_TO_HOME_SCREEN: 'goToHomeScreen',
  ERROR: 'error',
};

const useSplashViewModel = () => {
  const [uiState, setUiState] = useState(SplashUIState.LOADING);
  const navigation = useNavigation();

  // Função para simular o comportamento do Swift 'onAppear'
  const onAppear = () => {
    setTimeout(() => {
      // Simular erro ou sucesso
      // setUiState(SplashUIState.ERROR); // Caso queira simular um erro
      setUiState(SplashUIState.GO_TO_SIGN_IN_SCREEN);
    }, 600); // 0.6 segundos, semelhante ao Swift
  };

  // Quando a tela de splash termina, navegue para SignInView
  useEffect(() => {
    if (uiState === SplashUIState.GO_TO_SIGN_IN_SCREEN) {
      navigation.replace('SignIn');
    } else if (uiState === SplashUIState.GO_TO_HOME_SCREEN) {
      navigation.replace('Home');
    }
  }, [uiState, navigation]);

  // Retornar funções de navegação que estavam no Swift
  const signInView = () => {
    navigation.navigate('SignIn');
  };

  const homeView = () => {
    navigation.navigate('Home');
  };

  return {
    uiState,
    onAppear,
    signInView,
    homeView,
  };
};

export default useSplashViewModel;
