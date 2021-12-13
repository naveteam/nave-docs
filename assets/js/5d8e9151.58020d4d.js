"use strict";(self.webpackChunknave_docs=self.webpackChunknave_docs||[]).push([[769],{3905:function(e,n,o){o.d(n,{Zo:function(){return l},kt:function(){return u}});var a=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=a.createContext({}),m=function(e){var n=a.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(o),u=t,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return o?a.createElement(g,i(i({ref:n},l),{},{components:o})):a.createElement(g,i({ref:n},l))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var m=2;m<r;m++)i[m]=o[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4162:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return l},default:function(){return c}});var a=o(7462),t=o(3366),r=(o(7294),o(3905)),i=["components"],s={},p="Typescript",m={unversionedId:"tecnologia/guides/typescript",id:"tecnologia/guides/typescript",isDocsHomePage:!1,title:"Typescript",description:"Motiva\xe7\xe3o",source:"@site/docs/tecnologia/guides/typescript.md",sourceDirName:"tecnologia/guides",slug:"/tecnologia/guides/typescript",permalink:"/nave-docs/tecnologia/guides/typescript",editUrl:"https://github.com/naveteam/nave-docs/docs/tecnologia/guides/typescript.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/nave-docs/tecnologia/getting-started"},next:{title:"Boilerplates",permalink:"/nave-docs/back-end/guides/boilerplates"}},l=[{value:"Motiva\xe7\xe3o",id:"motiva\xe7\xe3o",children:[]},{value:"Infer\xeancia de tipos",id:"infer\xeancia-de-tipos",children:[]},{value:"Tipificando componentes ReactJS",id:"tipificando-componentes-reactjs",children:[]},{value:"Tipos gen\xe9ricos",id:"tipos-gen\xe9ricos",children:[]},{value:"Interface vs Types",id:"interface-vs-types",children:[]}],d={toc:l};function c(e){var n=e.components,s=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript"},"Typescript"),(0,r.kt)("h2",{id:"motiva\xe7\xe3o"},"Motiva\xe7\xe3o"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TypeScript is\xa0",(0,r.kt)("strong",{parentName:"p"},"JavaScript with syntax for types."))),(0,r.kt)("p",null,"Para facilitar a compreens\xe3o e desmistificar algumas ideias sobre o TS, devemos pensar nele apenas como uma extens\xe3o do JS. Sendo assim, o intuito da linguagem \xe9 de proporcionar o uso de um sistema de tipagem est\xe1tica, o que n\xe3o \xe9 nada novo no mundo da tecnologia. Talvez voc\xea n\xe3o conhe\xe7a esse conceito formalmente, por\xe9m provavelmente j\xe1 teve contato durante seus estudos iniciais na programa\xe7\xe3o. As linguagens mais tradicionais, aquelas as quais utilizamos para estudo de l\xf3gica de programa\xe7\xe3o, como por exemplo C, C++, C# e Java, s\xe3o linguagens tipificadas, ou de tipagem fortemente est\xe1tica. Ou seja, quando declaramos uma vari\xe1vel, implementamos fun\xe7\xf5es ou m\xe9todos de classes, sabemos exatamente o tipo de dado que essa vari\xe1vel ou fun\xe7\xe3o pode receber e at\xe9 mesmo o que ir\xe1 retornar."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exemplo em C da tipifica\xe7\xe3o da linguagem:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'...\nint main() {\n    int foo;\n\n    foo=1;\n    printf("%d", foo);\n\n    // As linhas abaixou resultam em erro pois "foo" s\xf3 pode armazenar um inteiro;\n    // foo="alguma string";\n    // printf("%s", foo);\n\n    return 0;\n}\n...\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exemplo em JS sobre a falta de tipifica\xe7\xe3o:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let foo;\n\nfoo = 1;\nconsole.log(foo);\n\n// O JS "padrao" nao ve nenhum problema nas linhas a seguir\nfoo = "alguma string";\nconsole.log(foo);\n')),(0,r.kt)("p",null,"Em um primeiro momento, a tipifica\xe7\xe3o pode parecer algo que limita a capacidade das vari\xe1veis de mudarem conforme o valor o qual lhes \xe9 atribu\xeddo, ou at\xe9 mesmo acrescenta alguma dificuldade e consome um tempo valioso do desenvolvedor. Entretanto, \xe9 totalmente mensur\xe1vel o quanto ganhamos em termos de escalabilidade do projeto, experiencia de desenvolvimento e facilidade para dar manuten\xe7\xe3o no curto, m\xe9dio e longo prazo. Afinal, quantas vezes j\xe1 foi preciso escrever ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," para entender com qual tipo de dado estamos lidando, quais valores determinado objeto possu\xed, ou at\xe9 mesmo se determinado valor est\xe1 vindo da API como n\xfamero ou string. Al\xe9m disso, muito provavelmente foi preciso acessar cadeias de arquivos para descobrir quais os tipos e valores devem ser passados para nossas fun\xe7\xf5es. O esfor\xe7o de utilizar TS se paga exatamente nesses momentos onde ganhamos agilidade para desenvolver nossas tarefas ou dar manuten\xe7\xe3o em trechos de c\xf3digo escritos h\xe1 um bom tempo."),(0,r.kt)("p",null,"Alinhado a isso, atualmente o Visual Studio Code \xe9 um excelente editor de texto, com a incr\xedvel capacidade de, atrav\xe9s das tipagens, aprimorar o seu intellisense, sua intelig\xeancia. Dessa forma, acaba por ser extremamente assertivo nas sugest\xf5es ao desenvolvedor, principalmente quando enfrentamos erros de tipagem, como no caso abaixo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let foo: string;\n\nfoo = \"bar\";\nconsole.log(foo);\n\n/*\n * Type 'number' is not assignable to type 'String'\n */\nfoo = 123;\nconsole.log(foo);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Playground de TS:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"https://www.typescriptlang.org/play")),(0,r.kt)("h2",{id:"infer\xeancia-de-tipos"},"Infer\xeancia de tipos"),(0,r.kt)("p",null,"Al\xe9m do TS ser uma linguagem tipificada, como dito anteriormente, assim como outras linguagens modernas como Kotlin e Swift, tamb\xe9m possu\xed um mecanismo de infer\xeancia de tipos, ou seja, o intellisense \xe9 capaz de determinar sozinho qual \xe9 o tipo dos valores os quais estamos lidando. Isso significa que, assinar um tipo a uma vari\xe1vel ou retorno de m\xe9todo, \xe9 ",(0,r.kt)("strong",{parentName:"p"},"redundante")," e, salvo casos especiais, devemos evitar",(0,r.kt)("strong",{parentName:"p"},".")," Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// Evite\nconst message: string = "Hello World";\n// Utilize\nconst message = "Hello World";\n')),(0,r.kt)("p",null,"Dizer que a constante ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," receber\xe1 uma string \xe9 ",(0,r.kt)("strong",{parentName:"p"},"redundante"),", pois \xe9 uma constante, ou seja, em nenhum momento iremos atribuir outro valor a essa vari\xe1vel. Nesses casos, a linguagem consegue inferir que o tipo da vari\xe1vel ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," \xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", baseado no valor ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," que foi atribu\xeddo."),(0,r.kt)("p",null,"Com m\xe9todos ou fun\xe7\xf5es n\xe3o \xe9 diferente, veja com os seguintes exemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// Evite\nfunction sum(a: number, b: number): number {\n  return a + b;\n}\n// Utilize\nfunction sum(a: number, b: number) {\n  return a + b;\n}\n\n// Evite\nconst getMe = async (): AxiosResponse<User> => await client.get("/me");\n// Utilize\nconst getMe = async () => await client.get("/me");\n\n// Evite\nconst greetings = (name: string = "World"): void =>\n  console.log(`Hello, ${name}`);\n// Utilize\nconst greetings = (name: string = "World") => console.log(`Hello, ${name}`);\n')),(0,r.kt)("p",null,"Mas como mencionado anteriormente, existem casos que fogem da regra. Esses casos normalmente aparecem quando nosso m\xe9todo \xe9 um ",(0,r.kt)("strong",{parentName:"p"},"trecho de uma abstra\xe7\xe3o"),", onde geralmente utilizamos interfaces como meios de ",(0,r.kt)("strong",{parentName:"p"},"estabelecer contratos de negocia\xe7\xe3o de conte\xfados"),", informa\xe7\xf5es, ou seja, quando queremos determinar que um m\xe9todo obrigatoriamente deve retornar determinado tipo que ser\xe1 utilizado por outra parte do nosso c\xf3digo."),(0,r.kt)("p",null,"Em um exemplo mais concreto, vamos supor que arquitetamos uma maneira, um hook, um HoC o qual gerencia o estado de pagina\xe7\xe3o de qualquer requisi\xe7\xe3o. Para isso, nossos m\xe9todos de ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," devem retornar um objeto em um formato espec\xedfico. Esse objeto em um formato espec\xedfico, nesse caso, pode se chamar ",(0,r.kt)("strong",{parentName:"p"},"interface de contrato"),", pois nosso hook, HoC, ou o que for, espera receber uma fun\xe7\xe3o que retorna especificamente aquela interface. Nesse caso em espec\xedfico, fornecemos uma tipagem de retorno para nosso m\xe9todo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'interface PaginationState {\n  readonly previousPage?: number;\n  readonly page: number;\n  readonly nextPage?: number;\n}\n\ninterface PaginatedServiceContract<T> {\n  readonly data: T;\n  readonly state: PaginationState;\n}\n\ninterface MeetingsServiceResponse {\n  readonly pagination: PaginationState;\n  readonly meetings: Meeting[];\n}\n\nasync function getMeetingsService(): PaginatedServiceContract<Meeting[]> {\n  const {\n    data: { meetings: data, pagination: state },\n  } = await client.get<MeetingsServiceResponse>("/meetings");\n  return {\n    data,\n    state,\n  };\n}\n')),(0,r.kt)("h2",{id:"tipificando-componentes-reactjs"},"Tipificando componentes ReactJS"),(0,r.kt)("p",null,"N\xe3o muito diferente de fun\xe7\xf5es comuns, digamos, componentes React s\xe3o nada mais nada menos que fun\xe7\xf5es que recebem um objeto conhecido por ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," como par\xe2metro e retornam um conte\xfado ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX"),". Nesse caso, se fossemos criar um tipo ",(0,r.kt)("strong",{parentName:"p"},"gen\xe9rico")," para isso, poder\xedamos escrever da seguinte forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Component<T> = (props: T) => JSX.Element;\n")),(0,r.kt)("p",null,"Quando o assunto se trata de adicionar tipagens a componentes, nossa \xfanica responsabilidade \xe9 a de informar quais propriedades e eventos determinado componente ir\xe1 receber na hora de ser utilizado. Conseguimos atingir esse objetivo das seguintes formas:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Quando utilizamos ",(0,r.kt)("inlineCode",{parentName:"li"},"arrow functions"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { FunctionComponent } from "react"\n\ninterface Person {\n  name: string;\n  age: string;\n}\n\ninterface BarProps {\n    person: Person;\n  onWakeUp: () => void;\n  onSleep: () => void;\n}\n\nconst Bar: FunctionComponent<BarProps> = ({ person, onWakeUp, onSleep }) => (...)\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Quando utilizamos a keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"function"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n  name: string;\n  age: string;\n}\n\ninterface BarProps {\n    person: Person;\n  onWakeUp: () => void;\n  onSleep: () => void;\n}\n\nfunction Bar({ person, onWakeUp, onSleep }: BarProps) {...}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FunctionComponent")," \xe9 apenas um facilitador que o React fornece para tipificarmos componentes funcionais, quando utilizamos a escrita de ",(0,r.kt)("inlineCode",{parentName:"p"},"Arrow Functions")," atribu\xeddas a uma vari\xe1vel. Por baixo dos panos, ele n\xe3o \xe9 nada complexo. Na maioria dos casos, \xe9 de extrema utilidade para que n\xe3o seja necess\xe1rio de maneira repetitiva informar que nas propriedades daquele nosso componente existe uma propriedade ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactNode"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts\ntype PropsWithChildren<P> = P & { children?: ReactNode | undefined };\n\ninterface FunctionComponent<P = {}> {\n  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;\n  propTypes?: WeakValidationMap<P> | undefined;\n  contextTypes?: ValidationMap<any> | undefined;\n  defaultProps?: Partial<P> | undefined;\n  displayName?: string | undefined;\n}\n")),(0,r.kt)("h2",{id:"tipos-gen\xe9ricos"},"Tipos gen\xe9ricos"),(0,r.kt)("p",null,"Entende-se como tipo gen\xe9rico todo aquele tipo o qual sabe-se que existe, mas naquele determinado momento \xe9 algo indefinido. Podemos utilizar para qualquer coisa, at\xe9 para evitar o uso do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),". Por\xe9m, normalmente os utilizamos para criar abstra\xe7\xf5es de c\xf3digo, sejam de outros tipos ou at\xe9 implementa\xe7\xf5es de fato. Apesar de ser algo extremamente poderoso quando bem utilizado, possu\xed uma certa curva de aprendizado, ent\xe3o \xe9 algo que, como quase tudo dentro do TS, se aprende melhor com exemplos e pr\xe1tica. Algo que ajuda bastante no entendimento \xe9 a leitura de um tipo gen\xe9rico como ",(0,r.kt)("strong",{parentName:"p"},'"qualquer tipo"')," ou ",(0,r.kt)("strong",{parentName:"p"},'"qualquer coisa"')," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type MaybePromise<T> = T | Promise<T>;\ntype FunctionThatMaybeWillReturnAPromiseOf<T> = () => MaybePromise<T>;\n")),(0,r.kt)("p",null,"Apesar dos nomes compridos, nesse caso acabamos de criar dois tipos utilit\xe1rios. Um para definir que um determinado valor pode ser ",(0,r.kt)("strong",{parentName:"p"},"qualquer coisa")," ou uma ",(0,r.kt)("inlineCode",{parentName:"p"},"**Promise")," de qualquer coisa","*","*"," e outro para fun\xe7\xf5es que podem retornar exatamente o tipo criado anteriormente. Sendo assim, nos \xe9 permitido os seguintes usos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'async function main() {\n  const a: FunctionThatMaybeWillReturnAPromiseOf<string> = () => "Hello World";\n  const b: FunctionThatMaybeWillReturnAPromiseOf<string> = () =>\n    new Promise((resolve) => resolve("Hello World"));\n\n  console.log({\n    a: a(),\n    b: await b(),\n  });\n}\n\nmain();\n')),(0,r.kt)("p",null,"Outro caso de uso de tipos gen\xe9ricos \xe9 na cria\xe7\xe3o de abstra\xe7\xe3o de implementa\xe7\xf5es, normalmente mais utilizadas em softwares extremamente bem arquitetados, baseados na orienta\xe7\xe3o a objeto, com diagrama\xe7\xe3o de classes e tudo mais. Um exemplo disso \xe9 utilizando o mais conhecido ORM para o TS, com suporte a Active Record\xa0and\xa0Data Mapper, TypeORM. Nele, para criar as pr\xf3prias implementa\xe7\xf5es de um ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository"),", se extende a classe ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository<T>")," onde ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," deve ser uma classe anotada com o decorator ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type Nullable<T> = T | null | undefined;\n\n@Entity()\nclass Naver {\n  @PrimaryGeneratedColumn("uuid")\n  public id!: string;\n\n  @Column()\n  public name!: string;\n}\n\ninterface NaversRepository {\n  findOneByName(name: string): Promise<Nullable<Naver>>;\n}\n\n@EntityRepository(Naver)\nclass NaversRepositoryImpl\n  extends Repository<Naver>\n  implements NaversRepository\n{\n  public async findOneByName(name: string): Promise<Nullable<Naver>> {\n    return await this.findOne({ name });\n  }\n}\n')),(0,r.kt)("p",null,"Al\xe9m de tudo isso, um tipo gen\xe9rico pode respeitar uma ou v\xe1rias restri\xe7\xf5es. Isso quer dizer que, assim como classes, tipos gen\xe9ricos podem desfrutar de conceitos como polimorfismo. Para isso, vamos supor que queremos implementar um \xfatil o qual dado determinado valor, ele deve retornar a sua respectiva propriedade ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'interface Measurable {\n  length: number;\n}\n\nfunction getPropertyLengthOf<T extends Measurable>(value: T) {\n  return value.length;\n}\n\ngetPropertyLengthOf("HelloWorld"); // existe `String.prototype.length` \u2705\ngetPropertyLengthOf(["Hello", "World"]); // existe `Array.prototype.length` \u2705\ngetPropertyLengthOf({ length: 5 }); // esse objeto possu\xed a propriedade length \u2705\ngetPropertyLengthOf(2); // n\xe3o existe `Number.prototype.length` \u274c\n')),(0,r.kt)("p",null,"Enfim, existe uma variedade de aplica\xe7\xf5es para gen\xe9ricos. Como dito anteriormente, \xe9 algo extremamente poderoso quando bem utilizado dentro do projeto. Mas o principal questionamento \xe9: ",(0,r.kt)("strong",{parentName:"p"},"quando devo ou posso utilizar gen\xe9ricos e quando n\xe3o?")," A maneira mais simples de sanar essa d\xfavida, \xe9 tendo como base a constru\xe7\xe3o da seguinte linha de racioc\xednio:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generics Scheme",src:o(9713).Z})),(0,r.kt)("p",null,"Um exemplo bem mais palp\xe1vel do uso de tipos gen\xe9ricos no dia-a-dia do desenvolvimento com o React, \xe9 ",(0,r.kt)("strong",{parentName:"p"},"na cria\xe7\xe3o de componentes bem abstra\xeddos"),", como por exemplo na implementa\xe7\xe3o de design systems, onde tu quer deixar o desenvolvedor livre para utilizar os componentes da forma que os conv\xe9m, por\xe9m precisa haver um contrato, uma regra, uma formato pr\xe9 estabelecido."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { Box, Button } from "@chakra-ui/react";\n\ntype Nullable<T> = T | null;\n\ninterface Option<T> {\n  key: number;\n  value: T;\n}\n\ninterface MyComponentProps<T> {\n  options: T[];\n  onMapOptionToString(option: T): string;\n  onSelectOneOption(option: T): void;\n}\n\nfunction MyComponent<T extends Option<unknown>>({\n  options,\n  onMapOptionToString,\n  onSelectOneOption,\n}: MyComponentProps<T>) {\n  return (\n    <Box>\n      {options.map((option) => (\n        <Button key={option.key} onClick={() => onSelectOneOption(option)}>\n          {onMapOptionToString(option)}\n        </Button>\n      ))}\n    </Box>\n  );\n}\n\nconst options = [\n  { key: 0, value: { name: "William" } },\n  { key: 1, value: { name: "Danielzinho" } },\n  { key: 2, value: { name: "Ig\xe3o" } },\n  // ...\n];\n\nfunction App() {\n  const [, setCurrentSelectedOptionKey] = useState<Nullable<number>>(null);\n\n  return (\n    <MyComponent\n      options={options}\n      onMapOptionToString={(option) => option.value.name}\n      onSelectOneOption={(option) =>\n        setCurrentSelectedOptionKey((previousSelectedOptionKey) =>\n          previousSelectedOptionKey !== option.key ? option.key : null\n        )\n      }\n    />\n  );\n}\n')),(0,r.kt)("p",null,"Assim, contribu\xedmos com um melhor intellisense, consequentemente com uma melhor experi\xeancia de desenvolvimento, pois todas as outras propriedades que dependem desse tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"T extends Option<unkown>")," refletir\xe3o o valor inferido pela intelig\xeancia da linguagem, al\xe9m de conseguirmos fazer um bom uso desse recurso do TS. Caso tenha despertado a curiosidade do uso de tipos gen\xe9ricos, d\xe1 uma conferida no Handbook:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Documenta\xe7\xe3o Generics:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"https://www.typescriptlang.org/docs/handbook/2/generics.html"))),(0,r.kt)("h2",{id:"interface-vs-types"},"Interface vs Types"),(0,r.kt)("p",null,"No exemplo anterior utilizamos a interfaces para criar a tipagem do nosso componente. Por\xe9m o TS fornece outras maneiras de criarmos essas tipagens, as principais s\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". Na grande maioria dos casos as duas formas trabalham exatamente da mesma forma, por\xe9m para criarmos uma boa cultura com typescript na Nave, vamos entender quando usar um e quando usar outro. Nos exemplos da documenta\xe7\xe3o do do pr\xf3prio TS \xe9 feita a recomenda\xe7\xe3o de a maioria dos casos se usar ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),", isso se deve a forma com que eles apresentam os erros na hora do desenvolvimento, em que interface acaba sendo mais objetivo nesse ponto."),(0,r.kt)("p",null,"Segue o exemplo utilizado na doc para corroborar com essa decis\xe3o:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/pt/play?#code/PTAEFEA8EsGcBcCmBbUATA9nU9oAcNZQ8AnaAOwGN8BDbPGkm9RSgG0cdGYDMMTkzNIlABXZAFgAUCFAYARgCtE8DAC5QFJCR41KiIiNwFYAOmnTZ4NgdCwAxxlDyUxRq2iZDbpt1CDofmghQlBKGlhCSzAeUSpA8hpUNGZkA0FQPgEacylpeABPPBEAFXwMAAUI2EYnAF5QAG9pUG4a2A0AJgBuaQBfXrypLUQdPREASXJtXX0q2BqSJ2apVoiIrsG+iylKDHIENwXagEYNMoJ5xfqmto3QTtAB6T2D+CPrzo0pmfGr2tADUadw6Dyeg2ioAq-AAjqIRE4SkUDJQyHh3gBLsSoWBwJAZYQ4WgAc1cBngJFE8FETDYkKxJlgAFuAG6INj+PE0rhOWCIURiSI4JLyDHIXIvfaHBjHJYAZm+01Gs0Q-yWgI+pwhMjAAEFkPJQrBRAQSPAkn5EJAkAdHCw5FSmEQRmN9N5jIRcrIAPJED1EXQAL1ccCFNApNBZGKIKU0SpIfIA53bCf6ADSQxDkOE0aZOF0qoiM+GocTMBgcFlMAC0lAAFpHEBKpIViqAAML8USKZhA0DkDDUkgDjQU+FPUAAMlAF0q1Vqg1bIgASgoKBrgQOhyPMjQ2HyJ9Ofsq-vOltqC+MoZGaE4rTa0ERZ2rli0whg2EFMKPKYhBq0WQwGgNF0fc-36aRL30UAAHE9woBtQHvLNH1AY9XVVM9X1Wd9PzIb9dzA-9QEA4DCL5LYdhsd49kpHsNE7Oje1udZQU6NN+0HGkdzHERnikajQGJeDyAbDQ4LYBDmOBViug4vY8M8dRyMQDjSJAvcD34yEShQpw0GgVRNAWJxyAAZ6IEhWAwNJyBSZBQkAygACu-FERY41+N1uHzcgoxjIxyjMSFwFgYpqD3WykGIWFxyc1yrP0Fx-HZOt+FsWyalJA57VGJYvTAABlEQZQ8pwHPckRInkKy5CQkgljUjAXJiwk2RIORDAa0I4QRGdkVgVF8HgSEAgDZqaC8HxmCg2w9gcvwJKk5taO7ZjhMk0SaEGDapI1Vae21WQAFUCQifw6HSmNoB4UYs0Tc6swpQKTCQzyT28rFeshWaiAcJwaBcM1HqJV7-syVgGy8Aq0JMuxoGJcgbvCUBepI5rXIIQlkLs0Z3owgL2E4OyMEhMs7EQYk4ljNlA2bWbYPDbDWiWchWbIw0P0QXNKKGBm4KMlZWlojQEDIchiV5yFoQ6jBHScDhMFB0JyDtLHXD5Dq920SbQiyGhIVjUgzNIYIWCJphkwwZsl1AAAxaA2DS6KgTfEW7ApChJf6bVbYdp3BxEV2cJqiheq8DRyHEIGtiOsAABFEGKXGSfQI1+SIBRlFwQDDGOdAbru8gHtaqrRkhExDOgFlmDl-tKfDauclAAA5O9plzTAOIYXwrVNTrlaLUR5Ek8IosQekUoDjqIwOLJkAAQ+rT9DFQX7m1kTsFvENOiDSafbESmlIiLTgSLx1QptCcIT-tdzSZ1e1-RI5140LDjEpslCklCAwahwOsVlJpp1AIVc0lAADWGB2o8E-AAd0hPNJwO9DSoAIHme0PdcApDUDsWQdZ4DwDwB0EACA9BQJgfA0w81gC9QQAkWAwA5QAHZOhyhYXKAArMAJcg00TwGrL9asLJYDVl4cAThnQABsAAOTo8iAAMABiSRsj5GdAUdIIAA"},"TS Playground - An online editor for exploring TypeScript and JavaScript"))),(0,r.kt)("p",null,"Mas quando saber o que deve ser usado para criar uma tipagem ou uma interface de dados? Pensando em criarmos um alinhamento para nossa cultura de desenvolvimento dentro da Nave com typescript, vamos pensar um pouco em programa\xe7\xe3o orientada a objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"(POO)")," e entender o motivo ideal de se usar ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaces")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"types"),"."),(0,r.kt)("p",null,"Ent\xe3o pensando em POO, ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \xe9 uma defini\xe7\xe3o de uma classe, e nela define tudo que pode ser utilizado dentro dessa mesma classe. Em typescript n\xe3o muda o conceito, qualquer componente ou fun\xe7\xe3o que retorna ou recebe uma interface, pelo typescript conseguimos ter acesso as propriedades definidas atrav\xe9s do ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"intellisense"),",")," se tentar acessar alguma propriedade n\xe3o definida, ser\xe1 mostrado um erro sobre ela. Agora pensando em ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," , eles s\xe3o para definir o tipo de uma propriedade dentro de uma interface ou uma vari\xe1vel, deve-se pensar como os tipos primitivos do javascript (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", etc), mas tamb\xe9m podemos criar um objeto de dados para esse tipo, mas que ele seja usado no mesmo formato falado acima. A seguir temos exemplos no c\xf3digo para utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaces")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," ."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Um exemplo pr\xe1tico de uso em conjunto de ",(0,r.kt)("inlineCode",{parentName:"li"},"interfaces")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"types"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type StatusStoreTypes = "open" | "closed"\n\ninterface StoreProps {\n    storeStatus: StatusStoreTypes, // s\xf3 pode receber o valor "open" ou "closed"\n    storeName: string\n}\n\nconst storeData = (): StoreProps => {\n    ...\n// essa fun\xe7\xe3o vai retornar os dados no formato da interface\n// informada acima para o retorno da fun\xe7\xe3o\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Adicionando uma ",(0,r.kt)("inlineCode",{parentName:"li"},"interface")," para um componente ",(0,r.kt)("inlineCode",{parentName:"li"},"React"))),(0,r.kt)("p",null,"Para utilizar as propriedades em um componente, pensando em passar dados de um componente pai para um componente filho, conhecido como ",(0,r.kt)("inlineCode",{parentName:"p"},"Prop Drilling"),", podemos utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaces")," para criar essas propriedades padr\xf5es e que podem ser concatenadas com o propriedades do ",(0,r.kt)("inlineCode",{parentName:"p"},"React Funcional Components")," , s\xf3 precisa passar no gen\xe9rico do ",(0,r.kt)("inlineCode",{parentName:"p"},"React.FC"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const ComponentA: React.FC<StoreProps> = ({ storeName, children, ...props}) => ...\n// Podem ser acessadas na desestrutura\xe7\xe3o propriedades da interface\n// e propriedades do React Funcional Components, como a prop children\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sempre utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaces")," para as propriedades de componentes, retorno de fun\xe7\xf5es e Generics.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Quando usar ",(0,r.kt)("inlineCode",{parentName:"li"},"types"),"?")),(0,r.kt)("p",null,"Mesmo que ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," funcione da mesma forma que ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaces"),", como falado acima, devemos somente usar para definir um tipo de uma propriedade e para variaveis, mesmo que seja um objeto, veja os exemplos a seguir."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type StudentProps = {\n  name: string\n  classId: string\n}\n\ninterface SchoolProps {\n  students: Array<StudentProps>\n  ...\n}\n\nlet student: StudentProps = { name: 'Daniel Nu\xf1ez', classId: '87344-384dasda-dada83488-afasdff' }\n")))}c.isMDXComponent=!0},9713:function(e,n,o){n.Z=o.p+"assets/images/typescript-generics-fda7d515ebe38c7339dc73cd1ecffe92.png"}}]);