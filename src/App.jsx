export const App = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center h-11 w-11 justify-center bg-indigo-600 text-white rounded-xl text-xl">
                ₹
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Expense<span className="text-indigo-600">Track</span></h1>
                <p className="text-slate-500 text-xs">Manage Your Money Smarter.</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}