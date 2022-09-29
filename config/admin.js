module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1026f515ee846423e0f489407a37da1f'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'mv7TLNdDWfGZJ8MKhyCBBA=='),
  },
});