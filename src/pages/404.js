import { NavLink } from "react-router-dom"

export default function Error() {
  return (
    <div className="min-h-[100vh] bg-[#32386B] flex justify-center">
        <div>
            <h2 className='text-white text-center text-[10em]'>404</h2>
            <h3 className='text-white text-centerc text-4xl'>Oops! Something is wrong.</h3>
            <NavLink className='text-white text-center block text-2xl border border-white rounded px-4 py-2 mt-10' to='/'>Go back in initial page, is better.</NavLink>
        </div>
    </div>
  )
}
