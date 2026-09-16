import React, { useState } from 'react';

export default function NotificationsView() {
  const [isCleared, setIsCleared] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col">
        <div className="max-w-6xl mx-auto w-full p-8 flex flex-col h-full">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-slate-900">Notification</h1>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button className="flex items-center gap-2 bg-sky-100 text-sky-900 shadow-sm px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
                        <i className="fa-solid fa-layer-group"></i> Workspace
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                        <i className="fa-regular fa-building"></i> Project
                    </button>
                </div>
            </div>

            {/* Filters & Controls */}
            <div className="flex justify-between items-center mb-4">
                <button className="flex items-center gap-2 border border-slate-200 px-3 py-1 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    <i className="fa-solid fa-filter text-xs"></i> All
                    <span className={`px-1.5 rounded text-xs border transition-all ${isCleared ? 'bg-slate-50 text-slate-400 border-slate-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>{isCleared ? '0' : '6'}</span>
                </button>
                <button 
                  onClick={() => setIsCleared(true)}
                  disabled={isCleared}
                  className={`font-medium text-sm border px-4 py-1.5 rounded-md transition-colors shadow-sm flex items-center gap-2 ${isCleared ? 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-50' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    <i className="fa-solid fa-check-double"></i> Mark All As Read
                </button>
            </div>

            {isCleared ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center mt-12 animate-in fade-in duration-500">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-slate-100">
                        <i className="fa-solid fa-mug-hot text-4xl text-slate-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-2">You're all caught up!</h2>
                    <p className="text-slate-500 max-w-sm text-sm">There are no new notifications for your workspaces or projects right now.</p>
                </div>
            ) : (
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden transition-all duration-300">
                    
                    {/* Date Group: Today */}
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Today
                    </div>

                    {/* Item 1 (Unread) */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group bg-sky-50/30">
                        <div className="flex items-center gap-4 relative">
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full transition-opacity"></div>
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">A</div>
                            <div>
                                <p className="text-sm text-slate-800"><span className="font-bold">Arunpandiyan S SNS</span> joined the workspace</p>
                                <p className="text-xs text-slate-400 mt-0.5">in SNS Square</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-slate-400 font-medium">1h ago</span>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors"><i className="fa-solid fa-ellipsis"></i></button>
                        </div>
                    </div>

                    {/* Item 2 (Unread) */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group bg-sky-50/30">
                        <div className="flex items-center gap-4 relative">
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full transition-opacity"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center text-xs font-bold">HP</div>
                            <div>
                                <p className="text-sm text-slate-800"><span className="font-bold">HARINI PJ</span> deleted workspace "Sample Workspace 404"</p>
                                <p className="text-xs text-slate-400 mt-0.5">in Sample Workspace 404</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-slate-400 font-medium">2h ago</span>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors"><i className="fa-solid fa-ellipsis"></i></button>
                        </div>
                    </div>

                    {/* Date Group: Yesterday */}
                    <div className="px-4 py-2 bg-slate-50 border-y border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Yesterday
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">G</div>
                            <div>
                                <p className="text-sm text-slate-800"><span className="font-bold">Gokul R (Hub)</span> joined the workspace</p>
                                <p className="text-xs text-slate-400 mt-0.5">in Sample Workspace 404</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-slate-400 font-medium">21h ago</span>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors"><i className="fa-solid fa-ellipsis"></i></button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    </main>
  );
}
