import { DataSource } from 'typeorm';
import dataSource from '@/app/db/dataSource';

export const getDBConnection = async (): Promise<DataSource> => {
    if (!dataSource.isInitialized) {
        await dataSource.initialize();
    }
    return dataSource;
};
