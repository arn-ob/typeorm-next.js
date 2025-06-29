import 'reflect-metadata';
import { BaseService } from './baseService';
import { Repository } from 'typeorm';
import { Project } from '@/app/db/entities/Project';

export class ProjectService extends BaseService {
    repo: Repository<Project>;

    async waitForRepo() {
        this.dataSourceReady = await this.dataSource;
        this.repo = this.dataSourceReady.getRepository(Project);
        return this;
    }

    async create(name: string) {
        return this.repo.insert({ name });
    }

    async get(id: string) {
        return this.repo.findOneBy({ id });
    }

    async update(id: string, name: string) {
        await this.repo.update({ id }, { name });
    }

    async getAll() {
        return this.repo.find({
            order: { name: 'ASC' },
        });
    }
}
