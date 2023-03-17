const Engineer = require("../lib/engineer");



test("test setting name in the class", () => {
    const person = new Engineer("David", "003", "david@example.com", "GitHubUser")
     expect(person.name).toBe("David")

})
test("test setting name in the class", () => {
    const person = new Engineer("David", "003", "david@example.com", "GitHubUser")
     expect(person.id).toBe("003")

})
test("test setting name in the class", () => {
    const person = new Engineer("David", "003", "david@example.com", "GitHubUser")
     expect(person.email).toBe("david@example.com")

})
test("test setting name in the class", () => {
    const person = new Engineer("David", "003", "david@example.com", "GitHubUser")
     expect(person.github).toBe("GitHubUser")

})
test("test setting name in the class", () => {
    const person = new Engineer("David", "003", "david@example.com", "GitHubUser")
     expect(person.getGithub()).toBe("GitHubUser")

})