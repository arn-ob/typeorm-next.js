'use client';
import Project from '@/app/ui/project';
import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import { getter, poster } from '@/app/lib/fetchers';

export default function Projects() {
    const [newProject, setNewProject] = useState('');

    const { data, mutate } = useSWR(`/api/project`, getter);
    const { trigger } = useSWRMutation('/api/project', poster);

    return (
        <div className="flex flex-col justify-between">
            <p className="text-base">Projects</p>

            {data
                ? data.result.map((x) => {
                      return <Project key={x.id} id={x.id} name={x.name} />;
                  })
                : 'Loading...'}

            <form onSubmit={(ev) => ev.preventDefault()}>
                <div className="flex" key="addNewProject">
                    <TextInput value={newProject} onChange={(e) => setNewProject(e.target.value)} autoFocus />

                    <Button
                        className="ml-4"
                        size={'xs'}
                        color="var(--color-blue-highlight)"
                        variant="outline"
                        type="submit"
                        onClick={async () => {
                            setNewProject('');
                            await trigger({ name: newProject });
                            await mutate();
                        }}
                    >
                        Add new +
                    </Button>
                </div>
            </form>
        </div>
    );
}
