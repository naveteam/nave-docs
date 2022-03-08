# React Query com TypeScript

### Introdução

Esse guia vai explicar como utilizar a biblioteca React-query com typescript, visando em detalhes de como passar a tipagem para o retorno dos dados da API e também utilizar para casos que precisa da paginação.

### Iniciando

Para começar a utilizar a biblioteca em seu projeto, utiliza o mesmo modo de configuração como está na documentação do React-query, sendo que não precisa mudar nada para usar com typescript, então siga o mesmo exemplo no link abaixo:

[Configuração da biblioteca](https://react-query.tanstack.com/quick-start)

### Formas de adicionar tipagem ao retorno de dados da API

A React-query permite que seja adicionado com o generics no hooks que ela disponibiliza ou na função do axios, mas pode ser adicionado como retorno da função que faz a chamada do endpoint.

Segue os exemplos:

1. Generics direto no hook do react-query

```ts
interface PersonProps {
  firstName: string;
  lastName: string;
  age: number;
}

const PersonComponent = () => {
  const { data } = useQuery<PersonProps>("personGetter", getPersonData);
};
```

2. Generics direto na função do axios

```ts
const getPersonData = () => api.get<PersonProps>(`api/v2/...`);
```

3. Tipagem no retorno da função do endpoint

```ts
const getPersonData = (): Promise<PersonProps> => api.get(`api/v2/...`);
```

Os três formatos funcionam bem para o react-query que irá exibir todas as propriedades no intellisense na propriedade `data` desestruturada no `useQuery`, mas o mais indicado a utilizar no projeto, seria a segunda ou a terceira opção com o generics ou tipo do retorno direto na função do endpoint, onde vai alterar em somente um lugar que lida diretamente com a chamada dos dados da API, já que podemos utilizar o mesmo endpoint em diversos lugares do projeto.

### Trabalhando com paginação e filtros no react-query

Com paginação utilizamos uma função externa que recebe os valores no array de dependências do `useQuery`. É necessário tipar esse parâmetro na função para que não passe como `any`, o formato da tipagem é uma tupla. Segue o exemplo de paginação:

1. Construindo a função externa para realizar a paginação e filtros:

```ts
interface ParametersGetData {
  id?: string;
  filters?: string;
}

type QueryKeyProps = [string, ParametersGetData];

// função externa
const getSalesCategories = async ({
  queryKey,
}: {
  queryKey: QueryKeyProps;
}) => {
  const { id, filters } = queryKey[1];
  return salesCategory({ id, filters });
};
```

- Esta função assim que o `filters`, que possui a paginação, for alterada, ela vai ser executada, recebendo os valores do array de dependências do `useQuery`, que está sendo tipado com `QueryKeyProps`

2. Na chamada do `useQuery`, utilizar a função externa

```ts
const { data: salesCategoriesData } = useQuery(
  ["salesCategoriesGetter", { id: schoolID, filters: queryString }], //array de dependências do useQuery
  getSalesCategories //função externa acima
);
```

- No array de dependências, o `filters` recebe a query string que trata todos os filtro e o número da página que vai ser enviado para API retornar os dados necessários, isso ocorre a cada mudança do valor da `queryString`, e assim dispara a execução da função `getSalesCategories`.
- Isso pode ser utilizado para todos os casos de paginação e para outros campos de filtros, facilitando bastante o uso da API.
