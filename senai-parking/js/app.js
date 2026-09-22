const parkingBlocks = {
  A: {
    name: 'Bloco A',
    image: 'assets/bloco-a.jpg',
    spots: [
      ['A-01', 'green'],
      ['A-02', 'red'],
      ['A-03', 'green'],
      ['A-04', 'yellow'],
      ['A-05', 'green'],
      ['A-06', 'red'],
      ['A-07', 'green'],
      ['A-08', 'yellow'],
      ['A-09', 'green'],
    ]
  },
  C: {
    name: 'Bloco C',
    image: 'assets/bloco-c.jpg',
    spots: [
      ['C-01', 'green'],
      ['C-02', 'red'],
      ['C-03', 'green'],
      ['C-04', 'yellow'],
      ['C-05', 'green'],
      ['C-06', 'green'],
      ['C-07', 'red'],
      ['C-08', 'green'],
      ['C-09', 'green'],
      ['C-10', 'yellow'],
      ['C-11', 'green'],
      ['C-12', 'red'],
      ['IC-01', 'green'],
      ['IC-02', 'green'],
      ['PC-01', 'green'],
      ['PC-02', 'red'],
    ]
  },
  H: {
    name: 'Bloco H',
    image: 'assets/bloco-h.jpg',
    spots: [
      ['PH-01', 'green'],
      ['PH-02', 'green'],
      ['IH-01', 'yellow'],
      ['IH-02', 'green'],
      ['H-01', 'green'],
      ['H-02', 'red'],
      ['H-03', 'green'],
      ['H-04', 'yellow'],
      ['H-05', 'green'],
      ['H-06', 'red'],
      ['H-07', 'green'],
      ['H-08', 'green'],
      ['H-09', 'yellow'],
      ['H-10', 'green'],
      ['H-11', 'red'],
      ['H-12', 'green'],
      ['H-13', 'green'],
      ['H-14', 'yellow'],
      ['H-15', 'red'],
      ['H-16', 'green'],
      ['H-17', 'green'],
      ['H-18', 'yellow'],
      ['H-19', 'green'],
      ['H-20', 'red'],
      ['H-21', 'green'],
      ['H-22', 'green'],
      ['H-23', 'yellow'],
      ['H-24', 'green'],
      ['H-25', 'red'],
      ['H-26', 'green'],
      ['H-27', 'green'],
      ['H-28', 'yellow'],
      ['H-29', 'green'],
      ['H-30', 'red'],
      ['H-31', 'green'],
      ['H-32', 'green'],
      ['H-33', 'yellow'],
      ['H-34', 'green'],
      ['H-35', 'red'],
      ['H-36', 'green'],
      ['H-37', 'green'],
      ['H-38', 'yellow'],
      ['H-39', 'green'],
      ['H-40', 'red'],
      ['H-41', 'green'],
      ['H-42', 'yellow'],
      ['H-43', 'green'],
      ['H-44', 'green'],
      ['H-45', 'red'],
      ['H-46', 'green'],
      ['H-47', 'green'],
      ['H-48', 'yellow'],
      ['H-49', 'green'],
      ['H-50', 'red'],
      ['H-51', 'green'],
      ['H-52', 'red'],
      ['H-53', 'green'],
      ['H-54', 'yellow'],
      ['H-55', 'green'],
      ['H-56', 'red']
      ['H-57', 'green'],
      ['H-58', 'red'],
      ['H-59', 'green'],
      ['H-60', 'yellow'],
      ['H-61', 'green'],
      ['H-62', 'red'],
      ['H-63', 'green'],
      ['H-64', 'green'],
      ['H-65', 'yellow'],
      ['H-66', 'green'],
      ['H-67', 'red'],
      ['H-68', 'green'],
      ['H-69', 'green'],
      ['H-70', 'yellow'],
      ['H-71', 'red'],
      ['H-72', 'green'],
      ['H-73', 'green'],
      ['H-74', 'yellow'],
      ['H-75', 'green'],
      ['H-76', 'red'],
      ['H-77', 'green'],
      ['H-78', 'green'],
      ['H-79', 'yellow'],
      ['H-80', 'green'],
      ['H-81', 'red'],
      ['H-82', 'green'],
      ['H-83', 'green'],
      ['H-84', 'yellow'],
      ['H-85', 'green'],
      ['H-86', 'red'],
    ]
  }
};

