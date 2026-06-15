(function () {
  const resultsGrid = document.querySelector("#test-results");
  const resultsLabel = document.querySelector("#test-results-label");
  const clearButton = document.querySelector("#test-clear-filters");
  const filterButtons = document.querySelectorAll("[data-filter-group]");
  const dropdowns = document.querySelectorAll(".test-filter-dropdown");

  if (!resultsGrid) return;

  const activeFilter = {
    group: "",
    value: ""
  };

  const items = [
    {
      title: "Treadmills",
      code: "Cardio Family",
      group: "cardio",
      slug: "treadmills",
      image: "assets/test-catalog/cardio-treadmills.png",
      description: "Premium commercial treadmills including AC, LED-console, and curved sprint formats.",
      list: ["CS-XG-V12", "CS-AC800", "CS-V6", "CS-T919", "CS-XZ8001S", "CS-XZ8003C Curved Treadmill"]
    },
    {
      title: "Ellipticals",
      code: "Cardio Family",
      group: "cardio",
      slug: "ellipticals",
      image: "assets/test-catalog/cardio-ellipticals.png",
      description: "Smooth-stride elliptical range for commercial cardio floors.",
      list: ["CS-RE500", "CS-E12-V5", "CS-E17"]
    },
    {
      title: "Bikes",
      code: "Cardio Family",
      group: "cardio",
      slug: "bikes",
      image: "assets/test-catalog/cardio-bikes.png",
      description: "Bike lineup covering upright, self-generated, spin, and interval training formats.",
      list: ["LED Console Bike", "Self-Generated Bike", "2-Way Motion Spin Bike", "Interval Training Bike"]
    },
    {
      title: "High Intensity",
      code: "Cardio Family",
      group: "cardio",
      slug: "high-intensity",
      image: "assets/test-catalog/cardio-hit.png",
      description: "Conditioning-focused equipment for sled work, interval stations, and performance zones.",
      list: ["Commercial Climber", "Tank Sled CS-XZ-TK104"]
    },
    {
      title: "Cable Motion + Racks",
      code: "Strength Family",
      group: "strength",
      slug: "cable-motion-racks",
      image: "assets/test-catalog/cable-racks.png",
      description: "Cable crossover zones, functional trainers, squat racks, and rack-led training bays.",
      list: ["Squat Rack CS-XH021", "Abdominal Trainer CS-K45", "Half Rack CS-G890", "Cable Crossover CS-H005", "Functional Trainer CS-H005A"]
    },
    {
      title: "Benches + Racks",
      code: "Strength Family",
      group: "strength",
      slug: "benches-racks",
      image: "assets/test-catalog/benches-racks.png",
      description: "Olympic benches, hyperextension units, utility benches, and storage formats.",
      list: ["Olympic Incline Bench CS-XH025", "Olympic Decline Bench CS-XH024", "Hyperextension CS-XH026", "Stretch Bench CS-XH033", "Weight Plate Tree CS-H041"]
    },
    {
      title: "Free Weights + Accessories",
      code: "Strength Family",
      group: "strength",
      slug: "free-weights-accessories",
      image: "assets/test-catalog/free-weights.png",
      description: "Dumbbells, kettlebells, plates, bands, ropes, recovery tools, and accessory support.",
      list: ["Dumbbells + Kettlebells", "Weight Plates", "Medicine Balls", "Battle Ropes", "Foam Roller", "Yoga Mat"]
    },
    {
      title: "Fusion Series",
      code: "Series",
      group: "series",
      slug: "fusion-series",
      image: "assets/test-catalog/fusion-highlights.jpg",
      description: "Machine-led premium series with clean product naming and focused biomechanics.",
      list: ["Chest Press CS-K6-08", "Shoulder Press CS-K6-06", "Pec Fly & Rear Delt CS-K6-07", "Lat Pull Down CS-K6-35", "Leg Extension CS-K6-02"]
    },
    {
      title: "Flow Series",
      code: "Series",
      group: "series",
      slug: "flow-series",
      image: "assets/test-catalog/flow-shoulder-press.png",
      description: "Selectorized premium line with aviation-grade cables and multiple adjustment points.",
      list: ["Chest Press CS-M1-001", "Shoulder Press CS-M1-003", "Seated Row CS-M1-004", "Assisted Dip / Chin CS-M1-008"]
    },
    {
      title: "Flux Series",
      code: "Series",
      group: "series",
      slug: "flux-series",
      image: "assets/test-catalog/flux-shoulder-press.png",
      description: "Compact selectorized series with gas spring adjustments and premium shroud finish.",
      list: ["Chest Press CS-TY01", "Shoulder Press CS-TY02", "Longpull CS-TY09", "Dip / Chin Assist CS-TY24"]
    },
    {
      title: "Fuel Series",
      code: "Series",
      group: "series",
      slug: "fuel-series",
      image: "assets/test-catalog/fuel-shoulder-press.png",
      description: "Space-efficient commercial series with sturdy metal shrouds and knob-based adjustments.",
      list: ["Chest Press CS-ASN001", "Shoulder Press CS-ASN003", "Seated Row CS-ASN004", "Tricep Press CS-ASN007"]
    },
    {
      title: "Force Series",
      code: "Series",
      group: "series",
      slug: "force-series",
      image: "assets/test-catalog/force-shoulder-press.png",
      description: "Plate-loaded strength series with ISO movement and compact heavy-duty frames.",
      list: ["Chest Press CS-MWH001", "Incline Chest Press CS-MWH002", "Row CS-MWH006", "45 Degree Leg Press CS-XH022"]
    },
    {
      title: "Flow Chest Press",
      code: "CS-M1-001",
      group: "series",
      slug: "flow-series",
      image: "assets/test-catalog/individual/flow-chest-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flow Shoulder Press",
      code: "CS-M1-003",
      group: "series",
      slug: "flow-series",
      image: "assets/test-catalog/individual/flow-shoulder-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flow Seated Row",
      code: "CS-M1-004",
      group: "series",
      slug: "flow-series",
      image: "assets/test-catalog/individual/flow-seated-row.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flow Assisted Dip / Chin",
      code: "CS-M1-008",
      group: "series",
      slug: "flow-series",
      image: "assets/test-catalog/individual/flow-assisted-dip-chin.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flux Chest Press",
      code: "CS-TY01",
      group: "series",
      slug: "flux-series",
      image: "assets/test-catalog/individual/flux-chest-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flux Shoulder Press",
      code: "CS-TY02",
      group: "series",
      slug: "flux-series",
      image: "assets/test-catalog/individual/flux-shoulder-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flux Longpull",
      code: "CS-TY09",
      group: "series",
      slug: "flux-series",
      image: "assets/test-catalog/individual/flux-longpull.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Flux Dip / Chin Assist",
      code: "CS-TY24",
      group: "series",
      slug: "flux-series",
      image: "assets/test-catalog/individual/flux-dip-chin-assist.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Fuel Chest Press",
      code: "CS-ASN001",
      group: "series",
      slug: "fuel-series",
      image: "assets/test-catalog/individual/fuel-chest-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Fuel Shoulder Press",
      code: "CS-ASN003",
      group: "series",
      slug: "fuel-series",
      image: "assets/test-catalog/individual/fuel-shoulder-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Fuel Seated Row",
      code: "CS-ASN004",
      group: "series",
      slug: "fuel-series",
      image: "assets/test-catalog/individual/fuel-seated-row.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Fuel Tricep Press",
      code: "CS-ASN007",
      group: "series",
      slug: "fuel-series",
      image: "assets/test-catalog/individual/fuel-tricep-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Force Chest Press",
      code: "CS-MWH001",
      group: "series",
      slug: "force-series",
      image: "assets/test-catalog/individual/force-chest-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Force Incline Chest Press",
      code: "CS-MWH002",
      group: "series",
      slug: "force-series",
      image: "assets/test-catalog/individual/force-incline-chest-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Force Row",
      code: "CS-MWH006",
      group: "series",
      slug: "force-series",
      image: "assets/test-catalog/individual/force-row.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    },
    {
      title: "Force 45 Degree Leg Press",
      code: "CS-XH022",
      group: "series",
      slug: "force-series",
      image: "assets/test-catalog/individual/force-45-degree-leg-press.png",
      description: "Individual equipment render from the catalog source.",
      list: []
    }
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function renderList(list) {
    if (!list.length) return "";
    return `
      <div class="test-result-tags">
        ${list.map((item) => `<span class="test-result-tag">${escapeHtml(item)}</span>`).join("")}
      </div>
    `;
  }

  function renderCards() {
    const visibleItems = items.filter((item) => {
      if (!activeFilter.group || !activeFilter.value) return true;
      return item.group === activeFilter.group && item.slug === activeFilter.value;
    });

    resultsGrid.innerHTML = visibleItems
      .map(
        (item) => `
          <article class="test-result-card">
            <div class="test-result-media">
              <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
            </div>
            <div class="test-result-copy">
              <p class="test-result-kicker">${escapeHtml(item.code)}</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              ${renderList(item.list)}
            </div>
          </article>
        `
      )
      .join("");

    if (!visibleItems.length) {
      resultsGrid.innerHTML = `
        <article class="test-empty-state">
          <h3>No items found</h3>
          <p>Try another filter from the dropdowns above.</p>
        </article>
      `;
    }

    const label = !activeFilter.group || !activeFilter.value
      ? "Showing all catalogue items"
      : `Showing ${activeFilter.group}: ${activeFilter.value.replaceAll("-", " ")}`;
    resultsLabel.textContent = `${label} (${visibleItems.length})`;
    clearButton.hidden = !activeFilter.group || !activeFilter.value;

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filterGroup === activeFilter.group && button.dataset.filterValue === activeFilter.value;
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
      const group = button.dataset.filterGroup || "";
      const value = button.dataset.filterValue || "";

      activeFilter.group = group;
      activeFilter.value = value;

      if (!value) {
        activeFilter.group = "";
        activeFilter.value = "";
      }

      closeDropdowns(button.closest(".test-filter-dropdown"));
      button.closest(".test-filter-dropdown")?.removeAttribute("open");
      renderCards();
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) closeDropdowns(dropdown);
    });
  });

  clearButton?.addEventListener("click", () => {
    activeFilter.group = "";
    activeFilter.value = "";
    renderCards();
  });

  renderCards();
})();
