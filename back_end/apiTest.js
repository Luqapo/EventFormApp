const request = require('supertest');
const app = require('./server');

describe('POST /api/register', function() {
     it('responsed with 400 not created, invalid email', function(done) {
        let data = {
            firstName: 'MAx',
            lastName: 'Kolnako',
            email: 'sasda.pl',
            date: '12-34-5678'
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({"message" : "Invalid email addres"})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, first name required', function(done) {
        let data = {
            firstName: '',
            lastName: 'Kolnako',
            email: 'test@sasda.pl',
            date: '12-34-5678'
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({"message" : "First name is required!"})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, last name required', function(done) {
        let data = {
            firstName: 'Max',
            lastName: '',
            email: 'test@sasda.pl',
            date: '12-34-5678'
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({"message" : "Last name is required!"})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, email required', function(done) {
        let data = {
            firstName: 'Max',
            lastName: 'Kolnako',
            email: '',
            date: '12-34-5678'
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({"message" : "Email is required!"})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, date required', function(done) {
        let data = {
            firstName: 'MAx',
            lastName: 'Kolnako',
            email: 'test@sasda.pl',
            date: ''
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect({"message" : "Date is required!"})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, empty object, ', function(done) {
        let data = {
            
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(function(res) {
                res.body.message.lenght > 0;
              })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 200 created', function(done) {
        let data = {
            firstName: 'MAx',
            lastName: 'Kolnako',
            email: 'test@sasda.pl',
            date: '12-34-5678'
        }
        request(app)
            .post('/api/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({"message" : "Event added."})
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});