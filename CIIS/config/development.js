module.exports = {
  app: {
    domain: process.env.DOMAIN || "*",
    port: process.env.SERVER_PORT || 3000,
  },
  database: {
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "usuario",
    name: process.env.DB_NAME || "app_ciis",
    password: process.env.DB_PASSWORD || "usuario",
    port: process.env.DB_SERVER_PORT || "3306",
  },
  secret_key: {
    jwt_key: process.env.JWT_PRIVATE_KEY || "C5hCWr@cB<zl6C*]g8sjG7~P@%v9UcXJ",
    recaptcha_key:
      process.env.KEY_RECAPTCHA || "6LeWTiMnAAAAAK1CzdpM9uIxkn3AoM42OZLpySGR",
    client_id: process.env.CLIENT_ID || "843324626525-s58kork07c87lkb9tcr1u1bqogrl509f.apps.googleusercontent.com",
    client_secret_key: process.env.CLIENT_SECRET_KEY||"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",
    refresh_token_email: process.env.REFRESH_TOKEN_EMAIL||'1//04bGyAgLGMnyHCgYIARAAGAQSNwF-L9IrTsRBNQYXRhsFBo0qZxmG14AQWxCdzms2sR1K6JFgS9Tp4MEN6Az9Ez9ewRxOFKVBFi0',
  },
};
