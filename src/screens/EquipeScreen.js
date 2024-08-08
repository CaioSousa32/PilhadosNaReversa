import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

// Função para abrir a URL
const openUrl = (url) => {
  Linking.openURL(url).catch(err => console.error('An error occurred', err));
};

function EquipeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equipe</Text>
      <View style={styles.titleUnderline} />
      
      <Image
        source={require('../../assets/image/equipe/caio.png')}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.redeContainer}>
          <TouchableOpacity onPress={() => openUrl('https://github.com/CaioSousa32')}>
            <Image
              source={require('../../assets/image/equipe/github.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl('https://linkedin.com/in/caio-sousa-a854a3229')}>
            <Image
              source={require('../../assets/image/equipe/linkedin.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>Caio Sousa</Text>
          <Text style={styles.funcao}>Front-end developer</Text>
        </View>
      </View>
      <View style={styles.titleUnderline} />

      <Image
        source={require('../../assets/image/equipe/denilson.png')}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.redeContainer}>
          <TouchableOpacity onPress={() => openUrl('https://github.com/denilson')}>
            <Image
              source={require('../../assets/image/equipe/github.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl('https://linkedin.com/in/denilson')}>
            <Image
              source={require('../../assets/image/equipe/linkedin.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>Denilson Oliveira</Text>
          <Text style={styles.funcao}>Back-end developer</Text>
        </View>
      </View>
      <View style={styles.titleUnderline} />

      <Image
        source={require('../../assets/image/equipe/jonatas.png')}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.redeContainer}>
          <TouchableOpacity onPress={() => openUrl('https://github.com/jonatas2021')}>
            <Image
              source={require('../../assets/image/equipe/github.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl('https://linkedin.com/in/jonatas-c%C3%A2ndido-86ba32165')}>
            <Image
              source={require('../../assets/image/equipe/linkedin.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>Jonatas Cândido</Text>
          <Text style={styles.funcao}>Design e Front-end</Text>
        </View>
      </View>
      <View style={styles.titleUnderline} />

      <Image
        source={require('../../assets/image/equipe/livia.png')}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.redeContainer}>
          <TouchableOpacity onPress={() => openUrl('https://github.com/livia')}>
            <Image
              source={require('../../assets/image/equipe/github.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl('https://linkedin.com/in/livia')}>
            <Image
              source={require('../../assets/image/equipe/linkedin.png')}
              style={styles.rede}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>Livia Sabino</Text>
          <Text style={styles.funcao}>Back-end developer</Text>
        </View>
      </View>
      <View style={styles.titleUnderline} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6D4A1',
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#B88800',
  },
  titleUnderline: {
    width: '80%', // Ajuste a largura da linha conforme necessário
    height: 2, // Altura da linha
    backgroundColor: '#000', // Cor da linha
    marginBottom: 20, // Espaço entre a linha e o restante do conteúdo
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'row', // Coloca nome e redes sociais em linha
    alignItems: 'center', // Alinha verticalmente ao centro
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  nome: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
  },
  nomeContainer: {
    paddingHorizontal: 30,
  },
  funcao: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#3E3E59',
  },
  redeContainer: {
    flexDirection: 'row', // Exibir os itens em linha
    marginLeft: 10, // Espaço entre o nome e as redes sociais
  },
  rede: {
    width: 40,
    height: 40,
    marginLeft: 5, // Espaço entre as imagens
    resizeMode: 'contain',
  },
});

export default EquipeScreen;
