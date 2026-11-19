import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const agentes = [
  {
    nome: 'Astra',
    imagem: require('@/assets/images/astra.webp'),
    descricao: 'Controladora que utiliza habilidades cósmicas para controlar o campo de batalha.',
  },
  {
    nome: 'Breach',
    imagem: require('@/assets/images/breach.webp'),
    descricao: 'Iniciador especializado em criar aberturas através de paredes e obstáculos.',
  },
  {
    nome: 'Brimstone',
    imagem: require('@/assets/images/brimstone.webp'),
    descricao: 'Controlador que utiliza recursos militares para ajudar sua equipe.',
  },
  {
    nome: 'Chamber',
    imagem: require('@/assets/images/chamber.webp'),
    descricao: 'Sentinela especialista em precisão e defesa de posições.',
  },
  {
    nome: 'Clove',
    imagem: require('@/assets/images/clove.webp'),
    descricao: 'Controlador que consegue continuar ajudando a equipe mesmo após ser eliminado.',
  },
  {
    nome: 'Cypher',
    imagem: require('@/assets/images/cypher.webp'),
    descricao: 'Sentinela especialista em informações e vigilância.',
  },
  {
    nome: 'Deadlock',
    imagem: require('@/assets/images/deadlock.webp'),
    descricao: 'Sentinela que utiliza equipamentos para impedir o avanço dos inimigos.',
  },
  {
    nome: 'Fade',
    imagem: require('@/assets/images/fade.webp'),
    descricao: 'Iniciadora que utiliza poderes para encontrar e perseguir inimigos.',
  },
  {
    nome: 'Gekko',
    imagem: require('@/assets/images/gekko.webp'),
    descricao: 'Iniciador que utiliza suas criaturas para ajudar durante as rodadas.',
  },
  {
    nome: 'Harbor',
    imagem: require('@/assets/images/harbor.webp'),
    descricao: 'Controlador que utiliza água para criar proteção e controlar áreas.',
  },
  {
    nome: 'Hush',
    imagem: require('@/assets/images/hush.webp'),
    descricao: 'Agente que utiliza habilidades especiais para interferir nos adversários.',
  },
  {
    nome: 'Iso',
    imagem: require('@/assets/images/iso.webp'),
    descricao: 'Duelista especializado em confrontos individuais.',
  },
  {
    nome: 'Jett',
    imagem: require('@/assets/images/jett.webp'),
    descricao: 'Duelista rápida e ágil, especialista em movimentação.',
  },
  {
    nome: 'Kayo',
    imagem: require('@/assets/images/kayo.webp'),
    descricao: 'Iniciador criado para neutralizar as habilidades dos inimigos.',
  },
  {
    nome: 'Killjoy',
    imagem: require('@/assets/images/killjoy.webp'),
    descricao: 'Sentinela que utiliza dispositivos tecnológicos para defender áreas.',
  },
  {
    nome: 'Miks',
    imagem: require('@/assets/images/miks.webp'),
    descricao: 'Agente que utiliza habilidades para ajudar sua equipe durante os confrontos.',
  },
  {
    nome: 'Neon',
    imagem: require('@/assets/images/neon.webp'),
    descricao: 'Duelista extremamente rápida que utiliza energia elétrica.',
  },
  {
    nome: 'Omen',
    imagem: require('@/assets/images/omen.webp'),
    descricao: 'Controlador que utiliza sombras para controlar o campo de batalha.',
  },
  {
    nome: 'Phoenix',
    imagem: require('@/assets/images/phoenix.webp'),
    descricao: 'Duelista que utiliza fogo e consegue se recuperar durante o combate.',
  },
  {
    nome: 'Raze',
    imagem: require('@/assets/images/raze.webp'),
    descricao: 'Duelista especializada em causar grande impacto com seus equipamentos.',
  },
  {
    nome: 'Reyna',
    imagem: require('@/assets/images/reyna.webp'),
    descricao: 'Duelista que fica mais forte ao conseguir eliminações.',
  },
  {
    nome: 'Sage',
    imagem: require('@/assets/images/sage.webp'),
    descricao: 'Sentinela capaz de curar aliados e controlar áreas.',
  },
  {
    nome: 'Skye',
    imagem: require('@/assets/images/skye.webp'),
    descricao: 'Iniciadora que utiliza criaturas para encontrar e atrapalhar inimigos.',
  },
  {
    nome: 'Sova',
    imagem: require('@/assets/images/sova.webp'),
    descricao: 'Iniciador especialista em encontrar inimigos através de informações.',
  },
  {
    nome: 'Tejo',
    imagem: require('@/assets/images/tejo.webp'),
    descricao: 'Iniciador que utiliza tecnologia para pressionar posições inimigas.',
  },
  {
    nome: 'Veto',
    imagem: require('@/assets/images/veto.webp'),
    descricao: 'Agente que utiliza habilidades para interferir nas ferramentas dos adversários.',
  },
  {
    nome: 'Viper',
    imagem: require('@/assets/images/viper.webp'),
    descricao: 'Controladora que utiliza toxinas para bloquear áreas e limitar a visão.',
  },
  {
    nome: 'Vyse',
    imagem: require('@/assets/images/vyse.webp'),
    descricao: 'Sentinela que utiliza metal líquido para controlar o espaço.',
  },
  {
    nome: 'Waylay',
    imagem: require('@/assets/images/waylay.webp'),
    descricao: 'Duelista que utiliza luz e velocidade para entrar e sair de combates.',
  },
  {
    nome: 'Yoru',
    imagem: require('@/assets/images/yoru.webp'),
    descricao: 'Duelista capaz de criar distrações e atravessar o espaço.',
  },
];

export default function AgentesScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>
          Agentes
        </Text>

        <View style={styles.profile}>
          <Text style={styles.profileText}>
            A
          </Text>
        </View>

      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.pageTitle}>
          Agentes do VALORANT
        </Text>

        <Text style={styles.subtitle}>
          Conheça os agentes e suas principais características.
        </Text>

        {agentes.map((agente) => (

          <View style={styles.card} key={agente.nome}>

            <Image
              source={agente.imagem}
              style={styles.agentImage}
              resizeMode="cover"
            />

            <View style={styles.info}>

              <Text style={styles.agentName}>
                {agente.nome}
              </Text>

              <Text style={styles.description}>
                {agente.descricao}
              </Text>

            </View>

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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    flexDirection: 'row',
  },

  agentImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#333333',
  },

  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  agentName: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    color: '#BBBBBB',
    fontSize: 14,
    lineHeight: 20,
  },
});