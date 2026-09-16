import React from 'react';

const WorkMetric = ({ title, count }) => (
  <div className="border border-slate-200 rounded p-4 flex flex-col justify-center shadow-sm bg-white flex-1">
    <div className="text-[10px] text-slate-500 font-medium mb-2">{title}</div>
    <div className="text-xl font-bold text-slate-900">{count}</div>
  </div>
);

const days = [
  { day: "Mon", date: "14 Sep", hours: 7.5 },
  { day: "Tue", date: "15 Sep", hours: 8.0 },
  { day: "Wed", date: "16 Sep", hours: 6.5 },
  { day: "Thu", date: "17 Sep", hours: 4.0 },
  { day: "Fri", date: "18 Sep", hours: 2.0 },
  { day: "Sat", date: "19 Sep", hours: 0 },
  { day: "Sun", date: "20 Sep", hours: 0 },
];

const activities = [
  { time: "09:00 AM", title: "Review pull requests", project: "Website Revamp", duration: "1h 30m", day: "Mon" },
  { time: "11:30 AM", title: "Design sync", project: "Mobile Application", duration: "45m", day: "Tue" },
  { time: "02:00 PM", title: "Worked on responsive layout", project: "Website Revamp", duration: "2h 10m", day: "Wed" },
  { time: "04:30 PM", title: "Prepared automation flow", project: "Internal Automation", duration: "2h 00m", day: "Thu" },
];

