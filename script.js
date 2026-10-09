// HireHub product page — interactions

document.addEventListener('DOMContentLoaded', () => {

  // Live Preview / Buy Now (top CTA row)
  const [previewBtn, buyBtn] = document.querySelectorAll('.cta-row .btn');
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      alert('Live preview would open here.');
    });
  }
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      document.querySelector('.pricing-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Pricing card "Buy Now" buttons
  document.querySelectorAll('.price-card .price-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tier = btn.closest('.price-card').querySelector('.tier').textContent.trim();
      alert(`Checkout for the "${tier}" plan would start here.`);
    });
  });

  // Share buttons — placeholder share behaviour
  document.querySelectorAll('.share-btns a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Sharing to ${link.textContent.trim()}...`);
    });
  });

  // Similar template cards — hover lift handled in CSS, click placeholder
  document.querySelectorAll('.sim-card').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const name = card.querySelector('.n').textContent.trim();
      alert(`Opening "${name}" template page...`);
    });
  });

  // Banner CTA
  document.querySelector('.banner .btn')?.addEventListener('click', () => {
    alert('Redirecting to Colorlib WordPress themes...');
  });

});