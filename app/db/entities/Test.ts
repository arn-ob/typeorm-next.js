import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { Project } from './Project';

@Entity()
@Unique(['project', 'name'])
export class Test {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne('Project', 'id', { nullable: false })
    project: Project;

    @Column({ nullable: false })
    name: string;

    @Column({
        type: 'int',
        generated: 'identity',
        generatedIdentity: 'ALWAYS',
    })
    clusteredId: number;
}
