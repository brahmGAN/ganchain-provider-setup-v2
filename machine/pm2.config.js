module.exports = {
  apps: [
    {
      name: "machine",
      script: "machine.js",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
      instances: 1,
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
