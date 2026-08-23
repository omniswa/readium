(function() {
  // Swap this for your real payment link (Stripe Payment Link, Ko-fi, Buy Me
  // a Coffee, etc). Many providers accept an `?amount=` query param that
  // pre-fills the amount — check yours and adjust buildGiveUrl() if needed.
  const DONATE_URL = 'https://example.com/replace-with-your-donate-link';
  
  const amountRow = document.getElementById('amountRow');
  const amtButtons = Array.from(amountRow.querySelectorAll('.amt-btn'));
  const customInput = document.getElementById('customAmount');
  const giveBtn = document.getElementById('giveBtn');
  const giveAmountLabel = document.getElementById('giveAmountLabel');
  
  let amount = 7; // matches the button marked active by default below
  
  function setActiveButton(btn) {
    amtButtons.forEach(b => b.classList.toggle('active', b === btn));
  }
  
  function setAmount(value, sourceBtn) {
    const n = Math.max(1, Math.round(Number(value) || 0));
    amount = n;
    giveAmountLabel.textContent = '$' + n;
    if (sourceBtn) {
      customInput.value = '';
      setActiveButton(sourceBtn);
    } else {
      amtButtons.forEach(b => b.classList.remove('active'));
    }
    updateGiveHref();
  }
  
  function updateGiveHref() {
    giveBtn.href = buildGiveUrl(amount);
  }
  
  function buildGiveUrl(n) {
    try {
      const url = new URL(DONATE_URL);
      url.searchParams.set('amount', String(n));
      return url.toString();
    } catch {
      return DONATE_URL;
    }
  }
  
  amtButtons.forEach(btn => {
    btn.addEventListener('click', () => setAmount(btn.dataset.amount, btn));
  });
  
  customInput.addEventListener('input', () => {
    if (customInput.value) setAmount(customInput.value, null);
  });
  
  giveBtn.addEventListener('click', (e) => {
    if (!DONATE_URL || DONATE_URL.includes('example.com')) {
      e.preventDefault();
      alert('Add your real payment link to DONATE_URL in support.js first.');
    } else {
      giveBtn.target = '_blank';
      giveBtn.rel = 'noopener';
    }
  });
  
  // default selection: the $7 button
  const defaultBtn = amtButtons.find(b => b.dataset.amount === '7');
  if (defaultBtn) setAmount(7, defaultBtn);
})();