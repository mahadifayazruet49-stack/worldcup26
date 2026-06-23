/* ===================== WORLD CUP 26 — APP LOGIC ===================== */

(function () {
  "use strict";

  const STORAGE_USERS_KEY = "wc26_users";
  const STORAGE_SESSION_KEY = "wc26_session";

  /* ---------------- AUTH HELPERS ---------------- */

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  }

  function setSession(username) {
    localStorage.setItem(STORAGE_SESSION_KEY, username);
  }

  function getSession() {
    return localStorage.getItem(STORAGE_SESSION_KEY);
  }

  function clearSession() {
    localStorage.removeItem(STORAGE_SESSION_KEY);
  }

  /* ---------------- GATE: TABS ---------------- */

  const gateTabs = document.querySelectorAll(".gate-tab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  gateTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      gateTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      if (tab.dataset.tab === "login") {
        loginForm.hidden = false;
        signupForm.hidden = true;
      } else {
        loginForm.hidden = true;
        signupForm.hidden = false;
      }
    });
  });

  /* ---------------- GATE: LOGIN ---------------- */

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUser").value.trim();
    const password = document.getElementById("loginPass").value;
    const errorEl = document.getElementById("loginError");
    const users = getUsers();

    if (!users[username]) {
      errorEl.textContent = "No account found with that username. Try creating one.";
      return;
    }
    if (users[username].password !== password) {
      errorEl.textContent = "Incorrect password. Please try again.";
      return;
    }

    errorEl.textContent = "";
    setSession(username);
    enterApp(username, users[username].team);
  });

  /* ---------------- GATE: SIGNUP ---------------- */

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signupUser").value.trim();
    const password = document.getElementById("signupPass").value;
    const team = document.getElementById("signupTeam").value.trim();
    const errorEl = document.getElementById("signupError");
    const users = getUsers();

    if (username.length < 3) {
      errorEl.textContent = "Username must be at least 3 characters.";
      return;
    }
    if (users[username]) {
      errorEl.textContent = "That username is already taken.";
      return;
    }
    if (password.length < 4) {
      errorEl.textContent = "Password must be at least 4 characters.";
      return;
    }

    errorEl.textContent = "";
    users[username] = { password, team: team || null };
    saveUsers(users);
    setSession(username);
    enterApp(username, team);
  });

  /* ---------------- GATE: GUEST ---------------- */

  document.getElementById("guestBtn").addEventListener("click", () => {
    setSession("Guest");
    enterApp("Guest", null);
  });

  /* ---------------- ENTER APP / LOGOUT ---------------- */

  function enterApp(username, team) {
    document.getElementById("gate").hidden = true;
    document.getElementById("app").hidden = false;

    document.getElementById("userInitial").textContent = username.charAt(0).toUpperCase();
    document.getElementById("userNameDisplay").textContent = username;
    document.getElementById("heroUserName").textContent = username;

    if (team) {
      document.querySelector(".hero-sub").innerHTML =
        `Welcome back, <strong>${escapeHTML(username)}</strong>. Cheering for <strong>${escapeHTML(team)}</strong>? Here's where the 2026 FIFA World Cup stands right now.`;
    }

    renderAll();
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    clearSession();
    document.getElementById("app").hidden = true;
    document.getElementById("gate").hidden = false;
    loginForm.reset();
    signupForm.reset();
  });

  /* ---------------- AUTO LOGIN ON LOAD ---------------- */

  window.addEventListener("DOMContentLoaded", () => {
    const session = getSession();
    if (session) {
      const users = getUsers();
      const team = users[session] ? users[session].team : null;
      enterApp(session, team);
    }
  });

  /* ---------------- NAVIGATION ---------------- */

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function goToView(viewName) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
    document.getElementById("view-" + viewName).classList.add("is-active");

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.classList.toggle("is-active", n.dataset.view === viewName);
    });
    document.querySelectorAll(".mobnav-link").forEach((n) => {
      n.classList.toggle("is-active", n.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".nav-link, .mobnav-link").forEach((btn) => {
    btn.addEventListener("click", () => goToView(btn.dataset.view));
  });
  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => goToView(btn.dataset.goto));
  });

  /* ---------------- RENDER: HOME ---------------- */

  function renderHome() {
    const upcoming = MATCHES.filter((m) => m.status === "UPCOMING" && m.home !== "TBD" && m.away !== m.home).slice(0, 4);
    const list = document.getElementById("upcomingList");
    list.innerHTML = "";

    upcoming.forEach((m) => {
      const row = document.createElement("div");
      row.className = "mini-match";
      row.innerHTML = `
        <div class="mini-match-teams">
          <span>${FLAGS[m.home] || "🏳️"} ${m.home}</span>
          <span class="mini-match-vs">vs</span>
          <span>${FLAGS[m.away] || "🏳️"} ${m.away}</span>
        </div>
        <div class="mini-match-meta">${formatDate(m.date)}<br>${m.time}</div>
      `;
      row.addEventListener("click", () => openMatchModal(m.id));
      list.appendChild(row);
    });

    const scorersList = document.getElementById("scorersMiniList");
    scorersList.innerHTML = "";
    SCORERS.slice(0, 5).forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "scorer-mini-row";
      row.innerHTML = `
        <span class="scorer-rank">${i + 1}</span>
        <span class="scorer-name">${s.name} <span class="scorer-team">${FLAGS[s.team] || ""} ${s.team}</span></span>
        <span class="scorer-goals">${s.goals}</span>
      `;
      scorersList.appendChild(row);
    });

    // Featured scoreboard: most recent finished high-profile match
    const featured = MATCHES.filter((m) => m.status === "FT").slice(-1)[0] || MATCHES.find((m) => m.status === "FT");
    if (featured) {
      document.getElementById("sbFlagA").textContent = FLAGS[featured.home] || "🏳️";
      document.getElementById("sbFlagB").textContent = FLAGS[featured.away] || "🏳️";
      document.getElementById("sbTeamA").textContent = featured.home;
      document.getElementById("sbTeamB").textContent = featured.away;
      document.getElementById("sbScoreA").textContent = featured.scoreHome;
      document.getElementById("sbScoreB").textContent = featured.scoreAway;
      document.getElementById("sbFoot").textContent = `FULL TIME · ${featured.stadium}`;
    }
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  /* ---------------- RENDER: MATCHES ---------------- */

  let activeGroupFilter = "all";
  let activeStatusFilter = "all";

  function renderGroupFilters() {
    const container = document.getElementById("groupFilters");
    Object.keys(GROUPS).forEach((g) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.dataset.group = g;
      chip.textContent = "Group " + g;
      chip.addEventListener("click", () => {
        activeGroupFilter = g;
        document.querySelectorAll("#groupFilters .chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        renderMatchList();
      });
      container.appendChild(chip);
    });

    container.querySelector('[data-group="all"]').addEventListener("click", (e) => {
      activeGroupFilter = "all";
      document.querySelectorAll("#groupFilters .chip").forEach((c) => c.classList.remove("is-active"));
      e.target.classList.add("is-active");
      renderMatchList();
    });
  }

  document.querySelectorAll('[data-status]').forEach((chip) => {
    chip.addEventListener("click", () => {
      activeStatusFilter = chip.dataset.status;
      document.querySelectorAll('[data-status]').forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderMatchList();
    });
  });

  function renderMatchList() {
    const list = document.getElementById("matchList");
    list.innerHTML = "";

    const filtered = MATCHES.filter((m) => {
      const groupOk = activeGroupFilter === "all" || m.group === activeGroupFilter;
      const statusOk = activeStatusFilter === "all" || m.status === activeStatusFilter;
      return groupOk && statusOk;
    });

    if (filtered.length === 0) {
      list.innerHTML = `<p style="color:var(--chalk-dim); padding:24px;">No matches found for this filter.</p>`;
      return;
    }

    filtered.forEach((m) => {
      const card = document.createElement("div");
      card.className = "match-card";

      const scoreOrVs = m.status === "FT"
        ? `<span class="match-score">${m.scoreHome}</span><span class="match-vs">–</span><span class="match-score">${m.scoreAway}</span>`
        : `<span class="match-vs">vs</span>`;

      card.innerHTML = `
        <div class="match-date"><strong>${formatDate(m.date)}</strong>${m.time}</div>
        <div class="match-teams">
          <div class="match-team home">${m.home} <span class="match-flag">${FLAGS[m.home] || "🏳️"}</span></div>
          ${scoreOrVs}
          <div class="match-team away"><span class="match-flag">${FLAGS[m.away] || "🏳️"}</span> ${m.away}</div>
        </div>
        <div class="match-side">
          <div class="match-stadium">${m.stadium}</div>
          <span class="match-status ${m.status === "FT" ? "ft" : "upcoming"}">${m.status === "FT" ? "FULL TIME" : "UPCOMING"}</span>
        </div>
      `;
      card.addEventListener("click", () => openMatchModal(m.id));
      list.appendChild(card);
    });
  }

  /* ---------------- RENDER: STANDINGS ---------------- */

  function renderStandings() {
    const grid = document.getElementById("standingsGrid");
    grid.innerHTML = "";

    Object.keys(GROUPS).forEach((g) => {
      const rows = STANDINGS.filter((s) => s.group === g).sort((a, b) => b.pts - a.pts);
      const card = document.createElement("div");
      card.className = "group-card";

      let rowsHTML = "";
      rows.forEach((r, idx) => {
        const played = r.w + r.d + r.l;
        rowsHTML += `
          <tr class="${idx < 2 ? "qualifies" : ""}">
            <td class="team-cell">${FLAGS[r.team] || "🏳️"} ${TEAM_NAMES[r.team] || r.team}</td>
            <td class="num">${played}</td>
            <td class="num">${r.w}</td>
            <td class="num">${r.d}</td>
            <td class="num">${r.l}</td>
            <td class="num pts-cell">${r.pts}</td>
          </tr>
        `;
      });

      card.innerHTML = `
        <h3>Group ${g}</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th class="num">P</th>
              <th class="num">W</th>
              <th class="num">D</th>
              <th class="num">L</th>
              <th class="num">Pts</th>
            </tr>
          </thead>
          <tbody>${rowsHTML}</tbody>
        </table>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- RENDER: SCORERS ---------------- */

  function renderScorers() {
    const table = document.getElementById("scorersTable");
    table.innerHTML = "";

    SCORERS.forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "scorer-row";
      row.innerHTML = `
        <span class="rank">#${i + 1}</span>
        <span class="player">
          <span class="player-name">${s.name}</span>
          ${s.note ? `<span class="player-note">${s.note}</span>` : ""}
        </span>
        <span class="team">${FLAGS[s.team] || "🏳️"} ${TEAM_NAMES[s.team] || s.team}</span>
        <span class="goals">${s.goals}</span>
      `;
      table.appendChild(row);
    });
  }

  /* ---------------- RENDER: STADIUMS ---------------- */

  function renderStadiums() {
    const grid = document.getElementById("stadiumGrid");
    grid.innerHTML = "";

    STADIUMS.forEach((st) => {
      const card = document.createElement("div");
      card.className = "stadium-card";
      card.innerHTML = `
        <h3>${st.name}</h3>
        <div class="stadium-city">${st.city}</div>
        <div class="stadium-meta"><span>CAPACITY: ${st.capacity}</span></div>
        <p class="stadium-note">${st.note}</p>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- MODAL ---------------- */

  const modal = document.getElementById("matchModal");

  function openMatchModal(matchId) {
    const m = MATCHES.find((x) => x.id === matchId);
    if (!m) return;

    const content = document.getElementById("modalContent");
    const scoreRow = m.status === "FT"
      ? `<span class="modal-score">${m.scoreHome}</span><span class="modal-score" style="color:var(--chalk-dim)">–</span><span class="modal-score">${m.scoreAway}</span>`
      : `<span class="modal-score" style="font-size:1.2rem; color:var(--chalk-dim)">VS</span>`;

    content.innerHTML = `
      <p class="modal-sub">GROUP ${m.group} · ${m.status === "FT" ? "FULL TIME" : "UPCOMING FIXTURE"}</p>
      <h2 class="modal-title">${TEAM_NAMES[m.home] || m.home} vs ${TEAM_NAMES[m.away] || m.away}</h2>

      <div class="modal-score-row">
        <div class="modal-team">
          <span class="modal-flag">${FLAGS[m.home] || "🏳️"}</span>
          <span class="modal-team-name">${TEAM_NAMES[m.home] || m.home}</span>
        </div>
        ${scoreRow}
        <div class="modal-team">
          <span class="modal-flag">${FLAGS[m.away] || "🏳️"}</span>
          <span class="modal-team-name">${TEAM_NAMES[m.away] || m.away}</span>
        </div>
      </div>

      <div class="modal-details">
        <div class="modal-detail-row"><span>Date</span><strong>${formatDate(m.date)}</strong></div>
        <div class="modal-detail-row"><span>Kickoff</span><strong>${m.time}</strong></div>
        <div class="modal-detail-row"><span>Stadium</span><strong>${m.stadium}</strong></div>
      </div>

      ${m.note ? `<p class="modal-note">${m.note}</p>` : ""}
    `;

    modal.hidden = false;
  }

  document.getElementById("modalClose").addEventListener("click", () => (modal.hidden = true));
  document.getElementById("modalBackdrop").addEventListener("click", () => (modal.hidden = true));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) modal.hidden = true;
  });

  /* ---------------- RENDER ALL ---------------- */

  function renderAll() {
    renderHome();
    renderGroupFilters();
    renderMatchList();
    renderStandings();
    renderScorers();
    renderStadiums();
  }
})();
