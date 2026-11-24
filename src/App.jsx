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
            <div className="flex items-center justify-between gap-4">
              <button className="hidden border border-slate-200 rounded-lg text-slate-900 font-medium px-4 py-2 text-sm sm:block">
                November 2026
              </button>
              <div className="bg-indigo-100 text-indigo-700 rounded p-3 rounded-full h-10 w-10 flex justify-center items-center">
                U
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          {/* Welcome Section */}
          <section className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <h2 className="text-slate-900 text-2xl font-bold">Dashboard Overview</h2>
              <p className="text-sm sm:text-base">Here's what's happening with your money.</p>
            </div>
            <div className="bg-indigo-600 px-4 py-3 rounded-lg shadow-sm transition hover:bg-indigo-700">
              <button className="text-white text-sm sm:text-base">+ Add Transaction</button>
            </div>
          </section>

          {/* Summary Cards */}
          <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="bg-indigo-700 text-white p-5">
              <div className="flex justify-between items-center">
                <h2>Total Balance</h2>
                <p className="bg-white/15 rounded-xl px-4 py-3">₹</p>
              </div>
              <div>
                ₹ 25000
              </div>
              <div>
                Your available balance
              </div>
            </div>
            <div>
              <div className="bg-white">
                <div className="flex justify-between">
                  <h2>Total Income</h2>
                  <p>↗</p>
                </div>
              </div>
            </div>
            <div></div>
          </section>
        </main>
      </div>
    </>
  )
}