let selected = null;
let currentBlock = 'H';

function allSpots() {
  return Object.values(parkingBlocks).flatMap(b => b.spots.map(s => ({ ...s, block: b.name })));
}

function getReservations() {
  return JSON.parse(localStorage.getItem('senaiReservations') || '[]');
}

function saveReservations(v) {
  localStorage.setItem('senaiReservations', JSON.stringify(v));
}

function getSanctions() {
  return JSON.parse(localStorage.getItem('senaiSanctions') || '[]');
}

function saveSanctions(v) {
  localStorage.setItem('senaiSanctions', JSON.stringify(v));
}

function statusFor(spot) {
  const r = getReservations().find(x => x.id === spot[0] && x.active);
  return r ? 'yellow' : spot[1];
}

function renderMap(blockKey, targetId = 'map') {
  currentBlock = blockKey;
  const b = parkingBlocks[blockKey];
  const el = document.getElementById(targetId);
  if (!el) return;
  selected = null;
  // As identificações já estão desenhadas nas imagens oficiais dos estacionamentos.
  // O mapa não recebe mais divs, botões ou etiquetas sobrepostas.
  el.innerHTML = `<img src="${b.image}" alt="Mapa ${b.name}">`;
  populateSpotSelector(blockKey);
}

function setSelectorStatusColor(select, status = '') {
  if (!select) return;
  select.classList.remove('status-green', 'status-red', 'status-yellow');
  if (status) select.classList.add(`status-${status}`);
}

function populateSpotSelector(blockKey, keepId = '') {
  const sel = document.getElementById('spotSelector');
  if (!sel) return;
  const spots = parkingBlocks[blockKey].spots;
  sel.innerHTML = '<option value="">Selecione uma vaga...</option>' +
    spots.map(s => {
      const st = statusFor(s);
      const label = st === 'green' ? 'Livre' : st === 'red' ? 'Ocupada' : 'Agendada';
      const color = st === 'green' ? 'var(--green)' : st === 'red' ? 'var(--red)' : 'var(--yellow)';
      return `<option value="${s[0]}" class="spot-option ${st}" style="color:${color}">${s[0]} — ${label}</option>`;
    }).join('');
  setSelectorStatusColor(sel, '');
  if (keepId) {
    sel.value = keepId;
    updateSelectorStatus(keepId, blockKey);
    showSelectedFromSelector(keepId, blockKey);
  }
}

function updateSelectorStatus(id, blockKey = currentBlock) {
  const sel = document.getElementById('spotSelector');
  if (!sel || !id) {
    setSelectorStatusColor(sel, '');
    return;
  }
  const s = parkingBlocks[blockKey].spots.find(x => x[0] === id);
  setSelectorStatusColor(sel, s ? statusFor(s) : '');
}

