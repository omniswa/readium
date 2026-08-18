(function() {
  "use strict";
  
  /* ============================================================
     ICONS
     ============================================================ */
  const ICONS = {
    folder: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/></svg>',
    chevRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    kebab: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="12" cy="19" r="1.9"/></svg>',
    pinOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5M8 3h8l-1 6 3 3v2H6v-2l3-3-1-6Z"/></svg>',
    pinFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5M8 3h8l-1 6 3 3v2H6v-2l3-3-1-6Z"/></svg>',
    rename: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/></svg>',
    move: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l-3 3 3 3"/><path d="M9 5l3-3 3 3"/><path d="M15 19l3 3 3-3"/><path d="M19 9l3 3-3 3"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
    duplicate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>',
    zip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v1Z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9.5" y1="13.5" x2="14.5" y2="13.5"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 19l-7-7 7-7"/></svg>',
    sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11M3 12h7M3 17h4"/><path d="M17 4v16M17 4l-3 3M17 4l3 3"/></svg>',
    backup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 1 3 6.3"/><path d="M4 21v-5h5"/></svg>',
    restore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
  };
  
  /* ============================================================
     STORAGE / DATA MODEL
     ============================================================ */
  const STORAGE_KEY = "inkbox:v1";
  
  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }
  
  function defaultData() {
    return {
      version: 1,
      folders: [], // {id, name, parentId, createdAt, updatedAt}
      notes: [], // {id, title, body, folderId, pinned, createdAt, updatedAt}
      settings: { theme: "light", sort: "updated" }
    };
  }
  
  let db = load();
  let deletedTrash = null; // holds last deleted item(s) for undo
  
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return seedFirstRun();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.folders) || !Array.isArray(parsed.notes)) return defaultData();
      parsed.settings = Object.assign({ theme: "light", sort: "updated" }, parsed.settings || {});
      return parsed;
    } catch (e) {
      console.error("Inkbox: failed to load data, starting fresh.", e);
      return defaultData();
    }
  }
  
  function seedFirstRun() {
    const d = defaultData();
    const now = Date.now();
    const welcomeId = uid();
    d.notes.push({
      id: welcomeId,
      title: "Welcome to Inkbox",
      body: "This is your first note.\n\nEverything you write is saved automatically, right here on this device — nothing is sent anywhere.\n\nA few things worth knowing:\n— Tap \"New folder\" to keep related notes together.\n— Tap the pin icon while editing a note to keep it at the top of a list.\n— Open the menu on any note or folder to move, export, or delete it.\n— Use the download icon in the top corner to export everything as a ZIP or back up your data as a file.\n\nGo ahead — replace this with your own thoughts whenever you're ready.",
      folderId: null,
      pinned: true,
      createdAt: now,
      updatedAt: now
    });
    return d;
  }
  
  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
      return true;
    } catch (e) {
      console.error("Inkbox: could not save.", e);
      toast("Couldn't save — your device storage may be full.");
      return false;
    }
  }
  
  function debounce(fn, ms) {
    let t = null;
    return function(...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }
  
  /* ---- data helpers ---- */
  function getFolder(id) { return id ? db.folders.find(f => f.id === id) || null : null; }
  
  function getNote(id) { return db.notes.find(n => n.id === id) || null; }
  
  function childFolders(parentId) {
    return db.folders.filter(f => (f.parentId || null) === (parentId || null));
  }
  
  function childNotes(folderId) {
    return db.notes.filter(n => (n.folderId || null) === (folderId || null));
  }
  
  function descendantFolderIds(rootId) {
    const out = [];
    const stack = [rootId];
    while (stack.length) {
      const id = stack.pop();
      for (const f of childFolders(id)) {
        out.push(f.id);
        stack.push(f.id);
      }
    }
    return out;
  }
  
  function allDescendantNotes(rootId) {
    const ids = [rootId, ...descendantFolderIds(rootId)];
    return db.notes.filter(n => ids.includes(n.folderId || null));
  }
  
  function breadcrumb(folderId) {
    const path = [];
    let cur = getFolder(folderId);
    while (cur) {
      path.unshift(cur);
      cur = getFolder(cur.parentId);
    }
    return path;
  }
  
  function folderCounts(folderId) {
    return { folders: childFolders(folderId).length, notes: childNotes(folderId).length };
  }
  
  /* ============================================================
     STATE
     ============================================================ */
  let state = {
    currentFolderId: null,
    editingNoteId: null,
    searchOpen: false,
    searchQuery: "",
  };
  
  /* ============================================================
     DOM refs
     ============================================================ */
  const $ = sel => document.querySelector(sel);
  const appEl = $("#app");
  const appbarRow = $("#appbar-row");
  const appbarEl = $("#appbar");
  const contentEl = $("#content");
  const searchWrap = $("#searchbar-wrap");
  const searchInput = $("#search-input");
  const searchClear = $("#search-clear");
  const editorView = $("#editor-view");
  const noteTitleEl = $("#note-title");
  const noteBodyEl = $("#note-body");
  const editorTimestamp = $("#editor-timestamp");
  const editorWordcount = $("#editor-wordcount");
  const editorFolderChip = $("#editor-folder-chip");
  const editorFolderName = $("#editor-folder-name");
  const savePill = $("#save-pill");
  const savePillText = $("#save-pill-text");
  const overlay = $("#overlay");
  const sheet = $("#sheet");
  const toastRegion = $("#toast-region");
  
  /* ============================================================
     THEME
     ============================================================ */
  function applyTheme() {
    appEl.setAttribute("data-theme", db.settings.theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", db.settings.theme === "dark" ? "#16140F" : "#F6F4EF");
  }
  
  function toggleTheme() {
    db.settings.theme = db.settings.theme === "dark" ? "light" : "dark";
    persist();
    applyTheme();
  }
  applyTheme();
  
  /* ============================================================
     TIME FORMATTING
     ============================================================ */
  function relativeTime(ts) {
    const diff = Date.now() - ts;
    const min = 60000,
      hr = 3600000,
      day = 86400000;
    if (diff < min) return "just now";
    if (diff < hr) return Math.round(diff / min) + "m ago";
    if (diff < day) return Math.round(diff / hr) + "h ago";
    if (diff < day * 2) return "yesterday";
    if (diff < day * 6) return Math.round(diff / day) + "d ago";
    const d = new Date(ts);
    const sameYear = d.getFullYear() === new Date().getFullYear();
    return d.toLocaleDateString(undefined, sameYear ? { month: "short", day: "numeric" } : { month: "short", day: "numeric", year: "numeric" });
  }
  
  function fullDateTime(ts) {
    return new Date(ts).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  }
  
  /* ============================================================
     RENDER — APPBAR
     ============================================================ */
  function renderAppbar() {
    const inFolder = !!state.currentFolderId;
    const crumbs = breadcrumb(state.currentFolderId);
    
    let eyebrowHtml = "";
    if (crumbs.length > 1) {
      const parent = crumbs[crumbs.length - 2];
      eyebrowHtml = `<span class="appbar-eyebrow"><button data-nav="${parent.id||''}">${escapeHtml(parent.name)}</button> / </span>`;
    } else if (crumbs.length === 1) {
      eyebrowHtml = `<span class="appbar-eyebrow"><button data-nav="">Home</button> / </span>`;
    }
    
    const titleHtml = inFolder ?
      `${eyebrowHtml}<div class="appbar-title">${escapeHtml(crumbs[crumbs.length-1].name)}</div>` :
      `<div class="brandmark"><span class="logo-mark">${ICONS.note}</span><span class="wordmark">Inkbox</span></div>`;
    
    appbarRow.innerHTML = `
    ${inFolder ? `<button class="icon-btn" id="btn-back" aria-label="Back">${ICONS.back}</button>` : ""}
    <div class="appbar-title-wrap">${titleHtml}</div>
    <button class="icon-btn" id="btn-search-toggle" aria-label="Search">${ICONS.search}</button>
    <button class="icon-btn" id="btn-theme" aria-label="Toggle dark mode">${db.settings.theme==="dark" ? ICONS.sun : ICONS.moon}</button>
    <button class="icon-btn" id="btn-more" aria-label="More options">${ICONS.more}</button>
  `;
    appbarEl.classList.toggle("has-line", state.searchOpen);
    
    const backBtn = $("#btn-back");
    if (backBtn) backBtn.addEventListener("click", () => navigateTo(crumbs.length > 1 ? crumbs[crumbs.length - 2].id : null));
    appbarRow.querySelectorAll("[data-nav]").forEach(b => {
      b.addEventListener("click", () => navigateTo(b.getAttribute("data-nav") || null));
    });
    $("#btn-search-toggle").addEventListener("click", toggleSearch);
    $("#btn-theme").addEventListener("click", toggleTheme);
    $("#btn-more").addEventListener("click", openMoreSheet);
  }
  
  function toggleSearch() {
    state.searchOpen = !state.searchOpen;
    searchWrap.classList.toggle("open", state.searchOpen);
    appbarEl.classList.toggle("has-line", state.searchOpen);
    if (state.searchOpen) { searchInput.focus(); }
    else {
      state.searchQuery = "";
      searchInput.value = "";
      searchClear.hidden = true;
      renderContent();
    }
  }
  
  function navigateTo(folderId) {
    state.currentFolderId = folderId || null;
    if (state.searchOpen) {
      state.searchOpen = false;
      state.searchQuery = "";
      searchInput.value = "";
      searchWrap.classList.remove("open");
    }
    renderAppbar();
    renderContent();
    contentEl.scrollTop = 0;
  }
  
  /* ============================================================
     RENDER — CONTENT LIST
     ============================================================ */
  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } [c]));
  }
  
  function snippetOf(body) {
    return String(body || "").replace(/\s+/g, " ").trim().slice(0, 140);
  }
  
  function sortItems(notes, folders) {
    const mode = db.settings.sort;
    const byName = (a, b) => a.name.localeCompare(b.name);
    folders = [...folders].sort(byName);
    let sortedNotes;
    if (mode === "alpha") {
      sortedNotes = [...notes].sort((a, b) => (a.title || "Untitled").localeCompare(b.title || "Untitled"));
    } else if (mode === "created") {
      sortedNotes = [...notes].sort((a, b) => b.createdAt - a.createdAt);
    } else {
      sortedNotes = [...notes].sort((a, b) => b.updatedAt - a.updatedAt);
    }
    const pinned = sortedNotes.filter(n => n.pinned);
    const rest = sortedNotes.filter(n => !n.pinned);
    return { folders, notes: [...pinned, ...rest] };
  }
  
  function renderContent() {
    const q = state.searchQuery.trim().toLowerCase();
    
    if (q) {
      renderSearchResults(q);
      return;
    }
    
    const folders = childFolders(state.currentFolderId);
    const notes = childNotes(state.currentFolderId);
    const { folders: sf, notes: sn } = sortItems(notes, folders);
    
    if (sf.length === 0 && sn.length === 0) {
      contentEl.innerHTML = emptyStateHtml(state.currentFolderId ? "folder" : "root");
      return;
    }
    
    let html = "";
    if (sf.length) {
      html += `<div class="list">${sf.map(folderCardHtml).join("")}</div>`;
    }
    if (sn.length) {
      html += `<div class="section-label">${sf.length ? "Notes" : ""}</div><div class="list">${sn.map(noteCardHtml).join("")}</div>`;
    }
    contentEl.innerHTML = html;
    bindContentEvents();
  }
  
  function renderSearchResults(q) {
    const matchNotes = db.notes.filter(n =>
      (n.title || "").toLowerCase().includes(q) || (n.body || "").toLowerCase().includes(q)
    ).sort((a, b) => b.updatedAt - a.updatedAt);
    const matchFolders = db.folders.filter(f => f.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name));
    
    if (!matchNotes.length && !matchFolders.length) {
      contentEl.innerHTML = `
      <div class="empty-state">
        <div class="glyph">${ICONS.search}</div>
        <h3>No matches</h3>
        <p>Nothing found for "${escapeHtml(state.searchQuery)}". Try a different word.</p>
      </div>`;
      return;
    }
    
    let html = "";
    if (matchFolders.length) {
      html += `<div class="section-label">Folders</div><div class="list">${matchFolders.map(folderCardHtml).join("")}</div>`;
    }
    if (matchNotes.length) {
      html += `<div class="section-label">Notes</div><div class="list">${matchNotes.map(n=>noteCardHtml(n,true)).join("")}</div>`;
    }
    contentEl.innerHTML = html;
    bindContentEvents();
  }
  
  function emptyStateHtml(kind) {
    if (kind === "root") {
      return `
      <div class="empty-state">
        <div class="glyph">${ICONS.note}</div>
        <h3>Nothing here yet</h3>
        <p>Start a note to capture a thought, or make a folder to keep things organized.</p>
      </div>`;
    }
    return `
    <div class="empty-state">
      <div class="glyph">${ICONS.folder}</div>
      <h3>This folder is empty</h3>
      <p>Add a note or a subfolder to start filling it in.</p>
    </div>`;
  }
  
  function folderCardHtml(f) {
    const c = folderCounts(f.id);
    const parts = [];
    if (c.folders) parts.push(c.folders + (c.folders === 1 ? " folder" : " folders"));
    parts.push(c.notes + (c.notes === 1 ? " note" : " notes"));
    return `
    <div class="folder-card" data-folder-id="${f.id}">
      <span class="tab"></span>
      <div class="body card-btn-row">
        <button class="body-btn" data-open-folder="${f.id}" style="all:unset;display:flex;align-items:center;gap:12px;flex:1;min-width:0;cursor:pointer;">
          <span class="ico">${ICONS.folder}</span>
          <span class="text">
            <span class="name">${escapeHtml(f.name)}</span>
            <span class="meta">${parts.join(" · ")}</span>
          </span>
        </button>
        <span class="chev">${ICONS.chevRight}</span>
        <button class="kebab" data-folder-menu="${f.id}" aria-label="Folder options">${ICONS.kebab}</button>
      </div>
    </div>`;
  }
  
  function noteCardHtml(n, showPath) {
    const title = n.title && n.title.trim() ? escapeHtml(n.title) : "Untitled note";
    const untitledClass = (n.title && n.title.trim()) ? "" : "untitled";
    const snippet = snippetOf(n.body);
    let pathChip = "";
    if (showPath) {
      const crumbs = breadcrumb(n.folderId);
      const label = crumbs.length ? crumbs.map(c => c.name).join(" / ") : "Home";
      pathChip = `<span class="folder-chip">${ICONS.folder}${escapeHtml(label)}</span>`;
    }
    return `
    <div class="note-card" data-note-id="${n.id}">
      <div class="body card-btn-row">
        <button class="body-btn" data-open-note="${n.id}" style="all:unset;display:flex;align-items:flex-start;gap:11px;flex:1;min-width:0;cursor:pointer;">
          ${n.pinned ? '<span class="pin-dot" title="Pinned"></span>' : ''}
          <span class="text">
            <span class="title-row"><span class="title ${untitledClass}">${title}</span></span>
            ${snippet ? `<span class="snippet">${escapeHtml(snippet)}</span>` : ''}
            <span class="meta">${relativeTime(n.updatedAt)}${pathChip ? " · " : ""}${pathChip}</span>
          </span>
        </button>
        <button class="kebab" data-note-menu="${n.id}" aria-label="Note options">${ICONS.kebab}</button>
      </div>
    </div>`;
  }
  
  function bindContentEvents() {
    contentEl.querySelectorAll("[data-open-folder]").forEach(el => {
      el.addEventListener("click", () => navigateTo(el.getAttribute("data-open-folder")));
    });
    contentEl.querySelectorAll("[data-open-note]").forEach(el => {
      el.addEventListener("click", () => openEditor(el.getAttribute("data-open-note")));
    });
    contentEl.querySelectorAll("[data-folder-menu]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openFolderMenu(el.getAttribute("data-folder-menu"));
      });
    });
    contentEl.querySelectorAll("[data-note-menu]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openNoteMenu(el.getAttribute("data-note-menu"));
      });
    });
  }
  
  searchInput.addEventListener("input", () => {
    state.searchQuery = searchInput.value;
    searchClear.hidden = !searchInput.value;
    renderContent();
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    searchClear.hidden = true;
    searchInput.focus();
    renderContent();
  });
  
  /* ============================================================
     FOLDER CREATE / RENAME
     ============================================================ */
  function promptFolder(existing) {
    const isEdit = !!existing;
    closeSheetAnd(() => {
      openModal(`
      <div class="sheet-handle"></div>
      <h2>${isEdit ? "Rename folder" : "New folder"}</h2>
      <div class="field">
        <label for="folder-name-input">Folder name</label>
        <input type="text" id="folder-name-input" maxlength="80" placeholder="e.g. Recipes" value="${isEdit ? escapeHtml(existing.name) : ''}">
      </div>
      <div class="sheet-actions">
        <button class="btn" id="folder-cancel">Cancel</button>
        <button class="btn primary" id="folder-save">${isEdit ? "Save" : "Create"}</button>
      </div>
    `);
      const input = $("#folder-name-input");
      input.focus();
      input.select();
      const commit = () => {
        const name = input.value.trim();
        if (!name) { input.focus(); return; }
        if (isEdit) {
          existing.name = name.slice(0, 80);
          existing.updatedAt = Date.now();
          toast("Folder renamed");
        } else {
          const f = { id: uid(), name: name.slice(0, 80), parentId: state.currentFolderId, createdAt: Date.now(), updatedAt: Date.now() };
          db.folders.push(f);
          toast("Folder created");
        }
        persist();
        closeModal();
        renderContent();
      };
      $("#folder-save").addEventListener("click", commit);
      $("#folder-cancel").addEventListener("click", closeModal);
      input.addEventListener("keydown", e => { if (e.key === "Enter") commit(); });
    });
  }
  
  /* ============================================================
     NOTE CREATE / EDIT
     ============================================================ */
  function newNote() {
    const n = { id: uid(), title: "", body: "", folderId: state.currentFolderId, pinned: false, createdAt: Date.now(), updatedAt: Date.now() };
    db.notes.push(n);
    persist();
    openEditor(n.id, true);
  }
  
  function openEditor(id, isNew) {
    state.editingNoteId = id;
    const n = getNote(id);
    if (!n) return;
    noteTitleEl.value = n.title || "";
    noteBodyEl.value = n.body || "";
    updateEditorMeta(n);
    autoGrow(noteBodyEl);
    editorView.classList.add("open");
    document.body.style.overflow = "hidden";
    if (isNew) { setTimeout(() => noteTitleEl.focus(), 260); }
    updatePinIcon(n);
  }
  
  function updateEditorMeta(n) {
    editorTimestamp.textContent = "Edited " + relativeTime(n.updatedAt);
    editorTimestamp.title = fullDateTime(n.updatedAt);
    const words = (noteBodyEl.value.trim().match(/\S+/g) || []).length;
    editorWordcount.textContent = words + (words === 1 ? " word" : " words");
    const crumbs = breadcrumb(n.folderId);
    editorFolderName.textContent = crumbs.length ? crumbs[crumbs.length - 1].name : "Home";
  }
  
  function updatePinIcon(n) {
    const btn = $("#btn-editor-pin");
    btn.innerHTML = n.pinned ? ICONS.pinFilled : ICONS.pinOutline;
    btn.classList.toggle("accent", !!n.pinned);
    btn.setAttribute("aria-pressed", n.pinned ? "true" : "false");
  }
  
  function closeEditor() {
    editorView.classList.remove("open");
    document.body.style.overflow = "";
    const n = getNote(state.editingNoteId);
    state.editingNoteId = null;
    renderAppbar();
    renderContent();
  }
  
  const autosave = debounce(() => {
    const n = getNote(state.editingNoteId);
    if (!n) return;
    n.title = noteTitleEl.value;
    n.body = noteBodyEl.value;
    n.updatedAt = Date.now();
    persist();
    updateEditorMeta(n);
    flashSaved();
  }, 350);
  
  function flashSaved() {
    savePillText.textContent = "Saved";
    savePill.classList.add("show");
    clearTimeout(flashSaved._t);
    flashSaved._t = setTimeout(() => savePill.classList.remove("show"), 1400);
  }
  
  noteTitleEl.addEventListener("input", () => {
    savePillText.textContent = "Saving…";
    savePill.classList.add("show");
    autosave();
  });
  noteBodyEl.addEventListener("input", () => {
    savePillText.textContent = "Saving…";
    savePill.classList.add("show");
    autoGrow(noteBodyEl);
    const words = (noteBodyEl.value.trim().match(/\S+/g) || []).length;
    editorWordcount.textContent = words + (words === 1 ? " word" : " words");
    autosave();
  });
  
  function autoGrow(ta) {
    ta.style.height = "auto";
    ta.style.height = Math.max(ta.scrollHeight, 200) + "px";
  }
  
  $("#btn-editor-back").addEventListener("click", closeEditor);
  $("#btn-editor-pin").addEventListener("click", () => {
    const n = getNote(state.editingNoteId);
    if (!n) return;
    n.pinned = !n.pinned;
    n.updatedAt = Date.now();
    persist();
    updatePinIcon(n);
    toast(n.pinned ? "Note pinned" : "Note unpinned");
  });
  $("#btn-editor-menu").addEventListener("click", () => {
    const n = getNote(state.editingNoteId);
    if (n) openNoteMenu(n.id, true);
  });
  editorFolderChip.addEventListener("click", () => {
    const n = getNote(state.editingNoteId);
    if (n) openMoveSheet(n, "note", true);
  });
  
  /* ============================================================
     MENUS (bottom sheets)
     ============================================================ */
  function openFolderMenu(id) {
    const f = getFolder(id);
    if (!f) return;
    openModal(`
    <div class="sheet-handle"></div>
    <h2>${escapeHtml(f.name)}</h2>
    <p class="sheet-sub">Folder options</p>
    <div class="action-list">
      <button class="action-item" data-act="open">${ICONS.folder}Open</button>
      <button class="action-item" data-act="rename">${ICONS.rename}Rename</button>
      <button class="action-item" data-act="move">${ICONS.move}Move</button>
      <button class="action-item" data-act="export">${ICONS.zip}Export as ZIP</button>
      <button class="action-item danger" data-act="delete">${ICONS.trash}Delete</button>
    </div>
  `);
    sheet.querySelector('[data-act="open"]').addEventListener("click", () => {
      closeModal();
      navigateTo(f.id);
    });
    sheet.querySelector('[data-act="rename"]').addEventListener("click", () => promptFolder(f));
    sheet.querySelector('[data-act="move"]').addEventListener("click", () => openMoveSheet(f, "folder"));
    sheet.querySelector('[data-act="export"]').addEventListener("click", () => {
      closeModal();
      exportFolderAsZip(f.id);
    });
    sheet.querySelector('[data-act="delete"]').addEventListener("click", () => confirmDeleteFolder(f));
  }
  
  function openNoteMenu(id, fromEditor) {
    const n = getNote(id);
    if (!n) return;
    openModal(`
    <div class="sheet-handle"></div>
    <h2>${n.title && n.title.trim() ? escapeHtml(n.title) : "Untitled note"}</h2>
    <p class="sheet-sub">Edited ${relativeTime(n.updatedAt)}</p>
    <div class="action-list">
      <button class="action-item ${n.pinned ? 'accent-active' : ''}" data-act="pin">${n.pinned ? ICONS.pinFilled : ICONS.pinOutline}${n.pinned ? "Unpin" : "Pin to top"}</button>
      <button class="action-item" data-act="move">${ICONS.move}Move to folder</button>
      <button class="action-item" data-act="duplicate">${ICONS.duplicate}Duplicate</button>
      <button class="action-item" data-act="export">${ICONS.download}Export as .txt</button>
      <button class="action-item danger" data-act="delete">${ICONS.trash}Delete</button>
    </div>
  `);
    sheet.querySelector('[data-act="pin"]').addEventListener("click", () => {
      n.pinned = !n.pinned;
      n.updatedAt = Date.now();
      persist();
      closeModal();
      if (state.editingNoteId === n.id) updatePinIcon(n);
      renderContent();
      toast(n.pinned ? "Note pinned" : "Note unpinned");
    });
    sheet.querySelector('[data-act="move"]').addEventListener("click", () => openMoveSheet(n, "note", fromEditor));
    sheet.querySelector('[data-act="duplicate"]').addEventListener("click", () => {
      const copy = { ...n, id: uid(), title: (n.title || "Untitled") + " (copy)", createdAt: Date.now(), updatedAt: Date.now() };
      db.notes.push(copy);
      persist();
      closeModal();
      renderContent();
      toast("Note duplicated");
    });
    sheet.querySelector('[data-act="export"]').addEventListener("click", () => {
      closeModal();
      exportNoteAsTxt(n);
    });
    sheet.querySelector('[data-act="delete"]').addEventListener("click", () => confirmDeleteNote(n, fromEditor));
  }
  
  function openMoreSheet() {
    openModal(`
    <div class="sheet-handle"></div>
    <h2>More</h2>
    <div class="action-list">
      <button class="action-item" data-act="sort-updated">${ICONS.sort}Sort by last edited ${db.settings.sort==='updated' ? `<span class="check">${ICONS.check}</span>` : ''}</button>
      <button class="action-item" data-act="sort-created">${ICONS.sort}Sort by date created ${db.settings.sort==='created' ? `<span class="check">${ICONS.check}</span>` : ''}</button>
      <button class="action-item" data-act="sort-alpha">${ICONS.sort}Sort alphabetically ${db.settings.sort==='alpha' ? `<span class="check">${ICONS.check}</span>` : ''}</button>
      <button class="action-item" data-act="export-all">${ICONS.zip}Export everything as ZIP</button>
      <button class="action-item" data-act="backup">${ICONS.backup}Back up data (.json)</button>
      <button class="action-item" data-act="restore">${ICONS.restore}Restore from backup</button>
    </div>
    <input type="file" id="restore-file-input" accept="application/json" class="visually-hidden">
  `);
    sheet.querySelector('[data-act="sort-updated"]').addEventListener("click", () => setSort("updated"));
    sheet.querySelector('[data-act="sort-created"]').addEventListener("click", () => setSort("created"));
    sheet.querySelector('[data-act="sort-alpha"]').addEventListener("click", () => setSort("alpha"));
    sheet.querySelector('[data-act="export-all"]').addEventListener("click", () => {
      closeModal();
      exportAllAsZip();
    });
    sheet.querySelector('[data-act="backup"]').addEventListener("click", () => {
      closeModal();
      backupJson();
    });
    const fileInput = $("#restore-file-input");
    sheet.querySelector('[data-act="restore"]').addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) restoreFromFile(file);
    });
  }
  
  function setSort(mode) {
    db.settings.sort = mode;
    persist();
    closeModal();
    renderContent();
  }
  
  /* ---- Move sheet (folder tree picker) ---- */
  function openMoveSheet(item, kind, fromEditor) {
    const invalidIds = kind === "folder" ? new Set([item.id, ...descendantFolderIds(item.id)]) : new Set();
    
    function treeHtml(parentId, depth) {
      return childFolders(parentId).map(f => {
        const disabled = invalidIds.has(f.id);
        const isCurrent = (kind === "note" ? item.folderId : item.parentId) === f.id;
        return `<button class="folder-tree-item ${isCurrent?'current':''}" style="padding-left:${8+depth*18}px" data-target="${f.id}" ${disabled?'disabled':''}>
          ${ICONS.folder}<span>${escapeHtml(f.name)}</span>${isCurrent?`<span class="check" style="margin-left:auto">${ICONS.check}</span>`:''}
        </button>` + treeHtml(f.id, depth + 1);
      }).join("");
    }
    const rootCurrent = (kind === "note" ? item.folderId : item.parentId) == null;
    openModal(`
    <div class="sheet-handle"></div>
    <h2>Move ${kind === "note" ? "note" : "folder"}</h2>
    <p class="sheet-sub">Choose a destination folder.</p>
    <div class="action-list">
      <button class="folder-tree-item ${rootCurrent?'current':''}" data-target="">${ICONS.home}<span>Home</span>${rootCurrent?`<span class="check" style="margin-left:auto">${ICONS.check}</span>`:''}</button>
      ${treeHtml(null, 1)}
    </div>
  `);
    sheet.querySelectorAll("[data-target]").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target") || null;
        if (kind === "note") {
          item.folderId = target;
          item.updatedAt = Date.now();
        } else {
          item.parentId = target;
          item.updatedAt = Date.now();
        }
        persist();
        closeModal();
        if (fromEditor) updateEditorMeta(item);
        renderContent();
        toast((kind === "note" ? "Note" : "Folder") + " moved");
      });
    });
  }
  
  /* ---- Delete flows ---- */
  function confirmDeleteNote(n, fromEditor) {
    openModal(`
    <div class="sheet-handle"></div>
    <h2>Delete this note?</h2>
    <p class="sheet-sub">"${n.title && n.title.trim() ? escapeHtml(n.title) : "Untitled note"}" will be removed. You can undo this right after.</p>
    <div class="sheet-actions">
      <button class="btn" id="del-cancel">Cancel</button>
      <button class="btn danger" id="del-confirm">${ICONS.trash} Delete</button>
    </div>
  `);
    $("#del-cancel").addEventListener("click", closeModal);
    $("#del-confirm").addEventListener("click", () => {
      closeModal();
      db.notes = db.notes.filter(x => x.id !== n.id);
      persist();
      if (fromEditor) closeEditor();
      else renderContent();
      deletedTrash = { type: "note", data: n };
      toast("Note deleted", { actionLabel: "Undo", onAction: undoDelete });
    });
  }
  
  function confirmDeleteFolder(f) {
    const subIds = descendantFolderIds(f.id);
    const notesCount = allDescendantNotes(f.id).length;
    const foldersCount = subIds.length;
    const parts = [];
    if (foldersCount) parts.push(foldersCount + (foldersCount === 1 ? " subfolder" : " subfolders"));
    if (notesCount) parts.push(notesCount + (notesCount === 1 ? " note" : " notes"));
    const warn = parts.length ? ` This also deletes ${parts.join(" and ")} inside it.` : "";
    openModal(`
    <div class="sheet-handle"></div>
    <h2>Delete "${escapeHtml(f.name)}"?</h2>
    <p class="sheet-sub">${warn || "This folder is empty."} You can undo this right after.</p>
    <div class="sheet-actions">
      <button class="btn" id="del-cancel">Cancel</button>
      <button class="btn danger" id="del-confirm">${ICONS.trash} Delete</button>
    </div>
  `);
    $("#del-cancel").addEventListener("click", closeModal);
    $("#del-confirm").addEventListener("click", () => {
      closeModal();
      const allFolderIds = new Set([f.id, ...subIds]);
      const removedFolders = db.folders.filter(x => allFolderIds.has(x.id));
      const removedNotes = db.notes.filter(x => allFolderIds.has(x.folderId || null));
      db.folders = db.folders.filter(x => !allFolderIds.has(x.id));
      db.notes = db.notes.filter(x => !allFolderIds.has(x.folderId || null));
      persist();
      if (state.currentFolderId && allFolderIds.has(state.currentFolderId)) {
        navigateTo(f.parentId || null);
      } else {
        renderContent();
      }
      deletedTrash = { type: "folder", folders: removedFolders, notes: removedNotes };
      toast("Folder deleted", { actionLabel: "Undo", onAction: undoDelete });
    });
  }
  
  function undoDelete() {
    if (!deletedTrash) return;
    if (deletedTrash.type === "note") {
      db.notes.push(deletedTrash.data);
    } else {
      db.folders.push(...deletedTrash.folders);
      db.notes.push(...deletedTrash.notes);
    }
    persist();
    deletedTrash = null;
    renderAppbar();
    renderContent();
    toast("Restored");
  }
  
  /* ============================================================
     MODAL / SHEET SYSTEM
     ============================================================ */
  let lastFocused = null;
  
  function openModal(html) {
    sheet.innerHTML = html;
    overlay.classList.add("open");
    lastFocused = document.activeElement;
  }
  
  function closeModal() {
    overlay.classList.remove("open");
  }
  
  function closeSheetAnd(fn) { fn(); }
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => {
    const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
    
    if (e.key === "Escape") {
      if (overlay.classList.contains("open")) closeModal();
      else if (editorView.classList.contains("open")) closeEditor();
      else if (state.searchOpen) toggleSearch();
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      if (editorView.classList.contains("open")) {
        const n = getNote(state.editingNoteId);
        if (n) {
          n.title = noteTitleEl.value;
          n.body = noteBodyEl.value;
          n.updatedAt = Date.now();
          persist();
          flashSaved();
        }
      }
      return;
    }
    if (e.key === "/" && !typing && !editorView.classList.contains("open") && !overlay.classList.contains("open")) {
      e.preventDefault();
      if (!state.searchOpen) toggleSearch();
      else searchInput.focus();
    }
  });
  
  $("#btn-new-folder").addEventListener("click", () => promptFolder(null));
  $("#btn-new-note").addEventListener("click", newNote);
  
  /* ============================================================
     TOASTS
     ============================================================ */
  function toast(message, opts) {
    opts = opts || {};
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<span>${escapeHtml(message)}</span>`;
    if (opts.actionLabel) {
      const btn = document.createElement("button");
      btn.className = "undo";
      btn.textContent = opts.actionLabel;
      btn.addEventListener("click", () => {
        opts.onAction && opts.onAction();
        el.remove();
      });
      el.appendChild(btn);
    }
    toastRegion.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => el.remove(), 250);
    }, opts.actionLabel ? 5000 : 2400);
  }
  
  /* ============================================================
     ZIP BUILDER (store method, no external deps)
     ============================================================ */
  function makeCRCTable() {
    const table = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      table[n] = c >>> 0;
    }
    return table;
  }
  const CRC_TABLE = makeCRCTable();
  
  function crc32(bytes) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) crc = CRC_TABLE[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  class ByteWriter {
    constructor() {
      this.chunks = [];
      this.length = 0;
    }
    pushBytes(arr) {
      this.chunks.push(arr);
      this.length += arr.length;
    }
    u16(v) { this.pushBytes(Uint8Array.of(v & 0xFF, (v >>> 8) & 0xFF)); }
    u32(v) { this.pushBytes(Uint8Array.of(v & 0xFF, (v >>> 8) & 0xFF, (v >>> 16) & 0xFF, (v >>> 24) & 0xFF)); }
    toUint8Array() {
      const out = new Uint8Array(this.length);
      let off = 0;
      for (const c of this.chunks) {
        out.set(c, off);
        off += c.length;
      }
      return out;
    }
  }
  
  function dosDateTime(date) {
    const dosTime = ((date.getHours() & 0x1F) << 11) | ((date.getMinutes() & 0x3F) << 5) | (((date.getSeconds() / 2 | 0)) & 0x1F);
    const dosDate = (((date.getFullYear() - 1980) & 0x7F) << 9) | (((date.getMonth() + 1) & 0xF) << 5) | (date.getDate() & 0x1F);
    return { dosTime, dosDate };
  }
  
  function buildZip(files) {
    const w = new ByteWriter();
    const central = [];
    const { dosTime, dosDate } = dosDateTime(new Date());
    const enc = new TextEncoder();
    
    for (const file of files) {
      const isDir = file.name.endsWith("/");
      const nameBytes = enc.encode(file.name);
      const dataBytes = isDir ? new Uint8Array(0) : enc.encode(file.data || "");
      const crc = isDir ? 0 : crc32(dataBytes);
      const offset = w.length;
      
      w.u32(0x04034b50);
      w.u16(20);
      w.u16(0);
      w.u16(0);
      w.u16(dosTime);
      w.u16(dosDate);
      w.u32(crc);
      w.u32(dataBytes.length);
      w.u32(dataBytes.length);
      w.u16(nameBytes.length);
      w.u16(0);
      w.pushBytes(nameBytes);
      w.pushBytes(dataBytes);
      
      central.push({ nameBytes, crc, size: dataBytes.length, offset, isDir });
    }
    
    const centralStart = w.length;
    for (const e of central) {
      w.u32(0x02014b50);
      w.u16(20);
      w.u16(20);
      w.u16(0);
      w.u16(0);
      w.u16(dosTime);
      w.u16(dosDate);
      w.u32(e.crc);
      w.u32(e.size);
      w.u32(e.size);
      w.u16(e.nameBytes.length);
      w.u16(0);
      w.u16(0);
      w.u16(0);
      w.u16(0);
      w.u32(e.isDir ? 0x10 : 0);
      w.u32(e.offset);
      w.pushBytes(e.nameBytes);
    }
    const centralSize = w.length - centralStart;
    
    w.u32(0x06054b50);
    w.u16(0);
    w.u16(0);
    w.u16(central.length);
    w.u16(central.length);
    w.u32(centralSize);
    w.u32(centralStart);
    w.u16(0);
    
    return w.toUint8Array();
  }
  
  /* ============================================================
     EXPORT
     ============================================================ */
  function sanitizeFilename(name) {
    return String(name || "Untitled").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim().slice(0, 120) || "Untitled";
  }
  
  function noteToText(n) {
    const title = n.title && n.title.trim() ? n.title.trim() : "Untitled note";
    const rule = "=".repeat(Math.min(title.length, 60)) || "=";
    return `${title}\n${rule}\n\nCreated: ${fullDateTime(n.createdAt)}\nEdited: ${fullDateTime(n.updatedAt)}\n\n${n.body||""}\n`;
  }
  
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }
  
  function exportNoteAsTxt(n) {
    const blob = new Blob([noteToText(n)], { type: "text/plain;charset=utf-8" });
    downloadBlob(blob, sanitizeFilename(n.title) + ".txt");
    toast("Note exported as .txt");
  }
  
  function gatherZipEntries(folderId, pathPrefix) {
    const entries = [];
    const notes = childNotes(folderId);
    const folders = childFolders(folderId);
    if (!notes.length && !folders.length && pathPrefix) {
      entries.push({ name: pathPrefix, data: null }); // empty dir marker
    }
    for (const n of notes) {
      const name = sanitizeFilename(n.title) + ".txt";
      entries.push({ name: pathPrefix + name, data: noteToText(n) });
    }
    for (const f of folders) {
      const sub = pathPrefix + sanitizeFilename(f.name) + "/";
      entries.push(...gatherZipEntries(f.id, sub));
    }
    return entries;
  }
  
  function exportFolderAsZip(folderId) {
    const f = getFolder(folderId);
    const entries = gatherZipEntries(folderId, "");
    if (!entries.length) { toast("This folder has nothing to export"); return; }
    const zipBytes = buildZip(entries);
    downloadBlob(new Blob([zipBytes], { type: "application/zip" }), sanitizeFilename(f.name) + ".zip");
    toast("Folder exported as ZIP");
  }
  
  function exportAllAsZip() {
    const entries = gatherZipEntries(null, "");
    if (!entries.length) { toast("Nothing to export yet"); return; }
    const zipBytes = buildZip(entries);
    downloadBlob(new Blob([zipBytes], { type: "application/zip" }), "Inkbox export.zip");
    toast("Everything exported as ZIP");
  }
  
  /* ---- JSON backup / restore ---- */
  function backupJson() {
    const payload = JSON.stringify(db, null, 2);
    downloadBlob(new Blob([payload], { type: "application/json" }), "inkbox-backup.json");
    toast("Backup saved");
  }
  
  function restoreFromFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || !Array.isArray(parsed.folders) || !Array.isArray(parsed.notes)) {
          toast("That file doesn't look like an Inkbox backup");
          return;
        }
        openModal(`
        <div class="sheet-handle"></div>
        <h2>Restore backup?</h2>
        <p class="sheet-sub">This replaces everything currently in Inkbox with the contents of this backup file. This can't be undone.</p>
        <div class="sheet-actions">
          <button class="btn" id="restore-cancel">Cancel</button>
          <button class="btn danger" id="restore-confirm">Replace data</button>
        </div>
      `);
        $("#restore-cancel").addEventListener("click", closeModal);
        $("#restore-confirm").addEventListener("click", () => {
          db = parsed;
          db.settings = Object.assign({ theme: "light", sort: "updated" }, db.settings || {});
          persist();
          applyTheme();
          closeModal();
          navigateTo(null);
          toast("Backup restored");
        });
      } catch (e) {
        toast("Couldn't read that file — is it a valid Inkbox backup?");
      }
    };
    reader.readAsText(file);
  }
  
  /* ============================================================
     INIT
     ============================================================ */
  renderAppbar();
  renderContent();
  persist();
  
})();