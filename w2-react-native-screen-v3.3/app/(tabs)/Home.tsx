// Home.tsx
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// Props cho Home component
type HomeProps = {
  navigation: {
    navigate: (screen: string) => void
  }
}

// Component Home
const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* GO TO SCREEN A */}
      <TouchableOpacity onPress={() => navigation.navigate('ScreenA')} style={styles.button}>
        <Text>Go to ScreenA</Text>
      </TouchableOpacity>

      {/* GO TO SCREEN B */}
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB')} style={styles.button}>
        <Text>Go to ScreenB</Text>
      </TouchableOpacity>
    </View>
  )
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
})

export default Home
