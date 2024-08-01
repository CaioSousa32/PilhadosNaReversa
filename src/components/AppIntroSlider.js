import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Pilhados na Reversa',
    titleColor: '#FFC727',
    image: require('../../assets/pilhados.png'),
    buttonText: 'Pontos de coletas',
    buttonAction: 'Pontos',
    buttonText2: 'Sobre',
    button2Action: 'Sobre' // Nome da tela para onde o botão "Saiba mais" irá navegar
  },
  {
    key: '2',
    title: 'Empresas',
    titleColor: '#C40F0F',
    image: require('../../assets/empresas.png'),
    buttonText: 'Cadastre-se',
    buttonAction: 'Cadastro',
    buttonText2: 'Login',
    button2Action: 'Login'
  },
  {
    key: '3',
    title: 'Sustentabilidade',
    titleColor: '#038510',
    image: require('../../assets/sustentabilidade.png'),
    buttonText: 'Saiba mais',
    buttonAction: 'Saiba'
  },
  {
    key: '4',
    title: 'Equipe',
    titleColor: '#FFC727',
    image: require('../../assets/equipe.png'),
    buttonText: 'Conheça a equipe',
    buttonAction: 'Equipe'
  },
];

function AppIntroSliderComponent({ navigation }) {
  const [activeDotColor, setActiveDotColor] = useState('#FFC727'); // Cor padrão para os pontos

  const renderSlides = ({ item }) => (
    <View style={styles.slideContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: item.titleColor }]}>
          {item.title}
        </Text>
      </View>
      <Image
        source={item.image}
        style={styles.image}
      />
      {item.buttonText && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: item.titleColor }]}
          onPress={() => navigation.navigate(item.buttonAction)}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>
            {item.buttonText}
          </Text>
        </TouchableOpacity>
      )}
      {item.buttonText2 && (
        <TouchableOpacity
          style={[styles.button2Button, { backgroundColor: '#455A64' }]}
          onPress={() => navigation.navigate(item.button2Action)}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>
            {item.buttonText2}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const onSlideChange = (index) => {
    const currentSlide = slides[index];
    setActiveDotColor(currentSlide.titleColor); // Atualizar a cor do ponto ativo
  };

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={[styles.activeDot, { backgroundColor: activeDotColor }]}
      renderNextButton={() => <Text></Text>}
      renderPrevButton={() => <Text></Text>}
      onSlideChange={onSlideChange} // Atualiza a cor do ponto ativo ao mudar de slide
    />
  );
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: '40%',
    height: 50, // Define uma altura fixa para o contêiner do título
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Espaço entre o título e a imagem
  },
  image: {
    resizeMode: 'contain',
    height: '45%',
    width: '100%',
    marginBottom: 10, // Espaço entre a imagem e o botão
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  activeDot: {
    backgroundColor: '#FFC727',
    width: 10,
  },
  button: {
    marginTop: '8%',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    marginBottom: 10, // Espaço entre botões
  },
  button2Button: {
    padding: 10,
    borderRadius: 5,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

export default AppIntroSliderComponent;
