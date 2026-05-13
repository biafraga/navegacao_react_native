# COMANDOS UTILIZANDO RN NAVIGATION

1. `npm install @react-navigation/native` -> Instala as bibliotecas para a utilização do react navigation. 
2. `npx expo install react-native-screens react-native-safe-area-context` -> Isso instalará versões dessas bibliotecas que são compatíveis com a sua versão do Expo SDK.
3. `npm install @react-navigation/stack` -> Instala a biblioteca responsável pela renderização em pilhas.
4. `npx expo start --clear` -> Script que limpa o cache do app. 

## OBSERVAÇÕES
1. index.tsx -> Arquivo obrigatório que irá importar o App.tsx que é onde está a tela principal. Além disso, é onde iremos registrar nossas rotas. O arquivo sempre é no padrão lowercase.
2. App.tsx -> Arquivo obrigatório que irá importar e utilizar o componente da tela inicial do projeto. Fica na pasta src.
3. O arquivo package.json é onde ficam as bibliotecas que você instalou.