const users = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Kurtis Weissnat",
  "Nicholas Runolfsdottir V",
  "Glenna Reichert",
  "Clementina DuBuque",
]

const post_title =
  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"

describe("Home page", () => {
  it("should have one post per user", () => {
    cy.visit("http://localhost:3000")

    cy.get("h2").contains("Todas as publicações")

    cy.get("a > small").each((element, index) => {
      cy.wrap(element).should("contain.text", users[index])
    })
  })

  it("should have links to /posts", () => {
    cy.visit("http://localhost:3000")

    cy.get("a > strong").first().click()

    cy.url().should("include", "/posts")

    cy.get("h2").should("contain.text", post_title)
  })
})
