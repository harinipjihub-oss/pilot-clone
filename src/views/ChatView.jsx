import React from 'react';

export default function ChatView({ activeChannel }) {
  if (!activeChannel) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center bg-slate-50/50">
          <div className="text-center flex flex-col items-center justify-center max-w-sm">
              <div className="w-20 h-20 mb-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 text-3xl shadow-inner border border-slate-200/60">
                  <i className="fa-regular fa-comments"></i>
              </div>
              <h2 className="text-xl font-medium text-slate-700 mb-2">Pilot Chat</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-8">Select a channel or direct message from the sidebar to start collaborating with your team.</p>
              <div className="px-4 py-1.5 bg-slate-100 rounded-full flex items-center gap-2 text-[10px] font-medium text-slate-400 border border-slate-200">
                  <i className="fa-solid fa-lock"></i> Messages are secure and private
              </div>
          </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Chat Header */}
      <div className="h-14 border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
          <button className="flex items-center gap-2 text-lg font-bold text-slate-800 hover:bg-slate-50 px-2 py-1 rounded transition-colors">
              <i className="fa-solid fa-hashtag text-slate-400 text-sm"></i> general <i className="fa-solid fa-chevron-down text-[10px] text-slate-400 ml-1"></i>
          </button>
          <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 px-3 py-1 border border-slate-200 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <i className="fa-regular fa-user text-[10px] text-slate-500"></i> 48
              </button>
          </div>
      </div>

      {/* Chat History (Empty State Welcome) */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-end">
          <div className="mb-4">
              <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-hashtag text-slate-300"></i> general
              </h1>
              <p className="text-sm text-slate-500">This channel was created on August 7th, 2026. This is the very beginning of the <span className="font-semibold text-slate-700">general</span> channel.</p>
          </div>
      </div>

      {/* Message Input Area */}
      <div className="px-6 pb-6 pt-2 shrink-0">
          <div className="border border-slate-200 rounded-lg bg-white shadow-sm flex flex-col focus-within:border-slate-300 focus-within:shadow transition-all">
              {/* Top Toolbar */}
              <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-100 text-slate-400 text-xs bg-[#fbfbfb] rounded-t-lg">
                  <button className="hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"><i className="fa-solid fa-bold"></i></button>
                  <button className="hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"><i className="fa-solid fa-italic"></i></button>
                  <button className="hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"><i className="fa-solid fa-strikethrough"></i></button>
                  <div className="w-px h-4 bg-slate-200 mx-1"></div>
                  <button className="hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"><i className="fa-solid fa-list-ul"></i></button>
                  <button className="hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"><i className="fa-solid fa-list-ol"></i></button>
              </div>
              
              {/* Input Field */}
              <div className="px-4 py-3 min-h-[80px]">
                  <div contentEditable="true" className="w-full outline-none text-sm text-slate-800 empty:before:content-[attr(data-placeholder)] empty:before:text-slate-400" data-placeholder="Message # general"></div>
              </div>
              
              {/* Bottom Toolbar */}
              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-b-lg">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <button className="hover:text-slate-600 w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 transition-colors"><i className="fa-solid fa-font"></i></button>
                      <button className="hover:text-slate-600 w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 transition-colors"><i className="fa-regular fa-face-smile"></i></button>
                      <button className="hover:text-slate-600 w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 transition-colors"><i className="fa-solid fa-paperclip"></i></button>
                      <button className="hover:text-slate-600 w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 transition-colors"><i className="fa-solid fa-video"></i></button>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 text-slate-300 cursor-not-allowed">
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>
              </div>
          </div>
      </div>
    </main>
  );
}
