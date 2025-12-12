(() => {
  const faqCfg = window.FAQ_CONFIG;

  const faqs = faqCfg.faqs;

  const faqroot = document.getElementById('techFaqAccordion');

  faqs.forEach((faq, i) => {
    const { question, answer } = faq;
    const faqTrigger = document.createElement('h3');
    const faqAnswer = document.createElement('div');

    faqTrigger.innerHTML = `
      <button aria-expanded="false" class="Accordion-trigger" aria-controls="techFaq${i}" id="techFaq${i}id">
        <span class="Accordion-title">
          Q: ${question}?
        </span>
        <span class="Accordion-icon"></span>
      </button>
    `;

    faqAnswer.id = `techFaq${i}`;
    faqAnswer.className = 'Accordion-panel';
    faqAnswer.role = 'region';
    faqAnswer.setAttribute('aria-labelledby', `techFaq${i}id`);
    faqAnswer.hidden = 'hidden';
    faqAnswer.innerHTML = answer;

    faqroot.appendChild(faqTrigger);
    faqroot.appendChild(faqAnswer);
  });
})();
