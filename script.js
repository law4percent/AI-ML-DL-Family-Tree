function expandAll() {
  document.querySelectorAll('details').forEach(detail => detail.open = true);
}

function collapseAll() {
  document.querySelectorAll('details').forEach(detail => detail.open = false);
  // Keep the main AI branch and Mathematical Foundations open
  document.querySelectorAll('details')[0].open = true; // Math foundations
  document.querySelectorAll('details')[1].open = true; // AI branch
}

// Add click analytics
document.querySelectorAll('summary').forEach(summary => {
  summary.addEventListener('click', (e) => {
    const text = e.target.textContent.trim();
    console.log(`Clicked: ${text}`);
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    const focused = document.activeElement;
    if (focused.tagName === 'SUMMARY') {
      focused.parentElement.open = true;
    }
  } else if (e.key === 'ArrowLeft') {
    const focused = document.activeElement;
    if (focused.tagName === 'SUMMARY') {
      focused.parentElement.open = false;
    }
  } else if (e.key === 'M' && e.ctrlKey) {
    e.preventDefault();
  }
});

// Add smooth scrolling for better UX
document.querySelectorAll('summary').forEach(summary => {
  summary.addEventListener('click', (e) => {
    setTimeout(() => {
      if (e.target.closest('details').open) {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  });
});