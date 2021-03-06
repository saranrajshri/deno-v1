import {Application} from "https://deno.land/x/oak/mod.ts"
import router from "./routes/index.ts"

const port = 8000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`server running at ${port}`);
app.listen({port})