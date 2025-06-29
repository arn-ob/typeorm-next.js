import { NextRequest, NextResponse } from 'next/server';
import { getDBConnection } from '@/app/db/connection';

export const GET = async (_: NextRequest) => {
    const dataSource = await getDBConnection();
    const tables: [] = await dataSource.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname='public';");
    // There is one more table in public schema, called migrations
    // This way we check if migrations already run, and number of defined entities is equal number of tables
    const dbHealthy = tables.length === (dataSource.options.entities.length as number) + 1;
    if (!dbHealthy) {
        console.error(`Database is not healthy. Expected ${(dataSource.options.entities.length as number) + 1} tables, but found ${tables.length}`);
    }
    const response = dbHealthy ? 'OK' : 'ERROR';
    const status = dbHealthy ? 200 : 500;
    return new NextResponse(response, { status });
};
