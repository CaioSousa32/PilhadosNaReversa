// src/components/AppIntroSlider.js
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
    buttonAction: 'Pontos'
  },
  {
    key: '2',
    title: 'Empresas',
    titleColor: '#C40F0F',
    image: require('../../assets/empresas.png'),
    buttonText: 'Cadastre-se',
    buttonAction: 'Cadastro'
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
      <Text style={[styles.titleText, { color: item.titleColor }]}>
        {item.title}
      </Text>
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
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    height: '45%',
    width: '100%',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    marginBottom: -20,
  },
  activeDot: {
    width: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },
});

export default AppIntroSliderComponent;
