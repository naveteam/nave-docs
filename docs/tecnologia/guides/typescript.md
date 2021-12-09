# Typescript

## Motivação

> TypeScript is **JavaScript with syntax for types.**

Para facilitar a compreensão e desmistificar algumas ideias sobre o TS, devemos pensar nele apenas como uma extensão do JS. Sendo assim, o intuito da linguagem é de proporcionar o uso de um sistema de tipagem estática, o que não é nada novo no mundo da tecnologia. Talvez você não conheça esse conceito formalmente, porém provavelmente já teve contato durante seus estudos iniciais na programação. As linguagens mais tradicionais, aquelas as quais utilizamos para estudo de lógica de programação, como por exemplo C, C++, C# e Java, são linguagens tipificadas, ou de tipagem fortemente estática. Ou seja, quando declaramos uma variável, implementamos funções ou métodos de classes, sabemos exatamente o tipo de dado que essa variável ou função pode receber e até mesmo o que irá retornar.

- Exemplo em C da tipificação da linguagem:

```c
...
int main() {
	int foo;

	foo=1;
	printf("%d", foo);

	// As linhas abaixou resultam em erro pois "foo" só pode armazenar um inteiro;
	// foo="alguma string";
	// printf("%s", foo);

	return 0;
}
...
```

- Exemplo em JS sobre a falta de tipificação:

```javascript
let foo;

foo = 1;
console.log(foo);

// O JS "padrao" nao ve nenhum problema nas linhas a seguir
foo = "alguma string";
console.log(foo);
```

Em um primeiro momento, a tipificação pode parecer algo que limita a capacidade das variáveis de mudarem conforme o valor o qual lhes é atribuído, ou até mesmo acrescenta alguma dificuldade e consome um tempo valioso do desenvolvedor. Entretanto, é totalmente mensurável o quanto ganhamos em termos de escalabilidade do projeto, experiencia de desenvolvimento e facilidade para dar manutenção no curto, médio e longo prazo. Afinal, quantas vezes já foi preciso escrever `console.log` para entender com qual tipo de dado estamos lidando, quais valores determinado objeto possuí, ou até mesmo se determinado valor está vindo da API como número ou string. Além disso, muito provavelmente foi preciso acessar cadeias de arquivos para descobrir quais os tipos e valores devem ser passados para nossas funções. O esforço de utilizar TS se paga exatamente nesses momentos onde ganhamos agilidade para desenvolver nossas tarefas ou dar manutenção em trechos de código escritos há um bom tempo.

Alinhado a isso, atualmente o Visual Studio Code é um excelente editor de texto, com a incrível capacidade de, através das tipagens, aprimorar o seu intellisense, sua inteligência. Dessa forma, acaba por ser extremamente assertivo nas sugestões ao desenvolvedor, principalmente quando enfrentamos erros de tipagem, como no caso abaixo.

```tsx
let foo: string;

foo = "bar";
console.log(foo);

/*
 * Type 'number' is not assignable to type 'String'
 */
foo = 123;
console.log(foo);
```

