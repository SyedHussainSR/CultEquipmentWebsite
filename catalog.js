(function () {
  const quoteStorageKey = "cult-equipment-quote-items";
  const products = [
    {
      name: "Impulse Commercial Treadmill AC800",
      category: "cardio",
      subcategory: "treadmills",
      meta: "Cardio | 2.1 x 0.9 m",
      description: "Heavy-duty commercial treadmill designed for premium gyms, clubs, and high-traffic fitness floors.",
      image: "assets/catalog/ac800.webp",
      alt: "Impulse Commercial Treadmill AC800"
    },
    {
      name: "WNQ Commercial Treadmill V6 (TV1)",
      category: "cardio",
      subcategory: "treadmills",
      meta: "Cardio | 2.05 x 0.92 m",
      description: "Commercial treadmill built for operator-led spaces that need a durable cardio anchor with premium presence.",
      image: "assets/catalog/tv1_3.webp",
      alt: "WNQ Commercial Treadmill V6 TV1"
    },
    {
      name: "New Noble Treadmill T8",
      category: "cardio",
      subcategory: "treadmills",
      meta: "Cardio | 2.0 x 0.88 m",
      description: "Full-size treadmill option for commercial gym setups where daily endurance traffic is a priority.",
      image: "assets/catalog/t8_2.webp",
      alt: "New Noble Treadmill T8"
    },
    {
      name: "New Noble Treadmill V9",
      category: "cardio",
      subcategory: "treadmills",
      meta: "Cardio | 1.95 x 0.86 m",
      description: "Compact commercial treadmill with a premium look for modern gym floors and hospitality projects.",
      image: "assets/catalog/v9.webp",
      alt: "New Noble Treadmill V9"
    },
    {
      name: "Impulse Elliptical RE500",
      category: "cardio",
      subcategory: "ellipticals",
      meta: "Cardio | 2.0 x 0.7 m",
      description: "Low-impact cardio equipment suited to complete gym setups with mixed member profiles.",
      image: "assets/catalog/re500.webp",
      alt: "Impulse Elliptical RE500"
    },
    {
      name: "OMA Elliptical E17",
      category: "cardio",
      subcategory: "ellipticals",
      meta: "Cardio | 1.85 x 0.68 m",
      description: "Space-efficient elliptical for premium compact gyms, studios, and wellness amenities.",
      image: "assets/catalog/e17.webp",
      alt: "OMA Elliptical E17"
    },
    {
      name: "Impulse Lat Pulldown IT9522",
      category: "strength",
      subcategory: "pin",
      meta: "Pin Loaded | 1.7 x 1.2 m",
      description: "Selectorized back-training machine that helps build a well-rounded commercial strength zone.",
      image: "assets/catalog/it9522.webp",
      alt: "Impulse Lat Pulldown IT9522"
    },
    {
      name: "Baodelong Chest Press BP-001",
      category: "strength",
      subcategory: "pin",
      meta: "Pin Loaded | 1.6 x 1.4 m",
      description: "Commercial chest press for coach-led floors, member confidence, and repeat-use durability.",
      image: "assets/catalog/bp001.webp",
      alt: "Baodelong Chest Press BP-001"
    },
    {
      name: "SYT Shoulder Press K606",
      category: "strength",
      subcategory: "pin",
      meta: "Pin Loaded | 1.5 x 1.3 m",
      description: "Upper-body strength station built for premium strength circuits and balanced floor planning.",
      image: "assets/catalog/k606.webp",
      alt: "SYT Shoulder Press K606"
    },
    {
      name: "Baodelong Leg Extension BP-014",
      category: "strength",
      subcategory: "pin",
      meta: "Pin Loaded | 1.6 x 1.1 m",
      description: "Lower-body isolation machine that adds progression depth to commercial strength layouts.",
      image: "assets/catalog/bp014.webp",
      alt: "Baodelong Leg Extension BP-014"
    },
    {
      name: "Baodelong 45 Degree Leg Press MWH-015",
      category: "strength",
      subcategory: "plate",
      meta: "Plate Loaded | 2.2 x 1.6 m",
      description: "High-impact lower-body machine for premium training floors and advanced strength sections.",
      image: "assets/catalog/mwh015.webp",
      alt: "Baodelong 45 Degree Leg Press MWH-015"
    },
    {
      name: "SYT Bench Press A810 (Panatta series)",
      category: "strength",
      subcategory: "plate",
      meta: "Plate Loaded | 1.8 x 1.7 m",
      description: "Plate-loaded bench press setup that gives a serious free-strength feel to the gym floor.",
      image: "assets/catalog/a810.webp",
      alt: "SYT Bench Press A810"
    },
    {
      name: "Baodelong Full Power Rack MWH-019",
      category: "strength",
      subcategory: "plate",
      meta: "Plate Loaded | 1.4 x 1.6 m",
      description: "Power rack solution for heavy lifts, focused strength training, and compact serious-training zones.",
      image: "assets/catalog/mwh019.webp",
      alt: "Baodelong Full Power Rack MWH-019"
    }
  ];

  const catalogGrid = document.querySelector("#catalog-grid");
  const catalogCount = document.querySelector("#catalog-count");
  const filterButtons = document.querySelectorAll("[data-catalog-filter]");
  const quoteTray = document.querySelector("#quote-tray");
  const quoteCount = document.querySelector("#quote-count");
  const quoteReviewButton = document.querySelector("#quote-review");
  const quoteDrawer = document.querySelector("#quote-drawer");
  const quoteCloseButton = document.querySelector("#quote-close");
  const quoteList = document.querySelector("#quote-list");
  const quoteItems = [];

  function saveQuoteItems() {
    try {
      window.localStorage.setItem(quoteStorageKey, JSON.stringify(quoteItems));
    } catch {
      return;
    }
  }

  function loadQuoteItems() {
    try {
      const raw = window.localStorage.getItem(quoteStorageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      parsed.forEach((item) => {
        if (!item || typeof item.name !== "string") return;
        quoteItems.push({
          name: item.name,
          meta: typeof item.meta === "string" ? item.meta : "",
          qty: Number.isFinite(item.qty) && item.qty > 0 ? Math.min(20, item.qty) : 1
        });
      });
    } catch {
      return;
    }
  }

  function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = products
      .map(
        (product) => `
          <article class="catalog-card reveal is-visible" data-catalog-category="${product.category}" data-catalog-subcategory="${product.subcategory}">
            <div class="catalog-media">
              <img src="${product.image}" alt="${product.alt}" loading="lazy" />
            </div>
            <div class="catalog-copy">
              <p class="catalog-type">${product.category} | ${product.subcategory}</p>
              <h3>${product.name}</h3>
              <p class="catalog-meta">${product.meta}</p>
              <p class="catalog-meta">${product.description}</p>
              <div class="catalog-actions">
                <button class="button primary catalog-add" type="button" data-product-name="${product.name}" data-product-meta="${product.meta}">
                  Add to Quote
                </button>
              </div>
            </div>
          </article>
        `
      )
      .join("");

    catalogGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".catalog-add");
      if (!button) return;
      addQuoteItem(button.dataset.productName || "Equipment", button.dataset.productMeta || "");
      openQuoteDrawer();
    });
  }

  function setCatalogFilter(filter) {
    const cards = document.querySelectorAll("[data-catalog-category]");
    let visibleCount = 0;

    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.catalogFilter === filter);
    });

    cards.forEach((card) => {
      const category = card.dataset.catalogCategory;
      const subcategory = card.dataset.catalogSubcategory;
      const matches =
        filter === "all" ||
        category === filter ||
        subcategory === filter;

      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount += 1;
    });

    if (catalogCount) {
      catalogCount.textContent = `Showing ${visibleCount} products`;
    }
  }

  function updateQuoteUi() {
    const total = quoteItems.reduce((sum, item) => sum + item.qty, 0);
    if (quoteCount) {
      quoteCount.textContent = `${total} ${total === 1 ? "item" : "items"} selected`;
    }
    if (quoteTray) {
      quoteTray.hidden = total === 0;
    }

    if (!quoteList) {
      saveQuoteItems();
      return;
    }

    if (total === 0) {
      quoteList.innerHTML = `<p class="quote-empty">No products added yet.</p>`;
      saveQuoteItems();
      return;
    }

    quoteList.innerHTML = quoteItems
      .map(
        (item, index) => `
          <div class="quote-item">
            <div class="quote-item-copy">
              <strong>${item.name}</strong>
              <span>${item.meta}</span>
            </div>
            <div class="quote-item-controls">
              <button class="quote-step" type="button" data-quote-adjust="${index}" data-quote-delta="-1">-</button>
              <span class="quote-qty">${item.qty}</span>
              <button class="quote-step" type="button" data-quote-adjust="${index}" data-quote-delta="1">+</button>
              <button class="quote-remove" type="button" data-quote-remove="${index}">x</button>
            </div>
          </div>
        `
      )
      .join("");

    saveQuoteItems();
  }

  function addQuoteItem(name, meta) {
    const existing = quoteItems.find((item) => item.name === name);
    if (existing) {
      existing.qty = Math.min(20, existing.qty + 1);
    } else {
      quoteItems.push({ name, meta, qty: 1 });
    }
    updateQuoteUi();
  }

  function adjustQuoteItem(index, delta) {
    const item = quoteItems[index];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      quoteItems.splice(index, 1);
    }
    updateQuoteUi();
  }

  function removeQuoteItem(index) {
    quoteItems.splice(index, 1);
    updateQuoteUi();
  }

  function openQuoteDrawer() {
    quoteDrawer?.classList.add("is-open");
    quoteDrawer?.setAttribute("aria-hidden", "false");
  }

  function closeQuoteDrawer() {
    quoteDrawer?.classList.remove("is-open");
    quoteDrawer?.setAttribute("aria-hidden", "true");
  }

  renderCatalog();
  loadQuoteItems();
  setCatalogFilter("all");
  updateQuoteUi();

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setCatalogFilter(button.dataset.catalogFilter || "all"));
  });

  quoteReviewButton?.addEventListener("click", openQuoteDrawer);
  quoteCloseButton?.addEventListener("click", closeQuoteDrawer);
  quoteDrawer?.addEventListener("click", (event) => {
    if (event.target === quoteDrawer) closeQuoteDrawer();
  });

  quoteList?.addEventListener("click", (event) => {
    const adjustButton = event.target.closest("[data-quote-adjust]");
    if (adjustButton) {
      adjustQuoteItem(Number(adjustButton.dataset.quoteAdjust), Number(adjustButton.dataset.quoteDelta));
      return;
    }

    const removeButton = event.target.closest("[data-quote-remove]");
    if (removeButton) {
      removeQuoteItem(Number(removeButton.dataset.quoteRemove));
    }
  });
})();
