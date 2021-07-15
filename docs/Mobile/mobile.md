# mobile

```Playground platform=web
import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default function HelloWorld() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  content: {
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    letterSpacing: 1.5,
    color: 'black'
  }
})
```
