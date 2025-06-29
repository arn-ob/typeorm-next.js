'use client';
import { ChangeEvent, useState } from 'react';
import { TextInput } from '@mantine/core';
import { putterWithBody } from '@/app/lib/fetchers';
import useSWRMutation from 'swr/mutation';

export default function Project(props: { name: string; id: string }) {
    const [value, setValue] = useState(props.name);

    const { trigger } = useSWRMutation('/api/project', putterWithBody);

    function handler(event: ChangeEvent<HTMLInputElement>) {
        trigger({ name: event.target.value, projectId: props.id });
        setValue(event.target.value);
    }

    return (
        <div key={props.id}>
            <TextInput className="mb-3" value={value} key={props.id} onChange={(event) => handler(event)} />
        </div>
    );
}
