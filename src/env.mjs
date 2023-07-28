import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Define your environment variables schema here
export const env = createEnv({
  server: {
    // ...
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
  },
  client: {
    // ...
  },
  runtimeEnv: {
    // Assign your environment variables here
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID ?? '',
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET ?? '',
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
