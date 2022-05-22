const faker = require('faker');
faker.locale = 'pt_BR';

module.exports = {
    username() {
        return faker.internet.userName();
    },
    firstname() {
        return faker.name.firstName();
    },
    lastname() {
        return faker.name.lastName();
    },
    email() {
        return faker.internet.email();
    },
    password() {
        return faker.internet.password();
    },
    phone() {
        return faker.phone.phoneNumber();
    }
}