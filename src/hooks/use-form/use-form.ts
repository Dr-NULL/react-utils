import { ChangeEvent, useState } from 'react';

/**
 * ### Description:
 * Creates a hook to handle form changes, and getting easyfully the values of every
 * input.
 * 
 * ### How to use:
 * @example
 * ```tsx
 * export const Component = () => {
 *     // The hook instantiation...
 *     const { data, reset, handleChange } = useForm({ message: null });
 * 
 *     // The template
 *     return (
 *         <form>
 *             <label
 *             htmlFor="message">
 *                 Message here:
 *             </label>
 *   
 *             <input
 *             type="text"
 *             id="message"
 *             value={data.message}
 *             onChange={handleChange} />
 *         </form>
 *     );
 * };
 * ```
 * 
 * @param initialState Inital state of the form, use the id or the name of the
 * input has key, and a string has value.
 * @returns a Hook to handle form state. this hook is an object with 3 keys:
 * @example
 * ```ts
 * interface FormHook {
 *     // This is an object with the current form values.
 *     data: T;
 * 
 *     // This is a function to reset the form.
 *     reset(): void;
 * 
 *     // This is an event to you musto to attach in all inputs.
 *     handleChange(e: FormEvent): void;
 * }
 * ```
 */
export function useForm<T extends Record<string, any>>(initialState: Record<keyof T, any>) {
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
