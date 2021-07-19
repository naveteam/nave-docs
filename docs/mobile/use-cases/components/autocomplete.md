# Autocomplete

Esse componente tem como finalidade substituir selects que possuem muitas opções, fazendo com que seja difícil para o usuário achar o recurso desejado. Dessa maneira, foi implementado um **Autocomplete** com um input e um dropdown que mostra as opções filtradas.

<br />

```Playground platforms=android,ios
import React, { useState, useMemo, useEffect } from 'react'
import { Text, View, StyleSheet, Keyboard, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const navers = [
  { label: 'gui', value: 1 },
  { label: 'juju', value: 2 },
  { label: 'uilia', value: 3 },
  { label: 'lucas', value: 4 },
  { label: 'bender', value: 5 },
  { label: 'gustavo', value: 6 },
  { label: 'carrilhos', value: 7 }
]

const getColor = (error, disabled) => {
  if (error) {
    return 'red'
  }

  return disabled ? 'grey' : 'black'
}

const AutocompleteComponent = ({
  value,
  onChange,
  name,
  options,
  label,
  error,
  disabled,
  placeholder,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('')

  const filteredData = useMemo(() => {
    if (!inputValue) {
      return []
    }

    return options.filter(element => element.label.toUpperCase().includes(inputValue.toUpperCase()))
  }, [inputValue, options])

  return (
    <View style={styles.container} {...props}>
      {label && (
        <Text
          style={{ color: getColor(error, disabled), fontWeight: '600' }}
          mb={10}
          fontWeight={600}
        >
          {label}
        </Text>
      )}

      <TextInput
        style={styles.input}
        name={name}
        onChangeText={text => {
          if (value) {
            onChange(text)
          }
          setInputValue(text)
        }}
        value={inputValue}
        editable={!disabled}
        placeholder={placeholder}
        autoCapitalize='none'
      />

      {filteredData.length >= 1 && !value && (
        <View style={styles.dropDown}>
          <ScrollView>
            {filteredData?.map(
              item => (
                <TouchableOpacity
                  onPress={() => {
                    onChange(name, item.value)
                    setInputValue(item.label)
                    Keyboard.dismiss()
                  }}
                  style={styles.optionContainer}
                  key={item.id}
                >
                  <Text mt={10} style={{ color: 'white' }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ),
              []
            )}
          </ScrollView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1
  },

  dropDown: {
    backgroundColor: 'black',
    width: '100%',
    maxHeight: 200,
    borderRadius: 4
  },

  optionContainer: {
    marginLeft: 8,
    marginVertical: 6,
    flex: 1
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 4
  }
})

AutocompleteComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  )
}

const App = () => {
  const [value, setValue] = useState('')

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 200 }}>
      <AutocompleteComponent
        value={value}
        onChange={setValue}
        name='naver'
        label='Naver'
        placeholder='Selecione o naver'
        options={navers}
      />
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
value | Any | true | 
onChange | Function | true  
options | Array[{label: String, value: Any}] | true
label | String | false
placeholder | String | false  
error | String/Boolean | false 
disabled | Boolean | false
name | String | false
