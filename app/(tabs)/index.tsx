import { IconSymbol } from '@/components/ui/icon-symbol';
import {
  Pressable,
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
          Harr
        </Text>
        <View style={styles.profile}></View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.post}>

          <View style={styles.postHeader}>
            <View style={styles.postProfile}>
            </View>

            <View style={styles.postUserInfo}>
              <Text style={styles.postName}>Ariel</Text>
              <Text style={styles.postUsername}>@ariel</Text>
            </View>
          </View>

          <Text style={styles.postText}>
            {/* texto do post */}
            ariel
          </Text>

          <View style={styles.postActions}>

            <Pressable>
              <IconSymbol
                size={20}
                name="paperplane.fill"
                color="#A0A0A0"
              />
            </Pressable>

            <Pressable>
              <IconSymbol
                size={20}
                name="paperplane.fill"
                color="#A0A0A0"
              />
            </Pressable>

            <Pressable>
              <IconSymbol
                size={20}
                name="paperplane.fill"
                color="#A0A0A0"
              />
            </Pressable>

          </View>

        </View>
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

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
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

  post: {
    width: '100%',
    padding: 15,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
  },

  postUserInfo: {
    marginLeft: 10,
  },

  postName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  postUsername: {
    color: '#c1c1c1',
    fontSize: 14,
  },

  postText: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  postActions: {
    flexDirection: 'row',
    gap: 30,
  }

});