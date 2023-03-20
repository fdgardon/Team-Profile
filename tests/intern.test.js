const Intern = require("../lib/intern");



test("test setting name in the class", () => {
    const person = new Intern("Logan", "004", "logan@example.com", "BootCamp")
     expect(person.name).toBe("Logan")

})
test("test setting name in the class", () => {
    const person = new Intern("Logan", "004", "logan@example.com", "BootCamp")
     expect(person.id).toBe("004")

})
test("test setting name in the class", () => {
    const person = new Intern("Logan", "004", "logan@example.com", "BootCamp")
     expect(person.email).toBe("logan@example.com")

})
test("test setting name in the class", () => {
    const person = new Intern("Logan", "004", "logan@example.com", "BootCamp")
     expect(person.school).toBe("BootCamp")

})
test("test setting name in the class", () => {
    const person = new Intern("Logan", "004", "logan@example.com", "BootCamp")
     expect(person.getSchool()).toBe("BootCamp")

})