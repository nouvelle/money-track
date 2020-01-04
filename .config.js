module.exports = {
  // database connection configs
  db: {
    client: "postgresql",
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "moneytrack",
      user: "", // <= Your command line username
      password: "" // <= Your command line password
    }
  }
};
