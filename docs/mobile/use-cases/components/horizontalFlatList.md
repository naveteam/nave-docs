# Horizontal Animated FlatList

Esse componente é uma demonstração de como pode ser implementada uma FlatList com animações. Nesse exemplo, foi adicionada paginação e um efeito de deslocamento vertical para deixar a UX mais interessante.

<br />

```Playground id=@guiwm/animated-horizontal-flatlist&platforms=android,ios
import React, { useRef } from 'react'
import { View, FlatList, StyleSheet, useWindowDimensions, Dimensions, Animated } from 'react-native'

const { width } = Dimensions.get('window')

const ITEM_SIZE = width * 0.5 + 10
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2

const HorizontalFlatList = ({data = [...Array(10).keys()]}) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const NEW_DATA = [{ ghost: true }, ...data, { ghost: true }]

  return (
    <View style={styles.container} >
      <FlatList
        horizontal
        data={NEW_DATA}
        bounces={false}
        decelerationRate={0}
        snapToAlignment='start'
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const translateY = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE],
            outputRange: [0, -50, 0],
            extrapolate: 'clamp'
          })

          if (item.ghost) {
            return <View style={{ width: EMPTY_ITEM_SIZE, height: 20 }} />
          }

          return <Animated.View style={{ ...styles.card, transform: [{ translateY }] }} />
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    width: 0.5 * width,
    height: 300,
    backgroundColor: 'rgb(102, 0, 202)',
    marginLeft: 10,
    borderRadius: 10
  }
})

export default HorizontalFlatList


```

<br />

## Props

<br />

Prop | Type | Required 
--- | --- | --- |
data | Array | true | 
