import express, { Request, Response } from 'express';
import webpack from  'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const config = require('../../webpack.config.js');
const compiler = webpack(config);

const app = express();

// app.get('/', (req: Request, res: Response) => {
//   return res.sendFile(path.resolve(`${__dirname}./index.html`));
// });
app.get('/api', (req: Request, res: Response) => res.send('Not available yet!'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, () => console.log('App is listening on port 3000'));
