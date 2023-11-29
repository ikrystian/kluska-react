import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error: unknown = useRouteError();

    return (
        <div id="error-page">
            <h1>{(error as Error)?.message || (error as { status?: number })?.status}</h1>
            <h2>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</h2>
        </div>
    )
}
