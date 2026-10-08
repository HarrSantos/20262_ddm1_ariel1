import { IconSymbol } from '@/components/ui/icon-symbol';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (

    <View
      style={styles.container}
    >

      <View
        style={styles.header}>
        <Text style={styles.title}>
          Valorant Guia
        </Text>
        <View style={styles.profile}>
          <IconSymbol
            size={28}
            name="person.fill"
            color="white"
          />
        </View>
      </View>

      <ImageBackground
        source={require('@/assets/images/agent-viper-valorant-riot-video-game-wallpaper-2560x1024_99.jpg')}
        style={styles.fundo}
        resizeMode="contain"
      >
      </ImageBackground>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
      </ScrollView>

    </View>
  )
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

  fundo: {
    height: 180,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingVertical: 10,
  },

});