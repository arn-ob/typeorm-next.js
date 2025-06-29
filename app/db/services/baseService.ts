import 'reflect-metadata';
import { getDBConnection } from '@/app/db/connection';
import { DataSource } from 'typeorm';

export class BaseService {
    dataSource: Promise<DataSource>;
    dataSourceReady: DataSource;

    constructor() {
        this.dataSource = getDBConnection();
    }

    async destroy() {
        await this.dataSourceReady.destroy();
    }
}
