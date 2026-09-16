import React from 'react';

const DashMetric = ({ title, count, percentage, icon }) => (
  <div className="border border-slate-200 rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white">
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs text-slate-500 font-medium">{title}</span>
      {icon && <span className="text-slate-400 text-xs">{icon}</span>}
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-900">{count}</div>
      <div className="text-[10px] text-slate-400 mt-1">{percentage}</div>
    </div>
  </div>
);

const tasks = [
  { title: "Update dashboard UI", project: "Website Revamp", priority: "High", status: "In Progress", due: "Today", sp: 5 },
  { title: "Review API integration", project: "Mobile Application", priority: "Medium", status: "To Do", due: "Tomorrow", sp: 8 },
  { title: "Prepare automation flow", project: "Internal Automation", priority: "Urgent", status: "Blocked", due: "Yesterday", sp: 13 },
  { title: "Fix navigation bug", project: "Website Revamp", priority: "Medium", status: "Completed", due: "Mon", sp: 2 },
  { title: "Design new icons", project: "Mobile Application", priority: "Low", status: "In Progress", due: "Next week", sp: 3 }
];

const projects = [
  { name: "Website Revamp", assigned: 18, completed: 13, inProgress: 3, blocked: 2, sp: 24, progress: 72 },
  { name: "Mobile Application", assigned: 14, completed: 8, inProgress: 6, blocked: 0, sp: 18, progress: 57 },
  { name: "Internal Automation", assigned: 9, completed: 7, inProgress: 1, blocked: 1, sp: 12, progress: 77 },
];

