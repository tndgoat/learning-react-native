// ScreenB.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Component ScreenB
const ScreenB: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is Screen B</Text>
    </View>
  )
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03DAC6',
  },
})

export default ScreenB
