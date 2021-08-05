# Modal

Umas das funcionalidades esperadas de um modal é o seu fechamento ao clicar fora dele. Dessa forma, foi desenvolvido um modal com um **TouchableWithoutFeedback** que engloba o **children** e sobrescreve o evento de toque do **TouchableWithoutFeedback** mais externo, fazendo com que seja possível fechar o modal clicando fora dele, mas impossibilitando fecha-lo ao clicar nele mesmo.

<br />

```Playground id=@guiwm/modal&platforms=android,ios
import React, { useState } from 'react'
import { Modal, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const ModalComponent = ({ open, children, handleClose, mode, ...props }) => {
  return (
    <Modal animationType='fade' transparent visible={open}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={handleClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 20 
  },

  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    width: '80%'
  }
})

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor: 'black'}}>
      <TouchableOpacity onPress={() => setIsOpenModal(true)}><Text style={{color: 'white'}}>Abrir modal</Text></TouchableOpacity>

      <ModalComponent open={isOpenModal} handleClose={() => setIsOpenModal(false)}>
        <Text style={{color: 'rgb(102, 0, 202)'}}>Eu sou um modal! ☺️</Text>

        <TouchableOpacity style={{marginTop: 14}}>
          <Text onPress={() => setIsOpenModal(false)}>Fechar modal</Text>
        </TouchableOpacity>
      </ModalComponent>
    </View>
  )
}

export default App
```

<br />

## Props

<br />

Prop | Type | Required 
--- | --- | --- |
open | Boolean | true | 
handleClose | Function | true  
