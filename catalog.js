(function () {
  const resultsGrid = document.querySelector("#catalog-results");
  const resultsLabel = document.querySelector("#catalog-results-label");
  const clearButton = document.querySelector("#catalog-clear-filters");
  const filterButtons = document.querySelectorAll("[data-catalog-filter-type]");
  const dropdowns = document.querySelectorAll(".catalog-filter-dropdown");
  const pageMain = document.querySelector(".catalog-browser-main");
  const assetVersion = "20260616-2";
  const placeholderImage =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
        <rect width="800" height="520" rx="36" fill="#f4f6f8"/>
        <rect x="180" y="110" width="440" height="220" rx="28" fill="#ffffff" stroke="#c4cedb" stroke-width="12"/>
        <text x="400" y="402" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#667386">cult equipment</text>
      </svg>
    `);

  if (!resultsGrid || !resultsLabel || !clearButton) return;

  const state = {
    type: "all",
    group: "",
    value: ""
  };

  const items = [
    { title: "CS-XG-V12", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-xg-v12.png", description: "LED-console commercial treadmill built for premium cardio floors." },
    { title: "CS-AC800", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-ac800.png", description: "AC treadmill format for full-day commercial use." },
    { title: "CS-V6", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-v6.png", description: "High-speed treadmill for premium club cardio zones." },
    { title: "CS-T919", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-t919.png", description: "Large-screen treadmill for flagship cardio areas." },
    { title: "CS-XZ8001S", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-xz8001s.png", description: "Commercial treadmill with quick-adjust controls and anti-skid side strips." },
    { title: "CS-XZ8003C Curved Treadmill", code: "Cardio | Treadmills", category: "cardio", subcategory: "treadmills", series: "", image: "assets/catalog-items/cardio-cs-xz8003c.png", description: "Manual curved treadmill for high-intensity running training." },
    { title: "CS-E12-V5", code: "Cardio | Ellipticals", category: "cardio", subcategory: "ellipticals", series: "", image: "assets/catalog-items/cardio-cs-e12-v5.png", description: "LED-display elliptical with magnetic resistance and incline levels." },
    { title: "CS-E17", code: "Cardio | Ellipticals", category: "cardio", subcategory: "ellipticals", series: "", image: "assets/catalog-items/cardio-cs-e17.png", description: "Commercial elliptical with longer stride and higher resistance range." },
    { title: "LED Console Bike", code: "Cardio | Upright Bikes", category: "cardio", subcategory: "upright-bikes", series: "", image: "assets/catalog-items/cardio-led-console-bike.png", description: "Commercial upright bike with LED console and magnetic resistance." },
    { title: "Recumbent Bike", code: "Cardio | Recumbent Bikes", category: "cardio", subcategory: "recumbent-bikes", series: "", image: "assets/catalog-items/cardio-recumbent-bike.png", description: "Seated cardio bike format for long-duration, lower-impact training." },
    { title: "Spinning Bike", code: "Cardio | Spinning Bikes", category: "cardio", subcategory: "spinning-bikes", series: "", image: "assets/catalog-items/cardio-spinning-bike.png", description: "Studio-style spin bike for commercial cycling rooms." },
    { title: "Air Bike", code: "Cardio | High Intensity", category: "cardio", subcategory: "high-intensity", series: "", image: "assets/catalog-items/cardio-air-bike.png", description: "Fan-driven conditioning bike for interval and performance training." },
    { title: "Squat Rack CS-XH021", code: "Strength | Racks + Stations", category: "strength", subcategory: "racks-stations", series: "", image: "assets/catalog-items/strength-squat-rack-cs-xh021.png", description: "Commercial squat rack for free-weight and barbell training zones." },
    { title: "Functional Trainer CS-H005A", code: "Strength | Functional Training", category: "strength", subcategory: "functional-training", series: "", image: "assets/catalog-items/strength-functional-trainer-cs-h005a.png", description: "Dual-column functional training station for cable-based movement work." },
    { title: "Half Rack CS-G890", code: "Strength | Racks + Stations", category: "strength", subcategory: "racks-stations", series: "", image: "assets/catalog-items/strength-half-rack-cs-g890.png", description: "Commercial half rack for compact barbell training setups." },
    { title: "Fusion Chest Press CS-K6-08", code: "Strength | Fusion Series", category: "strength", subcategory: "selectorized-series", series: "fusion-series", image: "assets/catalog-items/fusion-chest-press-cs-k6-08.png", description: "Fusion Series chest press from the 2025 commercial catalog." },
    { title: "Fusion Shoulder Press CS-K6-06", code: "Strength | Fusion Series", category: "strength", subcategory: "selectorized-series", series: "fusion-series", image: "assets/catalog-items/fusion-shoulder-press-cs-k6-06.png", description: "Fusion Series shoulder press with dedicated product visual." },
    { title: "Fusion Pec Fly & Rear Delt CS-K6-07", code: "Strength | Fusion Series", category: "strength", subcategory: "selectorized-series", series: "fusion-series", image: "assets/catalog-items/fusion-pec-fly-rear-delt-cs-k6-07.png", description: "Fusion Series dual-function chest and rear-delt machine." },
    { title: "Fusion Lat Pull Down CS-K6-35", code: "Strength | Fusion Series", category: "strength", subcategory: "selectorized-series", series: "fusion-series", image: "assets/catalog-items/fusion-lat-pull-down-cs-k6-35.png", description: "Fusion Series lat pull down for back-focused selectorized training." },
    { title: "Fusion Leg Extension CS-K6-02", code: "Strength | Fusion Series", category: "strength", subcategory: "selectorized-series", series: "fusion-series", image: "assets/catalog-items/fusion-leg-extension-cs-k6-02.png", description: "Fusion Series leg extension with isolated quad focus." },
    { title: "Flow Chest Press CS-M1-001", code: "Strength | Flow Series", category: "strength", subcategory: "selectorized-series", series: "flow-series", image: "assets/catalog-items/flow-chest-press.png", description: "Flow Series chest press with aviation-grade cable-led selectorized design." },
    { title: "Flow Shoulder Press CS-M1-003", code: "Strength | Flow Series", category: "strength", subcategory: "selectorized-series", series: "flow-series", image: "assets/catalog-items/flow-shoulder-press.png", description: "Flow Series shoulder press from the commercial catalog extract." },
    { title: "Flow Seated Row CS-M1-004", code: "Strength | Flow Series", category: "strength", subcategory: "selectorized-series", series: "flow-series", image: "assets/catalog-items/flow-seated-row.png", description: "Flow Series seated row with dedicated product render." },
    { title: "Flow Assisted Dip / Chin CS-M1-008", code: "Strength | Flow Series", category: "strength", subcategory: "selectorized-series", series: "flow-series", image: "assets/catalog-items/flow-assisted-dip-chin.png", description: "Flow Series assisted dip and chin station." },
    { title: "Flux Chest Press CS-TY01", code: "Strength | Flux Series", category: "strength", subcategory: "selectorized-series", series: "flux-series", image: "assets/catalog-items/flux-chest-press.png", description: "Flux Series chest press with compact selectorized footprint." },
    { title: "Flux Shoulder Press CS-TY02", code: "Strength | Flux Series", category: "strength", subcategory: "selectorized-series", series: "flux-series", image: "assets/catalog-items/flux-shoulder-press.png", description: "Flux Series shoulder press with gas-spring seat adjustment." },
    { title: "Flux Longpull CS-TY09", code: "Strength | Flux Series", category: "strength", subcategory: "selectorized-series", series: "flux-series", image: "assets/catalog-items/flux-longpull.png", description: "Flux Series longpull row station." },
    { title: "Flux Dip / Chin Assist CS-TY24", code: "Strength | Flux Series", category: "strength", subcategory: "selectorized-series", series: "flux-series", image: "assets/catalog-items/flux-dip-chin-assist.png", description: "Flux Series assisted dip and chin equipment." },
    { title: "Fuel Chest Press CS-ASN001", code: "Strength | Fuel Series", category: "strength", subcategory: "selectorized-series", series: "fuel-series", image: "assets/catalog-items/fuel-chest-press.png", description: "Fuel Series chest press in a compact commercial format." },
    { title: "Fuel Shoulder Press CS-ASN003", code: "Strength | Fuel Series", category: "strength", subcategory: "selectorized-series", series: "fuel-series", image: "assets/catalog-items/fuel-shoulder-press.png", description: "Fuel Series shoulder press with sturdy shroud-based design." },
    { title: "Fuel Seated Row CS-ASN004", code: "Strength | Fuel Series", category: "strength", subcategory: "selectorized-series", series: "fuel-series", image: "assets/catalog-items/fuel-seated-row.png", description: "Fuel Series seated row for commercial back training layouts." },
    { title: "Fuel Tricep Press CS-ASN007", code: "Strength | Fuel Series", category: "strength", subcategory: "selectorized-series", series: "fuel-series", image: "assets/catalog-items/fuel-tricep-press.png", description: "Fuel Series tricep press for upper-body circuit floors." },
    { title: "Force Chest Press CS-MWH001", code: "Strength | Force Series", category: "strength", subcategory: "plate-loaded-series", series: "force-series", image: "assets/catalog-items/force-chest-press.png", description: "Force Series plate-loaded chest press." },
    { title: "Force Incline Chest Press CS-MWH002", code: "Strength | Force Series", category: "strength", subcategory: "plate-loaded-series", series: "force-series", image: "assets/catalog-items/force-incline-chest-press.png", description: "Force Series incline chest press with ISO lateral movement." },
    { title: "Force Row CS-MWH006", code: "Strength | Force Series", category: "strength", subcategory: "plate-loaded-series", series: "force-series", image: "assets/catalog-items/force-row.png", description: "Force Series row station from the plate-loaded range." },
    { title: "Force 45 Degree Leg Press CS-XH022", code: "Strength | Force Series", category: "strength", subcategory: "plate-loaded-series", series: "force-series", image: "assets/catalog-items/force-45-degree-leg-press.png", description: "Force Series 45 degree leg press for lower-body strength zones." }
  ];

  function withVersion(path) {
    return `${path}?v=${assetVersion}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getFallbackImagePath(imagePath) {
    const fileName = imagePath.split("/").pop();
    return `assets/${fileName}`;
  }

  function cardMarkup(item) {
    return `
      <article class="catalog-result-card">
        <div class="catalog-result-media">
          <img
            src="${withVersion(item.image)}"
            data-fallback-src="${withVersion(getFallbackImagePath(item.image))}"
            alt="${escapeHtml(item.title)}"
            loading="lazy"
          />
        </div>
        <div class="catalog-result-copy">
          <p class="catalog-result-kicker">${escapeHtml(item.code)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </article>
    `;
  }

  function getVisibleItems() {
    if (state.type === "all") return items;
    if (state.type === "group") {
      if (state.group === "series") return items.filter((item) => item.series);
      return items.filter((item) => item.category === state.group);
    }
    if (state.type === "subcategory") {
      return items.filter((item) => item.category === state.group && item.subcategory === state.value);
    }
    if (state.type === "series") {
      return items.filter((item) => item.series === state.value);
    }
    return items;
  }

  function getLabel(visibleItems) {
    if (state.type === "all") return `Showing all catalogue items (${visibleItems.length})`;
    if (state.type === "group") {
      const name = state.group === "series" ? "all series" : `all ${state.group}`;
      return `Showing ${name} (${visibleItems.length})`;
    }
    if (state.type === "subcategory") {
      return `Showing ${state.value.replaceAll("-", " ")} (${visibleItems.length})`;
    }
    if (state.type === "series") {
      return `Showing ${state.value.replaceAll("-", " ")} (${visibleItems.length})`;
    }
    return `Showing ${visibleItems.length} items`;
  }

  function syncCatalogLayout() {
    if (pageMain) {
      pageMain.style.paddingTop = window.innerWidth <= 720 ? "144px" : "156px";
    }

    resultsGrid.style.display = "grid";
    resultsGrid.style.justifyContent = "center";
    resultsGrid.style.gap = window.innerWidth <= 720 ? "16px" : "12px";

    if (window.innerWidth <= 720) {
      resultsGrid.style.gridTemplateColumns = "1fr";
    } else if (window.innerWidth <= 1100) {
      resultsGrid.style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))";
    } else {
      resultsGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 300px))";
    }

    clearButton.style.display = state.type === "all" ? "none" : "inline-flex";

    resultsGrid.querySelectorAll(".catalog-result-card").forEach((card) => {
      card.style.maxWidth = window.innerWidth <= 1100 ? "none" : "300px";
      card.style.width = "100%";
    });
  }

  function wireImageFallbacks() {
    const images = resultsGrid.querySelectorAll(".catalog-result-media img");

    images.forEach((image) => {
      const applyFallback = () => {
        const backupSrc = image.dataset.fallbackSrc || "";

        if (backupSrc && image.dataset.triedBackup !== "true" && image.getAttribute("src") !== backupSrc) {
          image.dataset.triedBackup = "true";
          image.src = backupSrc;
          return;
        }

        if (image.dataset.fallbackApplied === "true") return;
        image.dataset.fallbackApplied = "true";
        image.src = placeholderImage;
        image.alt = "cult equipment";
        image.classList.add("is-placeholder");
      };

      image.addEventListener("error", applyFallback);

      if (image.complete && image.naturalWidth === 0) {
        applyFallback();
      }
    });
  }

  function renderCards() {
    const visibleItems = getVisibleItems();

    resultsGrid.innerHTML = visibleItems.length
      ? visibleItems.map(cardMarkup).join("")
      : `
          <article class="catalog-empty-state">
            <h3>No items found</h3>
            <p>Try another filter from the dropdowns above.</p>
          </article>
        `;

    wireImageFallbacks();
    syncCatalogLayout();

    resultsLabel.textContent = getLabel(visibleItems);
    clearButton.hidden = state.type === "all";
    clearButton.style.display = state.type === "all" ? "none" : "inline-flex";

    filterButtons.forEach((button) => {
      const isActive =
        button.dataset.catalogFilterType === state.type &&
        (button.dataset.catalogFilterGroup || "") === state.group &&
        (button.dataset.catalogFilterValue || "") === state.value;
      button.classList.toggle("is-active", isActive);
    });
  }

  function closeDropdowns(except) {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== except) dropdown.removeAttribute("open");
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.type = button.dataset.catalogFilterType || "all";
      state.group = button.dataset.catalogFilterGroup || "";
      state.value = button.dataset.catalogFilterValue || "";

      closeDropdowns(button.closest(".catalog-filter-dropdown"));
      button.closest(".catalog-filter-dropdown")?.removeAttribute("open");
      renderCards();
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) closeDropdowns(dropdown);
    });
  });

  clearButton.addEventListener("click", () => {
    state.type = "all";
    state.group = "";
    state.value = "";
    renderCards();
  });

  renderCards();
  window.addEventListener("resize", syncCatalogLayout);
})();
