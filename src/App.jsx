import React, { useState } from 'react';
import HomeView from './views/HomeView';
import ChatView from './views/ChatView';
import MembersView from './views/MembersView';
import SupportView from './views/SupportView';
import NotificationsView from './views/NotificationsView';
import DashboardView from './views/DashboardView';
import MyTasksView from './views/MyTasksView';
import MyWorksView from './views/MyWorksView';

const SidebarItem = ({ active, icon, label, onClick }) => (
  <div onClick={onClick} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 cursor-pointer ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
    <span className={`mr-3 ${active ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</span>
    {label}
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeChannel, setActiveChannel] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userClosedSidebar, setUserClosedSidebar] = useState(false);

  const toggleSidebar = () => {
      const nextOpenState = !isSidebarOpen;
      setIsSidebarOpen(nextOpenState);
      setUserClosedSidebar(!nextOpenState);
  };

  const handleNavClick = (view) => {
      setCurrentView(view);
      if (view === 'chat') {
          setIsSidebarOpen(true);
          setActiveChannel(null); // Reset to welcome page
      } else {
          setIsSidebarOpen(!userClosedSidebar);
      }
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-slate-800 overflow-hidden">
      {/* Slim Icon Sidebar */}
      <div className="w-16 bg-[#1a1f36] flex flex-col items-center py-4 text-gray-300 z-20">
        <div className="mb-8 cursor-pointer hover:text-white">
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
        
        <div className="flex flex-col gap-4 w-full px-2 items-center">
          <div onClick={() => handleNavClick('home')} className={`${currentView === 'home' ? 'bg-white/10 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'} w-10 h-10 flex flex-col justify-center items-center rounded-lg mb-2 cursor-pointer transition-colors`}>
            <i className="fa-solid fa-layer-group text-lg"></i>
          </div>
          <div onClick={() => handleNavClick('chat')} className={`${currentView === 'chat' ? 'bg-white/10 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'} w-10 h-10 flex flex-col justify-center items-center rounded-lg mb-2 cursor-pointer transition-colors`}>
            <i className="fa-regular fa-message text-lg"></i>
          </div>
          <div onClick={() => handleNavClick('members')} className={`${currentView === 'members' ? 'bg-white/10 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'} w-10 h-10 flex flex-col justify-center items-center rounded-lg mb-2 cursor-pointer transition-colors`}>
            <i className="fa-solid fa-user-group text-lg"></i>
          </div>
          <div onClick={() => handleNavClick('support')} className={`${currentView === 'support' ? 'bg-white/10 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'} w-10 h-10 flex flex-col justify-center items-center rounded-lg mb-2 cursor-pointer transition-colors`}>
            <i className="fa-solid fa-ticket text-lg"></i>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4 w-full px-2 items-center pb-2">
          <div onClick={() => handleNavClick('notifications')} className={`${currentView === 'notifications' ? 'bg-white/10 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'} relative w-10 h-10 flex flex-col justify-center items-center rounded-lg cursor-pointer transition-colors`}>
            <i className="fa-regular fa-bell text-lg"></i>
            <span className="absolute top-1 right-2 bg-cyan-400 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">6</span>
          </div>
          <button className="relative w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white mt-2">
            <span className="text-xs font-bold">S</span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#1a1d27] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Main Sidebar */}
      <div className={`${isSidebarOpen ? 'w-[260px]' : 'w-[60px]'} bg-[#f8f9fb] border-r border-slate-200 flex flex-col flex-shrink-0 z-10 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}>
        <div className="h-14 px-4 flex items-center gap-3 border-b border-gray-100 flex-shrink-0">
          <div onClick={toggleSidebar} className="w-7 h-7 rounded bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs shadow-sm flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div className={`transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="text-sm font-bold text-gray-900 leading-tight">Pilot</h2>
            <p className="text-[10px] text-gray-500 leading-tight">Project workspace</p>
          </div>
        </div>

        <div className={`flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6 transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {['home', 'dashboard', 'my_tasks', 'my_works'].includes(currentView) ? (
          <div>
            <SidebarItem active={currentView === 'home'} icon={<i className="fa-solid fa-home text-sm"></i>} label="Home" onClick={() => setCurrentView('home')} />
            <SidebarItem active={currentView === 'dashboard'} icon={<i className="fa-solid fa-table-columns text-sm"></i>} label="Dashboard" onClick={() => setCurrentView('dashboard')} />
            <SidebarItem active={currentView === 'my_tasks'} icon={<i className="fa-solid fa-list-check text-sm"></i>} label="My Tasks" onClick={() => setCurrentView('my_tasks')} />
            <SidebarItem active={currentView === 'my_works'} icon={<i className="fa-solid fa-briefcase text-sm"></i>} label="My Works" onClick={() => setCurrentView('my_works')} />

            <div className="mt-8">
              <div className="flex border-b border-gray-200 px-1">
                <div className="text-xs font-semibold text-gray-800 pb-2 border-b-2 border-gray-800 px-2 cursor-pointer">Projects</div>
                <div className="text-xs font-medium text-gray-400 pb-2 px-4 cursor-pointer">Clusters</div>
              </div>
              <div className="mt-4 text-xs text-gray-400 text-center">
                No projects yet.
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div className="flex items-center justify-between px-2 mb-1 group cursor-pointer hover:bg-slate-100 rounded py-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <i className="fa-solid fa-caret-down text-[10px] text-slate-400 w-3"></i>
                      Channels
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fa-solid fa-plus text-xs"></i>
                  </button>
              </div>
              <div className="flex flex-col gap-0.5">
                  <button onClick={() => { setCurrentView('chat'); setActiveChannel('general'); }} className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs text-left rounded-md transition-colors group ${activeChannel === 'general' ? 'bg-sky-100 text-sky-900 font-medium' : 'text-slate-700 hover:bg-slate-100'}`}>
                      <i className={`fa-solid fa-hashtag text-[10px] ${activeChannel === 'general' ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'}`}></i>
                      general
                  </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between px-2 mb-2 group cursor-pointer hover:bg-slate-100 rounded py-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <i className="fa-solid fa-caret-down text-[10px] text-slate-400 w-3"></i>
                      Direct Messages
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fa-solid fa-plus text-xs"></i>
                  </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex-1 max-w-2xl flex items-center gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-400 text-xs"></i>
              </div>
              <input type="text" placeholder="Search work items" className="block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <button className="text-gray-400 hover:text-gray-500">
              <i className="fa-solid fa-download text-lg"></i>
            </button>
          </div>
        </header>

        {/* Dynamic View Rendering */}
        {currentView === 'home' && <HomeView />}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'my_tasks' && <MyTasksView />}
        {currentView === 'my_works' && <MyWorksView />}
        {currentView === 'chat' && <ChatView activeChannel={activeChannel} />}
        {currentView === 'members' && <MembersView />}
        {currentView === 'support' && <SupportView />}
        {currentView === 'notifications' && <NotificationsView />}
        
      </div>
    </div>
  );
}