function showSelectedFromSelector(id, blockKey = currentBlock) {
  const s = parkingBlocks[blockKey].spots.find(x => x[0] === id);
  if (!s) {
    selected = null;
    return;
  }
  selected = { s, blockKey };
  const box = document.getElementById('spotDetail');
  if (!box) return;
  const st = statusFor(s);
  const today = new Date().toISOString().slice(0, 10);
  const isBookingPage = location.pathname.endsWith('/agendar.html') || location.pathname.endsWith('agendar.html');
  const action = isBookingPage ? (st === 'green' ? `<label class="field-label">Data<br><input id="reserveDate" type="date" value="${today}" min="${today}"></label><label class="field-label">Horário<br><input id="reserveTime" type="time" value="18:00"></label><button class="btn btn-primary full" onclick="reserveSelected()">Confirmar agendamento</button>` : `<button class="btn btn-light" disabled>${st === 'yellow' ? 'Vaga já agendada' : 'Vaga ocupada'}</button>`) : `<div class="view-only-note">Modo de visualização: esta página não permite agendamentos.<br><a href="agendar.html">Ir para Novo agendamento</a> para reservar uma vaga.</div>`;
  box.innerHTML = `<div class="detail-top"><div class="eyebrow">Vaga selecionada</div><div class="detail-id">${s[0]}</div><div class="detail-status"><span class="badge ${st}">${st === 'green' ? 'Livre' : st === 'red' ? 'Ocupada' : 'Agendada'}</span></div><div class="detail-meta"><div class="meta-row"><span>Local</span><strong>${parkingBlocks[blockKey].name}</strong></div><div class="meta-row"><span>Identificação</span><strong>${s[0]}</strong></div><div class="meta-row"><span>Disponibilidade</span><strong>${st === 'green' ? 'Pode ser reservada' : st === 'yellow' ? 'Reserva ativa' : 'Indisponível'}</strong></div></div></div><div class="detail-action">${action}</div>`;
}

function onSpotSelectorChange(value) {
  updateSelectorStatus(value, currentBlock);
  if (!value) {
    selected = null;
    const box = document.getElementById('spotDetail');
    if (box) box.innerHTML = '<div class="empty">Selecione uma vaga na barra ao lado do mapa para consultar seus dados.</div>';
    return;
  }
  showSelectedFromSelector(value, currentBlock);
}

function reserveSelected() {
  if (!selected) return;
  const [id] = selected.s;
  const date = document.getElementById('reserveDate')?.value;
  const time = document.getElementById('reserveTime')?.value;
  if (!date || !time) {
    toast('Informe data e horário.');
    return;
  }
  const reservations = getReservations();
  if (reservations.some(x => x.id === id && x.active)) {
    toast('Essa vaga já está agendada.');
    return;
  }
  reservations.push({
    id,
    block: selected.blockKey,
    date,
    time,
    scheduledAt: `${date}T${time}`,
    active: true,
    status: 'scheduled',
    user: localStorage.getItem('senaiUser') || 'Usuário demonstrativo'
  });
  saveReservations(reservations);
  toast(`${id} agendada para ${date.split('-').reverse().join('/')} às ${time}.`);
  renderMap(currentBlock);
  if (document.getElementById('spotDetail')) {
    document.getElementById('spotDetail').innerHTML = '<div class="empty">Reserva realizada. Você pode conferir em <a href="minhas-vagas.html">Minhas vagas</a>.<br><br>Fique atento ao horário para evitar uma ocorrência.</div>';
  }
}

function cancelReservation(id) {
  const rs = getReservations();
  const r = rs.find(x => x.id === id && x.active);
  if (r) {
    r.active = false;
    r.status = 'cancelled';
    saveReservations(rs);
    toast(`Agendamento de ${id} cancelado.`);
    setTimeout(() => location.reload(), 350);
  }
}

function markNoShow(id) {
  const rs = getReservations();
  const r = rs.find(x => x.id === id && x.active);
  if (!r) {
    toast('Agendamento não encontrado.');
    return;
  }
  r.active = false;
  r.status = 'no-show';
  r.noShowAt = new Date().toISOString();
  saveReservations(rs);
  const ss = getSanctions();
  const previous = ss.filter(x => x.user === r.user && !x.resolved).length;
  const level = previous + 1;
  const penalty = level === 1 ? 'Advertência' : level === 2 ? 'Bloqueio por 24 horas' : level === 3 ? 'Bloqueio por 7 dias' : 'Bloqueio por 30 dias';
  ss.push({
    id: 'SAN-' + Date.now().toString().slice(-6),
    user: r.user,
    reservationId: r.id,
    date: new Date().toLocaleDateString('pt-BR'),
    reason: 'Não comparecimento ao horário agendado',
    level,
    penalty,
    resolved: false
  });
  saveSanctions(ss);
  toast(`${r.id}: não comparecimento registrado. Sanção: ${penalty}.`);
  setTimeout(() => location.reload(), 450);
}

