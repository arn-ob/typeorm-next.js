import { ProjectService } from '@/app/db/services/projectService';
import Nav from '@/app/ui/nav';

export default async function Layout({ children }) {
    const projectService = await new ProjectService().waitForRepo();
    const projects = await projectService.getAll();

    return (
        <main>
            <div className="pl-20 pr-20">
                <Nav projects={projects} />
                <div className="grid grid-cols-4 mt-6 gap-6">
                    {children}
                </div>
            </div>
        </main>
    );
}
