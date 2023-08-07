describe("Should display Orders on page load", () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
    .intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "dummyOrders"
    })
    .intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      body: '{ id: 4, ingredients: ["beans","steak"], name: "Ben"}'
    })
  });
  
  it("Should have a form to enter and save burritos that persists", () => {
    cy.visit("http://localhost:3000")
    .get('header').contains('h1', 'Burrito Builder')
    .get('from').contains('input', '')
    .get('form').contains('button', 'beans')
    .get('form').contains('button', 'steak')
    .get('form').contains('button', 'carnitas')
    .get('form').contains('button', 'sofritas')
    .get('form').contains('button', 'lettuce')
    .get('form').contains('button', 'queso fresco')
    .get('form').contains('button', 'pico de gallo')
    .get('form').contains('button', 'hot sauce')
    .get('form').contains('button', 'guacamole')
    .get('form').contains('button', 'jalapenos')
    .get('form').contains('button', 'cilantro')
    .get('form').contains('button', 'sour cream')
    .get('form').contains('p', 'Order: Nothing selected')
    .get('form').contains('button', 'Submit Order')
    .get('section').contains('h3', "Pat")
    .get('section').contains('li', "beans")
    .get('section').contains('h3', "Sam")
    .get('section').contains('li', "steak")
    .get('section').contains('h3', "Alex")
    .get('section').contains('li', "sofritas")
    .get('input').type('Ben')
    .get('form').contains('button', 'beans').click()
    .get('form').contains('button', 'steak').click()
    .get('form').contains('button', 'Submit Order').click()
    .get('section').contains('h3',"Ben")
    .get('section').contains('li',"beans")
  });
});
