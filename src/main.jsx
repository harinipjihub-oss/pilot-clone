import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const navItems = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "tasks", label: "My Tasks", icon: "✓" },
  { id: "works", label: "My Works", icon: "◷" },
];

const statusData = [
  { label: "To Do", value: 8, color: "blue" },
  { label: "In Progress", value: 5, color: "purple" },
  { label: "Completed", value: 12, color: "green" },
  { label: "Blocked", value: 2, color: "red" },
];

const projects = [
  {
    name: "Website Revamp",
    tasks: 18,
    completed: 13,
    hours: 24,
    color: "blue",
  },
  {
    name: "Mobile Application",
    tasks: 14,
    completed: 8,
    hours: 18,
    color: "purple",
  },
  {
    name: "Internal Automation",
    tasks: 9,
    completed: 7,
    hours: 12,
    color: "green",
  },
];

const tasks = [
  {
    title: "Update dashboard UI",
    project: "Website Revamp",
    priority: "High",
    status: "In Progress",
    due: "Today",
    progress: 72,
  },
  {
    title: "Review API integration",
    project: "Mobile Application",
    priority: "Medium",
    status: "To Do",
    due: "Tomorrow",
    progress: 20,
  },
  {
    title: "Prepare automation flow",
    project: "Internal Automation",
    priority: "High",
    status: "Blocked",
    due: "Sep 18",
    progress: 45,
  },
  {
    title: "Fix responsive layout",
    project: "Website Revamp",
    priority: "Low",
    status: "Completed",
    due: "Sep 16",
    progress: 100,
  },
];

function App() {
  const [page, setPage] = useState(
    window.location.pathname.includes("dashboard")
      ? "dashboard"
      : window.location.pathname.includes("tasks")
      ? "tasks"
      : window.location.pathname.includes("my-works")
      ? "works"
      : "home"
  );

  const navigate = (id) => {
    setPage(id);

    const paths = {
      home: "/home",
      dashboard: "/dashboard",
      tasks: "/tasks",
      works: "/my-works",
    };

    window.history.pushState({}, "", paths[id]);
  };

  return (
    <div className="app">
      <Sidebar page={page} navigate={navigate} />

      <main className="main">
        <Topbar />

        {page === "home" && <Home />}
        {page === "dashboard" && <Dashboard />}
        {page === "tasks" && <Tasks />}
        {page === "works" && <MyWorks />}
      </main>
    </div>
  );
}