**Playground de TS:** [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

## Inferência de tipos

Além do TS ser uma linguagem tipificada, como dito anteriormente, assim como outras linguagens modernas como Kotlin e Swift, também possuí um mecanismo de inferência de tipos, ou seja, o intellisense é capaz de determinar sozinho qual é o tipo dos valores os quais estamos lidando. Isso significa que, assinar um tipo a uma variável ou retorno de método, é **redundante** e, salvo casos especiais, devemos evitar**.** Por exemplo:

```tsx
// Evite
const message: string = "Hello World";
// Utilize
const message = "Hello World";
```

Dizer que a constante `message` receberá uma string é **redundante**, pois é uma constante, ou seja, em nenhum momento iremos atribuir outro valor a essa variável. Nesses casos, a linguagem consegue inferir que o tipo da variável `message` é `string`, baseado no valor `Hello World` que foi atribuído.

Com métodos ou funções não é diferente, veja com os seguintes exemplos:

```tsx
// Evite
function sum(a: number, b: number): number {
  return a + b;
}
// Utilize
function sum(a: number, b: number) {
  return a + b;
}

// Evite
const getMe = async (): AxiosResponse<User> => await client.get("/me");
// Utilize
const getMe = async () => await client.get("/me");

// Evite
const greetings = (name: string = "World"): void =>
  console.log(`Hello, ${name}`);
// Utilize
const greetings = (name: string = "World") => console.log(`Hello, ${name}`);
```

Mas como mencionado anteriormente, existem casos que fogem da regra. Esses casos normalmente aparecem quando nosso método é um **trecho de uma abstração**, onde geralmente utilizamos interfaces como meios de **estabelecer contratos de negociação de conteúdos**, informações, ou seja, quando queremos determinar que um método obrigatoriamente deve retornar determinado tipo que será utilizado por outra parte do nosso código.

Em um exemplo mais concreto, vamos supor que arquitetamos uma maneira, um hook, um HoC o qual gerencia o estado de paginação de qualquer requisição. Para isso, nossos métodos de `services` devem retornar um objeto em um formato específico. Esse objeto em um formato específico, nesse caso, pode se chamar **interface de contrato**, pois nosso hook, HoC, ou o que for, espera receber uma função que retorna especificamente aquela interface. Nesse caso em específico, fornecemos uma tipagem de retorno para nosso método.

```tsx
interface PaginationState {
  readonly previousPage?: number;
  readonly page: number;
  readonly nextPage?: number;
}

interface PaginatedServiceContract<T> {
  readonly data: T;
  readonly state: PaginationState;
}

interface MeetingsServiceResponse {
  readonly pagination: PaginationState;
  readonly meetings: Meeting[];
}

async function getMeetingsService(): PaginatedServiceContract<Meeting[]> {
  const {
    data: { meetings: data, pagination: state },
  } = await client.get<MeetingsServiceResponse>("/meetings");
  return {
    data,
    state,
  };
}
```

## Tipificando componentes ReactJS

Não muito diferente de funções comuns, digamos, componentes React são nada mais nada menos que funções que recebem um objeto conhecido por `props` ou `properties` como parâmetro e retornam um conteúdo `JSX`. Nesse caso, se fossemos criar um tipo **genérico** para isso, poderíamos escrever da seguinte forma:

```tsx
type Component<T> = (props: T) => JSX.Element;
```

Quando o assunto se trata de adicionar tipagens a componentes, nossa única responsabilidade é a de informar quais propriedades e eventos determinado componente irá receber na hora de ser utilizado. Conseguimos atingir esse objetivo das seguintes formas:

1. Quando utilizamos `arrow functions`

```javascript
import { FunctionComponent } from "react"

interface Person {
  name: string;
  age: string;
}

interface BarProps {
	person: Person;
  onWakeUp: () => void;
  onSleep: () => void;
}

const Bar: FunctionComponent<BarProps> = ({ person, onWakeUp, onSleep }) => (...)
```

1. Quando utilizamos a keyword `function`

```tsx
interface Person {
  name: string;
  age: string;
}

interface BarProps {
	person: Person;
  onWakeUp: () => void;
  onSleep: () => void;
}

function Bar({ person, onWakeUp, onSleep }: BarProps) {...}
```

**FunctionComponent** é apenas um facilitador que o React fornece para tipificarmos componentes funcionais, quando utilizamos a escrita de `Arrow Functions` atribuídas a uma variável. Por baixo dos panos, ele não é nada complexo. Na maioria dos casos, é de extrema utilidade para que não seja necessário de maneira repetitiva informar que nas propriedades daquele nosso componente existe uma propriedade `children` do tipo `ReactNode`.

```tsx
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts
type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}
```

## Tipos genéricos

Entende-se como tipo genérico todo aquele tipo o qual sabe-se que existe, mas naquele determinado momento é algo indefinido. Podemos utilizar para qualquer coisa, até para evitar o uso do tipo `any`. Porém, normalmente os utilizamos para criar abstrações de código, sejam de outros tipos ou até implementações de fato. Apesar de ser algo extremamente poderoso quando bem utilizado, possuí uma certa curva de aprendizado, então é algo que, como quase tudo dentro do TS, se aprende melhor com exemplos e prática. Algo que ajuda bastante no entendimento é a leitura de um tipo genérico como **"qualquer tipo"** ou **"qualquer coisa"** .

```tsx
type MaybePromise<T> = T | Promise<T>;
type FunctionThatMaybeWillReturnAPromiseOf<T> = () => MaybePromise<T>;
```

Apesar dos nomes compridos, nesse caso acabamos de criar dois tipos utilitários. Um para definir que um determinado valor pode ser **qualquer coisa** ou uma `**Promise` de qualquer coisa\*\* e outro para funções que podem retornar exatamente o tipo criado anteriormente. Sendo assim, nos é permitido os seguintes usos:

```tsx
async function main() {
  const a: FunctionThatMaybeWillReturnAPromiseOf<string> = () => "Hello World";
  const b: FunctionThatMaybeWillReturnAPromiseOf<string> = () =>
    new Promise((resolve) => resolve("Hello World"));

  console.log({
    a: a(),
    b: await b(),
  });
}

main();
```

Outro caso de uso de tipos genéricos é na criação de abstração de implementações, normalmente mais utilizadas em softwares extremamente bem arquitetados, baseados na orientação a objeto, com diagramação de classes e tudo mais. Um exemplo disso é utilizando o mais conhecido ORM para o TS, com suporte a Active Record and Data Mapper, TypeORM. Nele, para criar as próprias implementações de um `Repository`, se extende a classe `Repository<T>` onde `T` deve ser uma classe anotada com o decorator `Entity`.

```tsx
type Nullable<T> = T | null | undefined;

@Entity()
class Naver {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column()
  public name!: string;
}

interface NaversRepository {
  findOneByName(name: string): Promise<Nullable<Naver>>;
}

@EntityRepository(Naver)
class NaversRepositoryImpl
  extends Repository<Naver>
  implements NaversRepository
{
  public async findOneByName(name: string): Promise<Nullable<Naver>> {
    return await this.findOne({ name });
  }
}
```

Além de tudo isso, um tipo genérico pode respeitar uma ou várias restrições. Isso quer dizer que, assim como classes, tipos genéricos podem desfrutar de conceitos como polimorfismo. Para isso, vamos supor que queremos implementar um útil o qual dado determinado valor, ele deve retornar a sua respectiva propriedade `length`.

```tsx
interface Measurable {
  length: number;
}

function getPropertyLengthOf<T extends Measurable>(value: T) {
  return value.length;
}

getPropertyLengthOf("HelloWorld"); // existe `String.prototype.length` ✅
getPropertyLengthOf(["Hello", "World"]); // existe `Array.prototype.length` ✅
getPropertyLengthOf({ length: 5 }); // esse objeto possuí a propriedade length ✅
getPropertyLengthOf(2); // não existe `Number.prototype.length` ❌
```

Enfim, existe uma variedade de aplicações para genéricos. Como dito anteriormente, é algo extremamente poderoso quando bem utilizado dentro do projeto. Mas o principal questionamento é: **quando devo ou posso utilizar genéricos e quando não?** A maneira mais simples de sanar essa dúvida, é tendo como base a construção da seguinte linha de raciocínio:

![Generics Scheme](../../../static/img/typescript/typescript-generics.png)

Um exemplo bem mais palpável do uso de tipos genéricos no dia-a-dia do desenvolvimento com o React, é **na criação de componentes bem abstraídos**, como por exemplo na implementação de design systems, onde tu quer deixar o desenvolvedor livre para utilizar os componentes da forma que os convém, porém precisa haver um contrato, uma regra, uma formato pré estabelecido.

```tsx
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

type Nullable<T> = T | null;

interface Option<T> {
  key: number;
  value: T;
}

interface MyComponentProps<T> {
  options: T[];
  onMapOptionToString(option: T): string;
  onSelectOneOption(option: T): void;
}

function MyComponent<T extends Option<unknown>>({
  options,
  onMapOptionToString,
  onSelectOneOption,
}: MyComponentProps<T>) {
  return (
    <Box>
      {options.map((option) => (
        <Button key={option.key} onClick={() => onSelectOneOption(option)}>
          {onMapOptionToString(option)}
        </Button>
      ))}
    </Box>
  );
}

const options = [
  { key: 0, value: { name: "William" } },
  { key: 1, value: { name: "Danielzinho" } },
  { key: 2, value: { name: "Igão" } },
  // ...
];

function App() {
  const [, setCurrentSelectedOptionKey] = useState<Nullable<number>>(null);

  return (
    <MyComponent
      options={options}
      onMapOptionToString={(option) => option.value.name}
      onSelectOneOption={(option) =>
        setCurrentSelectedOptionKey((previousSelectedOptionKey) =>
          previousSelectedOptionKey !== option.key ? option.key : null
        )
      }
    />
  );
}
```

Assim, contribuímos com um melhor intellisense, consequentemente com uma melhor experiência de desenvolvimento, pois todas as outras propriedades que dependem desse tipo `T extends Option<unkown>` refletirão o valor inferido pela inteligência da linguagem, além de conseguirmos fazer um bom uso desse recurso do TS. Caso tenha despertado a curiosidade do uso de tipos genéricos, dá uma conferida no Handbook:

> **Documentação Generics:** [https://www.typescriptlang.org/docs/handbook/2/generics.html](https://www.typescriptlang.org/docs/handbook/2/generics.html)
