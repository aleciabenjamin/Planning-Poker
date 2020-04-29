const models = require("../models");
const app = require("../app");
const faker = require("faker");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe.only("Poker!", () => {
  const firstName = faker.name.firstName();
  const company = faker.company.companyName();

  const session = models.SessionType.findOne({
    where: { title: "Fibonacci" },
  }).then((session) => {
    chai
      .request(app)
      .post("/poker")
      .send({
        title: company,
        creatorName: firstName,
        SessionTypeId: session.id,
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.creatorName).to.equal(firstName);
        expect(res.body.title).to.equal(company);
        expect(res.body.sessionTypeId).to.equal(session.id);
        document();
      });
  });
});