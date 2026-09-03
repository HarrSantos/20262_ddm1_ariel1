import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: '#1D3D47',
        dark: '#1D3D47',
      }}
      headerImage={
        <Image
          source={require('@/assets/images/super-onze-inazuma-japan-1536x864.webp')}
          style={styles.reactLogo}
          contentFit="cover"
        />
      }
    >
      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title} type="title">
          Welcome Inazuma Eleven!
        </ThemedText>
      </ThemedView>

      {/* Sobre Inazuma Eleven */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          ⚡ Sobre Inazuma Eleven
        </ThemedText>

        <ThemedText>
          Inazuma Eleven é uma série de futebol cheia de partidas
          emocionantes, técnicas especiais e grandes rivais.
        </ThemedText>
      </ThemedView>

      {/* Times e Jogadores */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          🏆 Times e Jogadores
        </ThemedText>

        <ThemedText>
          Conheça a Raimon, a Inazuma Japan e os jogadores que
          fizeram história dentro e fora do campo.
        </ThemedText>
      </ThemedView>

      {/* Técnicas Especiais */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          🔥 Técnicas Especiais
        </ThemedText>

        <ThemedText>
          Explore técnicas como Fire Tornado, God Hand e muitas
          outras habilidades incríveis usadas durante as partidas.
        </ThemedText>
      </ThemedView>

      {/* Sua Jornada */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          🌟 Sua Jornada
        </ThemedText>

        <ThemedText>
          Descubra personagens, equipes, técnicas e momentos
          inesquecíveis do universo de Inazuma Eleven!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    backgroundColor: '#1D3D47',
  },

  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 6,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 20,
    backgroundColor: '#1D3D47',
  },

  reactLogo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});