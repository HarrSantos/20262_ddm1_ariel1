import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const mapas = [
  {
    nome: 'Bind',
    imagem: require('@/assets/images/bind.webp'),
  },
  {
    nome: 'Haven',
    imagem: require('@/assets/images/haven.webp'),
  },
  {
    nome: 'Split',
    imagem: require('@/assets/images/split.webp'),
  },
  {
    nome: 'Ascent',
    imagem: require('@/assets/images/ascent.webp'),
  },
  {
    nome: 'Icebox',
    imagem: require('@/assets/images/icebox.webp'),
  },
  {
    nome: 'Breeze',
    imagem: require('@/assets/images/breeze.webp'),
  },
  {
    nome: 'Fracture',
    imagem: require('@/assets/images/fracture.webp'),
  },
  {
    nome: 'Pearl',
    imagem: require('@/assets/images/pearl.webp'),
  },
  {
    nome: 'Lotus',
    imagem: require('@/assets/images/lotus.webp'),
  },
  {
    nome: 'Sunset',
    imagem: require('@/assets/images/sunset.webp'),
  },
  {
    nome: 'Abyss',
    imagem: require('@/assets/images/abyss.webp'),
  },
  {
    nome: 'Corrode',
    imagem: require('@/assets/images/corrode.webp'),
  },
  {
    nome: 'Summit',
    imagem: require('@/assets/images/summit.webp'),
  },
];

export default function MapasScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>
          Mapas
        </Text>

        <View style={styles.profile}>
          <Text style={styles.profileText}>
            A
          </Text>
        </View>

      </View>

      <ScrollView>

        <View style={styles.content}>

          <Text style={styles.pageTitle}>
            Mapas do VALORANT
          </Text>

          <Text style={styles.text}>
            Cada partida acontece em um mapa diferente.
            Cada mapa possui características, posições e estratégias próprias.
          </Text>


          <View style={styles.rotationCard}>

            <Text style={styles.cardTitle}>
              Rotação de mapas
            </Text>

            <Text style={styles.text}>
              No competitivo, existe uma rotação de mapas.
              Isso significa que apenas alguns mapas ficam disponíveis
              durante determinado período.
            </Text>

            <Text style={styles.text}>
              A rotação muda ao longo dos Atos para trazer variedade
              às partidas e permitir que os jogadores conheçam diferentes mapas.
            </Text>

          </View>


          <Text style={styles.sectionTitle}>
            Mapas em destaque
          </Text>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >

            {mapas.slice(0, 3).map((mapa) => (

              <View
                style={styles.mapCard}
                key={mapa.nome}
              >

                <Image
                  source={mapa.imagem}
                  style={styles.mapImage}
                  resizeMode="cover"
                />

                <Text style={styles.mapName}>
                  {mapa.nome}
                </Text>

              </View>

            ))}

          </ScrollView>


          <Text style={styles.sectionTitle}>
            Todos os mapas
          </Text>


          {mapas.map((mapa) => (

            <View
              style={styles.listCard}
              key={mapa.nome}
            >

              <Image
                source={mapa.imagem}
                style={styles.smallImage}
                resizeMode="cover"
              />

              <Text style={styles.listName}>
                {mapa.nome}
              </Text>

            </View>

          ))}

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

  content: {
    padding: 20,
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  text: {
    color: '#BBBBBB',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },

  rotationCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 18,
    marginTop: 20,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  mapCard: {
    width: 220,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
  },

  mapImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },

  mapName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },

  listCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallImage: {
    width: 90,
    height: 55,
    borderRadius: 8,
  },

  listName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
  },

});