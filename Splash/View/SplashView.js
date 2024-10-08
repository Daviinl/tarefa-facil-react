import React, { useEffect, useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

// ViewModel simulado para estado da UI
const SplashUIState = {
  LOADING: 'loading',
  GO_TO_SIGN_IN_SCREEN: 'goToSignInScreen',
  GO_TO_HOME_SCREEN: 'goToHomeScreen',
  ERROR: 'error',
};

function SplashView({ viewModel }) {
    const [uiState, setUiState] = useState(SplashUIState.LOADING);
    const [errorMessage, setErrorMessage] = useState('');
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        viewModel.onAppear();
        setupPlayer();

        if (uiState === SplashUIState.ERROR) {
            showAlert(errorMessage);
        }
    }, [uiState]);

    // Função para configurar o vídeo (substitui o AVPlayer)
    const setupPlayer = () => {
        // Simular o término do vídeo após 5 segundos (ou use o evento onEnd do VideoPlayer)
        setTimeout(() => {
            setIsVideoPlaying(false);
            setUiState(SplashUIState.GO_TO_SIGN_IN_SCREEN);
        }, 5000);
    };

    // Alerta em React Native
    const showAlert = (message) => {
        Alert.alert(
            'Tarefa Fácil',
            message,
            [{ text: 'Sair', onPress: () => console.log('Saiu do App') }],
            { cancelable: false }
        );
    };

    // Componente principal de renderização
    return (
        <View style={styles.container}>
            {uiState === SplashUIState.LOADING && loadingView()}
            {uiState === SplashUIState.GO_TO_SIGN_IN_SCREEN && navigation.replace('SignIn')}
            {uiState === SplashUIState.GO_TO_HOME_SCREEN && navigation.replace('Home')}
            {uiState === SplashUIState.ERROR && loadingView()} {/* Também exibe o vídeo na tela de erro */}
        </View>
    );
}

// Função para exibir o vídeo de splash
const loadingView = () => {
  return (
    <Video
      source={require('./assets/splash-screen.mp4')} // Substitua pelo caminho correto do vídeo
      style={styles.backgroundVideo}
      resizeMode="cover"
      onEnd={() => console.log('Vídeo terminou')}
    />
  );
};

// Estilos para o vídeo e a view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default SplashView;
