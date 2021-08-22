/// <reference types="cypress" />


describe('Teste - Plataforma WEB - 2V', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/endPag')
  })

  
  it('Teste - Selecionar Produto 1: HomePage', () => {
    cy.get(':nth-child(1) > .divInformante > a > .alugarButton').click()
  })

  it('Teste - Selecionar Produto 3: HomePage', () => {
    cy.get(':nth-child(3) > .divInformante > a > .alugarButton').click()
  })

  it('Teste - Acessar Perfil', () => {
    cy.get(':nth-child(2) > .nav-links').click()
    })

  it('Teste - Fazer Login com Email Incorreto', () => {
    cy.get('.nav-links-mobile').click()
    cy.get('[type="text"]').type('testecypressErrado@testecypress.com')
    cy.get('[type="password"]').type('123456')
    cy.get('.BotaoEntrar').click()
    cy.get('.loginContainer > :nth-child(5)').contains('There is no user record corresponding to this identifier. The user may have been deleted.')
  })

  it('Teste - Fazer Login com Senha Incorreta', () => {
    cy.get('.nav-links-mobile').click()
    cy.get('[type="text"]').type('testecypress@testecypress.com')
    cy.get('[type="password"]').type('123455')
    cy.get('.BotaoEntrar').click()
    cy.get('.loginContainer > :nth-child(8)').contains('The password is invalid or the user does not have a password.')
  })
  
  it('Teste - Fazer Login Correto', () => {
    cy.get('.nav-links-mobile').click()
    cy.get('[type="text"]').type('testecypress@teste.com')
    cy.get('[type="password"]').type('123456')
    cy.wait(2000)
    cy.get('.BotaoEntrar').click()
  })
  
  it('Teste - Favoritar', () => {
    cy.get(':nth-child(1) > .divInformante > a > .alugarButton').click()
    cy.get('.heart > svg').click()
  })
    
  it('Teste - Limpar Datas calendário', () => {
    cy.get(':nth-child(1) > .divInformante > a > .alugarButton').click()
    cy.get(' [x1="15"]').click()
  })

  it('Teste - Selecionando Data Calendario', () => {
    cy.get(':nth-child(1) > .divInformante > a > .alugarButton').click()
    cy.get('.react-daterange-picker__calendar-button__icon').click()
    cy.get(':nth-child(26) > abbr').click()
    cy.get(':nth-child(30) > abbr').click()
    cy.get('.dias').contains('Quantidade de dias selecionados:5')
  })

  it('Teste - Conferindo Calculo dos Valores', () => {
    cy.get(':nth-child(10) > .divInformante > a > .alugarButton').click()
    cy.get('.react-daterange-picker__calendar-button__icon').click()
    cy.get(':nth-child(27) > abbr').click()
    cy.get(':nth-child(38) > abbr').click()
    cy.get('.dias').contains('Quantidade de dias selecionados:12')
    cy.get('.valueTotal').contains('Valor Total: R$420')
  })

  it('Teste - Conferindo Titulo do Produto', () => {
    cy.get(':nth-child(9) > .divInformante > a > .alugarButton').click()
    cy.get('.titlePrice > h1').contains('FURADEIRA')
  })

  it('Teste - Conferindo Descrição do Produto', () => {
    cy.get(':nth-child(8) > .divInformante > a > .alugarButton').click()
    cy.get('.description p').contains('Cabana pouco usada')
  })

  it('Teste - Conferindo botao rolar', () => {
    cy.wait(3000)
    cy.scrollTo(0, '100%')
    cy.get('.botaoRolar').click()
  })
  
  it('Teste - Conferindo campo de pesquisa', () => {
    cy.get('input').click()
    cy.get('input').type('Hello, World')
  })

  it('Teste - Conferindo o filtro musica', () => {
    cy.get(':nth-child(6) > .imgF > img').click()
    cy.get('.meio > :nth-child(1)').contains('GUITARRA')
    cy.get('.meio > :nth-child(2)').contains('BATERIA')
    cy.get('.meio > :nth-child(3)').contains('VIOLINO')
  })

  it('Teste - Conferindo igualdade entre home e pagina do produto', () => {

    cy.get(':nth-child(1) > .nomeProduto').invoke('text').then(($value_1) => {
      cy.get(':nth-child(1) > .divInformante > a > .alugarButton').click()
      cy.get('.titlePrice > h1').invoke('text').then(($value_2) => { 
        expect($value_1).to.eq($value_2)}
        )

    })

  })

})
