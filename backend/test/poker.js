const models = require("../models");
const app = require("../app");
const faker = require("faker");
const chai = require("chai");
const chaiHttp = require("chai-http");
const uuid = require("uuid").v4;

const { expect } = chai;
chai.use(chaiHttp);
describe.only("Poker", () => {
  it("Create Session", (done) => {
    const firstName = faker.name.firstName();
    const company = faker.company.companyName();

    models.SessionType.findOne({
      where: { title: "Fibonacci" },
    }).then((session) => {
      chai
        .request(app)
        .post("/poker/")
        .send({
          title: company,
          creatorName: firstName,
          sessionTypeId: session.id,
          uuid: uuid(),
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.creatorName).to.equal(firstName);
          expect(res.body.title).to.equal(company);
          expect(res.body.sessionTypeId).to.equal(session.id);
          done();
        });
    });
  });

  it("Fetch Session", (done) => {
    const { Session, SessionType } = models;
    const sessionType = { title: "T-Shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
      uuid: uuid(),
    };
    let sessionId = -1;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        sessionId = resp.id;
        return Session.create(session);
      })
      .then((resp) => {
        chai
          .request(app)
          .get(`/poker/${resp.id}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.creatorName).to.equal(session.creatorName);
            expect(res.body.title).to.equal(session.title);
            expect(res.body.sessionTypeId).to.equal(sessionId);
            done();
          });
      });
  });

  it("Fetch Session by uuid", (done) => {
    const { Session, SessionType } = models;
    const sessionType = { title: "T-Shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
      uuid: uuid(),
    };
    let sessionId = -1;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        sessionId = resp.id;
        return Session.create(session);
      })
      .then((resp) => {
        chai
          .request(app)
          .get(`/poker/uuid/${session.uuid}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.creatorName).to.equal(session.creatorName);
            expect(res.body.title).to.equal(session.title);
            expect(res.body.sessionTypeId).to.equal(sessionId);
            done();
          });
      });
  });

  it("Save multiple session polls", (done) => {
    const pollData = () => {
      return {
        userName: faker.name.firstName(),
        poll: faker.random.arrayElement(["XS", "S", "M", "L", "XL", "XXL"]),
      };
    };
    const sessionType = { title: "T-Shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
      uuid: uuid(),
    };
    let sessionId = -1;
    const payload = [pollData(), pollData(), pollData()];
    const pollToSession = (sessionId, data) => {
      return new Promise((resolve, reject) => {
        return chai
          .request(app)
          .post(`/poker/${sessionId}/poll`)
          .send(data)
          .then((res) => {
            return resolve(res);
          });
      });
    };

    const { Session, SessionType } = models;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        sessionId = resp.id;
        return Session.create(session);
      })
      .then((resp) => {
        return Promise.all([
          pollToSession(resp.id, payload[0]),
          pollToSession(resp.id, payload[1]),
          pollToSession(resp.id, payload[2]),
        ]);
      })
      .then((res) => {
        expect(res.length).to.equal(3);

        expect(res[0]).to.have.status(200);
        expect(res[0].body.userName).to.equal(payload[0].userName);
        expect(res[0].body.creatorName).to.equal(payload[0].creatorName);

        expect(res[1]).to.have.status(200);
        expect(res[1].body.userName).to.equal(payload[1].userName);
        expect(res[1].body.creatorName).to.equal(payload[1].creatorName);

        expect(res[2]).to.have.status(200);
        expect(res[2].body.userName).to.equal(payload[2].userName);
        expect(res[2].body.creatorName).to.equal(payload[2].creatorName);
        done();
      });
  });

  it("Fetch all session polls", (done) => {
    const pollData = () => {
      return {
        userName: faker.name.firstName(),
        poll: faker.random.arrayElement(["XS", "S", "M", "L", "XL", "XXL"]),
      };
    };
    const sessionType = { title: "T-Shirts" };
    let session = {
      title: faker.company.companyName(),
			creatorName: faker.name.firstName(),
			uuid: uuid(),
    };
    let sessionId = -1;
    const payload = [pollData(), pollData(), pollData()];
    const pollToSession = (sessionId, data) =>
      Polling.create({ ...data, sessionId });

    const { Session, SessionType, Polling } = models;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        return Session.create(session);
      })
      .then((resp) => {
        sessionId = resp.id;
        return Promise.all([
          pollToSession(resp.id, payload[0]),
          pollToSession(resp.id, payload[1]),
          pollToSession(resp.id, payload[2]),
        ]);
      })
      .then((res) => {
        chai
          .request(app)
          .get(`/poker/${sessionId}/poll`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(3);

            expect(res.body[0].userName).to.equal(payload[0].userName);
            expect(res.body[0].creatorName).to.equal(payload[0].creatorName);
            expect(res.body[1].userName).to.equal(payload[1].userName);
            expect(res.body[1].creatorName).to.equal(payload[1].creatorName);
            expect(res.body[2].userName).to.equal(payload[2].userName);
            expect(res.body[2].creatorName).to.equal(payload[2].creatorName);
            done();
          });
      });
	});

	it("Fetch a session type", (done) => {
    chai
      .request(app)
      .get(`/poker/sessionTypes`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body[0].title).to.be.oneOf(["Fibonacci", "T-Shirts"]);
        expect(res.body[1].title).to.be.oneOf(["Fibonacci", "T-Shirts"]);
        done();
      });
  });
});
