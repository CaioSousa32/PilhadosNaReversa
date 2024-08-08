import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Sustentabilidade',
    titleColor: '#038510',
    image: require('../../assets/image/sustentabilidade/sustentabilidade1.png'),
    buttonText: 'Por que eu devo descartar pilhas e baterias corretamente?',
    description: 'As pilhas e baterias contêm materiais como mercúrio, chumbo, cádmio, zinco, lítio e níquel. O descarte inadequado pode liberar essas substâncias tóxicas, que podem causar problemas de saúde, como danos neurológicos e respiratórios, e contaminar o meio ambiente, afetando solos e águas.'
  },
  {
    key: '2',
    title: 'Sustentabilidade',
    titleColor: '#038510',
    image: require('../../assets/image/sustentabilidade/sustentabilidade2.png'),
    buttonText: 'O que acontece com as pilhas e baterias após serem descartadas nos pontos de coleta?',
    description: 'Após o descarte em pontos de coleta, as pilhas e baterias são enviadas para centros de reciclagem, onde são separadas e tratadas para extrair metais e outros materiais reutilizáveis. O processo ajuda a reduzir a quantidade de resíduos perigosos e permite o reaproveitamento de materiais.',
  },
  {
    key: '3',
    title: 'Sustentabilidade',
    titleColor: '#038510',
    image: require('../../assets/image/sustentabilidade/sustentabilidade3.png'),
    buttonText: 'Quais são os impactos ambientais do descarte incorreto de pilhas e baterias?',
    description: 'O descarte incorreto pode levar à liberação de metais pesados como mercúrio, chumbo e cádmio, que podem contaminar o solo e a água, prejudicando plantas, animais e seres humanos. Além disso, as substâncias químicas podem prejudicar o ecossistema e afetar a qualidade da água.',
  },
];

function SustentabilidadeScreen({ navigation }) {
  const [activeDotColor, setActiveDotColor] = useState('#038510'); // Cor padrão para os pontos

  const renderSlides = ({ item }) => (
    <View style={styles.slideContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: item.titleColor }]}>
          {item.title}
        </Text>
      </View>
      {item.buttonText && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DBDBDB' }]}
        >
          <Text style={[styles.buttonText]}>
            {item.buttonText}
          </Text>
        </TouchableOpacity>
      )}

      <View>
        <Text style={[styles.descriptionText, { color: '#000' }]}>
          {item.description}
        </Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.image}
        />
      </View>
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
      renderDoneButton={() => <Text></Text>}
      onSlideChange={onSlideChange} // Atualiza a cor do ponto ativo ao mudar de slide
    />
  );
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    backgroundColor: '#ADC1AE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: '5%',
    height: 50, // Define uma altura fixa para o contêiner do título
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Espaço entre o título e a imagem
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Posiciona a imagem na parte inferior
    alignItems: 'center',
    width: '100%',
    marginBottom: '16%'
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200, // Define uma altura fixa para as imagens
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  activeDot: {
    backgroundColor: '#038510',
    width: 10,
  },
  button: {
    marginTop: '8%',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginBottom: 10, // Espaço entre botões
  },
  buttonText: {
    color: '#026A0D',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    margin: 5,
  },
  descriptionText: {
    marginTop: '2%',
    color: '#026A0D',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    marginHorizontal: 50,
  },
});

export default SustentabilidadeScreen;
