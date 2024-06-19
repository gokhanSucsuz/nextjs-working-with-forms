import { useFormStatus } from "react-dom";

export function Submit() {
    const { pending, data } = useFormStatus();
    return <div className="w-2/12 gap-2 flex flex-col max-w-sm mx-auto p-6 mt-10 border shadow-lg rounded-lg">
        <h1 className="p-3 text-center border rounded-lg mb-4 shadow-md text-red-700 font-bold text-2xl">Use Form Status</h1>
        <input name='email' type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled={pending} />
        <button className="p-3 rounded-lg bg-cyan-500 text-white" type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>

        {pending ? <p className="text-red-500">{data?.get("email")} Sending...</p> : ""}
    </div>

}