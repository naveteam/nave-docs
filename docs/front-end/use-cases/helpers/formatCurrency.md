# Currency Formatter

Essa função tem como objetivo transformar um valor numérico para uma string do tipo real (R$)

```js
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

// formatCurrency(100) -> R$ 100,00
```
