import { useEffect, useState } from 'react';
import { getRequest } from '../../helpers.ts';

export default function Summary() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        getRequest('stats').then(res => {
            setStats(res);
        })
    }, []);



    return (
        <section className={'flex flex-1 py-4 px-2 text-white'}>
            <div>
                Summary
                <p>Trainings: {stats && stats.trainings}</p>
                <p>RUN: {stats && stats.runMeters}m</p>
                <p>TONS: {stats && stats.total}kg</p>
            </div>
        </section>
    )
}
