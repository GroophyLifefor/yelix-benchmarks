import { Application, Router } from "@oak/oak";

const router = new Router();

router.get("/api/hello", (ctx) => {
  ctx.response.body = "Hello world";
  ctx.response.status = 200;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3032 });
