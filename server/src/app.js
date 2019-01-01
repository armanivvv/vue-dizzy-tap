const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
const path = require('path')

const PORT = config.PORT
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// serving static files. Necessary for heroku deployment
app.use(express.static(path.join(__dirname, '../../', 'client/dist')));

require('./passport');


require('./routes')(app);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port);
    // eslint-disable-next-line no-console
    console.log(`Server started on port ${config.port}`);
  });
