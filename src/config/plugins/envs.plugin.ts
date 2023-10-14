
import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    NEON_DB_URL: env.get('NEON_DB_URL').required().asString(),
    PORT: env.get('PORT').required().asPortNumber(),
};
