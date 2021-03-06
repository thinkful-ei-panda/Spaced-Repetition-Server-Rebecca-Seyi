module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL
    || 'postgresql://dunder_mifflin@localhost/spaced-repetition',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  API_TOKEN : process.env.API_TOKEN || null, 
};
//password: 52085ce89d1f4c8caa1079299a394dfb73843f28f1e81288e72d0db1adce7c37