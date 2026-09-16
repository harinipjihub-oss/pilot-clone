import React, { useState } from 'react';

export default function MembersView() {
  const [layoutMode, setLayoutMode] = useState('list');

  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-6xl mx-auto p-8">
          
          <div className="flex items-end justify-between border-b border-slate-200 pb-4 mb-4">
              <div>
                  <h1 className="text-xl font-bold text-slate-900">Members</h1>
                  <p className="text-xs text-slate-500 mt-1">48 workspace members</p>
              </div>
              <div className="flex items-center gap-3">
                  <div className="flex bg-slate-100 p-1 rounded-md">
                      <button 
                        onClick={() => setLayoutMode('list')}
                        className={`w-7 h-7 flex items-center justify-center rounded shadow-sm transition-all ${layoutMode === 'list' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}>
                          <i className="fa-solid fa-list text-xs"></i>
                      </button>
                      <button 
                        onClick={() => setLayoutMode('grid')}
                        className={`w-7 h-7 flex items-center justify-center rounded shadow-sm transition-all ${layoutMode === 'grid' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}>
                          <i className="fa-solid fa-border-all text-xs"></i>
                      </button>
                  </div>
                  <div className="relative w-64">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fa-solid fa-magnifying-glass text-slate-400 text-xs"></i>
                      </div>
                      <input type="text" placeholder="Search members" className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:border-slate-300 transition-colors" />
                  </div>
              </div>
          </div>

          <ul id="members-container" className={layoutMode === 'list' ? 'layout-list' : 'layout-grid'}>
              {/* Member 1 */}
              <li className="member-item group">
                  <div className="member-info">
                      <img src="https://ui-avatars.com/api/?name=Alice+Johnson&background=f87171&color=fff" className="member-avatar w-9 h-9 rounded-full object-cover" alt="Avatar" />
                      <div>
                          <p className="text-sm font-semibold text-slate-800">Alice Johnson</p>
                          <p className="text-xs text-slate-500">Product Manager</p>
                      </div>
                  </div>
                  <span className="member-badge text-xs font-semibold text-slate-700 bg-slate-200 px-2 py-1 rounded">Admin</span>
                  <div className="hover-actions">
                      <button title="Direct Message" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-500 hover:border-blue-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-message"></i></button>
                      <button title="Email" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-500 hover:border-indigo-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-envelope"></i></button>
                  </div>
              </li>
              {/* Member 2 */}
              <li className="member-item group">
                  <div className="member-info">
                      <img src="https://ui-avatars.com/api/?name=Bob+Smith&background=fca5a5&color=fff" className="member-avatar w-9 h-9 rounded-full object-cover" alt="Avatar" />
                      <div>
                          <p className="text-sm font-semibold text-slate-800">Bob Smith</p>
                          <p className="text-xs text-slate-500">bob.smith@example.com</p>
                      </div>
                  </div>
                  <span className="member-badge text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">Member</span>
                  <div className="hover-actions">
                      <button title="Direct Message" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-500 hover:border-blue-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-message"></i></button>
                      <button title="Email" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-500 hover:border-indigo-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-envelope"></i></button>
                  </div>
              </li>
              {/* Member 3 */}
              <li className="member-item group">
                  <div className="member-info">
                      <div className="member-avatar w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">CJ</div>
                      <div>
                          <p className="text-sm font-semibold text-slate-800">Charlie Jones</p>
                          <p className="text-xs text-slate-500">UX Designer</p>
                      </div>
                  </div>
                  <span className="member-badge text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">Member</span>
                  <div className="hover-actions">
                      <button title="Direct Message" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-500 hover:border-blue-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-message"></i></button>
                      <button title="Email" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-500 hover:border-indigo-200 shadow-sm flex items-center justify-center transition-colors"><i className="fa-regular fa-envelope"></i></button>
                  </div>
              </li>
          </ul>
      </div>
    </main>
  );
}
