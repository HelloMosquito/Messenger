const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiJson = require("chai-json");
const app = require("../app.js");

chai.should();
chai.use(chaiHttp);

//  Regular success case (randomly generate new user)
describe("POST /auth/signup", () => {
  it("It should return 200 and a JSON with {signupSuccess: true}", (done) => {
    let randomUser = Math.round(Math.random() * 1000);
    let task = {
      username: "" + randomUser,
      email: randomUser + "@1.ca",
      password: "111111",
    };
    chai
      .request(app)
      .post("/auth/signup")
      .send(task)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("status");
        response.body.should.have.property("status").eq(0);
        response.body.should.have.property("data");
        response.body.should.have
          .property("data")
          .to.be.an("object")
          .has.a.property("signupSuccess")
          .eq(true);
        done();
      });
  });
});

// Existed email case
describe("POST /auth/signup", () => {
  it("It should return 400 and 'This email has been registered.' ", (done) => {
    let task = {
      username: "5",
      email: "5@1.ca",
      password: "555555",
    };
    chai
      .request(app)
      .post("/auth/signup")
      .send(task)
      .end((err, response) => {
        response.should.have.status(400);
        response.text.should.equal("This email has been registered.");
        done();
      });
  });
});

// Missing username

// Missing email

// Invalid email format

// Missing password
