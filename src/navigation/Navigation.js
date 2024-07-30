// src/navigation/Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSliderComponent from '../components/AppIntroSlider';
import PontosScreen from '../screens/PontosScreen';
import CadastroScreen from '../screens/CadastroScreen';
import SustentabilidadeScreen from '../screens/SustentabilidadeScreen';
import EquipeScreen from '../screens/EquipeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroSlider">
        <Stack.Screen name="IntroSlider" component={AppIntroSliderComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Pontos" component={PontosScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Saiba" component={SustentabilidadeScreen} />
        <Stack.Screen name="Equipe" component={EquipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