function resolveSanction(id) {
  const ss = getSanctions();
  const s = ss.find(x => x.id === id);
  if (s) {
    s.resolved = true;
    saveSanctions(ss);
    toast('Ocorrência encerrada.');
    setTimeout(() => location.reload(), 300);
  }
}

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

function setupBlockSwitch() {
  document.querySelectorAll('[data-block]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-block]').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    renderMap(btn.dataset.block);
  }));
  const sel = document.getElementById('spotSelector');
  if (sel) sel.addEventListener('change', e => onSpotSelectorChange(e.target.value));
}

function setupLogin() {
  const f = document.getElementById('loginForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem('senaiUser', document.getElementById('name').value || 'Usuário');
    location.href = 'painel.html';
  });
}

function pageInit() {
  setupLogin();
  setupBlockSwitch();
  const map = document.getElementById('map');
  if (map) renderMap(document.querySelector('[data-block].active')?.dataset.block || 'H');
  const reservations = getReservations();
  document.querySelectorAll('[data-reservas]').forEach(el => el.textContent = reservations.filter(r => r.active).length);
  const stats = { green: 0, red: 0, yellow: 0 };
  allSpots().forEach(s => stats[statusFor(s)]++);
  document.querySelectorAll('[data-stat=green]').forEach(e => e.textContent = stats.green);
  document.querySelectorAll('[data-stat=red]').forEach(e => e.textContent = stats.red);
  document.querySelectorAll('[data-stat=yellow]').forEach(e => e.textContent = stats.yellow);
  const table = document.getElementById('reservationTable');
  if (table) {
    const active = reservations.filter(r => r.active);
    table.innerHTML = active.length ? active.map(r => `<tr><td><strong>${r.id}</strong></td><td>${parkingBlocks[r.block].name}</td><td>${r.date}</td><td>${r.time || '—'}</td><td><button class="btn btn-danger" onclick="cancelReservation('${r.id}')">Cancelar</button></td></tr>`).join('') : `<tr><td colspan="5" class="empty">Nenhum agendamento ativo.</td></tr>`;
  }
  const sanctionTable = document.getElementById('sanctionTable');
  if (sanctionTable) {
    const ss = getSanctions();
    sanctionTable.innerHTML = ss.length ? ss.slice().reverse().map(s => `<tr><td><strong>${s.id}</strong></td><td>${s.reservationId}</td><td>${s.date}</td><td>${s.reason}</td><td><span class="badge ${s.resolved ? 'green' : 'red'}">${s.resolved ? 'Encerrada' : s.penalty}</span></td><td>${s.resolved ? '—' : `<button class="btn btn-light" onclick="resolveSanction('${s.id}')">Encerrar</button>`}</td></tr>`).join('') : `<tr><td colspan="6" class="empty">Nenhuma ocorrência registrada.</td></tr>`;
  }
  const sanctionCount = getSanctions().filter(s => !s.resolved).length;
  document.querySelectorAll('[data-sancoes]').forEach(e => e.textContent = sanctionCount);
  const noShowWrap = document.getElementById('noShowList');
  if (noShowWrap) {
    const active = reservations.filter(r => r.active);
    noShowWrap.innerHTML = active.length ? active.map(r => `<div class="list-item"><div><strong>${r.id} • ${parkingBlocks[r.block].name}</strong><div style="font-size:12px;color:var(--muted)">${r.date} às ${r.time || '—'} • ${r.user}</div></div><button class="btn btn-danger" onclick="markNoShow('${r.id}')">Marcar não comparecimento</button></div>`).join('') : `<div class="empty">Nenhum agendamento ativo para registrar ocorrência.</div>`;
  }
}

document.addEventListener('DOMContentLoaded', pageInit);