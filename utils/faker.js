const faker = require('@faker-js/faker').faker;

class Faker{

fakerFirstName(){
    return faker.person.firstName();
}

fakerLastName(){
    return faker.person.lastName();
}

fakerEmailAddress(){
    return faker.internet.email();
}





}

module.exports = new Faker();