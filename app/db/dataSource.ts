'use node';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Project } from './entities/Project';
import { Test } from './entities/Test';
import { loadEnvConfig } from '@next/env';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AutoMigration1751206412670 } from './migrations/1751206412670-AutoMigration';

let options: DataSourceOptions;
const entities = [Project, Test];
// Trying to use file path to all migrations? Forget, it will explode. Doable with asynchronous dynamic class loader, which would make all here asynchronous
const migrations = [AutoMigration1751206412670];

if (!process.env.DATABASE_URL) {
    console.log(`Using hardcoded value because we are not staging or production`);
    const projectDir = process.cwd();
    loadEnvConfig(projectDir, true);
    options = {
        type: 'postgres',
        host: process.env.RDS_HOSTNAME,
        port: Number(process.env.RDS_PORT),
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        // Terraform uses username as database name so we do the same
        database: process.env.RDS_USERNAME,
        entities,
        migrations,
        logging: false,
        synchronize: false,
        migrationsRun: false,
        namingStrategy: new SnakeNamingStrategy(),
    };
} else {
    options = {
        type: 'postgres',
        // Disable SSL mode kind of
        url: process.env.DATABASE_URL.replace('?sslmode=require', ''),
        entities,
        migrations,
        logging: false,
        synchronize: false,
        migrationsRun: false,
        ssl: {
            rejectUnauthorized: false,
            // Prevent Error: self-signed certificate in certificate chain
            allowPartialTrustChain: true,
        },
        namingStrategy: new SnakeNamingStrategy(),
    };
}

const dataSourceOptions: DataSourceOptions = options;

const AppDataSource = new DataSource({
    ...dataSourceOptions,
});

export default AppDataSource;
;
