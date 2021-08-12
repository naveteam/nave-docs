# Modal

Umas das funcionalidades esperadas de um modal é o seu fechamento ao clicar fora dele. Dessa forma, foi desenvolvido um modal com um **TouchableWithoutFeedback** que engloba o **children** e sobrescreve o evento de toque do **TouchableWithoutFeedback** mais externo, fazendo com que seja possível fechar o modal clicando fora dele, mas impossibilitando fecha-lo ao clicar nele mesmo.

<br />

```Playground id=@guiwm/modal&platforms=android,ios
import React, { useState } from 'react'
import { Modal, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const ModalComponent = ({ open, handleClose, children, ...props }) => {
  return (
    <Modal animationType='fade' transparent visible={open} style={{...props}}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={handleClose}>
        <View style={modalStyles.container}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modal}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 20 
  },

  modal: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
  }
})

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <View style={appStyles.container}>
      <TouchableOpacity 
        style={appStyles.touchableContainer} 
        onPress={() => setIsOpenModal(true)}
      >
        <Text style={{fontSize: 20, color: 'white'}}>Abrir modal</Text>
      </TouchableOpacity>

      <ModalComponent open={isOpenModal} handleClose={() => setIsOpenModal(false)}>
        <Text style={{fontSize: 20}}>Eu sou um modal! ☺️</Text>

        <TouchableOpacity style={appStyles.button}>
          <Text style={{color: 'white'}} onPress={() => setIsOpenModal(false)}>Fechar modal</Text>
        </TouchableOpacity>
      </ModalComponent>
    </View>
  )
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  touchableContainer: {
    backgroundColor: 'rgb(102, 0, 202)',
    paddingHorizontal: 20,
    paddingVertical: 8, 
    borderRadius: 8
  },
  button: {
    marginTop: 14, 
    backgroundColor: 'rgb(102, 0, 202)', 
    paddingHorizontal: 20, 
    paddingVertical: 8, 
    borderRadius: 8
  }
})

export default App
```

<br />

## Props

<br />

Prop | Type | Required 
--- | --- | --- |
open | Boolean | true | 
handleClose | Function | true  
