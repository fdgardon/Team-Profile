const Employee = require("../lib/employee");



test("test setting name in the class", () => {
    const person = new Employee("Bob", "001", "bob@example.com")
     expect(person.name).toBe("Bob")

})
test("test setting name in the class", () => {
    const person = new Employee("Bob", "001", "bob@example.com")
     expect(person.id).toBe("001")

})
test("test setting name in the class", () => {
    const person = new Employee("Bob", "001", "bob@example.com")
     expect(person.email).toBe("bob@example.com")

})
test("test setting name in the class", () => {
    const person = new Employee("Bob", "001", "bob@example.com")
     expect(person.getName()).toBe("Bob")

})