export default function DashboardView() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
      <div className="w-full p-6 md:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Developer Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">Everything important, visible at a glance.</p>
          </div>
          <div className="flex bg-white rounded-md border border-slate-200 shadow-sm overflow-hidden text-xs font-medium">
            <button className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 border-r border-slate-200">Today</button>
            <button className="px-3 py-1.5 bg-slate-50 text-slate-800 font-bold border-r border-slate-200 shadow-sm">This Week</button>
            <button className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 border-r border-slate-200">This Month</button>
            <button className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 border-r border-slate-200">Custom</button>
            <button className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 flex items-center justify-center"><i className="fa-regular fa-calendar"></i></button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <div className="min-w-[140px] flex-1"><DashMetric title="Assigned Work It..." count="27" percentage="+4 this week" icon={<i className="fa-solid fa-list-ul"></i>} /></div>
          <div className="min-w-[140px] flex-1"><DashMetric title="In Progress" count="5" percentage="19% of total" icon={<i className="fa-solid fa-spinner"></i>} /></div>
          <div className="min-w-[140px] flex-1"><DashMetric title="Completed" count="12" percentage="+8 completed" icon={<i className="fa-regular fa-circle-check"></i>} /></div>
          <div className="min-w-[140px] flex-1"><DashMetric title="Overdue" count="0" percentage="On track" icon={<i className="fa-solid fa-check text-green-500"></i>} /></div>
          <div className="min-w-[140px] flex-1"><DashMetric title="Story Points" count="38" percentage="of 52 total" icon={<i className="fa-solid fa-star"></i>} /></div>
          
          <div className="min-w-[160px] flex-1 border border-slate-200 rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-slate-500 font-medium">Current Sprint</span>
              <span className="text-slate-400 text-xs"><i className="fa-solid fa-rotate"></i></span>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 leading-tight">Sprint 42</div>
              <div className="text-[10px] text-slate-400 mt-1">Ends in 3 days</div>
            </div>
          </div>
          
          <div className="min-w-[140px] flex-1"><DashMetric title="Blocked" count="2" percentage="Needs action" icon={<i className="fa-regular fa-circle-xmark text-red-500"></i>} /></div>
          <div className="min-w-[140px] flex-1"><DashMetric title="Logged Hours" count="28h" percentage="70% capacity" icon={<i className="fa-regular fa-clock"></i>} /></div>
        </div>



        {/* Split Panels: Current Sprint Overview & Work Status */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col min-h-[220px]">
             <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
               <h2 className="text-sm font-bold text-slate-800">Current Sprint Overview</h2>
             </div>
             <div className="p-6 flex flex-col justify-center flex-1">
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">Work completion</span>
                    <span className="text-slate-500">44%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
                    <div className="bg-green-500 h-full" style={{ width: '44%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">12 completed, 15 remaining</p>
                </div>
                
                <div className="space-y-3 mt-2">
                   <div className="flex justify-between items-center border-l-2 border-orange-400 pl-3 py-1">
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Update dashboard UI</div>
                        <div className="text-[10px] text-slate-500">Due today</div>
                      </div>
                      <button className="text-[10px] font-semibold text-slate-400 hover:text-slate-600 border border-slate-200 px-2 py-0.5 rounded">Continue</button>
                   </div>
                   <div className="flex justify-between items-center border-l-2 border-red-500 pl-3 py-1">
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Prepare automation flow</div>
                        <div className="text-[10px] text-slate-500">Blocked</div>
                      </div>
                      <button className="text-[10px] font-semibold text-slate-400 hover:text-slate-600 border border-slate-200 px-2 py-0.5 rounded">Resolve</button>
                   </div>
                </div>
             </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col min-h-[220px]">
             <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
               <h2 className="text-sm font-bold text-slate-800">Work Status</h2>
             </div>
             <div className="flex-1 flex items-center justify-center p-6 gap-12">
               <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
                    {/* Simplified segments for mockup effect */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.44)} />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.19)} strokeDasharrayOffset="0" transform="rotate(158 50 50)" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.07)} transform="rotate(226 50 50)" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-1">
                    <span className="text-xl font-bold text-slate-800">27</span>
                    <span className="text-[10px] text-slate-400 leading-none">Total tasks</span>
                  </div>
               </div>
               <div className="space-y-3 text-xs font-medium text-slate-600">
                 <div className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span>To Do</span> <span>8 [30%]</span></div>
                 <div className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>In Progress</span> <span>5 [19%]</span></div>
                 <div className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>Completed</span> <span>12 [44%]</span></div>
                 <div className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span>Blocked</span> <span>2 [7%]</span></div>
               </div>
             </div>
          </div>
        </div>

        {/* My Projects Panel */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">Project Health</h2>
            <div className="flex gap-4 items-center">
               <button className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded flex items-center gap-1.5"><i className="fa-solid fa-download text-[10px]"></i> Export</button>
               <button className="text-xs font-semibold text-slate-500 hover:text-slate-700">View all &gt;</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white text-[10px] text-slate-400 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th className="px-5 py-3 font-semibold">Project</th>
                  <th className="px-5 py-3 font-semibold text-center">Assigned</th>
                  <th className="px-5 py-3 font-semibold text-center">Completed</th>
                  <th className="px-5 py-3 font-semibold text-center">In Progress</th>
                  <th className="px-5 py-3 font-semibold text-center">Blocked</th>
                  <th className="px-5 py-3 font-semibold text-center">Story Points</th>
                  <th className="px-5 py-3 font-semibold text-right w-48">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projects.map((proj, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-slate-800 flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${i===0?'bg-blue-500':i===1?'bg-purple-500':'bg-green-500'}`}></span>
                       {proj.name}
                    </td>
                    <td className="px-5 py-3 text-center text-slate-600 font-medium">{proj.assigned}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{proj.completed}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{proj.inProgress}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{proj.blocked}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{proj.sp}</td>
                    <td className="px-5 py-3 text-right">
                       <div className="flex items-center gap-2 justify-end">
                          <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                             <div className={`h-full ${i===0?'bg-blue-500':i===1?'bg-purple-500':'bg-green-500'}`} style={{ width: `${proj.progress}%` }}></div>
                          </div>
                          <span className="font-semibold text-slate-700 w-8">{proj.progress}%</span>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
