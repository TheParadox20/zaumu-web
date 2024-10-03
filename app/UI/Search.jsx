'use client'
export default function Search({search, setSearch}){
    return(
        <div className="flex items-center rounded-lg p-1 h-full w-full border-gray-200 border-b-2 shadow-md">
            <div className="icon-[weui--search-outlined] text-gray-500 w-8 h-8 lg:w-5 2xl:w-8 lg:h-5 2xl:h-8 mr-1"/>
            <input className="bg-transparent h-full rounded-full w-full" type="search" placeholder="Search products" name="" id="" value={search} onChange={e=>{setSearch(e.target.value)}} />
        </div>
    )
}