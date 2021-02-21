const People = require('../models/people.model');

class PeopleService {
  async add(name) {
    return People.create({
      name,
    });
  }

  async list() {
    return People.findAll({ raw: true });
  }
}

const peopleService = new PeopleService();
module.exports = peopleService;
