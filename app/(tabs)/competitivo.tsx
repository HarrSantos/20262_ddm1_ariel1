import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const noticias = [
  {
    titulo: 'Campeonatos de VALORANT',
    texto: 'Acompanhe as principais competições e partidas do cenário competitivo.',
    imagem: require('@/assets/images/noticia1.jpg'),
  },
  {
    titulo: 'Times profissionais',
    texto: 'Conheça algumas das equipes que participam do cenário competitivo.',
    imagem: require('@/assets/images/noticia2.webp'),
  },
  {
    titulo: 'Atualizações do competitivo',
    texto: 'Mudanças no jogo podem influenciar as estratégias utilizadas pelas equipes.',
    imagem: require('@/assets/images/noticia3.jpg'),
  },
];

const times = [
  {
    nome: 'Loud',
    imagem: require('@/assets/images/time1.png'),
  },
  {
    nome: 'Nrg',
    imagem: require('@/assets/images/time2.png'),
  },
  {
    nome: 'Pprx',
    imagem: require('@/assets/images/time3.jpg'),
  },
];

export default function CompetitivoScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>
          Competitivo
        </Text>

        <View style={styles.profile}>
          <Text style={styles.profileText}>
            A
          </Text>
        </View>

      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.pageTitle}>
          Cenário competitivo
        </Text>

        <Text style={styles.subtitle}>
          Notícias e informações sobre o VALORANT competitivo.
        </Text>


        <Text style={styles.sectionTitle}>
          Notícias
        </Text>


        {noticias.map((noticia) => (

          <View
            style={styles.newsCard}
            key={noticia.titulo}
          >

            <Image
              source={noticia.imagem}
              style={styles.newsImage}
              resizeMode="cover"
            />

            <Text style={styles.newsTitle}>
              {noticia.titulo}
            </Text>

            <Text style={styles.newsText}>
              {noticia.texto}
            </Text>

          </View>

        ))}


        <Text style={styles.sectionTitle}>
          Times
        </Text>


        {times.map((time) => (

          <View
            style={styles.teamCard}
            key={time.nome}
          >

            <Image
              source={time.imagem}
              style={styles.teamImage}
              resizeMode="cover"
            />

            <Text style={styles.teamName}>
              {time.nome}
            </Text>

          </View>

        ))}

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

  content: {
    padding: 20,
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#AAAAAA',
    fontSize: 15,
    marginTop: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  newsCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  newsImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 12,
  },

  newsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  newsText: {
    color: '#BBBBBB',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },

  teamCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  teamImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  teamName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
  },

});