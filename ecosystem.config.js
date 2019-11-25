module.exports = {
  /**
   * @author Abhishar Jangir
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: 'reactgo',
      script: 'server/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
