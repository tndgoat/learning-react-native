// ScreenA.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Component ScreenA
const ScreenA: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is Screen A</Text>
    </View>
  )
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BB86FC',
  },
})

export default ScreenA
