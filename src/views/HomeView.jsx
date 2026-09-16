import React from 'react';

const StatCard = ({ title, count, subtitle, dotColor }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col justify-between h-28">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      {dotColor && <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>}
    </div>
    <div>
      <div className="text-3xl font-semibold text-gray-900">{count}</div>
      <div className="text-xs text-gray-400 mt-1">{subtitle}</div>
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

export default function HomeView() {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Greeting & Date */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-gray-500 text-sm font-medium mb-1">Wednesday, September 16</div>
            <h1 className="text-2xl font-bold text-gray-900">Good Afternoon, Prem</h1>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" placeholder="Search tasks, projects, status..." className="block w-64 pl-9 pr-3 py-1.5 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm" />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-5 gap-4">
          <StatCard title="Assigned" count="27" subtitle="Assigned work items" dotColor="bg-blue-500" />
          <StatCard title="In Progress" count="5" subtitle="Tasks moving now" dotColor="bg-orange-400" />
          <StatCard title="Completed" count="12" subtitle="Completed work" dotColor="bg-green-500" />
          <StatCard title="Overdue" count="0" subtitle="Needs action" dotColor="bg-red-500" />
          <StatCard title="This Week" count="38 SP" subtitle="Due this week" dotColor="bg-purple-500" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          
          {/* Main Content Column */}
          <div className="col-span-2 space-y-6">
            
            {/* My Work Table */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                  My Work Overview
                </h2>
                <div className="flex gap-2">
                  <button className="text-xs border border-gray-300 rounded px-3 py-1 flex items-center font-medium">
                    All work <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  <button className="text-xs border border-gray-300 rounded px-3 py-1 flex items-center font-medium">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    Due <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                </div>
              </div>
              <div className="px-5 py-3 border-b border-gray-100 flex gap-2">
                <button className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">All</button>
                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium hover:bg-gray-50">To Do</button>
                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium hover:bg-gray-50">In Progress</button>
                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium hover:bg-gray-50">Blocked</button>
                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium hover:bg-gray-50">Completed</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50/50 text-[10px] text-gray-400 uppercase font-semibold border-b border-gray-100">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Priority</th>
                      <th className="px-5 py-3 font-semibold">Task</th>
                      <th className="px-5 py-3 font-semibold">Project</th>
                      <th className="px-5 py-3 font-semibold">SP</th>
                      <th className="px-5 py-3 font-semibold">Due Date</th>
                      <th className="px-5 py-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tasks.map((task, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${task.priority === 'High' || task.priority === 'Urgent' ? 'bg-red-100 text-red-700' : task.priority === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>{task.priority}</span></td>
                        <td className="px-5 py-3 font-medium text-gray-800">{task.title}</td>
                        <td className="px-5 py-3 text-gray-500">{task.project}</td>
                        <td className="px-5 py-3 text-gray-500">{task.sp}</td>
                        <td className="px-5 py-3 text-gray-500">{task.due}</td>
                        <td className="px-5 py-3 text-right">
                          <span className="text-gray-600 font-medium flex items-center justify-end gap-1.5">
                            {task.status === 'Completed' && <i className="fa-solid fa-circle text-[8px] text-green-500"></i>}
                            {task.status === 'In Progress' && <i className="fa-solid fa-circle text-[8px] text-blue-500"></i>}
                            {task.status === 'Blocked' && <i className="fa-solid fa-circle text-[8px] text-red-500"></i>}
                            {task.status === 'To Do' && <i className="fa-regular fa-circle text-[8px] text-gray-300"></i>}
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>



          </div>

          {/* Right Column (Narrower) */}
          <div className="space-y-6">
            
            {/* Due Soon */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <h2 className="text-sm font-semibold mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Due Soon
              </h2>
              <div className="text-xs text-gray-500 py-4 bg-gray-50 rounded border border-gray-100 border-dashed text-center">
                No tasks due in the next 5 days.
              </div>
            </div>

            {/* Today's Hours */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <h2 className="text-sm font-semibold mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Today's Hours
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Target</div>
                  <div className="text-sm font-medium">8h</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Logged</div>
                  <div className="text-sm font-medium">4h 15m</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Remaining</div>
                  <div className="text-sm font-medium">3h 45m</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
