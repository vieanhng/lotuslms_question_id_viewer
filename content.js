(() => {
  "use strict";

  const SELECTOR = ".question-panel[id^='question-wrapper-id-']";
  const BADGE = "qid-minimal-badge";
  const PREFIX = "question-wrapper-id-";

  function addLabel(panel) {
    if (panel.querySelector(`:scope > .${BADGE}`)) return;

    const id = panel.id.startsWith(PREFIX) ? panel.id.slice(PREFIX.length) : "";
    if (!id) return;

    const label = document.createElement("button");
    label.type = "button";
    label.className = BADGE;
    label.textContent = id;
    label.title = "Sao chép ID câu hỏi";
    label.setAttribute("aria-label", `Sao chép ID câu hỏi ${id}`);

    label.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(id);
        label.classList.add("is-copied");
        label.textContent = "Copied";
      } catch {
        label.textContent = id;
      }
      window.setTimeout(() => {
        if (label.isConnected) {
          label.classList.remove("is-copied");
          label.textContent = id;
        }
      }, 1100);
    });

    panel.insertBefore(label, panel.firstChild);
  }

  function scan(root = document) {
    if (root instanceof Element && root.matches(SELECTOR)) addLabel(root);
    root.querySelectorAll?.(SELECTOR).forEach(addLabel);
  }

  scan();
  new MutationObserver(records => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) scan(node);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();