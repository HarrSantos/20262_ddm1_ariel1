import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Valorant Guia</Text>

        <View style={styles.profile}>
          <Text style={styles.profileText}>A</Text>
        </View>
      </View>

      <ScrollView>

        <ImageBackground
          source={require('@/assets/images/agent-viper-valorant-riot-video-game-wallpaper-2560x1024_99.jpg')}
          style={styles.fundo}
          resizeMode="cover"
        >
          <View style={styles.fundoTexto}>
            <Text style={styles.fundoTitulo}>VALORANT</Text>
            <Text style={styles.fundoSubtitulo}>
              Guia para conhecer o jogo
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>

          <Text style={styles.sectionTitle}>
            O que é Valorant?
          </Text>

          <Text style={styles.text}>
            VALORANT é um jogo de tiro tático em primeira pessoa,
            desenvolvido pela Riot Games.
          </Text>

          <Text style={styles.text}>
            Duas equipes competem em partidas onde os jogadores
            utilizam diferentes agentes, cada um com habilidades
            próprias.
          </Text>

          <Text style={styles.text}>
            O principal objetivo é vencer as rodadas eliminando
            a equipe adversária ou completando o objetivo da partida.
          </Text>

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              🎯 Como funciona?
            </Text>

            <Text style={styles.cardText}>
              • Escolha um agente
            </Text>

            <Text style={styles.cardText}>
              • Entre em uma partida
            </Text>

            <Text style={styles.cardText}>
              • Use suas habilidades
            </Text>

            <Text style={styles.cardText}>
              • Trabalhe em equipe
            </Text>

            <Text style={styles.cardText}>
              • Tente vencer a rodada
            </Text>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  fundo: {
    height: 220,
    width: '100%',
    justifyContent: 'flex-end',
  },

  fundoTexto: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },

  fundoTitulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  fundoSubtitulo: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  text: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  cardText: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 8,
  },
});