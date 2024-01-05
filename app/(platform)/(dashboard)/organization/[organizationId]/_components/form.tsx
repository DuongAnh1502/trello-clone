"use client";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(create, initialState);
    console.log(state?.errors?.title);
    return (
        <div>
            <form action={dispatch}>
                <input
                    id='title'
                    name='title'
                    placeholder='Enter a board title'
                    className='border-black border p-1'
                />
                <Button type='submit'>Submit</Button>
            </form>
            <p className='space-y-1 text-rose-500 text-sm'>
                {state?.errors?.title}
            </p>
        </div>
    );
};
