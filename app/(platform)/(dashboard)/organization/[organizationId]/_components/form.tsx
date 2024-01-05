"use client";

import { createBoard } from "@/actions/create-boards";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCCESS");
        },
        onError: (error) => {
            console.log(error);
        },
    });
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        execute({ title });
    };
    return (
        <div>
            <form action={onSubmit}>
                <input
                    id='title'
                    name='title'
                    placeholder='Enter a board title'
                    className='border-black border p-1'
                />
                <Button type='submit'>Submit</Button>
            </form>
            <p className='space-y-1 text-rose-500 text-sm'>
                {fieldErrors?.title}
            </p>
        </div>
    );
};
