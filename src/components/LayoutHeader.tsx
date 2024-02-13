import { ReactElement } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const LayoutHeader = (): ReactElement => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="flex items-center justify-center bg-white bg-opacity-55 mx-20 mt-3 rounded-md p-3 text-center">
                <span className="font-bold text-5xl m-2">Pokemons</span>

                <input type="button"
                    className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    onClick={() => navigate('/add')}
                    value={'Add Pokemon'} />

                <form className="ml-auto w-[40%]">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Enter pokemon ID or Name.." required />
                        <input type="button" onClick={() => {
                            const searchBar = document.getElementById('default-search') as HTMLInputElement;
                            navigate(`/pokemons/${searchBar?.value}`)
                            searchBar.value = ''
                        }} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" value={'Search'} />
                    </div>
                </form>
            </nav>
            <Outlet />
        </>
    )
}

export default LayoutHeader
