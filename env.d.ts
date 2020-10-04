declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REDIRECT_URI: string;
      BOT_NAME: string;
    }
  }
}

export {};
