const Manager = require("../lib/manager");



test("test setting name in the class", () => {
    const person = new Manager("Alex", "002", "alex@example.com", "510")
     expect(person.name).toBe("Alex")

})
test("test setting name in the class", () => {
    const person = new Manager("Alex", "002", "alex@example.com", "510")
     expect(person.id).toBe("002")

})
test("test setting name in the class", () => {
    const person = new Manager("Alex", "002", "alex@example.com", "510")
     expect(person.email).toBe("alex@example.com")

})
test("test setting name in the class", () => {
    const person = new Manager("Alex", "002", "alex@example.com", "510")
     expect(person.officenumber).toBe("510")

})
test("test setting name in the class", () => {
    const person = new Manager("Alex", "002", "alex@example.com", "510")
     expect(person.getOfficeNumber()).toBe("510")
})