let isSidebarIntentionallyClosed = false;

function switchView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.add('hidden');
    });
    
    // Show targeted view
    const targetView = document.getElementById('view-' + viewId);
    if(targetView) {
        targetView.classList.remove('hidden');
    }

    // Determine which nav icon should be active
    let activeNav = viewId;
    if (viewId === 'chat-general') activeNav = 'welcome'; // Chat icon represents all chat views

    // Update active state on sidebar icons
    document.querySelectorAll('.nav-icon').forEach(icon => {
        if(icon.getAttribute('data-target') === activeNav) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });

    const sidebar = document.getElementById('secondary-sidebar');
    const titles = document.getElementById('workspace-titles');
    const content = document.getElementById('sidebar-content');

    if (sidebar) {
        // If navigating to a Chat view, always force expand the sidebar
        if (viewId === 'welcome' || viewId === 'chat-general') {
            sidebar.classList.remove('w-[60px]');
            sidebar.classList.add('w-[260px]');
            titles.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            // For other views, remember and restore the user's previous toggle state
            if (isSidebarIntentionallyClosed) {
                sidebar.classList.remove('w-[260px]');
                sidebar.classList.add('w-[60px]');
                titles.classList.add('opacity-0', 'pointer-events-none');
                content.classList.add('opacity-0', 'pointer-events-none');
            } else {
                sidebar.classList.remove('w-[60px]');
                sidebar.classList.add('w-[260px]');
                titles.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('opacity-0', 'pointer-events-none');
            }
        }
    }
}

function toggleSecondarySidebar() {
    const sidebar = document.getElementById('secondary-sidebar');
    const titles = document.getElementById('workspace-titles');
    const content = document.getElementById('sidebar-content');

    if (sidebar.classList.contains('w-[260px]')) {
        // Collapse
        sidebar.classList.remove('w-[260px]');
        sidebar.classList.add('w-[60px]');
        titles.classList.add('opacity-0', 'pointer-events-none');
        content.classList.add('opacity-0', 'pointer-events-none');
        isSidebarIntentionallyClosed = true;
    } else {
        // Expand
        sidebar.classList.remove('w-[60px]');
        sidebar.classList.add('w-[260px]');
        titles.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('opacity-0', 'pointer-events-none');
        isSidebarIntentionallyClosed = false;
    }
}

function setActiveChannel(clickedBtn) {
    // Remove active classes from all channel buttons
    document.querySelectorAll('.channel-btn').forEach(btn => {
        btn.classList.remove('bg-sky-100', 'text-sky-900', 'font-medium');
        btn.classList.add('text-slate-700');
        const icon = btn.querySelector('i');
        if(icon) {
            icon.classList.remove('text-sky-600');
            icon.classList.add('text-slate-400');
        }
    });

    // Add active classes to the clicked button
    clickedBtn.classList.remove('text-slate-700');
    clickedBtn.classList.add('bg-sky-100', 'text-sky-900', 'font-medium');
    const clickedIcon = clickedBtn.querySelector('i');
    if(clickedIcon) {
        clickedIcon.classList.remove('text-slate-400');
        clickedIcon.classList.add('text-sky-600');
    }
}

function setMembersLayout(mode) {
    const container = document.getElementById('members-container');
    const btnList = document.getElementById('btn-layout-list');
    const btnGrid = document.getElementById('btn-layout-grid');

    if (mode === 'grid') {
        container.classList.remove('layout-list');
        container.classList.add('layout-grid');
        btnList.classList.remove('bg-white', 'text-slate-800', 'shadow-sm');
        btnList.classList.add('text-slate-400');
        btnGrid.classList.remove('text-slate-400');
        btnGrid.classList.add('bg-white', 'text-slate-800', 'shadow-sm');
    } else {
        container.classList.remove('layout-grid');
        container.classList.add('layout-list');
        btnGrid.classList.remove('bg-white', 'text-slate-800', 'shadow-sm');
        btnGrid.classList.add('text-slate-400');
        btnList.classList.remove('text-slate-400');
        btnList.classList.add('bg-white', 'text-slate-800', 'shadow-sm');
    }
}

function clearAllNotifications() {
    // 1. Mark individual unread items as read (visually)
    document.querySelectorAll('.notification-item').forEach(item => {
        item.classList.remove('bg-sky-50/30');
    });
    document.querySelectorAll('.unread-dot').forEach(dot => {
        dot.classList.add('opacity-0');
    });

    // 2. Hide the list and show the empty state
    const list = document.getElementById('notifications-list');
    const emptyState = document.getElementById('notifications-empty');
    const countBadge = document.getElementById('notification-count');
    const bellBadge = document.getElementById('bell-badge');
    const markReadBtn = document.getElementById('btn-mark-read');

    if (list) {
        list.style.opacity = '0';
        setTimeout(() => {
            list.classList.add('hidden');
            if (emptyState) {
                emptyState.classList.remove('hidden');
                // Trigger reflow for transition
                void emptyState.offsetWidth;
                emptyState.classList.remove('opacity-0');
                emptyState.classList.add('opacity-100');
            }
        }, 300);
    }

    // 3. Update badges
    if (countBadge) {
        countBadge.textContent = '0';
        countBadge.classList.remove('bg-slate-100', 'text-slate-600');
        countBadge.classList.add('bg-slate-50', 'text-slate-400');
    }
    if (bellBadge) {
        bellBadge.classList.add('opacity-0');
    }
    if (markReadBtn) {
        markReadBtn.disabled = true;
        markReadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}