export default function MyWorksView() {
  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col">
      <div className="w-full p-6 md:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-slate-900">My Works</h1>
            <p className="text-xs text-slate-500 mt-1">Understand where your working time is going.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded text-xs font-semibold text-slate-700 hover:bg-slate-50"><i className="fa-regular fa-file-lines text-slate-400"></i> Requests</button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0f172a] text-white rounded shadow-sm text-xs font-semibold hover:bg-slate-800"><i className="fa-solid fa-pen-to-square"></i> Note My Work</button>
             
             <div className="flex items-center border border-slate-200 rounded shadow-sm bg-white ml-2">
                <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 border-r border-slate-200 flex items-center gap-1.5"><i className="fa-solid fa-arrow-left text-[10px]"></i> Previous Month</button>
                <div className="px-4 py-1.5 text-xs font-semibold text-slate-800 border-r border-slate-200">September 2026</div>
                <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-1.5">Next Month <i className="fa-solid fa-arrow-right text-[10px]"></i></button>
             </div>
          </div>
        </div>

        {/* Tabs Layer 1 */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <button className="px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-100 bg-slate-50">Week 1 - Aug - Sep 2026</button>
          <button className="px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-100 bg-slate-50">Week 2 - Sep 2026</button>
          <button className="px-3 py-1.5 rounded-full bg-sky-200 text-sky-900 shadow-sm font-semibold border border-sky-300">Week 3 - Sep 2026</button>
          <button className="px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-100 bg-slate-50">Week 4 - Sep 2026</button>
          <button className="px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-100 bg-slate-50">Week 5 - Sep - Oct 2026</button>
        </div>

        {/* Tabs Layer 2 */}
        <div className="flex gap-4 border-b border-slate-200">
           <button className="text-xs font-bold text-sky-700 border-b-2 border-sky-700 pb-2 px-1">Activity Pulse</button>
           <button className="text-xs font-medium text-slate-500 hover:text-slate-700 pb-2 px-1">Task Ledger</button>
        </div>

        {/* Metrics Row */}
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
           <WorkMetric title="Required Hours This Week" count="40:00" />
           <WorkMetric title="Logged Hours" count="28:00" />
           <WorkMetric title="Remaining Hours" count="12:00" />
           <WorkMetric title="Overtime Hours" count="00:00" />
           <WorkMetric title="Average Daily Hours" count="05:36" />
           <WorkMetric title="Active Logged" count="4" />
        </div>

        {/* Filters Row */}
        <div className="flex items-center gap-3">
           <div className="relative flex-1 max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-slate-400 text-xs"></i>
              </div>
              <input type="text" placeholder="Search activity" className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded shadow-sm focus:outline-none focus:border-blue-500" />
           </div>
           <button className="flex-1 max-w-[160px] flex items-center justify-between border border-slate-200 rounded shadow-sm px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">
              <span>All Projects</span> <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
           </button>
           <button className="flex-1 max-w-[160px] flex items-center justify-between border border-slate-200 rounded shadow-sm px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">
              <span>All Activities</span> <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
           </button>
           <button className="flex-1 max-w-[160px] flex items-center justify-between border border-slate-200 rounded shadow-sm px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">
              <span>All Statuses</span> <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
           </button>
           
           <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 border border-slate-200 rounded shadow-sm px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                 <i className="fa-regular fa-file-excel text-green-600"></i> Excel
              </button>
           </div>
        </div>

        {/* Table/Calendar Area */}
        <div className="border border-slate-200 rounded bg-white shadow-sm flex flex-col min-h-[260px] overflow-hidden">
           {/* Table Header */}
           <div className="flex border-b border-slate-200 bg-[#fafafa] text-[10px] font-bold text-slate-500 uppercase">
              <div className="p-3 w-48 border-r border-slate-200 flex items-center">Activity</div>
              <div className="flex-1 flex text-center">
                  {days.map((d, i) => (
                    <div key={i} className={`flex-1 p-2 border-r border-slate-200 flex flex-col justify-center ${d.hours > 0 ? 'text-blue-600 bg-blue-50/50' : ''}`}>
                      <span>{d.day.toUpperCase()}</span><span className="font-normal text-[9px] mt-0.5">{d.date}</span>
                    </div>
                  ))}
              </div>
              <div className="p-3 w-24 flex items-center justify-center">Total</div>
           </div>
           
           {/* Table Body */}
           <div className="flex flex-col divide-y divide-slate-100">
             {activities.map((act, i) => (
               <div key={i} className="flex text-xs hover:bg-slate-50 transition-colors">
                  <div className="p-4 w-48 border-r border-slate-200 flex flex-col justify-center">
                    <span className="font-semibold text-slate-800">{act.title}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{act.project}</span>
                    <span className="text-[9px] text-slate-400 mt-1"><i className="fa-regular fa-clock"></i> {act.time}</span>
                  </div>
                  <div className="flex-1 flex text-center">
                    {days.map((d, j) => (
                      <div key={j} className={`flex-1 border-r border-slate-200 flex items-center justify-center ${d.day === act.day ? 'bg-sky-50' : ''}`}>
                        {d.day === act.day ? <span className="font-semibold text-sky-700 bg-sky-100 px-2 py-1 rounded">{act.duration}</span> : <span className="text-slate-300">-</span>}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 w-24 flex items-center justify-center font-bold text-slate-700">{act.duration}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Weekly Trend Chart */}
           <div className="border border-slate-200 rounded shadow-sm bg-white p-5 flex flex-col min-h-[300px]">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-sm font-bold text-slate-800">Weekly Trend</h3>
                 <button className="flex items-center gap-4 border border-slate-200 rounded px-2 py-1 text-xs text-slate-600 hover:bg-slate-50">
                    All weeks <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
                 </button>
              </div>
              <div className="flex-1 relative flex items-end ml-6 mb-6">
                 {/* Y Axis */}
                 <div className="absolute left-[-24px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 h-full">
                    <span>40h</span>
                    <span>30h</span>
                    <span>20h</span>
                    <span>10h</span>
                    <span>0h</span>
                 </div>
                 {/* Grid lines */}
                 <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none border-b border-slate-300">
                    <div className="w-full border-t border-dashed border-slate-200 h-0"></div>
                    <div className="w-full border-t border-dashed border-slate-200 h-0"></div>
                    <div className="w-full border-t border-dashed border-slate-200 h-0"></div>
                    <div className="w-full border-t border-dashed border-slate-200 h-0"></div>
                    <div className="w-full h-0"></div>
                 </div>
                 {/* Bars */}
                 <div className="relative z-10 w-full flex justify-around items-end h-full px-8 pb-[1px]">
                    <div className="w-16 bg-blue-200 h-[65%] hover:bg-blue-300 transition-colors cursor-pointer group relative rounded-t-sm" title="26h"></div>
                    <div className="w-16 bg-blue-600 h-[70%] hover:bg-blue-700 transition-colors cursor-pointer group relative rounded-t-sm shadow-sm" title="28h"></div>
                    <div className="w-16 bg-slate-100 h-[0%] transition-colors cursor-pointer group relative" title="0h"></div>
                 </div>
              </div>
              {/* X Axis */}
              <div className="flex justify-around text-[10px] text-slate-500 ml-6">
                 <span className="w-24 text-center">Week 2 - Sep 2026</span>
                 <span className="w-24 text-center font-bold text-slate-700">Week 3 - Sep 2026</span>
                 <span className="w-24 text-center">Week 4 - Sep 2026</span>
              </div>
           </div>

           {/* Activity Distribution Chart */}
           <div className="border border-slate-200 rounded shadow-sm bg-white p-5 flex flex-col min-h-[300px]">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-sm font-bold text-slate-800">Activity Distribution</h3>
                 <button className="flex items-center gap-4 border border-slate-200 rounded px-2 py-1 text-xs text-slate-600 hover:bg-slate-50">
                    Week 3 - Sep 2026 <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
                 </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4">
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Website Revamp</span>
                      <span className="text-slate-500 font-medium">14h <span className="text-slate-400 text-[10px]">(50%)</span></span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
                      <div className="bg-blue-500 h-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Mobile Application</span>
                      <span className="text-slate-500 font-medium">8.5h <span className="text-slate-400 text-[10px]">(30%)</span></span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
                      <div className="bg-purple-500 h-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Internal Automation</span>
                      <span className="text-slate-500 font-medium">5.5h <span className="text-slate-400 text-[10px]">(20%)</span></span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
                      <div className="bg-green-500 h-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>

              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
