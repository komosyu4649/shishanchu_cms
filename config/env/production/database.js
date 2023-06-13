module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-157.railway.app"),
      port: env.int("PGPORT", 6641),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "CpelJzcD7nuCXjHMWE1Z"),
      ssl: env.bool(true),
    },
  },
});
