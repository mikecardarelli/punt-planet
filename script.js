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
  {
    rank: 11,
    tupa: 116,
    punter: 'Corey Bojorquez',
    team: 'GNB Packers',
    week: 'Week 12',
    date: 'Nov 28, 2021',
    matchup: 'at LAR',
    gif: 'gifs/punt-planet-11.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '61 yards',              pts: 61 },
      { category: 'Punt Ended At',         detail: '1-yard line',           pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground', pts:  5 },
      { category: 'Bonus',                 detail: '—',                     pts:  0 },
    ],
  },
  {
    rank: 12,
    tupa: 115,
    punter: 'Jordan Berry',
    team: 'MIN Vikings',
    week: 'Week 3',
    date: 'Sep 26, 2021',
    matchup: 'at SEA',
    gif: 'gifs/punt-planet-12.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '45 yards',                     pts: 45 },
      { category: 'Punt Ended At',         detail: '1-yard line',                  pts: 50 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)', pts: 20 },
      { category: 'Bonus',                 detail: '—',                            pts:  0 },
    ],
  },
  {
    rank: 13,
    tupa: 114,
    punter: 'Cameron Johnston',
    team: 'HOU Texans',
    week: 'Week 7',
    date: 'Oct 24, 2021',
    matchup: 'vs. ARI',
    gif: 'gifs/punt-planet-13.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '44 yards',                        pts: 44 },
      { category: 'Punt Ended At',         detail: '2-yard line',                     pts: 40 },
      { category: 'Downed How',            detail: 'Touched on the ground',           pts:  5 },
      { category: 'Bonus',                 detail: 'Batted back out of the end zone', pts: 25 },
    ],
  },
  {
    rank: 14,
    tupa: 113,
    punter: 'Sam Martin',
    team: 'DEN Broncos',
    week: 'Week 4',
    date: 'Oct 3, 2021',
    matchup: 'at BAL',
    gif: 'gifs/punt-planet-14.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '68 yards',             pts: 68 },
      { category: 'Punt Ended At',         detail: '2-yard line',          pts: 40 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 15,
    tupa: 112,
    punter: 'Tommy Townsend',
    team: 'KAN Chiefs',
    week: 'Week 7',
    date: 'Oct 24, 2021',
    matchup: 'at TEN',
    gif: 'gifs/punt-planet-15.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '52 yards',                        pts: 52 },
      { category: 'Punt Ended At',         detail: '3-yard line',                     pts: 30 },
      { category: 'Downed How',            detail: 'Touched on the ground',           pts:  5 },
      { category: 'Bonus',                 detail: 'Batted back out of the end zone', pts: 25 },
    ],
  },
  {
    rank: 16,
    tupa: 109,
    punter: 'Tress Way',
    team: 'WAS WFT',
    week: 'Week 16',
    date: 'Dec 26, 2021',
    matchup: 'vs. DAL',
    gif: 'gifs/punt-planet-16.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '54 yards',             pts: 54 },
      { category: 'Punt Ended At',         detail: '1-yard line',          pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 17,
    tupa: 107,
    punter: 'Blake Gillikin',
    team: 'NOR Saints',
    week: 'Week 5',
    date: 'Oct 10, 2021',
    matchup: 'at WAS',
    gif: 'gifs/punt-planet-17.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '57 yards',                     pts: 57 },
      { category: 'Punt Ended At',         detail: '3-yard line',                  pts: 30 },
      { category: 'Downed How',            detail: 'Out of bounds (Coffin corner)', pts: 20 },
      { category: 'Bonus',                 detail: '—',                            pts:  0 },
    ],
  },
  {
    rank: 18,
    tupa: 106,
    punter: 'Matt Haack',
    team: 'BUF Bills',
    week: 'Week 14',
    date: 'Dec 12, 2021',
    matchup: 'at TAM',
    gif: 'gifs/punt-planet-18.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '61 yards',             pts: 61 },
      { category: 'Punt Ended At',         detail: '2-yard line',          pts: 40 },
      { category: 'Downed How',            detail: 'Touched on the ground', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 19,
    tupa: 105,
    punter: 'Matt Haack',
    team: 'BUF Bills',
    week: 'Week 3',
    date: 'Sep 26, 2021',
    matchup: 'at WAS',
    gif: 'gifs/punt-planet-19.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '60 yards',             pts: 60 },
      { category: 'Punt Ended At',         detail: '2-yard line',          pts: 40 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 20,
    tupa: 104,
    punter: 'AJ Cole',
    team: 'OAK Raiders',
    week: 'Week 3',
    date: 'Sep 26, 2021',
    matchup: 'at MIA',
    gif: 'gifs/punt-planet-20.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '49 yards',             pts: 49 },
      { category: 'Punt Ended At',         detail: '1-yard line',          pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 21,
    tupa: 103,
    punter: 'Andy Lee',
    team: 'ARI Cardinals',
    week: 'Week 13',
    date: 'Dec 5, 2021',
    matchup: 'at CHI',
    gif: 'gifs/punt-planet-21.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '58 yards',             pts: 58 },
      { category: 'Punt Ended At',         detail: '2-yard line',          pts: 40 },
      { category: 'Downed How',            detail: 'Touched on the ground', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 22,
    tupa: 102,
    punter: 'Michael Palardy',
    team: 'MIA Dolphins',
    week: 'Week 10',
    date: 'Nov 11, 2021',
    matchup: 'at BAL',
    gif: 'gifs/punt-planet-22.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '47 yards',             pts: 47 },
      { category: 'Punt Ended At',         detail: '1-yard line',          pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 23,
    tupa: 102,
    punter: 'Michael Palardy',
    team: 'MIA Dolphins',
    week: 'Week 16',
    date: 'Dec 27, 2021',
    matchup: 'vs. NOR',
    gif: 'gifs/punt-planet-23.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '42 yards',                    pts: 42 },
      { category: 'Punt Ended At',         detail: '1-yard line',                 pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the fly (own team)', pts: 10 },
      { category: 'Bonus',                 detail: '—',                           pts:  0 },
    ],
  },
  {
    rank: 24,
    tupa: 99,
    punter: 'Tommy Townsend',
    team: 'KAN Chiefs',
    week: 'Week 1',
    date: 'Sep 12, 2021',
    matchup: 'at CLE',
    gif: 'gifs/punt-planet-24.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '44 yards',             pts: 44 },
      { category: 'Punt Ended At',         detail: '1-yard line',          pts: 50 },
      { category: 'Downed How',            detail: 'Touched on the ground', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
    ],
  },
  {
    rank: 25,
    tupa: 99,
    punter: 'Logan Cooke',
    team: 'JAX Jaguars',
    week: 'Week 3',
    date: 'Sep 26, 2021',
    matchup: 'at ARI',
    gif: 'gifs/punt-planet-25.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: '44 yards',             pts: 44 },
      { category: 'Punt Ended At',         detail: '1-yard line',          pts: 50 },
      { category: 'Downed How',            detail: 'Caught on the bounce', pts:  5 },
      { category: 'Bonus',                 detail: '—',                    pts:  0 },
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
          <img src="${punt.gif}" alt="Punt #${punt.rank} — ${punt.punter}" loading="lazy" />
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
container.innerHTML = punts.map(buildCard).join('');

/* ── Hall of Shame data ─────────────────────────────── */
const shamePunts = [
  {
    rank: 1,
    tupa: -141,
    punter: 'Lac Edwards',
    team: 'CAR Panthers',
    week: 'Week 12',
    date: 'Nov 28, 2021',
    matchup: 'vs. MIA',
    gif: 'gifs/punt-planet-worst-1.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: 'Blocked at 9-yard line',  pts: -91 },
      { category: 'Downed How',            detail: 'Touchdown',               pts: -50 },
    ],
  },
  {
    rank: 2,
    tupa: -140,
    punter: 'Tress Way',
    team: 'WAS WFT',
    week: 'Week 16',
    date: 'Dec 26, 2021',
    matchup: 'vs. DAL',
    gif: 'gifs/punt-planet-worst-2.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: 'Blocked at 10-yard line', pts: -90 },
      { category: 'Downed How',            detail: 'Touchdown',               pts: -50 },
    ],
  },
  {
    rank: 3,
    tupa: -138,
    punter: 'Corey Bojorquez',
    team: 'GNB Packers',
    week: 'Divisional Playoff',
    date: 'Jan 22, 2022',
    matchup: 'vs. SFO',
    gif: 'gifs/punt-planet-worst-3.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: 'Blocked at 12-yard line', pts: -88 },
      { category: 'Downed How',            detail: 'Touchdown',               pts: -50 },
    ],
  },
  {
    rank: 4,
    tupa: -133,
    punter: 'Dustin Colquitt',
    team: 'ATL Falcons',
    week: 'Week 10',
    date: 'Nov 14, 2021',
    matchup: 'vs. DAL',
    gif: 'gifs/punt-planet-worst-4.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: 'Blocked at 17-yard line', pts: -83 },
      { category: 'Downed How',            detail: 'Touchdown',               pts: -50 },
    ],
  },
  {
    rank: 5,
    tupa: -127,
    punter: 'Matt Haack',
    team: 'BUF Bills',
    week: 'Week 1',
    date: 'Sep 12, 2021',
    matchup: 'vs. PIT',
    gif: 'gifs/punt-planet-worst-5.webp',
    breakdown: [
      { category: 'Punt Distance (gross)', detail: 'Blocked at 23-yard line', pts: -77 },
      { category: 'Downed How',            detail: 'Touchdown',               pts: -50 },
      { category: 'Punt Ended At',         detail: '—',                       pts:   0 },
      { category: 'Bonus',                 detail: '—',                       pts:   0 },
    ],
  },
];

const shameContainer = document.getElementById('shame-container');
shameContainer.innerHTML = shamePunts.map(buildCard).join('');

/* ── TUPA Rules modal ───────────────────────────────── */
const overlay  = document.getElementById('modal-overlay');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('modal-close');

rulesBtn.addEventListener('click', () => { overlay.hidden = false; });
closeBtn.addEventListener('click', () => { overlay.hidden = true; });
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.hidden = true; });

/* ── Expand / collapse ──────────────────────────────── */
[container, shameContainer].forEach(c => c.addEventListener('click', e => {
  const summary = e.target.closest('.card-summary');
  if (!summary) return;
  const card    = summary.closest('.punt-card');
  const details = card.querySelector('.card-details');
  const btn     = summary.querySelector('.expand-btn');
  const isOpen  = !details.hidden;
  details.hidden = isOpen;
  btn.setAttribute('aria-expanded', String(!isOpen));
}));