function Sidebar({ page, navigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brandMark">P</div>
        <div>
          <strong>Pilot</strong>
          <span>Workspace</span>
        </div>
      </div>

      <div className="workspace">
        <div className="workspaceAvatar">H</div>
        <div>
          <strong>HARINI</strong>
          <span>Developer</span>
        </div>
        <span className="chevron">⌄</span>
      </div>

      <div className="sideLabel">WORKSPACE</div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`navItem ${page === item.id ? "active" : ""}`}
            onClick={() => navigate(item.id)}
          >
            <span className="navIcon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sideLabel projectsLabel">PROJECTS</div>

      <div className="projectMini">
        <span className="dot blueDot" />
        Website Revamp
      </div>

      <div className="projectMini">
        <span className="dot purpleDot" />
        Mobile Application
      </div>

      <div className="projectMini">
        <span className="dot greenDot" />
        Internal Automation
      </div>

      <div className="sidebarBottom">
        <div className="helpBox">
          <span className="helpIcon">?</span>
          <div>
            <strong>Need help?</strong>
            <span>Contact workspace admin</span>
          </div>
        </div>

        <div className="profile">
          <div className="profileAvatar">H</div>
          <div>
            <strong>Harini</strong>
            <span>Software Intern</span>
          </div>
          <span>•••</span>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="searchBox">
        <span>⌕</span>
        <input placeholder="Search anything..." />
        <kbd>⌘ K</kbd>
      </div>

      <div className="topActions">
        <button className="iconButton">?</button>
        <button className="iconButton notification">
          ◔
          <i />
        </button>

        <div className="createWrap">
          <button
            className="createButton"
            onClick={() => setCreateOpen(!createOpen)}
          >
            + Create
          </button>

          {createOpen && (
            <div className="createMenu">
              <button>＋ Task</button>
              <button>＋ Project</button>
              <button>＋ Work request</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <span className="eyebrow">WEDNESDAY · SEPTEMBER 16</span>
          <h1>Good afternoon, Harini</h1>
          <p>Here is what needs your attention today.</p>
        </div>

        <div className="heroStatus">
          <div className="statusRing">
            <svg viewBox="0 0 100 100">
              <circle className="ringBg" cx="50" cy="50" r="39" />
              <circle
                className="ringProgress"
                cx="50"
                cy="50"
                r="39"
                strokeDasharray="245"
                strokeDashoffset="73"
              />
            </svg>
            <div>
              <strong>70%</strong>
              <span>On track</span>
            </div>
          </div>
          <div>
            <strong>Weekly progress</strong>
            <span>28 of 40 hrs planned</span>
          </div>
        </div>
      </section>

      <section className="attentionGrid">
        <AttentionCard
          type="focus"
          number="5"
          title="Tasks in progress"
          subtitle="Keep these moving"
        />
        <AttentionCard
          type="warning"
          number="2"
          title="Need attention"
          subtitle="Blocked or overdue"
        />
        <AttentionCard
          type="today"
          number="3"
          title="Due today"
          subtitle="Finish before EOD"
        />
        <AttentionCard
          type="done"
          number="12"
          title="Completed"
          subtitle="This week"
        />
      </section>

      <section className="todayOverview">
        <div className="panel todayHoursPanel">
          <PanelHeader
            title="Today's work hours"
            subtitle="Your logged time for today"
            action="Today"
          />
          <div className="todayHoursSummary">
            <strong>6h 30m</strong>
            <span>of 8h planned</span>
          </div>
          <div className="todayHoursBar">
            <span style={{ width: "81.25%" }} />
          </div>
          <div className="todayHoursMeta">
            <span>81% of daily target</span>
            <strong>1h 30m remaining</strong>
          </div>
        </div>

        <div className="panel todayDeadlinePanel">
          <PanelHeader
            title="Today's deadline tasks"
            subtitle="Tasks that need to be completed before EOD"
            action="View tasks"
          />
          <div className="todayDeadlineCount">
            <strong>3</strong>
            <span>tasks due today</span>
          </div>
          <div className="todayDeadlineList">
            <span>Update dashboard UI</span>
            <span>Review pull requests</span>
            <span>Daily wrap-up</span>
          </div>
        </div>
      </section>

      <section className="visualGrid">
        <div className="panel workloadPanel">
          <PanelHeader
            title="Your workload"
            subtitle="Current task distribution"
            action="This week"
          />

          <div className="workloadLayout">
            <DonutChart />

            <div className="legendList">
              {statusData.map((item) => (
                <div className="legendRow" key={item.label}>
                  <span className={`legendDot ${item.color}`} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel progressPanel">
          <PanelHeader
            title="Weekly activity"
            subtitle="Hours logged each day"
            action="7 days"
          />

          <BarChart />
        </div>
      </section>

      <section className="panel priorityPanel">
        <PanelHeader
          title="What needs your attention"
          subtitle="Prioritized automatically"
          action="View all"
        />

        <div className="priorityCards">
          {tasks.slice(0, 3).map((task) => (
            <PriorityCard task={task} key={task.title} />
          ))}
        </div>
      </section>

      <section className="visualGrid lower">
        <div className="panel">
          <PanelHeader
            title="Project progress"
            subtitle="Completion across active projects"
            action="All projects"
          />

          <div className="projectProgress">
            {projects.map((project) => {
              const progress = Math.round(
                (project.completed / project.tasks) * 100
              );

              return (
                <div className="projectProgressRow" key={project.name}>
                  <div className="projectTitle">
                    <span className={`dot ${project.color}Dot`} />
                    <strong>{project.name}</strong>
                    <span>{progress}%</span>
                  </div>

                  <div className="bigProgress">
                    <div
                      className={`bigProgressFill ${project.color}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="projectMeta">
                    <span>
                      {project.completed}/{project.tasks} tasks
                    </span>
                    <span>{project.hours}h logged</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="panel">
          <PanelHeader
            title="Today's focus"
            subtitle="Your next actions"
            action="Today"
          />

          <div className="focusTimeline">
            <TimelineItem
              time="09:00"
              title="Update dashboard UI"
              project="Website Revamp"
              active
            />
            <TimelineItem
              time="11:30"
              title="Review API integration"
              project="Mobile Application"
            />
            <TimelineItem
              time="14:00"
              title="Prepare automation flow"
              project="Internal Automation"
            />
            <TimelineItem
              time="16:30"
              title="Daily wrap-up"
              project="Workspace"
            />
          </div>
        </div>
      </section>

      <section className="panel heatmapPanel">
        <PanelHeader
          title="Activity heatmap"
          subtitle="Your activity over the last 5 weeks"
          action="Monthly"
        />

        <Heatmap />

        <div className="heatLegend">
          <span>Less</span>
          {[1, 2, 3, 4, 5].map((x) => (
            <i key={x} className={`heat h${x}`} />
          ))}
          <span>More</span>
        </div>
      </section>
    </div>
  );
}

function Dashboard() {
  const [selectedProject, setSelectedProject] = useState("all");
  const [range, setRange] = useState("week");
  const [customStart, setCustomStart] = useState("2026-09-01");
  const [customEnd, setCustomEnd] = useState("2026-09-17");
  const projectData = {
    "Website Revamp": { points: 38, total: 52, completed: 13, tasks: 18, sprints: [4, 6], burnout: 26, risk: "Low", priority: { High: 4, Medium: 7, Low: 5, Blocked: 2 }, heat: [1, 2, 3, 2, 4, 3, 1, 0, 2, 4, 5, 3, 2, 1, 0, 3, 4, 2, 5, 4, 3, 2, 1, 0, 2, 3, 4, 5, 3, 2, 1, 0, 2, 4, 3] },
    "Mobile Application": { points: 26, total: 40, completed: 8, tasks: 14, sprints: [3, 5], burnout: 54, risk: "Moderate", priority: { High: 3, Medium: 5, Low: 4, Blocked: 2 }, heat: [0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 2, 4, 3, 2, 4, 5, 3, 2, 1, 0, 1, 2, 3, 4, 2, 1, 0, 2, 3, 4, 2] },
    "Internal Automation": { points: 20, total: 28, completed: 7, tasks: 9, sprints: [5, 6], burnout: 18, risk: "Healthy", priority: { High: 2, Medium: 3, Low: 3, Blocked: 1 }, heat: [2, 3, 4, 4, 5, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 2, 3, 4, 3, 2, 1, 0, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 5, 3, 2] },
  };
  const customDays = Math.max(1, Math.round((new Date(`${customEnd}T00:00:00`) - new Date(`${customStart}T00:00:00`)) / 86400000) + 1);
  const rangeFactor = range === "custom" ? Math.max(0.5, Math.min(2, customDays / 7)) : { week: 1, month: 1.35 }[range];
  const scaleProject = (item) => ({
    ...item,
    points: Math.round(item.points * rangeFactor),
    total: Math.round(item.total * rangeFactor),
    completed: Math.max(1, Math.round(item.completed * rangeFactor)),
    tasks: Math.max(1, Math.round(item.tasks * rangeFactor)),
    sprints: [Math.max(1, Math.round(item.sprints[0] * rangeFactor)), Math.max(1, Math.round(item.sprints[1] * rangeFactor))],
    burnout: Math.min(92, Math.max(8, Math.round(item.burnout * (range === "month" ? 1.12 : range === "custom" ? 0.9 : 1)))),
    priority: Object.fromEntries(Object.entries(item.priority).map(([key, value]) => [key, Math.max(1, Math.round(value * rangeFactor))])),
  });
  const selectedItems = selectedProject === "all" ? Object.values(projectData) : [projectData[selectedProject]];
  const scaledItems = selectedItems.map(scaleProject);
  const data = scaledItems.reduce((summary, item) => ({
    ...summary,
    points: summary.points + item.points,
    total: summary.total + item.total,
    completed: summary.completed + item.completed,
    tasks: summary.tasks + item.tasks,
    sprints: [summary.sprints[0] + item.sprints[0], summary.sprints[1] + item.sprints[1]],
    burnout: summary.burnout + item.burnout,
    priority: Object.fromEntries(Object.keys(summary.priority).map((key) => [key, summary.priority[key] + item.priority[key]])),
    heat: summary.heat.map((value, index) => Math.min(5, Math.round((value + item.heat[index]) / 2))),
  }), { points: 0, total: 0, completed: 0, tasks: 0, sprints: [0, 0], burnout: 0, priority: { High: 0, Medium: 0, Low: 0, Blocked: 0 }, heat: projectData["Website Revamp"].heat });
  data.completion = Math.round((data.completed / data.tasks) * 100);
  data.burnout = Math.round(data.burnout / scaledItems.length);
  data.risk = data.burnout < 30 ? "Healthy" : data.burnout < 60 ? "Moderate" : "High";
  const projectLabel = selectedProject === "all" ? "All Projects" : selectedProject;

  return <div className="page">
    <section className="dashboardHeader"><div><span className="eyebrow">WORKSPACE OVERVIEW</span><h1>Developer Dashboard</h1><p>Everything important, visible at a glance.</p></div><div className="dashboardControls"><select className="dashboardProjectSelect" value={selectedProject} onChange={(event) => setSelectedProject(event.target.value)}><option value="all">All Projects</option>{projects.map((project) => <option key={project.name} value={project.name}>{project.name}</option>)}</select><div className="rangeControl">{[["week", "This Week"], ["month", "This Month"], ["custom", "Custom"]].map(([key, label]) => <button key={key} className={range === key ? "selected" : ""} onClick={() => setRange(key)}>{label}</button>)}</div></div></section>
    {range === "custom" && <div className="customRange"><label>From <input type="date" value={customStart} onChange={(event) => setCustomStart(event.target.value)} /></label><label>To <input type="date" value={customEnd} onChange={(event) => setCustomEnd(event.target.value)} /></label><span>{customStart} to {customEnd}</span></div>}
    <section className="metricStrip"><Metric label="Assigned" value={data.tasks} trend={range} type="blue" icon="◉" /><Metric label="In Progress" value={Math.round(data.tasks * 0.19)} trend="19%" type="purple" icon="◐" /><Metric label="Completed" value={data.completed} trend={range} type="green" icon="✓" /><Metric label="Blocked" value={data.priority.Blocked} trend="Needs action" type="red" icon="!" /><Metric label="Story Points" value={data.points} trend={`of ${data.total}`} type="orange" icon="◆" /><Metric label="Completion" value={`${data.completion}%`} trend={projectLabel} type="teal" icon="◷" /></section>
    <section className="dashboardGrid"><div className="panel largeChart"><PanelHeader title={`${projectLabel} completion`} subtitle="Tasks completed vs remaining" action={range === "week" ? "This week" : range === "month" ? "This month" : "Custom range"} /><div className="completionHero"><div><strong>{data.completion}%</strong><span>of assigned work completed</span></div><div className="completionBar"><div className="completedPart" style={{ width: `${data.completion}%` }} /><div className="remainingPart" style={{ width: `${100 - data.completion}%` }} /></div><div className="completionLegend"><span><i className="greenDot" /> Completed <strong>{data.completed}</strong></span><span><i className="blueDot" /> Remaining <strong>{data.tasks - data.completed}</strong></span></div></div><ProjectStoryChart points={data.points} total={data.total} /></div><div className="panel"><PanelHeader title="Burnout monitor" subtitle={`Risk level for ${projectLabel}`} action="" /><BurnoutChart value={data.burnout} label={data.risk} /><div className="burnoutNotes"><span>Workload balance</span><strong>{data.burnout < 30 ? "On track" : "Needs attention"}</strong></div></div></section>
    <section className="dashboardGrid"><div className="panel"><PanelHeader title="Sprint progress" subtitle={`${projectLabel} delivery overview`} action={range === "month" ? "Monthly" : "Sprints"} /><SprintSummary value={`${data.sprints[0]}/${data.sprints[1]}`} completion={data.completion} /></div><div className="panel"><PanelHeader title="Priority status" subtitle={`Tasks in ${projectLabel}`} action="All priorities" /><PriorityStatus data={data.priority} /></div></section>
    <section className="panel attentionPanel"><PanelHeader title={`${projectLabel} activity heatmap`} subtitle="Daily activity across recent sprints" action="Last 5 weeks" /><ProjectHeatmap cells={data.heat} /><div className="heatLegend"><span>Less</span>{[1, 2, 3, 4, 5].map((x) => <i key={x} className={`heat h${x}`} />)}<span>More</span></div></section>
  </div>;
}

function TaskBoard() {
  const columns = [
    {
      name: "To Do",
      count: 8,
      color: "blue",
      tasks: tasks.filter((t) => t.status === "To Do"),
    },
    {
      name: "In Progress",
      count: 5,
      color: "purple",
      tasks: tasks.filter((t) => t.status === "In Progress"),
    },
    {
      name: "Blocked",
      count: 2,
      color: "red",
      tasks: tasks.filter((t) => t.status === "Blocked"),
    },
    {
      name: "Completed",
      count: 12,
      color: "green",
      tasks: tasks.filter((t) => t.status === "Completed"),
    },
  ];

  return (
    <div className="kanban">
      {columns.map((column) => (
        <div className="kanbanColumn" key={column.name}>
          <div className="columnHeader">
            <div>
              <span className={`statusIndicator ${column.color}`} />
              <strong>{column.name}</strong>
              <span>{column.count}</span>
            </div>
            <button>＋</button>
          </div>

          <div className="kanbanCards">
            {column.tasks.length === 0 ? (
              <div className="emptyColumn">
                <span>✓</span>
                Nothing here
              </div>
            ) : (
              column.tasks.map((task) => <TaskCard task={task} key={task.title} />)
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <div className="taskCard">
      <div className="taskTop">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <button>•••</button>
      </div>

      <strong>{task.title}</strong>

      <span className="taskProject">
        <span className="dot blueDot" />
        {task.project}
      </span>

      <div className="taskProgress">
        <div>
          <span>Progress</span>
          <strong>{task.progress}%</strong>
        </div>
        <div className="miniProgress">
          <span style={{ width: `${task.progress}%` }} />
        </div>
      </div>

      <div className="taskBottom">
        <span>◷ {task.due}</span>
        <div className="miniAvatar">H</div>
      </div>
    </div>
  );
}

function TaskList() {
  return (
    <div className="panel taskList">
      <div className="taskListHead">
        <span>Task</span>
        <span>Project</span>
        <span>Status</span>
        <span>Progress</span>
        <span>Due</span>
      </div>

      {tasks.map((task) => (
        <div className="taskListRow" key={task.title}>
          <strong>{task.title}</strong>
          <span>{task.project}</span>
          <span className={`statusPill ${task.status.toLowerCase().replace(" ", "-")}`}>
            {task.status}
          </span>
          <div className="rowProgress">
            <span>{task.progress}%</span>
            <div>
              <i style={{ width: `${task.progress}%` }} />
            </div>
          </div>
          <span>{task.due}</span>
        </div>
      ))}
    </div>
  );
}

function TaskCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="panel calendar">
      <div className="calendarWeek">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="calendarGrid">
        {days.map((day) => (
          <div
            className={`calendarDay ${
              day === 16 ? "today" : ""
            } ${[3, 8, 12, 18, 22, 26].includes(day) ? "hasTask" : ""}`}
            key={day}
          >
            <span>{day}</span>

            {[3, 8, 12, 18, 22, 26].includes(day) && (
              <div className="calendarTask">
                {day === 16 ? "Today" : "Task"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MyWorks() {
  const [week, setWeek] = useState(2);
  const [tab, setTab] = useState("Activity Pulse");

  const weekLabels = [
    "Week 1 - Aug - Sep 2026",
    "Week 2 - Sep 2026",
    "Week 3 - Sep 2026",
    "Week 4 - Sep 2026",
    "Week 5 - Sep - Oct 2026",
  ];

  const activities = [
    { title: "Review pull requests", project: "Website Revamp", time: "09:00 AM", mon: "1h 30m", total: "1h 30m" },
    { title: "Design sync", project: "Mobile Application", time: "11:30 AM", tue: "45m", total: "45m" },
    { title: "Worked on responsive layout", project: "Website Revamp", time: "02:00 PM", wed: "2h 10m", total: "2h 10m" },
    { title: "Prepared automation flow", project: "Internal Automation", time: "04:30 PM", thu: "2h 00m", total: "2h 00m" },
  ];

  return (
    <div className="page">
      <section className="worksHeader">
        <div>
          <h1>My Works</h1>
          <p>Understand where your working time is going.</p>
        </div>

        <div className="worksActions">
          <button className="secondaryButton">▣ Requests</button>
          <button className="primaryButton">✎ Note My Work</button>
          <div className="monthSelector">
            <button>← Previous Month</button>
            <strong>September 2026</strong>
            <button>Next Month →</button>
          </div>
        </div>
      </section>

      <div className="weekSelector">
        {weekLabels.map((item, index) => (
          <button key={item} className={week === index ? "selected" : ""} onClick={() => setWeek(index)}>{item}</button>
        ))}
      </div>

      <div className="worksTabs">
        {["Activity Pulse", "Task Ledger"].map((item) => <button key={item} className={tab === item ? "selected" : ""} onClick={() => setTab(item)}>{item}</button>)}
      </div>

      <section className="metricStrip worksMetrics">
        <Metric label="Required Hours This Week" value="40:00" trend="" type="blue" icon="" />
        <Metric label="Logged Hours" value="28:00" trend="" type="purple" icon="" />
        <Metric label="Remaining Hours" value="12:00" trend="" type="green" icon="" />
        <Metric label="Overtime Hours" value="00:00" trend="" type="red" icon="" />
        <Metric label="Average Daily Hours" value="05:36" trend="" type="orange" icon="" />
        <Metric label="Active Logged" value="4" trend="" type="teal" icon="" />
      </section>

      <div className="worksToolbar">
        <div className="worksSearch">⌕ <input placeholder="Search activity" /></div>
        <select><option>All Projects</option></select>
        <select><option>All Activities</option></select>
        <select><option>All Statuses</option></select>
        <button className="exportButton">⇩ Excel</button>
      </div>

      {tab === "Activity Pulse" ? <>
        <section className="activityTable panel">
          <div className="activityTableHead"><span>ACTIVITY</span><span>MON<br /><b>14 SEP</b></span><span>TUE<br /><b>15 SEP</b></span><span>WED<br /><b>16 SEP</b></span><span>THU<br /><b>17 SEP</b></span><span>FRI<br /><b>18 SEP</b></span><span>SAT<br /><b>19 SEP</b></span><span>SUN<br /><b>20 SEP</b></span><span>TOTAL</span></div>
          {activities.map((activity) => <div className="activityTableRow" key={activity.title}><div><strong>{activity.title}</strong><small>{activity.project}</small><small>◷ {activity.time}</small></div>{["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => <span className={activity[day] ? "logged" : "empty"} key={day}>{activity[day] || "-"}</span>)}<strong>{activity.total}</strong></div>)}
        </section>
        <section className="worksCharts">
          <div className="panel trendChart"><PanelHeader title="Weekly Trend" action="All weeks" /><div className="chartPlot"><i style={{ height: "66%" }} /><i style={{ height: "72%" }} /><i className="current" style={{ height: "78%" }} /><i style={{ height: "4%" }} /></div><div className="chartLabels"><span>Week 2 - Sep 2026</span><span>Week 3 - Sep 2026</span><span>Week 4 - Sep 2026</span></div></div>
          <div className="panel distributionChart"><PanelHeader title="Activity Distribution" action="Week 3 - Sep 2026" /><ActivityBar label="Website Revamp" value={50} /><ActivityBar label="Mobile Application" value={30} /><ActivityBar label="Internal Automation" value={20} /></div>
        </section>
      </> : <section className="panel ledgerPanel"><PanelHeader title="Task Ledger" subtitle="Logged work by task" action="Export" />{activities.map((activity) => <ActivityRow key={activity.title} time={activity.time} title={activity.title} project={activity.project} duration={activity.total} />)}</section>}
    </div>
  );
}

function Tasks() {
  const [view, setView] = useState("Board");

  return (
    <div className="page">
      <section className="tasksHeader">
        <div>
          <span className="eyebrow">MY WORK</span>
          <h1>My Tasks</h1>
          <p>See your work visually and move tasks forward.</p>
        </div>

        <button className="projectSelector">
          <span className="dot blueDot" />
          Website Revamp
          <span>⌄</span>
        </button>
      </section>

      <div className="taskToolbar">
        <div className="viewTabs">
          {["Board", "List", "Calendar"].map((item) => (
            <button
              className={view === item ? "selected" : ""}
              onClick={() => setView(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="taskFilters">
          <button>All</button>
          <button>Priority</button>
          <button>Due date</button>
          <button>⌕ Search</button>
        </div>
      </div>

      {view === "Board" && <TaskBoard />}
      {view === "List" && <TaskList />}
      {view === "Calendar" && <TaskCalendar />}
    </div>
  );
}

function ProjectStoryChart({ points, total }) {
  const bars = [58, 70, 64, 82, 92];

  return <div className="projectStoryChart"><div className="storyChartHeader"><strong>Story points trend</strong><span>{points} of {total} completed</span></div><div className="storyBars">{bars.map((height, index) => <div className="storyBar" key={index}><i style={{ height: `${height}%` }} /><small>S{index + 1}</small></div>)}</div></div>;
}

function BurnoutChart({ value, label }) {
  return <div className="burnoutChart"><div className="burnoutRing" style={{ "--burnout": `${value * 3.6}deg` }}><strong>{value}%</strong><span>{label}</span></div><div className="burnoutScale"><span>Healthy</span><span>Risk</span></div></div>;
}

function SprintSummary({ value, completion }) {
  return <div className="sprintSummary"><div className="sprintHeadline"><strong>{value}</strong><span>sprints completed</span></div><div className="sprintBar"><span style={{ width: `${completion}%` }} /></div><div className="sprintMeta"><span>Current velocity</span><strong>{Math.round(completion / 10)} pts / sprint</strong></div><div className="sprintMeta"><span>Delivery status</span><strong className="healthyText">On track</strong></div></div>;
}

function PriorityStatus({ data }) {
  const colors = { High: "red", Medium: "orange", Low: "green", Blocked: "purple" };
  const max = Math.max(...Object.values(data));

  return <div className="priorityStatusPanel">{Object.entries(data).map(([label, value]) => <div className="priorityBarRow" key={label}><div><strong>{label}</strong><span>{value} tasks</span></div><div className="priorityTrack"><i className={colors[label]} style={{ width: `${(value / max) * 100}%` }} /></div></div>)}</div>;
}

function ProjectHeatmap({ cells }) {
  return <div className="projectHeatmap">{cells.map((level, index) => <span className={`heat h${level}`} key={index} />)}</div>;
}

function PanelHeader({ title, subtitle, action }) {
  return (
    <div className="panelHeader">
      <div>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>

      {action && <button>{action} <span>⌄</span></button>}
    </div>
  );
}

function AttentionCard({ type, number, title, subtitle }) {
  return (
    <div className={`attentionCard ${type}`}>
      <div className="attentionIcon">
        {type === "focus" && "◐"}
        {type === "warning" && "!"}
        {type === "today" && "◷"}
        {type === "done" && "✓"}
      </div>

      <div className="attentionContent">
        <strong>{number}</strong>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>

      <span className="arrow">→</span>
    </div>
  );
}

function Metric({ label, value, trend, type, icon }) {
  return (
    <div className={`metric ${type}`}>
      <div className="metricTop">
        <span>{icon}</span>
        <small>{trend}</small>
      </div>
      <strong>{value}</strong>
      <label>{label}</label>
    </div>
  );
}

function DonutChart({ large = false }) {
  return (
    <div className={`donutWrap ${large ? "large" : ""}`}>
      <svg viewBox="0 0 120 120">
        <circle className="donutBg" cx="60" cy="60" r="45" />
        <circle
          className="donutBlue"
          cx="60"
          cy="60"
          r="45"
          strokeDasharray="283"
          strokeDashoffset="164"
        />
        <circle
          className="donutPurple"
          cx="60"
          cy="60"
          r="45"
          strokeDasharray="283"
          strokeDashoffset="218"
          transform="rotate(155 60 60)"
        />
        <circle
          className="donutGreen"
          cx="60"
          cy="60"
          r="45"
          strokeDasharray="283"
          strokeDashoffset="245"
          transform="rotate(225 60 60)"
        />
      </svg>

      <div className="donutCenter">
        <strong>27</strong>
        <span>tasks</span>
      </div>
    </div>
  );
}

function BarChart() {
  const values = [5, 7, 4, 8, 6, 9, 7];
  const labels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="barChart">
      <div className="barGrid">
        {[0, 2, 4, 6, 8, 10].map((n) => (
          <span key={n} style={{ bottom: `${(n / 10) * 100}%` }}>
            {n}h
          </span>
        ))}
      </div>

      <div className="bars">
        {values.map((value, index) => (
          <div className="chartBar" key={index}>
            <div className="chartBarFill" style={{ height: `${value * 10}%` }}>
              <span>{value}h</span>
            </div>
            <small>{labels[index]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function AreaChart() {
  return (
    <div className="areaChart">
      <div className="areaLabels">
        <span>30</span>
        <span>20</span>
        <span>10</span>
        <span>0</span>
      </div>

      <svg viewBox="0 0 700 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>

        <line x1="0" y1="45" x2="700" y2="45" />
        <line x1="0" y1="95" x2="700" y2="95" />
        <line x1="0" y1="145" x2="700" y2="145" />

        <path
          className="areaPath"
          d="M0,160 C70,150 80,125 150,130 S240,80 300,105 S390,60 450,75 S550,35 620,50 S670,25 700,35 L700,190 L0,190 Z"
        />

        <path
          className="linePath"
          d="M0,160 C70,150 80,125 150,130 S240,80 300,105 S390,60 450,75 S550,35 620,50 S670,25 700,35"
        />

        {[0, 150, 300, 450, 620, 700].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={[160, 130, 105, 75, 50, 35][i]}
            r="4"
          />
        ))}
      </svg>

      <div className="areaDays">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

function CapacityChart() {
  const data = [55, 72, 80, 65, 70];

  return (
    <div className="capacityChart">
      {data.map((value, i) => (
        <div className="capacityColumn" key={i}>
          <div className="capacityTrack">
            <span style={{ height: `${value}%` }} />
          </div>
          <strong>{value}%</strong>
          <small>{["M", "T", "W", "T", "F"][i]}</small>
        </div>
      ))}
    </div>
  );
}

function PriorityCard({ task }) {
  return (
    <div className="priorityCard">
      <div className="priorityHeader">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <span>{task.due}</span>
      </div>

      <h3>{task.title}</h3>
      <span className="taskProject">{task.project}</span>

      <div className="priorityProgress">
        <div>
          <span>Progress</span>
          <strong>{task.progress}%</strong>
        </div>
        <div>
          <i style={{ width: `${task.progress}%` }} />
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ time, title, project, active }) {
  return (
    <div className={`timelineItem ${active ? "active" : ""}`}>
      <div className="timelineTime">{time}</div>
      <div className="timelineDot" />
      <div>
        <strong>{title}</strong>
        <span>{project}</span>
      </div>
    </div>
  );
}

function Heatmap() {
  const cells = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => {
        const levels = [0, 1, 2, 3, 4, 5];
        return levels[(i * 7 + i * 3) % levels.length];
      }),
    []
  );

  return (
    <div className="heatmap">
      {cells.map((level, i) => (
        <span className={`heat h${level}`} key={i} />
      ))}
    </div>
  );
}

function ProjectHealth({ project }) {
  const progress = Math.round((project.completed / project.tasks) * 100);

  return (
    <div className="healthRow">
      <div className="healthName">
        <span className={`dot ${project.color}Dot`} />
        <strong>{project.name}</strong>
      </div>

      <div className="healthBar">
        <span
          className={project.color}
          style={{ width: `${progress}%` }}
        />
      </div>

      <strong>{progress}%</strong>
    </div>
  );
}

function AttentionRow({ color, title, info, action }) {
  return (
    <div className="attentionRow">
      <span className={`attentionStatus ${color}`} />
      <div>
        <strong>{title}</strong>
        <span>{info}</span>
      </div>
      <button>{action} →</button>
    </div>
  );
}

function ActivityBar({ label, value }) {
  return (
    <div className="activityBar">
      <div>
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="activityTrack">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ActivityRow({ time, title, project, duration }) {
  return (
    <div className="activityRow">
      <div className="activityTime">{time}</div>
      <div className="activityMarker" />
      <div className="activityInfo">
        <strong>{title}</strong>
        <span>{project}</span>
      </div>
      <div className="activityDuration">{duration}</div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);