const { env } = process;

/**
 * Api settings
 */
module.exports = {
    host: env.API_HOST || 'localhost',
    port: env.API_PORT || 3002,
};
