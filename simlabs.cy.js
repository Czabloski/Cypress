describe('Login e registro de usuarios alura pic', () => {
    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
    })
  
    it('verifica mensagens validacao', () => {
      cy.contains('a', 'Register now').click()
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })
    it('Verifica mensagens de email invalido', () => {
      cy.contains('a', 'Register now').click()
      cy.contains('button', 'Register').click()
      cy.get('input[formcontrolname="email"]').type('Cristal')
      cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })
    it('Verifica mensagens de senha com menos de 8 caracteres', () => {
      cy.contains('a', 'Register now').click()
      cy.contains('button', 'Register').click()
      cy.get('input[formcontrolname="password"]').type('1234')
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })
  
    it('Verificar username com letra maiuscula', () => {
      cy.contains('a', 'Register now').click()
      cy.contains('button', 'Register').click()
      cy.get('input[formcontrolname="userName"]').type('Beyonce')
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })
  })