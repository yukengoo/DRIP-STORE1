/* ══════════════════════════════════════════
   DATA — Productos
══════════════════════════════════════════ */
const SHIRTS = [
  { id:'s1',  name:'Astro Void Tee',     cat:'Camiseta / Unisex',    price:18.99, old:24.99, img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80', badge:'SALE',  badgeClass:'sale' },
  { id:'s2',  name:'Urban Graffiti',     cat:'Camiseta / Oversized', price:22.50, old:null,  img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80', badge:'NUEVO', badgeClass:'' },
  { id:'s3',  name:'Retro Waves Tee',    cat:'Camiseta / Regular',   price:19.99, old:null,  img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', badge:null,    badgeClass:'' },
  { id:'s4',  name:'Neon Tokyo Drop',    cat:'Camiseta / Cropped',   price:26.00, old:32.00, img:'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80', badge:'SALE',  badgeClass:'sale' },
  { id:'s5',  name:'Minimal Black Box',  cat:'Camiseta / Unisex',    price:17.50, old:null,  img:'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&q=80', badge:null,    badgeClass:'' },
  { id:'s6',  name:'Cosmic Print OG',    cat:'Camiseta / Regular',   price:21.00, old:null,  img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80', badge:'NUEVO', badgeClass:'' },
  { id:'s7',  name:'Street Ghost Tee',   cat:'Camiseta / Oversized', price:23.99, old:29.99, img:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80', badge:'SALE',  badgeClass:'sale' },
  { id:'s8',  name:'Pastel Bloom Drop',  cat:'Camiseta / Cropped',   price:20.50, old:null,  img:'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&q=80', badge:null,    badgeClass:'' },
  { id:'s9',  name:'Dark Matter Tee',    cat:'Camiseta / Unisex',    price:18.00, old:null,  img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80', badge:null,    badgeClass:'' },
  { id:'s10', name:'Fire Season Print',  cat:'Camiseta / Regular',   price:24.99, old:30.00, img:'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500&q=80', badge:'SALE',  badgeClass:'sale' },
  { id:'s11', name:'Y2K Revival Tee',    cat:'Camiseta / Oversized', price:27.00, old:null,  img:'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=500&q=80', badge:'NUEVO', badgeClass:'' },
  { id:'s12', name:'Gradient Sun Tee',   cat:'Camiseta / Unisex',    price:16.99, old:null,  img:'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=500&q=80', badge:null,    badgeClass:'' },
];

const PHONES = [
  { id:'p1', name:'iPhone 14 Pro 128GB',  cat:'iPhone / Space Black',   price:499, old:649, img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80', badge:'OFERTA', badgeClass:'sale' },
  { id:'p2', name:'iPhone 13 Pro 256GB',  cat:'iPhone / Sierra Blue',   price:399, old:499, img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80', badge:'OFERTA', badgeClass:'sale' },
  { id:'p3', name:'iPhone 12 128GB',      cat:'iPhone / Rojo Producto',  price:279, old:null, img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&q=80', badge:null,     badgeClass:'' },
  { id:'p4', name:'iPhone 14 256GB',      cat:'iPhone / Medianoche',    price:459, old:null, img:'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80', badge:'NUEVO',  badgeClass:'' },
  { id:'p5', name:'iPhone 13 Mini 128GB', cat:'iPhone / Luz Estelar',   price:329, old:399, img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&q=80', badge:'SALE',   badgeClass:'sale' },
  { id:'p6', name:'iPhone 11 64GB',       cat:'iPhone / Negro',          price:189, old:229, img:'https://images.unsplash.com/photo-1574755393849-623942496936?w=500&q=80', badge:'SALE',   badgeClass:'sale' },
  { id:'p7', name:'iPhone 14 Plus 128GB', cat:'iPhone / Azul',           price:519, old:null, img:'https://images.unsplash.com/photo-1587840171670-8b850147754e?w=500&q=80', badge:'NUEVO',  badgeClass:'' },
  { id:'p8', name:'iPhone SE 3rd 64GB',   cat:'iPhone / Rojo',           price:229, old:279, img:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&q=80', badge:'OFERTA', badgeClass:'sale' },
];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let currentTab  = 'shirts';
let currentPage = 1;
const ITEMS_PER_PAGE = 6;
let cart = [];

/* ══════════════════════════════════════════
   CATALOG — Render
══════════════════════════════════════════ */
function getProducts(tab) {
  const all = tab === 'shirts' ? SHIRTS : PHONES;
  const q   = document.getElementById('search-input').value.toLowerCase();
  return q
    ? all.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q))
    : all;
}

function renderCatalog() {
  const products = getProducts(currentTab);
  const total    = Math.ceil(products.length / ITEMS_PER_PAGE);
  currentPage    = Math.min(currentPage, total || 1);
  const slice    = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const grid = document.getElementById('product-grid');
  grid.innerHTML = slice.map(p => `
    <div class="product-card">
      ${p.badge ? `<div class="product-badge ${p.badgeClass}">${p.badge}</div>` : ''}
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div class="p-info">
        <div class="p-cat">${p.cat}</div>
        <div class="p-name">${p.name}</div>
        <div style="display:flex;align-items:baseline;gap:.4rem;">
          <span class="p-price">$${p.price.toFixed(2)}</span>
          ${p.old ? `<span class="p-old">$${p.old.toFixed(2)}</span>` : ''}
        </div>
      </div>
      <button class="btn-add" onclick="addToCart('${p.id}', this)">+ AGREGAR AL CARRITO</button>
    </div>
  `).join('') || '<p style="color:var(--mid);font-family:\'Space Mono\',monospace;font-size:.85rem;padding:2rem;">Sin resultados para esa búsqueda.</p>';

  renderPagination(total);
}

function renderPagination(total) {
  const pg = document.getElementById('pagination');
  if (total <= 1) { pg.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&lt;</button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === total ? 'disabled' : ''}>&gt;</button>`;
  pg.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderCatalog();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tab, btn) {
  currentTab  = tab;
  currentPage = 1;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog();
}

function scrollToCatalog() {
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('search-input').addEventListener('input', () => {
  currentPage = 1;
  renderCatalog();
});

/* ══════════════════════════════════════════
   CART
══════════════════════════════════════════ */
function addToCart(id, btn) {
  const all = [...SHIRTS, ...PHONES];
  const p   = all.find(x => x.id === id);
  if (!p) return;

  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });

  updateCartUI();

  // Button feedback
  btn.textContent      = '✓ AGREGADO';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.textContent      = '+ AGREGAR AL CARRITO';
    btn.style.background = '';
  }, 1200);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const count = cart.reduce((s, x) => s + x.qty, 0);

  // Badges
  const floatBadge  = document.getElementById('cart-count');
  const headerBadge = document.getElementById('cart-count-h');
  floatBadge.textContent  = count;
  headerBadge.textContent = count;
  headerBadge.style.display = count > 0 ? 'flex' : 'none';

  // Items list
  const el = document.getElementById('cart-items');
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty">Tu carrito está vacío 🛒<br/><br/>Agrega algunos productos increíbles.</div>';
  } else {
    el.innerHTML = cart.map(x => `
      <div class="cart-item">
        <img src="${x.img}" alt="${x.name}"/>
        <div class="cart-item-info">
          <div class="cart-item-name">${x.name}</div>
          <div class="cart-item-qty">Cant: ${x.qty}</div>
          <div class="cart-item-price">$${(x.price * x.qty).toFixed(2)}</div>
        </div>
        <button class="remove-item" onclick="removeFromCart('${x.id}')">✕</button>
      </div>
    `).join('');
  }

  document.getElementById('cart-total-amount').textContent = '$' + total.toFixed(2);
  updateOrderSummary(total);
}

function updateOrderSummary(total) {
  const os = document.getElementById('order-summary');
  if (!os) return;
  os.innerHTML = cart.map(x =>
    `<div style="display:flex;justify-content:space-between;padding:.3rem 0;border-bottom:1px solid rgba(0,0,0,.07);">
      <span>${x.name} <span style="color:var(--mid);">×${x.qty}</span></span>
      <span style="font-weight:600;">$${(x.price * x.qty).toFixed(2)}</span>
    </div>`
  ).join('') + `
    <div style="display:flex;justify-content:space-between;padding:.6rem 0 0;font-family:'Bebas Neue',sans-serif;font-size:1.2rem;">
      <span>TOTAL</span>
      <span style="color:var(--accent);">$${total.toFixed(2)}</span>
    </div>`;
}

function toggleCart() {
  document.getElementById('cart-overlay').classList.toggle('open');
  document.getElementById('cart-drawer').classList.toggle('open');
}

/* ══════════════════════════════════════════
   CHECKOUT
══════════════════════════════════════════ */
function openCheckout() {
  if (cart.length === 0) { alert('Tu carrito está vacío.'); return; }
  toggleCart();
  updateCartUI();
  document.getElementById('checkout-body').style.display   = 'block';
  document.getElementById('success-screen').style.display  = 'none';
  document.getElementById('checkout-overlay').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkout-overlay').classList.remove('open');
}

function selectPayment(method) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  document.getElementById('opt-' + method).classList.add('selected');

  document.querySelectorAll('.payment-option input[type=radio]').forEach(r => r.checked = false);
  document.querySelector(`#opt-${method} input[type=radio]`).checked = true;

  document.getElementById('card-fields').classList.toggle('visible', method === 'card');
}

function submitOrder() {
  document.getElementById('checkout-body').style.display  = 'none';
  document.getElementById('success-screen').style.display = 'block';
}

/* ══════════════════════════════════════════
   LOGIN / REGISTER MODAL
══════════════════════════════════════════ */

/* ── Abrir y cerrar ── */
function openLoginModal() {
  switchToLogin();
  document.getElementById('login-overlay').classList.add('open');
}

function closeLoginModal() {
  document.getElementById('login-overlay').classList.remove('open');
  clearLoginErrors();
  clearRegisterErrors();
}

function handleLoginOverlayClick(e) {
  if (e.target === document.getElementById('login-overlay')) {
    closeLoginModal();
  }
}

/* ── Cambiar entre paneles ── */
function switchToLogin() {
  document.getElementById('login-modal').style.display      = 'block';
  document.getElementById('register-modal').style.display   = 'none';
  document.getElementById('register-success').style.display = 'none';
  clearRegisterErrors();
}

function switchToRegister() {
  document.getElementById('login-modal').style.display      = 'none';
  document.getElementById('register-modal').style.display   = 'block';
  document.getElementById('register-success').style.display = 'none';
  clearLoginErrors();
}

/* ── Mostrar / ocultar contraseña ── */
function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.textContent = isHidden ? '🙈' : '👁';
}

/* ── Fuerza de contraseña ── */
function checkPasswordStrength(value) {
  const fill  = document.getElementById('strength-fill');
  const label = document.getElementById('strength-label');

  let score = 0;
  if (value.length >= 8)            score++;
  if (/[A-Z]/.test(value))          score++;
  if (/[0-9]/.test(value))          score++;
  if (/[^A-Za-z0-9]/.test(value))   score++;

  const levels = [
    { pct: '0%',   color: 'transparent', text: '' },
    { pct: '25%',  color: '#e8431a',     text: 'Débil' },
    { pct: '50%',  color: '#f0a500',     text: 'Regular' },
    { pct: '75%',  color: '#1a3ce8',     text: 'Buena' },
    { pct: '100%', color: '#27ae60',     text: 'Fuerte' },
  ];

  const lvl = value.length === 0 ? levels[0] : levels[score] || levels[1];
  fill.style.width      = lvl.pct;
  fill.style.background = lvl.color;
  label.textContent     = lvl.text;
  label.style.color     = lvl.color;
}

/* ── Validaciones ── */
function setError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearLoginErrors() {
  ['err-login-email', 'err-login-pass'].forEach(id => setError(id, ''));
}

function clearRegisterErrors() {
  ['err-reg-nombre','err-reg-apellido','err-reg-email',
   'err-reg-pass','err-reg-pass2','err-reg-terms'].forEach(id => setError(id, ''));
  checkPasswordStrength('');
}

/* ── Submit Login ── */
function submitLogin() {
  clearLoginErrors();
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-password').value;
  let valid   = true;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('err-login-email', '✕ Ingresa un correo válido.');
    valid = false;
  }
  if (pass.length < 6) {
    setError('err-login-pass', '✕ La contraseña debe tener al menos 6 caracteres.');
    valid = false;
  }
  if (!valid) return;

  /* Aquí conectarías con tu backend. Por ahora simulamos éxito. */
  closeLoginModal();
  showToast('¡Bienvenido de vuelta! 👋');
}

/* ── Submit Register ── */
function submitRegister() {
  clearRegisterErrors();

  const nombre   = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const pass     = document.getElementById('reg-password').value;
  const pass2    = document.getElementById('reg-password2').value;
  const terms    = document.getElementById('reg-terms').checked;
  let valid      = true;

  if (!nombre) {
    setError('err-reg-nombre', '✕ El nombre es obligatorio.');
    valid = false;
  }
  if (!apellido) {
    setError('err-reg-apellido', '✕ El apellido es obligatorio.');
    valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('err-reg-email', '✕ Ingresa un correo válido.');
    valid = false;
  }
  if (pass.length < 8) {
    setError('err-reg-pass', '✕ La contraseña debe tener al menos 8 caracteres.');
    valid = false;
  }
  if (pass !== pass2) {
    setError('err-reg-pass2', '✕ Las contraseñas no coinciden.');
    valid = false;
  }
  if (!terms) {
    setError('err-reg-terms', '✕ Debes aceptar los términos y condiciones.');
    valid = false;
  }
  if (!valid) return;

  /* Aquí conectarías con tu backend. Por ahora simulamos éxito. */
  document.getElementById('welcome-name').textContent = `¡HOLA, ${nombre.toUpperCase()}!`;
  document.getElementById('register-modal').style.display   = 'none';
  document.getElementById('register-success').style.display = 'block';
}

/* ══════════════════════════════════════════
   TOAST — Notificación flotante
══════════════════════════════════════════ */
function showToast(msg) {
  const existing = document.getElementById('toast-msg');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-msg';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 6rem; left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--ink); color: #fff;
    font-family: 'Space Mono', monospace; font-size: .8rem;
    padding: .75rem 1.5rem;
    border-left: 3px solid var(--accent);
    z-index: 9999; opacity: 0;
    transition: all .3s;
    white-space: nowrap;
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity         = '1';
    toast.style.transform       = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ══════════════════════════════════════════
   CARD FORMAT HELPERS
══════════════════════════════════════════ */
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function formatExp(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2, 4);
  input.value = v;
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
renderCatalog();
updateCartUI();


/* ══════════════════════════════════════════
   TÉRMINOS Y PRIVACIDAD MODAL
══════════════════════════════════════════ */

// Abre el modal según qué enlace se clickeó: 'terms' o 'privacy'
function openTermsModal(type) {
  const overlay = document.getElementById('terms-overlay');
  const title   = document.getElementById('terms-modal-title');
  const terms   = document.getElementById('terms-content');
  const privacy = document.getElementById('privacy-content');

  if (type === 'privacy') {
    title.textContent    = 'POLÍTICA DE PRIVACIDAD';
    terms.style.display   = 'none';
    privacy.style.display = 'block';
  } else {
    title.textContent    = 'TÉRMINOS Y CONDICIONES';
    terms.style.display   = 'block';
    privacy.style.display = 'none';
  }

  // Scroll al inicio del contenido
  document.querySelector('.terms-body').scrollTop = 0;
  overlay.classList.add('open');
}

function closeTermsModal() {
  document.getElementById('terms-overlay').classList.remove('open');
}

function handleTermsOverlayClick(e) {
  if (e.target === document.getElementById('terms-overlay')) {
    closeTermsModal();
  }
}

// Al aceptar, cierra el modal Y marca el checkbox de términos
function acceptAndClose() {
  const checkbox = document.getElementById('reg-terms');
  if (checkbox) checkbox.checked = true;
  closeTermsModal();
}