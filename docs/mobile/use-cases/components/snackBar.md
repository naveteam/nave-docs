# SnackBar

O Modal é com certeza um dos componentes mais utilizados nos aplicativos hoje em dia. Porém, as vezes ele pode ser invasivo demais caso não seja uma informação de grande importância. Para isso o **Snackbar** é utilizado, sendo um componente mais discreto e ideal para mostrar informações das quais o usuário não precise confirmar. Nesse exemplo, temos um Snackbar animado com Animated do próprio react-native. É possível customizar cores **(backgroundColor)**, velocidade de animação **(animationDuration)**, tempo de permanência da Snackbar **(duration)** e claro, a mensagem **(message)**.

<br />

```Playground id=@guiwm/snackbar&platforms=android,ios
import React, {
  useCallback,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
  useRef
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity
} from 'react-native'

import closeIcon from './assets/close.png'

const SNACK_BAR_HEIGHT = 50

const Snackbar = forwardRef(
  ({ message, animationDuration = 1000, duration = 4000, backgroundColor = '#4AB969' }, ref) => {
    const translationY = useRef(new Animated.Value(SNACK_BAR_HEIGHT)).current

    const [isVisible, setIsVisible] = useState(false)

    useImperativeHandle(ref, () => ({
      toggle
    }))

    const toggle = useCallback(() => {
      setIsVisible(!isVisible)
      Animated.timing(translationY, {
        useNativeDriver: true,
        duration: animationDuration,
        toValue: isVisible ? SNACK_BAR_HEIGHT : -SNACK_BAR_HEIGHT
      }).start()
    }, [isVisible, translationY])

    useEffect(() => {
      if (!isVisible) return () => {}

      const timeout = setTimeout(() => {
        toggle()
      }, duration)

      return () => clearTimeout(timeout)
    }, [isVisible, duration])

    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: translationY
              }
            ]
          },
          styles.container
        ]}
      >
        <View
          style={[
            {
              backgroundColor
            },
            styles.snack
          ]}
        >
          <Text style={styles.message}>{message}</Text>

          <TouchableWithoutFeedback onPress={toggle}>
            <Image source={closeIcon} style={styles.icon} />
          </TouchableWithoutFeedback>
        </View>
      </Animated.View>
    )
  }
)

const App = () => {
  const snackRef = useRef(null)

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => snackRef.current.toggle()}
      >
        <Text style={styles.text}>Ativar snackbar</Text>
      </TouchableOpacity>

      <Snackbar message='Aqui sua mensagem de sucesso!' ref={snackRef} barHeight={100} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20
  },

  snack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SNACK_BAR_HEIGHT,
    borderRadius: 8,
    paddingHorizontal: 16
  },

  message: {
    color: 'white',
    fontSize: 16
  },

  icon: {
    width: 12,
    height: 12
  },

  // App styles
  appContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  button: { 
    padding: 20, 
    borderRadius: 8, 
    backgroundColor: 'rgb(102, 0, 202)' 
  },

  text: { 
    color: 'white' 
  }

})

export default App
```

## Props

<br />

Prop | Type | Required 
--- | --- | --- |
message | String | true | 
animationDuration | Number | false  
duration | Number | false
backgroundColor | String | false  
