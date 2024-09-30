import { Application } from 'oak';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello CFW!';
});

export default { fetch: app.fetch };
