module.exports = {
  apps: [
    {
      name: "machine",
      script: "machine.js",
      env_file: "default.env",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
      instances: 1,
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
