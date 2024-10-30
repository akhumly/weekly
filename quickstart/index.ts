import figlet from "figlet";
import { db } from "./db";
import { sql} from "drizzle-orm";
import * as schema from "./schema";


const result = await db.select().from(schema.movies);
console.log(result);

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        // const body = figlet.textSync(result);
        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json" }
        });
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);

  console.log(Bun.version);