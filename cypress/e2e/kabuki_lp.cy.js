describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/') // Akses Page 
  })

  it('Navbar', () => {
    // Validate 'Ambil Promo'
    cy.get('a.brxe-button.header-4__btn.bricks-button.bricks-background-primary')
      .click()
    cy.url().should('include', '/#form-container')
  })

  it('Hero', () => {
    // Validate Form
    cy.get('#name-1')
      .type('Rayhan Ferdinand')
    cy.get('#phone-1')
      .type('081234567890')
    cy.get('#email-1')
      .type('mrayferdinand@gmail.com')
    cy.get('#forminator-module-4047 > div.forminator-row.forminator-row-last > div > div > button')
      .eq(0).click()
    cy.wait(10000)
    cy.url().should('include', '/6283177991778')
  })

  it('Social Proof', () => {
    // Title
    cy.get('#brxe-ybqkmo')
      .invoke('text')
      .should('include', 'Dipercaya Ratusan')
      .and('include', 'Pelanggan di Jakarta')
    
    // Data 1
    cy.get('#brxe-xtnvhe')
      .find('p')
      .should('include.text', 'Pelanggan Puas')

    // Data 2
    cy.get('#brxe-oogbwb')
      .find('p')
      .should('include.text', 'Tahun Berpengalaman')

    // Data 3
    cy.get('#brxe-zwsfrv')
      .find('p')
      .should('include.text', 'Mobil telah mendapatkan proteksi maksimal')

    // Data 4
    cy.get('#brxe-eplbnk')
      .invoke('text')
      .should('include', '9')
      .should('include', 'dari')
      .should('include', '10')
      .should('include', 'pelanggan merekomendasikan')
      .should('include', 'Kabuki')
  })

  it('Urgency', () => {
    // Title
    cy.get('#brxe-dkryvc')
      .find('h3')
      .should('include.text', 'Jangan Abaikan, Goresan Kecil Bisa Jadi Bencana Besar!')

    cy.get('#brxe-ioievf')
      .click()
    cy.url().should('include', '/#form-container')
  })

  it('About Us', () => {
    // Title
    cy.get('#brxe-yvucij')
      .find('h2')
      .should('include.text', 'Ahlinya Proteksi Kendaraan Profesional Terpercaya di Jakarta')

    cy.get('#brxe-eijity')
      .click()
    cy.url().should('include', '/#form-container')
  })

  it('Location', () => {
    // Title
    cy.get('#location > div.brxe-block.single-post-6-hero__container-info.gradient-dark > a')
      .click()
    cy.get('a[href*="maps.app.goo.gl"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .then((href) => {
        cy.request(href).its('status').should('be.oneOf', [200, 301, 302])
      })
  })

  it('Services', () => {
    // Title
    cy.get('#service')
      .scrollIntoView()
    
    const services = [
    { selector: '#brxe-ofgyom'},
    { selector: '#brxe-qontmm'},
    { selector: '#brxe-xvcmnr'},
    { selector: '#brxe-onlyhp'},
    { selector: '#brxe-fzfuuz'}
    ]

    services.forEach(({ selector }) => {
      cy.get(selector).click()
      cy.get('#brxe-jrxitg').should('be.visible')
      cy.get('#service')
        .scrollIntoView()
    })
  })

  it('Portfolio', () => {
    // Title
    cy.get('#kabuki-portfolio-section > div > a')
      .scrollIntoView()
      .click()
    cy.url().should('include', '/#form-container')
  })

  it('Our Work', () => {
    // Validate Form
    cy.get('#brxe-lkuwbh')
      .scrollIntoView()

    const works = [
      { selector: '#brxe-lkuwbh > li:nth-child(1)' },
      { selector: '#brxe-lkuwbh > li:nth-child(2)' },
      { selector: '#brxe-lkuwbh > li:nth-child(3)' },
      { selector: '#brxe-lkuwbh > li:nth-child(4)' }
    ]

    works.forEach(({ selector }) => {
      cy.get(selector).should('be.visible')
    })
  })

  it('Testimonial', () => {
    cy.get('#brxe-zxmpmm').scrollIntoView().click()
    cy.url().should('include', '/#form-container')
  })

  it('Form Lead', () => {
    // Validate Form
    cy.get('#brxe-rwrrro').scrollIntoView()
    cy.get('input[name="name-1"]')
      .eq(1).type('Rayhan Ferdinand')
    cy.get('input[name="phone-1"]')
      .eq(1).type('081234567890')
    cy.get('input[name="email-1"]')
      .eq(1).type('mrayferdinand@gmail.com')
    cy.get('#forminator-module-4047 > div.forminator-row.forminator-row-last > div > div > button')
      .eq(1).click()
    cy.wait(10000)
    cy.url().should('include', '/6283177991778')
  })

  it('More Question', () => {
    // Validate Form
    cy.get('#brxe-hogjml > a').scrollIntoView().click()
    cy.url().should('include', '/#form-container')
  })

  it('F.A.Q.', () => {
    // Validate Form
    cy.get('#kabuki-faq-section')
      .scrollIntoView()

    const button_faq = [
      { selector: '#brxe-zkssed' },
      { selector: '#brxe-evvkwn' },
      { selector: '#brxe-xervuf' },
      { selector: '#brxe-pbsrgo' },
      { selector: '#brxe-kynqfn' }
    ]

    button_faq.forEach(({ selector }) => {
      cy.get(selector).click()
      cy.get('#kabuki-faq-section > div > div > div.brxe-block.faq-3__item.listening.brx-open > div').should('be.visible')
    })
  })
})