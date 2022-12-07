import knex from 'knex';

export default () => {
  const knexInstance = knex({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: '!Chevas1',
      database: 'PostgreSQL 15',
    },
  });

  return knexInstance;
};