# Autocomplete

Esse componente tem como finalidade substituir selects que possuem muitas opções, fazendo com que seja difícil para o usuário achar o recurso desejado. Dessa maneira, foi implementado um **Autocomplete** com um input e um dropdown que mostra as opções filtradas.

<br />

```Playground id=@guiwm/autocomplete&platforms=android,ios
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
