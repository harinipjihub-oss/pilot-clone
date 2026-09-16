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
  return (
    <div className="page">
      <section className="dashboardHeader">
        <div>
          <span className="eyebrow">WORKSPACE OVERVIEW</span>
          <h1>Developer Dashboard</h1>
          <p>Everything important, visible at a glance.</p>
        </div>

        <div className="rangeControl">
          <button className="selected">This Week</button>
          <button>This Month</button>
          <button>Custom</button>
        </div>
      </section>

      <section className="metricStrip">
        <Metric
          label="Assigned"
          value="27"
          trend="+4"
          type="blue"
          icon="◉"
        />
        <Metric
          label="In Progress"
          value="5"
          trend="19%"
          type="purple"
          icon="◐"
        />
        <Metric
          label="Completed"
          value="12"
          trend="+8"
          type="green"
          icon="✓"
        />
        <Metric
          label="Blocked"
          value="2"
          trend="Needs action"
          type="red"
          icon="!"
        />
        <Metric
          label="Story Points"
          value="38"
          trend="of 52"
          type="orange"
          icon="◆"
        />
        <Metric
          label="Logged Hours"
          value="28h"
          trend="70%"
          type="teal"
          icon="◷"
        />
      </section>

      <section className="dashboardGrid">
        <div className="panel largeChart">
          <PanelHeader
            title="Work completion"
            subtitle="Tasks completed vs remaining"
            action="This week"
          />

          <div className="completionHero">
            <div>
              <strong>44%</strong>
              <span>of assigned work completed</span>
            </div>

            <div className="completionBar">
              <div className="completedPart" style={{ width: "44%" }} />
              <div className="remainingPart" style={{ width: "56%" }} />
            </div>

            <div className="completionLegend">
              <span>
                <i className="greenDot" /> Completed <strong>12</strong>
              </span>
              <span>
                <i className="blueDot" /> Remaining <strong>15</strong>
              </span>
            </div>
          </div>

          <AreaChart />
        </div>

        <div className="panel">
          <PanelHeader
            title="Work status"
            subtitle="Current distribution"
            action=""
          />
          <DonutChart large />

          <div className="statusSummary">
            {statusData.map((item) => (
              <div key={item.label}>
                <span className={`legendDot ${item.color}`} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboardGrid">
        <div className="panel">
          <PanelHeader
            title="Project health"
            subtitle="Where your time is going"
            action="View projects"
          />

          <div className="projectHealth">
            {projects.map((project) => (
              <ProjectHealth project={project} key={project.name} />
            ))}
          </div>
        </div>

        <div className="panel">
          <PanelHeader
            title="Capacity"
            subtitle="Your weekly working hours"
            action="40h"
          />

          <CapacityChart />

          <div className="capacityFooter">
            <div>
              <strong>28h</strong>
              <span>Logged</span>
            </div>
            <div>
              <strong>12h</strong>
              <span>Remaining</span>
            </div>
            <div>
              <strong>70%</strong>
              <span>Utilized</span>
            </div>
          </div>
        </div>
      </section>

      <section className="panel attentionPanel">
        <PanelHeader
          title="Attention required"
          subtitle="Items that may affect your progress"
          action="View all"
        />

        <div className="attentionRows">
          <AttentionRow
            color="red"
            title="Prepare automation flow"
            info="Blocked · Internal Automation"
            action="Resolve"
          />
          <AttentionRow
            color="orange"
            title="Update dashboard UI"
            info="Due today · Website Revamp"
            action="Continue"
          />
          <AttentionRow
            color="purple"
            title="Review API integration"
            info="Starts tomorrow · Mobile Application"
            action="Open"
          />
        </div>
      </section>
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

  const days = [
    { day: "Mon", date: 14, hours: 7.5 },
    { day: "Tue", date: 15, hours: 8 },
    { day: "Wed", date: 16, hours: 6.5 },
    { day: "Thu", date: 17, hours: 0 },
    { day: "Fri", date: 18, hours: 0 },
  ];

  return (
    <div className="page">
      <section className="worksHeader">
        <div>
          <span className="eyebrow">TIME & ACTIVITY</span>
          <h1>My Works</h1>
          <p>Understand where your working time is going.</p>
        </div>

        <div className="monthSelector">
          <button>‹</button>
          <strong>September 2026</strong>
          <button>›</button>
        </div>
      </section>

      <div className="weekSelector">
        {["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"].map(
          (item, index) => (
            <button
              key={item}
              className={week === index ? "selected" : ""}
              onClick={() => setWeek(index)}
            >
              {item}
            </button>
          )
        )}
      </div>

      <section className="hoursHero">
        <div className="hoursMain">
          <span>WEEKLY CAPACITY</span>
          <strong>28.5h</strong>
          <p>of 40 hours logged</p>
          <div className="capacityBar">
            <span style={{ width: "71.25%" }} />
          </div>
        </div>

        <div className="hoursMini">
          <div>
            <span>Remaining</span>
            <strong>11.5h</strong>
          </div>
          <div>
            <span>Average / day</span>
            <strong>7.1h</strong>
          </div>
          <div>
            <span>Activities</span>
            <strong>18</strong>
          </div>
        </div>
      </section>

      <section className="worksGrid">
        <div className="panel">
          <PanelHeader
            title="Weekly hours"
            subtitle="Your daily activity"
            action="40h target"
          />

          <div className="dayBars">
            {days.map((day) => (
              <div className="dayBar" key={day.day}>
                <div className="barTrack">
                  <span
                    style={{
                      height: `${Math.min((day.hours / 8) * 100, 100)}%`,
                    }}
                  />
                </div>
                <strong>{day.hours || "—"}</strong>
                <span>{day.day}</span>
                <small>{day.date}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="panel activityDistribution">
          <PanelHeader
            title="Activity distribution"
            subtitle="Where your time went"
            action=""
          />

          <div className="horizontalBars">
            <ActivityBar label="Development" value={46} />
            <ActivityBar label="Testing" value={24} />
            <ActivityBar label="Meetings" value={18} />
            <ActivityBar label="Review" value={12} />
          </div>
        </div>
      </section>

      <section className="panel">
        <PanelHeader
          title="Activity timeline"
          subtitle="Your recent work"
          action="All activity"
        />

        <div className="activityTimeline">
          <ActivityRow
            time="10:12 AM"
            title="Updated dashboard UI"
            project="Website Revamp"
            duration="2h 20m"
          />
          <ActivityRow
            time="12:48 PM"
            title="Reviewed API integration"
            project="Mobile Application"
            duration="1h 40m"
          />
          <ActivityRow
            time="02:20 PM"
            title="Worked on responsive layout"
            project="Website Revamp"
            duration="2h 10m"
          />
          <ActivityRow
            time="04:30 PM"
            title="Prepared automation flow"
            project="Internal Automation"
            duration="2h 00m"
          />
        </div>
      </section>
    </div>
  );
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