import { ChangeEvent, useState } from 'react';

export function useForm<T = Record<string, string>>(initialState: Record<keyof T, string>) {
    const [data, setForm] = useState(initialState);

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const key = (target.name)
            ? target.name
            : target.id;

        setForm(prev => ({
            ...prev,
            [key]: target.value
        }));
    };

    const reset = () => {
        setForm(prev=> {
            const obj: any = { };
            const keys = Object.keys(prev);
            keys.forEach(k => obj[k] = '');
            return obj;
        });
    };

    return {
        data,
        reset,
        handleChange,
    };
}
