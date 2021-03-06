# Plataforma WEB - 2V

## Link para a Plataforma
https://if977-plataformaweb.firebaseapp.com/


## Link para a Publicação no Medium
https://gavs2.medium.com/projeto-geral-engenharia-de-software-b78ab2d5571b



## Contexto Geral
 Projeto da disciplina de Engenharia de Software que tem como objetivo apresentar uma Plataforma WEB criada com o intuito de possibilitar que as pessoas possam emprestar produtos que estão ociosos em suas residências ou que possam alugar algum produto, pois não desejam adquirí-lo de forma definitiva (Seja pelo fato de precisá-lo apenas esporadicamente, por questão financeira ou por que é algo que ocupa muito espaço para se ter de forma definitiva em casa).


<br></br>
<p align="center">
  <img src="src\Views\EndPag\imgs\logoReadme.png" width="200">
</p>
<br></br>

## Detalhes da Plataforma
#### Tecnologias Utilizadas
Para desenvolvimento da plataforma, utilizamos o ReactJs no frontend, pois possui ferramentas excelentes para criação de interfaces e possui integração com diversas bibliotecas do JavaScript. Outra vantagem é a popularidade que essa ferramenta vem ganhando no mercado de trabalho.

No backend, utilizamos o Firebase, pois ele oferecia tudo que precisávamos, como Database, Storage, Sistema de Autenticação para Login e até mesmo Deploy.

#### Sobre a plataforma
Trata-se de uma aplicação onde os usuários podem emprestar ou pedir emprestado itens, de diversas categorias, de forma centralizada e com custo abaixo do mercado.

#### Páginas Desenvolvidas
As páginas da plataforma são:
- Home, com os principais produtos e filtro de busca;
- Perfil, com as informações do usuário logado na plataforma;
- Produto, página com as informações detalhadas do produto, e
- Login, página principal para login do usuário na plataforma.

## Testes Realizados
Com o objetivo de aplicar alguns testes na plataforma desenvolvida, foram realizadas simulações de ações que o usuário poderia fazer e também foram verificadas as respostas do software após os comandos dados pelo usuário.

Foram realizados os Seguintes Teste:

- Selecionar produtos apresentados da HomePage
- Acessar Perfil do Usuário
- Tentar Fazer Login com Email Incorreto
- Tentar Fazer Login com Senha Incorreta
- Fazer Login com Dados Corretos
- Clicar no Botão de Favoritar
- Limpar Seleção de Datas no Calendario da Página do Produto
- Selecionar Datas no Calendario da Página do Produto
- Conferir Calculo dos Valores com base no Preço e Dias selecionados.
- Conferir Titulo do Produto
- Conferir Descrição do Produto
- Conferir Botão rolar da página home.
- Conferir Filtro de busca com categoria música.
- Equiparar informações do "nome do produto" e "preço" entre página produto e home.
- Conferir campo de pesquisa na barra de busca.

## Códigos Prontos - Reaproveitados

- Página do Produto: https://github.com/rocketseat-content/youtube-clone-mercadolivre
- Página de Login: https://www.youtube.com/watch?v=cFgoSrOui2M
- Calendário da Página de Produto: https://github.com/wojtekmaj/react-daterange-picker
- Navbar: https://github.com/briancodex/react-navbar-dropdown

Todos os códigos citados a cima, sofreram modificações de estrutura e de estilização para se adequar ao projeto da disciplina.


## Detalhes da Construção do Projeto
Para construção da plataforma várias reuniões através do Google Meet foram realizadas e o Trello foi a ferramenta escolhida pelo grupo para acompanhamento de todas as etapas do projeto de desenvolvimento do software. Abaixo segue o resumo dos assuntos tratados em cada encontro:


- 14/06/2021: Identificação da Personas
- 21/06/2021: Identificação das Oportunidades
- 28/06/2021: Proposição de Hipóteses
- 05/07/2021: Criação de Narrativas
- 28/07/2021: Desenvolvimento da Versão Inicial da Tela de Login(Autenteicação)
- 04/08/2021: Definição da Telas a serem realizadas e Divisão da Tarefas
- 09/08/2021: Apresentação dos Protótipos e Definição da Melhorias a serem Desenvolvidas
- 17/08/2021: Apresentação das Melhorias realizadas e Definição de como Realizar Integração com o Banco de Dados
- 18/08/2021: Definição das Últimas Melhorias a serem implantadas e dos Testes a serem realizados


## Como as atividades foram organizadas?
#### Quadro SCRUM
<br>
<p align="center">
  <img src="src\assets\images\trello.png" width="1000">
</p>
<br>
Backlog -> Principais requisitos do projeto e que podem ser executadas a qualquer momento.<br/>
Working On -> Atividades que estavam sendo executadas.<br/>
Tests -> Realização de testes.<br/>
Done -> Atividades concluídas.<br/>

## Melhorias Pendentes
Tendo em vista que o projeto pode evoluir bastante, abaixo serão discriminados os pontos de melhorias futuras:

- Criação de Página para Cadastro de Produtos e Criação de Anúncio
- Criação de Página para Cadastro de Perfil do Usuário
- Criação de Página para Termos de Garantia
- Criação de Campo para Perguntas e Respostas na Página do Produto
- Criação de Página para Confirmar Solicitação de Empréstimo do Produto
- Aprimorar Campo para Feedback do Usuário na Página do Produto
- Criação de Link para Permitir Compartilhar o Produto
- Aprimorar Campo de Buscas
- Aprimorar Login do Usuário (Permitir Login com conta do GMAIL)
- Permitir novos filtros além do já criado "Categoria de Produto" (Valor, Localização)

## Comandos para execução

- Clonar o repositório:
<pre>git clone https://github.com/danielturmina/Projeto-IF977</pre> 

- Instale as depedências do ReactJs:
<pre>npm install
ou
yarn install </pre> 

- Execute:
<pre>npm start
ou
yarn start </pre> 

## Time

| <img src="https://avatars.githubusercontent.com/u/50000444?v=4" width="100px;" alt="Yuri Barros"/><br>Yuri Barros<br><ycb@cin.ufpe.br>|<img src="https://avatars.githubusercontent.com/u/51493065?v=4" width="100px;" alt="Giovani Albuquerque"/> <br>Giovani Albuquerque<br><gavs2@cin.ufpe.br>|<img src="https://avatars.githubusercontent.com/u/54999186?v=4" width="100px;" alt="Yuri Alencar"/> <br>Yuri Alencar<br><yral@cin.ufpe.br>|<img src="https://avatars.githubusercontent.com/u/54449053?v=4" width="100px;" alt="Daniel Turmina"/> <br>Daniel Turmina<br><dft@cin.ufpe.br> |<img src="https://avatars.githubusercontent.com/u/23541859?v=4" width="100px;" alt="Victor Barros"/> <br>Victor Barros<br><vbmn@cin.ufpe.br>|
|-|-|-|-|-|
