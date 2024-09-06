import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            {/* error */}
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
                    <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
                    <div className="animate-bounce">
                        <svg className="w-16 h-16 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <p className="mt-4 text-gray-600">Let's get you <a href="#" onClick={() => window.history.back()} className="text-blue-500">back</a>.</p>
                </div>
            </div>
            <div className="absolute bottom-0 w-full px-2 text-right"><b>Issue</b>: {error.statusText || error.message}</div>

        </>
    )
}

export default ErrorPage
