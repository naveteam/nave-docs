# Progress Bar

Um componente bastante utilizado é a barra de progresso **(progress bar)**. Sua principal finalidade é dar feedback ao usuário sobre seu percurso em determinada feature de uma aplicação. Nesse exemplo, utilizamos o Animated do react-native para criar o componente. Ele possui uma label para facilitar a leitura.

<br />

```Playground id=@guiwm/progressbar&platforms=android,ios
import React, { useMemo, useRef, useEffect, useState } from 'react'
import { View, Text, Animated, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'

const TOTAL_PERCENTAGE = 100

const ProgressBar = ({
  total,
  completed,
  progressColor,
  unfilledColor,
  duration = 500,
  showLabel = false,
  barHeight = 8,
  ...props
}) => {
  const { width } = useWindowDimensions()

  const progress = useMemo(() => (completed * TOTAL_PERCENTAGE) / total, [total, completed])
  const progressValue = useRef(new Animated.Value(progress)).current

  useEffect(() => {
    Animated.timing(progressValue, {
      duration,
      toValue: progress,
      useNativeDriver: false
    }).start()
  }, [progress])

  return (
    <View style={styles.progressBarContainer} {...props}>
      <View
        style={[{backgroundColor: unfilledColor ?? 'rgba(102, 0, 202, 0.3)', height: barHeight}, styles.barContainer]}
      >
        <Animated.View
          style={[{
            backgroundColor: progressColor ??  'rgb(102, 0, 202)',
            width: progressValue.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
              extrapolate: 'clamp'
            }),
            height: barHeight,
          },  styles.bar]}
        />
      </View>

      {showLabel && (
        <Text style={styles.label}>
          {progress}%
        </Text>
      )}
    </View>
  )
}

const App = () => {

  const [completed, setCompleted] = useState(0)

  return (
    <View style={styles.appContainer}>
        <ProgressBar total={100} completed={completed} showLabel/>

        <TouchableOpacity style={styles.button} onPress={() => {
          if (completed === 100) {
            setCompleted(0)
            return
          }
            setCompleted(completed + 20)
        }}>
          <Text style={styles.buttonText}>Aumentar progresso</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   appContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 24
  },
  progressBarContainer: {
    width: '100%'
  },
  barContainer: {
     borderRadius: 8,
      position: 'relative'
  },
  bar: {
    position: 'absolute',
    borderRadius: 8
  },
  label: {
    marginTop: 8,
    color: 'black',
    fontSize: 18
  },

  button: {
    padding: 20,
    backgroundColor: 'rgb(102, 0, 202)',
    borderRadius: 8,
    marginTop: 16 
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  }
}) 


export default App
```

<br />

## Props

<br />

Prop | Type | Required 
--- | --- | --- |
total | Number | true | 
completed | Number | true  
progressColor | String | false
unfilledColor | String | false
duration | Number | false  
showLabel | Boolean | false 
barHeight | Number | false
