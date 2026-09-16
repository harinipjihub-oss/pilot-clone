import React from 'react';

const tasks = [
  { title: "Update dashboard UI", project: "Website Revamp", priority: "High", status: "In Progress", due: "Today", progress: 72 },
  { title: "Review API integration", project: "Mobile Application", priority: "Medium", status: "To Do", due: "Tomorrow", progress: 0 },
  { title: "Prepare automation flow", project: "Internal Automation", priority: "Urgent", status: "Blocked", due: "Yesterday", progress: 45 },
  { title: "Fix navigation bug", project: "Website Revamp", priority: "Medium", status: "Completed", due: "Mon", progress: 100 },
  { title: "Design new icons", project: "Mobile Application", priority: "Low", status: "In Progress", due: "Next week", progress: 30 }
];

const TaskCard = ({ task }) => (
  <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
    <div className="flex justify-between items-center mb-3">
       <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${task.priority === 'High' || task.priority === 'Urgent' ? 'bg-red-100 text-red-700' : task.priority === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>{task.priority}</span>
       <span className="text-[10px] text-slate-400 font-medium">{task.due}</span>
    </div>
    <h3 className="text-sm font-bold text-slate-800 mb-1">{task.title}</h3>
    <div className="text-xs text-slate-500 mb-4">{task.project}</div>
    
    <div className="flex justify-between items-center text-[10px] font-medium mb-1">
       <span className="text-slate-500">Progress</span>
       <span className="text-slate-700">{task.progress}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
       <div className={`h-full ${task.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${task.progress}%` }}></div>
    </div>
  </div>
);

export default function MyTasksView() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#f8fafc] flex flex-col">
      <div className="w-full p-6 md:p-8 flex-1 flex flex-col">
        
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
             <button className="flex items-center justify-between gap-12 border border-slate-200 rounded text-sm px-4 py-1.5 text-slate-500 hover:bg-slate-50 transition-colors bg-white shadow-sm w-56">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Website Revamp</span>
                <i className="fa-solid fa-chevron-down text-[10px]"></i>
             </button>
          </div>
          
          <div className="flex bg-slate-50 p-1 rounded-md border border-slate-100 shadow-sm absolute left-1/2 -translate-x-1/2 mt-1">
              <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded text-xs font-medium transition-colors">List</button>
              <button className="px-4 py-1.5 bg-white text-slate-900 rounded text-xs font-bold shadow-sm border border-slate-200">Board</button>
              <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded text-xs font-medium transition-colors">Calendar</button>
          </div>
          
          <div className="flex gap-2">
             <button className="px-3 py-1.5 border border-slate-200 bg-white rounded shadow-sm text-xs text-slate-600 font-medium hover:bg-slate-50">All</button>
             <button className="px-3 py-1.5 border border-slate-200 bg-white rounded shadow-sm text-xs text-slate-600 font-medium hover:bg-slate-50">Priority</button>
             <button className="px-3 py-1.5 border border-slate-200 bg-white rounded shadow-sm text-xs text-slate-600 font-medium hover:bg-slate-50">Due date</button>
          </div> 
        </div>

        <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
           {/* To Do Column */}
           <div className="flex-1 min-w-[280px] flex flex-col gap-3">
              <div className="flex justify-between items-center mb-2 px-1">
                 <h2 className="text-xs font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> To Do</h2>
                 <span className="text-xs font-bold text-slate-400">1</span>
              </div>
              {tasks.filter(t => t.status === 'To Do').map((t, i) => <TaskCard key={i} task={t} />)}
           </div>

           {/* In Progress Column */}
           <div className="flex-1 min-w-[280px] flex flex-col gap-3">
              <div className="flex justify-between items-center mb-2 px-1">
                 <h2 className="text-xs font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> In Progress</h2>
                 <span className="text-xs font-bold text-slate-400">2</span>
              </div>
              {tasks.filter(t => t.status === 'In Progress').map((t, i) => <TaskCard key={i} task={t} />)}
           </div>
           
           {/* Blocked Column */}
           <div className="flex-1 min-w-[280px] flex flex-col gap-3">
              <div className="flex justify-between items-center mb-2 px-1">
                 <h2 className="text-xs font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Blocked</h2>
                 <span className="text-xs font-bold text-slate-400">1</span>
              </div>
              {tasks.filter(t => t.status === 'Blocked').map((t, i) => <TaskCard key={i} task={t} />)}
           </div>
           
           {/* Completed Column */}
           <div className="flex-1 min-w-[280px] flex flex-col gap-3">
              <div className="flex justify-between items-center mb-2 px-1">
                 <h2 className="text-xs font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Completed</h2>
                 <span className="text-xs font-bold text-slate-400">1</span>
              </div>
              {tasks.filter(t => t.status === 'Completed').map((t, i) => <TaskCard key={i} task={t} />)}
           </div>
        </div>

      </div>
    </main>
  );
}
