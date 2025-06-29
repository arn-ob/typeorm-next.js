import { Project } from '@/app/db/entities/Project';

export default async function Nav(props: { projects: Project[] }) {

    return (
        <div className="flex mt-5 bg-blue-foreground items-center h-14 text-sm">
            <ul>
            {props.projects.map((project) => {
                return (
                    <li
                        key={project.id}
                    >
                        {project.name}
                    </li>
                );
            })}
            </ul>
        </div>
    );
}
