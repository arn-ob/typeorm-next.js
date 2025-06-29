import Layout from '@/app/ui/layout';
import Projects from '@/app/ui/projects';

export default async function ProjectsView() {

    return (
        <Layout>
            <Projects></Projects>
            <p>After adding projects, reload web page to see server side fetching in nav part. Editing project name updates it.</p>
        </Layout>
    );
}
