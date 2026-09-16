import React from 'react';

export default function SupportView() {
  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col">
        <div className="p-8 max-w-7xl mx-auto w-full flex flex-col h-full">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                        <i className="fa-solid fa-at"></i> SNS Square helpdesk
                    </div>
                    <h1 className="text-xl font-bold text-slate-900 mb-1">Support Center</h1>
                    <p className="text-xs text-slate-500">Raise SNS Pilot product, access, billing, and workspace issues with full ticket history</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-1.5 bg-[#0f172a] text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-colors">My Tickets</button>
                    <button className="px-4 py-1.5 bg-[#0f172a] text-white text-xs font-medium rounded-md flex items-center gap-2 hover:bg-slate-800 transition-colors">
                        <i className="fa-solid fa-plus"></i> Create Ticket
                    </button>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-6 gap-4 mb-6">
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">Total</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-blue-50 text-blue-500 flex items-center justify-center"><i className="fa-solid fa-ticket text-[10px]"></i></div>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">Open</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-blue-50 text-blue-500 flex items-center justify-center"><i className="fa-solid fa-circle-exclamation text-[10px]"></i></div>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">In Progress</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-orange-50 text-orange-500 flex items-center justify-center"><i className="fa-solid fa-clock text-[10px]"></i></div>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">Waiting</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center"><i className="fa-solid fa-hourglass-half text-[10px]"></i></div>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">Resolved</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-green-50 text-green-500 flex items-center justify-center"><i className="fa-solid fa-check text-[10px]"></i></div>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                    <div>
                        <p className="text-xs text-slate-500 mb-1">Closed</p>
                        <p className="text-lg font-bold text-slate-800">0</p>
                    </div>
                    <div className="w-6 h-6 rounded bg-slate-100 text-slate-500 flex items-center justify-center"><i className="fa-solid fa-shield text-[10px]"></i></div>
                </div>
            </div>

            {/* Tabs & Filter Section */}
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-3">My Tickets</h3>
                <div className="flex items-center justify-between">
                    <div className="flex p-1 bg-slate-100 rounded-md">
                        <button className="px-4 py-1.5 bg-[#0f172a] text-white text-xs font-medium rounded shadow-sm">Raised by Me</button>
                        <button className="px-4 py-1.5 text-slate-600 text-xs font-medium hover:text-slate-800 transition-colors">Assigned to Me</button>
                    </div>
                    <div className="flex gap-2">
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fa-solid fa-magnifying-glass text-slate-400 text-[10px]"></i>
                            </div>
                            <input type="text" placeholder="Search title, ID, user, area..." className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:border-slate-300" />
                        </div>
                        <select className="border border-slate-200 rounded px-3 py-1.5 text-xs text-slate-700 bg-white outline-none w-24">
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <p className="text-xs text-slate-400 mb-2">Showing 0 - 0 of 0 results</p>

            {/* Empty State Content Box */}
            <div className="flex-1 border border-slate-200 border-dashed rounded-lg flex flex-col items-center justify-center min-h-[300px] bg-slate-50/50">
                <div className="w-12 h-12 rounded-full border-2 border-slate-200 text-slate-400 flex items-center justify-center text-xl mb-3">
                    <i className="fa-solid fa-question"></i>
                </div>
                <h3 className="text-sm font-medium text-slate-800">No tickets found</h3>
                <p className="text-xs text-slate-500 mt-1">Create a new support ticket for this workspace.</p>
            </div>

            {/* Pagination Footer */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                <div>Showing 0 of 0</div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span>Density:</span>
                        <select className="bg-transparent font-medium text-slate-700 outline-none"><option>Normal</option></select>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Rows per page:</span>
                        <select className="bg-transparent font-medium text-slate-700 outline-none"><option>25</option></select>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-slate-100 rounded text-slate-400 cursor-not-allowed">Previous</button>
                        <span className="mx-1">1 / 1</span>
                        <button className="px-3 py-1 bg-slate-100 rounded text-slate-400 cursor-not-allowed">Next</button>
                    </div>
                </div>
            </div>

        </div>
    </main>
  );
}
