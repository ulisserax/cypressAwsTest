/// <reference types="cypress" />


describe('Interacting with URL input field', () => {
  it('visiting amazon homepage', () => {
    cy.visit('/');
  })
})

describe('Interacting with search input field', () => {
  it('filling the search bar', () => {
    cy.get('input[id="twotabsearchtextbox').type('shoes').wait(3000);
  })
})

describe('Clicking on the search button to search for the input filled', () =>{
  it('clicking on the submit search button', () => {
    cy.get('div>span>[id="nav-search-submit-button"]').click();
  })
})

describe('Asserting element', () => {
  it('checking searched element', () => {
    cy.get('div>[class="a-color-state a-text-bold"]').should('have.text', '"shoes"');
  })
})

describe('Applying the first search filter', () => {
  it('applying the type of brand filter', () => {
    //cy.get('input[type="checkbox"]').check(['Aquatalia', 'POLO RALPH LAUREN']);
    cy.get('li[id="p_n_feature_eighteen_browse-bin/21451213011"]>span>a>div>label>input[type="checkbox"]').check({force : true});
  })
})

describe('Applying the second search filter', () => {
  it('applying the seller filter', () => {
    cy.get('li[id="p_6/ATVPDKIKX0DER"]>span>a>div>label>input[type="checkbox"]').check({force : true});
  })
})

describe('Applying the third search filter', () => {
  it('applying the price range filter', () => {
    cy.get('#low-price').type('30');
    cy.get('#high-price').type('60');
    cy.get('#a-autoid-1 > .a-button-inner > .a-button-input').click();
  })
})

