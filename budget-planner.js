(function () {
  const form = document.querySelector("#budget-planner-form");
  const output = document.querySelector("#planner-output");
  const summary = document.querySelector("#planner-summary");
  const cardioItems = document.querySelector("#planner-cardio-items");
  const strengthItems = document.querySelector("#planner-strength-items");
  const cardioTotal = document.querySelector("#planner-cardio-total");
  const strengthTotal = document.querySelector("#planner-strength-total");
  const addQuoteButton = document.querySelector("#planner-add-quote");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const header = document.querySelector("[data-header]");
  const quoteStorageKey = "cult-equipment-quote-items";

  let currentPlan = [];

  const equipment = [
    { name: "Commercial Treadmill CS-XG-V12E", meta: "Cardio | Treadmill", group: "cardio", family: "treadmill", price: 140000, sqft: 65, image: "assets/catalog-items/cardio-cs-xg-v12.png" },
    { name: "Commercial Treadmill CS-V6", meta: "Cardio | Treadmill", group: "cardio", family: "treadmill", price: 128000, sqft: 65, image: "assets/catalog-items/cardio-cs-v6.png" },
    { name: "Commercial Treadmill XZ-T919", meta: "Cardio | Treadmill", group: "cardio", family: "treadmill", price: 105000, sqft: 65, image: "assets/catalog-items/cardio-cs-t919.png" },
    { name: "Commercial Treadmill CS-XZ8001S", meta: "Cardio | Treadmill", group: "cardio", family: "treadmill", price: 99000, sqft: 65, image: "assets/catalog-items/cardio-cs-xz8001s.png" },
    { name: "Curved Treadmill CS-XZ8003C", meta: "Cardio | Treadmill", group: "cardio", family: "treadmill", price: 85000, sqft: 70, image: "assets/catalog-items/cardio-cs-xz8003c.png" },
    { name: "Elliptical CS-E12", meta: "Cardio | Elliptical", group: "cardio", family: "elliptical", price: 108000, sqft: 45, image: "assets/catalog-items/cardio-cs-e12-v5.png" },
    { name: "Elliptical CS-E17", meta: "Cardio | Elliptical", group: "cardio", family: "elliptical", price: 89000, sqft: 45, image: "assets/catalog-items/cardio-cs-e17.png" },
    { name: "Recumbent Bike CS-R11", meta: "Cardio | Bike", group: "cardio", family: "bike", price: 72500, sqft: 38, image: "assets/catalog-items/cardio-recumbent-bike.png" },
    { name: "Upright Bike CS-B11", meta: "Cardio | Bike", group: "cardio", family: "bike", price: 60000, sqft: 32, image: "assets/catalog-items/cardio-led-console-bike.png" },
    { name: "Air Bike XZ-671-E", meta: "Cardio | Bike", group: "cardio", family: "bike", price: 48000, sqft: 35, image: "assets/catalog-items/cardio-air-bike.png" },
    { name: "Commercial Spin Bike", meta: "Cardio | Bike", group: "cardio", family: "bike", price: 35000, sqft: 28, image: "assets/catalog-items/cardio-spinning-bike.png" },

    { name: "Flow Lat Pulldown CS-M1-012", meta: "Strength | Pin Loaded", group: "pin", family: "lat", price: 120000, sqft: 55, image: "assets/catalog-items/fusion/fusion-k635-high-pulley.png" },
    { name: "Flow Seated Row CS-M1-004", meta: "Strength | Pin Loaded", group: "pin", family: "row", price: 118000, sqft: 55, image: "assets/catalog-items/flow-seated-row.png" },
    { name: "Fuel Seated Row CS-ASN004", meta: "Strength | Pin Loaded", group: "pin", family: "row", price: 58000, sqft: 55, image: "assets/catalog-items/fuel-seated-row.png" },
    { name: "Fuel High Pulley CS-ASN012C", meta: "Strength | Pin Loaded", group: "pin", family: "lat", price: 55000, sqft: 55, image: "assets/catalog-items/fusion/fusion-k635-high-pulley.png" },
    { name: "Fuel Chest Press CS-ASN001", meta: "Strength | Pin Loaded", group: "pin", family: "press", price: 58000, sqft: 58, image: "assets/catalog-items/fuel-chest-press.png" },
    { name: "Fuel Shoulder Press CS-ASN003", meta: "Strength | Pin Loaded", group: "pin", family: "press", price: 58000, sqft: 58, image: "assets/catalog-items/fuel-shoulder-press.png" },
    { name: "Fuel Tricep Press CS-ASN007", meta: "Strength | Pin Loaded", group: "pin", family: "arms", price: 58000, sqft: 52, image: "assets/catalog-items/fuel-tricep-press.png" },
    { name: "Flow Chest Press CS-M1-001", meta: "Strength | Pin Loaded", group: "pin", family: "press", price: 118000, sqft: 58, image: "assets/catalog-items/flow-chest-press.png" },
    { name: "Flow Shoulder Press CS-M1-003", meta: "Strength | Pin Loaded", group: "pin", family: "press", price: 122000, sqft: 58, image: "assets/catalog-items/flow-shoulder-press.png" },

    { name: "Force Row CS-MWH-006", meta: "Strength | Plate Loaded", group: "plate", family: "row", price: 58000, sqft: 70, image: "assets/catalog-items/force-row.png" },
    { name: "Force Pull Down CS-MWH-007", meta: "Strength | Plate Loaded", group: "plate", family: "lat", price: 58000, sqft: 70, image: "assets/catalog-items/force-row.png" },
    { name: "Force Chest Press CS-MWH-001", meta: "Strength | Plate Loaded", group: "plate", family: "press", price: 58000, sqft: 70, image: "assets/catalog-items/force-chest-press.png" },
    { name: "Force Incline Chest Press CS-MWH-002", meta: "Strength | Plate Loaded", group: "plate", family: "press", price: 58000, sqft: 70, image: "assets/catalog-items/force-incline-chest-press.png" },
    { name: "Force 45 Degree Leg Press CS-XH-022", meta: "Strength | Plate Loaded", group: "plate", family: "legs", price: 90000, sqft: 95, image: "assets/catalog-items/force-45-degree-leg-press.png" }
  ];

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value || 0);
  }

  function toggleNavMenu() {
    if (!header || !navToggle) return;
    const isOpen = header.classList.toggle("is-nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeNavMenu() {
    header?.classList.remove("is-nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  function addToBucket(bucket, product) {
    const existing = bucket.items.find((item) => item.name === product.name);
    if (existing) {
      existing.qty += 1;
    } else {
      bucket.items.push({ ...product, qty: 1 });
    }
    bucket.spend += product.price;
    bucket.sqft += product.sqft;
  }

  function canAdd(bucket, product, budgetLimit, sqftLimit) {
    return bucket.spend + product.price <= budgetLimit && bucket.sqft + product.sqft <= sqftLimit;
  }

  function pickAffordable(pool, bucket, budgetLimit, sqftLimit, family) {
    const candidates = pool
      .filter((item) => !family || item.family === family)
      .filter((item) => canAdd(bucket, item, budgetLimit, sqftLimit))
      .sort((a, b) => a.price - b.price);
    return candidates[0] || null;
  }

  function buildBucket(pool, budgetLimit, sqftLimit, requiredFamilies) {
    const bucket = { items: [], spend: 0, sqft: 0 };
    requiredFamilies.forEach((family) => {
      const product = pickAffordable(pool, bucket, budgetLimit, sqftLimit, family);
      if (product) addToBucket(bucket, product);
    });

    let added = true;
    const ranked = [...pool].sort((a, b) => a.price - b.price);
    while (added) {
      added = false;
      for (const product of ranked) {
        if (canAdd(bucket, product, budgetLimit, sqftLimit)) {
          addToBucket(bucket, product);
          added = true;
        }
      }
    }
    return bucket;
  }

  function buildPlan(budget, sqft) {
    const cardioBudget = budget * 0.4;
    const pinBudget = budget * 0.4;
    const plateBudget = budget * 0.2;
    const cardioSqft = sqft * 0.4;
    const pinSqft = sqft * 0.4;
    const plateSqft = sqft * 0.2;

    const cardio = buildBucket(
      equipment.filter((item) => item.group === "cardio"),
      cardioBudget,
      cardioSqft,
      ["treadmill", "elliptical", "bike", "rower"]
    );
    const pin = buildBucket(
      equipment.filter((item) => item.group === "pin"),
      pinBudget,
      pinSqft,
      ["lat", "row"]
    );
    const plate = buildBucket(
      equipment.filter((item) => item.group === "plate"),
      plateBudget,
      plateSqft,
      ["row", "lat"]
    );

    return { budget, sqft, cardio, pin, plate };
  }

  function totalItems(items) {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function totalSpend(items) {
    return items.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  function totalSqft(items) {
    return items.reduce((sum, item) => sum + item.qty * item.sqft, 0);
  }

  function renderSummary(plan) {
    const strengthItems = [...plan.pin.items, ...plan.plate.items];
    const allItems = [...plan.cardio.items, ...strengthItems];
    const spend = totalSpend(allItems);
    const sqftUsed = totalSqft(allItems);

    summary.innerHTML = [
      ["Total Plan", formatCurrency(spend), `${totalItems(allItems)} items`],
      ["Cardio Target", formatCurrency(plan.budget * 0.4), `${totalItems(plan.cardio.items)} items`],
      ["Strength Target", formatCurrency(plan.budget * 0.6), `${totalItems(strengthItems)} items`],
      ["Estimated Area", `${Math.round(sqftUsed)} sq ft`, `${Math.round(plan.sqft - sqftUsed)} sq ft balance`]
    ].map(([label, value, sub]) => `
      <div class="planner-summary-card">
        <span>${label}</span>
        <strong>${value}</strong>
        <small>${sub}</small>
      </div>
    `).join("");
  }

  function renderItems(container, items) {
    if (!items.length) {
      container.innerHTML = `<p class="planner-empty">Increase budget or square feet to fit this section.</p>`;
      return;
    }

    container.innerHTML = items.map((item) => `
      <article class="planner-item">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div>
          <span>${item.meta}</span>
          <h4>${item.name}</h4>
          <p>${formatCurrency(item.price)} each · ${item.sqft} sq ft</p>
        </div>
        <strong>x${item.qty}</strong>
      </article>
    `).join("");
  }

  function renderPlan(plan) {
    const strengthList = [...plan.pin.items, ...plan.plate.items];
    currentPlan = [...plan.cardio.items, ...strengthList];

    renderSummary(plan);
    renderItems(cardioItems, plan.cardio.items);
    renderItems(strengthItems, strengthList);
    cardioTotal.textContent = formatCurrency(totalSpend(plan.cardio.items));
    strengthTotal.textContent = formatCurrency(totalSpend(strengthList));

    output.hidden = false;
    output.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function savePlanToQuote() {
    if (!currentPlan.length) return;
    const quoteItems = currentPlan.map((item) => ({
      name: item.name,
      meta: `${item.meta} · Planner price ${formatCurrency(item.price)}`,
      qty: item.qty
    }));

    try {
      window.localStorage.setItem(quoteStorageKey, JSON.stringify(quoteItems));
    } catch {
      // The quote flow still works after redirect if localStorage is available.
    }

    window.location.href = "index.html#lead-form-wrap";
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const budget = Number(document.querySelector("#planner-budget")?.value || 0);
    const sqft = Number(document.querySelector("#planner-sqft")?.value || 0);
    if (!budget || !sqft) return;
    renderPlan(buildPlan(budget, sqft));
  });

  addQuoteButton?.addEventListener("click", savePlanToQuote);
  navToggle?.addEventListener("click", toggleNavMenu);
  navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavMenu));
})();
