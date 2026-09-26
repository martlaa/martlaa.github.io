document.querySelector(".menu-toggle")?.addEventListener("click", function () {
  const open = this.getAttribute("aria-expanded") !== "true";
  this.setAttribute("aria-expanded", String(open));
  document.getElementById("main-nav").classList.toggle("is-open", open);
});
document.querySelectorAll("[data-filter-for]").forEach((bar) => {
  const target = document.getElementById(bar.dataset.filterFor);
  const items = [...target.querySelectorAll("[data-category]")];
  function apply(button) {
    const value = button.dataset.filter;
    bar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    let count = 0;
    items.forEach((item) => {
      const show =
        value === "all" ||
        item.dataset.category
          .split(";")
          .map((s) => s.trim())
          .includes(value);
      (item.closest("li") || item).hidden = !show;
      if (show) count++;
    });
    target.querySelectorAll("h2.bibliography").forEach((h) => (h.hidden = value !== "all"));
    bar.nextElementSibling.textContent = `${count} ${bar.dataset.filterFor === "work-list" ? "projects" : "publications"} shown`;
  }
  bar.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => apply(b)));
  const topic = new URLSearchParams(location.search).get("topic");
  apply([...bar.querySelectorAll("button")].find((b) => b.dataset.filter === topic) || bar.querySelector("button"));
});
document.querySelector(".print-cv")?.addEventListener("click", () => window.print());
