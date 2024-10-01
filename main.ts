import mongoose from 'mongoose';
import { Application } from '@oak/oak';

console.log(mongoose);

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello CFW!';
});

export default { fetch: app.fetch };
