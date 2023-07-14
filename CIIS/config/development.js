module.exports = {
    app: {
      domain:process.env.DOMAIN||'*',
      port: process.env.SERVER_PORT || 3000,
    },
    database: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "usuario",
      name: process.env.DB_NAME || "app_ciis",
      password: process.env.DB_PASSWORD || "usuario",
      port: process.env.DB_PORT || "3306",
    },
    secret_key: {
      jwt_key: process.env.JWT_PRIVATE_KEY || "C5hCWr@cB<zl6C*]g8sjG7~P@%v9UcXJ",
      recaptcha_key:process.env.KEY_RECAPTCHA||'6LeWTiMnAAAAAK1CzdpM9uIxkn3AoM42OZLpySGR'
    },
  };
  