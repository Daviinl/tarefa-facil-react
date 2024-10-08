import React, { useState, useEffect } from 'react';

const SplashUIState = {
  LOADING: 'loading',
  GO_TO_SIGN_IN_SCREEN: 'goToSignInScreen',
  GO_TO_HOME_SCREEN: 'goToHomeScreen',
  ERROR: 'error',
};

function SplashComponent() {
    const [uiState, setUiState] = useState(SplashUIState.LOADING);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Simula a mudança de estado do splash após um tempo
        setTimeout(() => {
            // Aqui você pode substituir por lógica real, como verificação de autenticação
            const isAuthenticated = false;

            if (isAuthenticated) {
                setUiState(SplashUIState.GO_TO_HOME_SCREEN);
            } else {
                setUiState(SplashUIState.GO_TO_SIGN_IN_SCREEN);
            }
        }, 2000); // Simulando o splash por 2 segundos
    }, []);

    const handleError = (message) => {
        setErrorMessage(message);
        setUiState(SplashUIState.ERROR);
    };

    return (
        <div>
            {uiState === SplashUIState.LOADING && <p>Loading...</p>}
            {uiState === SplashUIState.GO_TO_SIGN_IN_SCREEN && <p>Redirecting to Sign In...</p>}
            {uiState === SplashUIState.GO_TO_HOME_SCREEN && <p>Redirecting to Home...</p>}
            {uiState === SplashUIState.ERROR && <p>Error: {errorMessage}</p>}
        </div>
    );
}

export default SplashComponent;
