/// <reference types="cypress" />

describe('Dashboard E2E', () => {
  beforeEach(() => {
    // Remplace par l'URL locale de ton app
    cy.visit('http://localhost:3000/dashboard');
  });

  it('affiche le titre et les cartes', () => {
    // Vérifie le texte principal
    cy.contains('Mes évènements').should('be.visible');

    // Vérifie qu’il y a 3 cartes d’événement
    cy.get('ul > li').should('have.length', 3);

    // Vérifie que la première carte contient "Concert"
    cy.get('ul > li').first().contains('Concert');
  });

  it('ouvre et ferme le modal', () => {
    // Ouvre le modal
    cy.contains('Ajouter un événement').first().click();

    // Vérifie que le modal est visible
    cy.contains('Ajouter un évènement').should('be.visible');

    // Ferme le modal
    cy.get('[aria-label="Fermer la modal"]').click();
    cy.contains('Ajouter un évènement').should('not.exist');
  });

  it('le premier champ du modal reçoit le focus', () => {
    // Ouvre le modal
    cy.contains('Ajouter un événement').first().click();

    // Vérifie que le premier input est focus
    cy.get('input[placeholder="Nom de l\'évènement"]').should('have.focus');
  });
});
