import { useEffect } from 'react';
import { getRequest } from '../../helpers.ts';

export default function Summary() {


    useEffect(() => {
        getRequest('stats').then(res => {
            console.log(res)
        })
    }, []);

    return (
        <section className={'flex flex-1 py-4 px-2'}>
            Summary
        </section>
    )
}
