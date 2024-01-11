import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
    total: number | null | undefined,
    previous: string | null | undefined,
    next: string | null | undefined,
    setPage: Dispatch<SetStateAction<number>>,
    page: number

}

const Pagination = (props: PaginationProps) => {
    const { previous, next, total, setPage, page } = props;
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {previous &&
                    <li className="cursor-pointer" onClick={() => setPage(() => page - 1)}>
                        <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                }
                {total && Array.from({ length: Math.ceil((total / 6)) }).map((item, index) => (
                    <li className="cursor-pointer" onClick={() => {
                        setPage(() => index + 1)
                    }}>
                        <a className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${index + 1 == page ? "bg-primary text-white" : "bg-white"} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{index + 1}</a>
                    </li>
                ))}

                {next &&
                    <li className="cursor-pointer" onClick={() => setPage(() => page + 1)}>
                        <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Pagination;