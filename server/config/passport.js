const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Faculty = require('../models/faculty');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            const faculty = await Faculty.findById(jwt_payload.id)
            if (err) {
                return done(err, false);
            }
            if (faculty) {
                return done(null, faculty);
            }
            else {
                return done(null, false);
            }    
        }
        )
    )
};
