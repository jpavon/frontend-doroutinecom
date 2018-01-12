const env = {
    production: {
        API_URL: 'https://restimg.com/public/api',
        APP_URL: 'http://restimg.com',
        HOME_URL: 'http://restimg.com'
    },
    development: {
        API_URL: 'http://192.168.10.10/api',
        APP_URL: 'http://localhost:3000',
        HOME_URL: 'http://localhost:8001'
    }
}

export default env[process.env.NODE_ENV] || env.production
