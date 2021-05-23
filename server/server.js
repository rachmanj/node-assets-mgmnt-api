const express = require('express');
const app = express();

const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const { handleError, convertToApiError } = require('./middleware/apiError');

const mongoUri = 'mongodb://localhost:27017/assets_db';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

/// body parse
app.use(express.json());

/// sanitize
app.use(xss());
app.use(mongoSanitize());

//passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

/// routes
app.use('/api', routes);

//handle error
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
