/* ── Football emoji cursor ──────────────────────────── */
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.textContent = '🏈';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

/* ── Punt data ──────────────────────────────────────── */
const punts = [
  {
    rank: 1,
    tupa: 144,
    punter: 'Pressley Harvin',
    team: 'PIT Steelers',
    week: 'Week 13',
    date: 'Dec 5, 2021',
    matchup: 'vs. BAL',
    gif: 'gifs/punt-planet-1.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '64 yards',                          pts: 64 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)',      pts: 20 },
      { category: 'Bonus',                 detail: 'Almost hits the pylon',             pts: 10 },
    ],
  },
  {
    rank: 2,
    tupa: 140,
    punter: 'Blake Gillikin',
    team: 'NOR Saints',
    week: 'Week 5',
    date: 'Oct 10, 2021',
    matchup: 'at WAS',
    gif: 'gifs/punt-planet-2.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '60 yards',                          pts: 60 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)',      pts: 20 },
      { category: 'Bonus',                 detail: 'Almost hits the pylon',             pts: 10 },
    ],
  },
  {
    rank: 3,
    tupa: 138,
    punter: 'Johnny Hekker',
    team: 'LAR Rams',
    week: 'Week 13',
    date: 'Dec 5, 2021',
    matchup: 'at JAX',
    gif: 'gifs/punt-planet-3.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '58 yards',                          pts: 58 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground',             pts:  5 },
      { category: 'Bonus',                 detail: 'Batted back out of the end zone',   pts: 25 },
    ],
  },
  {
    rank: 4,
    tupa: 130,
    punter: 'Matt Haack',
    team: 'BUF Bills',
    week: 'Divisional Playoff',
    date: 'Jan 23, 2022',
    matchup: 'vs. KAN',
    gif: 'gifs/punt-planet-4.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '50 yards',                          pts: 50 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground',             pts:  5 },
      { category: 'Bonus',                 detail: 'Batted back out of the end zone',   pts: 25 },
    ],
  },
  {
    rank: 5,
    tupa: 128,
    punter: 'Michael Dickson',
    team: 'SEA Seahawks',
    week: 'Week 5',
    date: 'Oct 7, 2021',
    matchup: 'vs. LAR',
    gif: 'gifs/punt-planet-5.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '68 yards',                                    pts: 68 },
      { category: 'Punt Ended At',         detail: '11-yard line',                                pts:  5 },
      { category: 'Downed How',            detail: 'Touched on the ground',                       pts:  5 },
      { category: 'Bonus',                 detail: 'Blocked but still got it off (Double punt)',   pts: 50 },
    ],
  },
  {
    rank: 6,
    tupa: 125,
    punter: 'Bradley Pinion',
    team: 'TAM Buccaneers',
    week: 'Week 1',
    date: 'Sep 9, 2021',
    matchup: 'vs. DAL',
    gif: 'gifs/punt-planet-6.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '65 yards',                          pts: 65 },
      { category: 'Punt Ended At',         detail: '2-yard line',                       pts: 40 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)',      pts: 20 },
      { category: 'Bonus',                 detail: '—',                                 pts:  0 },
    ],
  },
  {
    rank: 7,
    tupa: 125,
    punter: 'Bradley Pinion',
    team: 'TAM Buccaneers',
    week: 'Week 15',
    date: 'Dec 19, 2021',
    matchup: 'vs. NOR',
    gif: 'gifs/punt-planet-7.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '45 yards',                          pts: 45 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground',             pts:  5 },
      { category: 'Bonus',                 detail: 'Batted back out of the end zone',   pts: 25 },
    ],
  },
  {
    rank: 8,
    tupa: 123,
    punter: 'Logan Cooke',
    team: 'JAX Jaguars',
    week: 'Week 13',
    date: 'Dec 5, 2021',
    matchup: 'at LAR',
    gif: 'gifs/punt-planet-8.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '68 yards',                          pts: 68 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the bounce',              pts:  5 },
      { category: 'Bonus',                 detail: '—',                                 pts:  0 },
    ],
  },
  {
    rank: 9,
    tupa: 121,
    punter: 'Dustin Colquitt',
    team: 'ATL Falcons',
    week: 'Week 10',
    date: 'Nov 14, 2021',
    matchup: 'at DAL',
    gif: 'gifs/punt-planet-9.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '66 yards',                          pts: 66 },
      { category: 'Punt Ended At',         detail: '1-yard line',                       pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground',             pts:  5 },
      { category: 'Bonus',                 detail: '—',                                 pts:  0 },
    ],
  },
  {
    rank: 10,
    tupa: 118,
    punter: 'Jamie Gillan',
    team: 'CLE Browns',
    week: 'Week 10',
    date: 'Nov 14, 2021',
    matchup: 'at NWE',
    gif: 'gifs/punt-planet-10.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '58 yards',                          pts: 58 },
      { category: 'Punt Ended At',         detail: '2-yard line',                       pts: 40 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)',      pts: 20 },
      { category: 'Bonus',                 detail: '—',                                 pts:  0 },
    ],
  },
];

/* ── Render cards ───────────────────────────────────── */
function ptsClass(pts) {
  if (pts > 0) return 'pts-pos';
  if (pts < 0) return 'pts-neg';
  return 'pts-zero';
}

function ptsLabel(pts) {
  if (pts > 0) return `+${pts}`;
  return String(pts);
}

function buildCard(punt) {
  const rows = punt.breakdown.map(r => `
    <tr>
      <td>${r.category}</td>
      <td>${r.detail}</td>
      <td class="${ptsClass(r.pts)}">${ptsLabel(r.pts)}</td>
    </tr>`).join('');

  return `
    <article class="punt-card" data-rank="${punt.rank}">
      <div class="card-summary">
        <div class="card-rank">#${punt.rank}</div>
        <div class="card-gif-thumb">
          <img src="${punt.gif}" alt="Punt #${punt.rank} — ${punt.punter}" />
        </div>
        <div class="card-meta">
          <div class="card-title">${punt.punter} &middot; ${punt.team}</div>
          <div class="card-sub">${punt.week} &middot; ${punt.matchup} &middot; ${punt.date}</div>
        </div>
        <div class="card-tupa">
          <span class="tupa-label">TUPA</span>
          <span class="tupa-score">${punt.tupa}</span>
        </div>
        <button class="expand-btn" aria-expanded="false" aria-label="Show TUPA breakdown">&#9660;</button>
      </div>
      <div class="card-details" hidden>
        <table class="tupa-table">
          <thead>
            <tr><th>Category</th><th>Detail</th><th>Pts</th></tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr><th colspan="2">Total TUPA</th><th>${punt.tupa}</th></tr>
          </tfoot>
        </table>
      </div>
    </article>`;
}

const container = document.getElementById('cards-container');
container.innerHTML = [...punts].reverse().map(buildCard).join('');

/* ── TUPA Rules modal ───────────────────────────────── */
const overlay  = document.getElementById('modal-overlay');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('modal-close');

rulesBtn.addEventListener('click', () => { overlay.hidden = false; });
closeBtn.addEventListener('click', () => { overlay.hidden = true; });
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.hidden = true; });

/* ── Expand / collapse ──────────────────────────────── */
container.addEventListener('click', e => {
  const summary = e.target.closest('.card-summary');
  if (!summary) return;
  const card    = summary.closest('.punt-card');
  const details = card.querySelector('.card-details');
  const btn     = summary.querySelector('.expand-btn');
  const isOpen  = !details.hidden;
  details.hidden = isOpen;
  btn.setAttribute('aria-expanded', String(!isOpen));
});
