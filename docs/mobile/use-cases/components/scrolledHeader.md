# Animated Header

O Header animado é um componente bastante utilizado nos aplicativos atuais. Sua animação acontece conforme o usuário realiza o scroll na tela. Esse componente é um exemplo de como esse comportamento pode ser aplicado.

<br />

```Playground id=@guiwm/animated-header&platforms=android,ios
import React, { useRef, Fragment } from 'react'
import {
  View,
  Animated,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from 'react-native'
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context'

import logo from './assets/logo-white.png'
import arrowUp from './assets/arrow-up.png'

const AnimatedHeader = () => {
  const { height } = useWindowDimensions()

  const insets = useSafeAreaInsets()
  const headerHeight = insets.top + 80

  const scrolling = useRef(new Animated.Value(0)).current

  const translationY = scrolling.interpolate({
    inputRange: [0, 150],
    outputRange: [-headerHeight, 0],
    extrapolate: 'clamp'
  })

  const translationX = scrolling.interpolate({
    inputRange: [110, 180],
    outputRange: [-100, 0],
    extrapolate: 'clamp'
  })

  const imageOpacity = scrolling.interpolate({
    inputRange: [130, 180],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <Fragment>
      <Animated.View
        style={[styles.header, { height: headerHeight, paddingTop: insets.top, transform: [{ translateY: translationY }] }]}
      >
        <Animated.Image
          style={[
            styles.logo,
            {
              opacity: imageOpacity,
              transform: [{ translateX: translationX }]
            }
          ]}
          source={logo}
          resizeMode='contain'
        />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling
                }
              }
            }
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={[{ height: height - 100}, styles.textContainer]}>
          <Image source={arrowUp} style={styles.arrow} resizeMode='contain' />
          <Text style={styles.subtitle}>Scroll Up</Text>
        </View>

        <View style={styles.hiddenView} />
      </Animated.ScrollView>
    </Fragment>
  )
}

const App = () => (
  <SafeAreaProvider>
    <AnimatedHeader/>
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(102, 0, 202)',
    justifyContent: 'center',
    zIndex: 99
  },
  logo: {
    height: 60,
    width: 110,
    marginLeft: 20
  },
  arrow: {
    height: 40
  },
  subtitle: {
    fontSize: 24 
  },
  textContainer: {
     alignItems: 'center', 
     justifyContent: 'center'
  },
  hiddenView: {
    height: 5000
  }
})
```
