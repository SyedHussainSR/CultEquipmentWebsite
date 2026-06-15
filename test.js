(function () {
  const root = document.querySelector("#test-series-root");
  if (!root) return;

  const fusionProducts = [
    ["Chest Press", "CS-K6-08", "100 kg stack push station for premium commercial strength floors."],
    ["Shoulder Press", "CS-K6-06", "Guided overhead press focused on shoulder drive and clean biomechanics."],
    ["Pec Fly & Rear Delt", "CS-K6-07", "Dual-function upper-body isolation machine for chest and rear shoulder work."],
    ["Lat Pull Down", "CS-K6-35", "Vertical pull station for lat width and back training."],
    ["Lat Pull & Mid Row", "CS-K6-81", "Combo back station for vertical and horizontal pull patterns."],
    ["Bicep & Tricep", "CS-K6-85", "Compact arm station for direct flexion and extension training."],
    ["Leg Extension / Prone Leg Curl", "CS-K6-84A", "Dual lower-body unit for quad and hamstring coverage."],
    ["Adductor / Abductor", "CS-K6-83", "Hip-focused station for inner and outer thigh training."],
    ["Seated Leg Curl", "CS-K6-23", "Hamstring isolation with seated support and selectorized loading."],
    ["Prone Leg Curl", "CS-K6-01", "Classic lying curl movement for direct posterior-chain work."],
    ["Leg Extension", "CS-K6-02", "Front-thigh extension station for quad isolation."],
    ["Multipress", "CS-K6-82", "Multi-angle pressing machine for chest and shoulder engagement."],
    ["Seated Row", "CS-K6-34", "Back-row station for mid-back and rear-shoulder work."],
    ["Standing Multi Flight", "CS-HM-87A", "Multi-flight cable tower for varied functional movements."],
    ["Assisted Dip / Chin", "CS-K6-09", "Bodyweight-assist station for pull-up and dip progressions."]
  ];

  const cardioFamilies = [
    {
      title: "Treadmills",
      image: "assets/test-catalog/cardio-treadmills.png",
      summary: "Commercial running lineup from premium LED consoles to self-powered curved sprint formats.",
      products: [
        "CS-XG-V12",
        "CS-AC800",
        "CS-V6",
        "CS-T919",
        "CS-XZ8001S",
        "CS-XZ8003C Curved Treadmill"
      ]
    },
    {
      title: "Ellipticals",
      image: "assets/test-catalog/cardio-ellipticals.png",
      summary: "Hybrid and magnetic-resistance elliptical range built for smooth stride and high-traffic use.",
      products: ["CS-RE500", "CS-E12-V5", "CS-E17"]
    },
    {
      title: "Bikes",
      image: "assets/test-catalog/cardio-bikes.png",
      summary: "Bike floor mix covering upright, self-generated, spin, and interval-style training formats.",
      products: ["LED Console Bike", "Self-Generated Bike", "2-Way Motion Spin Bike", "Interval Training Bike"]
    },
    {
      title: "High Intensity",
      image: "assets/test-catalog/cardio-hit.png",
      summary: "Performance zone pieces for sled work, interval conditioning, and high-output training lanes.",
      products: ["Commercial Climber", "Tank Sled CS-XZ-TK104"]
    }
  ];

  const strengthFamilies = [
    {
      title: "Flow Series",
      image: "assets/test-catalog/flow-shoulder-press.png",
      summary: "Premium selectorized line built around aviation-grade cables, aluminum pulleys, and multiple adjustment points.",
      highlights: ["Multiple seat adjustments", "Aviation-grade cables", "Aluminium pulleys", "Lumbar-aligned seating"],
      products: ["Chest Press CS-M1-001", "Shoulder Press CS-M1-003", "Seated Row CS-M1-004", "Assisted Dip / Chin CS-M1-008"]
    },
    {
      title: "Flux Series",
      image: "assets/test-catalog/flux-shoulder-press.png",
      summary: "Compact premium selectorized series with gas spring adjustments, German industrial cables, and anti-sweat grips.",
      highlights: ["Gas spring seat adjustment", "German commercial cable", "Alloy pulleys", "Premium fibre shroud"],
      products: [
        "Chest Press CS-TY01",
        "Shoulder Press CS-TY02",
        "Longpull CS-TY09",
        "Dip / Chin Assist CS-TY24",
        "Seated Leg Curl CS-TY14",
        "Prone Leg Curl CS-TY15",
        "Lat Pulldown / Long Pull CS-TY30",
        "Biceps / Triceps CS-TY26"
      ]
    },
    {
      title: "Fuel Series",
      image: "assets/test-catalog/fuel-shoulder-press.png",
      summary: "Space-efficient commercial line with single-press knob adjustments, towel holders, and sturdy metal shrouds.",
      highlights: ["Compact design", "Single-press knob", "Bottle + towel holder", "Metal shroud finish"],
      products: [
        "Chest Press CS-ASN001",
        "Shoulder Press CS-ASN003",
        "Seated Row CS-ASN004",
        "Tricep Press CS-ASN007",
        "Seated Leg Press CS-ASN015",
        "Seated Leg Curl CS-ASN013",
        "Multipress CS-ASN03",
        "Lat Pulldown / Row CS-ASN12",
        "Abductor / Adductor CS-ASN1819"
      ]
    },
    {
      title: "Force Series",
      image: "assets/test-catalog/force-shoulder-press.png",
      summary: "Plate-loaded strength line with ISO lateral movement, standard plate horns, and compact heavy-duty frames.",
      highlights: ["ISO lateral movement", "Weight horn storage", "Adjustable seats", "Floor-stable frame"],
      products: [
        "Chest Press CS-MWH001",
        "Incline Chest Press CS-MWH002",
        "Shoulder Press CS-MWH003",
        "Row CS-MWH006",
        "Incline Row CS-MWH016",
        "45 Degree Leg Press CS-XH022",
        "Super Squat CS-XH004",
        "Hip Thrust CS-XH006"
      ]
    }
  ];

  const rackFamilies = [
    {
      title: "Cable Motion + Racks",
      image: "assets/test-catalog/cable-racks.png",
      summary: "Floor-planning equipment for cable crossover zones, functional stations, and rack-led training bays.",
      products: [
        "Squat Rack CS-XH021",
        "Abdominal Trainer CS-K45",
        "Half Rack CS-G890",
        "Cable Crossover CS-H005",
        "Functional Trainer CS-H005A"
      ]
    },
    {
      title: "Benches + Racks",
      image: "assets/test-catalog/benches-racks.png",
      summary: "Bench and storage lineup covering Olympic benches, utility formats, hyperextension units, and plate storage.",
      products: [
        "Olympic Incline Bench CS-XH025",
        "Olympic Decline Bench CS-XH024",
        "Hyperextension CS-XH026",
        "Adjustable Web Board CS-XH034",
        "Stretch Bench CS-XH033",
        "Barbell Rack CS-H039",
        "Weight Plate Tree CS-H041",
        "2 Tier Dumbbell Rack CS-H030"
      ]
    }
  ];

  const featuredMachines = [
    ["Flow Chest Press", "CS-M1-001", "assets/test-catalog/individual/flow-chest-press.png"],
    ["Flow Shoulder Press", "CS-M1-003", "assets/test-catalog/individual/flow-shoulder-press.png"],
    ["Flow Seated Row", "CS-M1-004", "assets/test-catalog/individual/flow-seated-row.png"],
    ["Flow Assisted Dip / Chin", "CS-M1-008", "assets/test-catalog/individual/flow-assisted-dip-chin.png"],
    ["Flux Chest Press", "CS-TY01", "assets/test-catalog/individual/flux-chest-press.png"],
    ["Flux Shoulder Press", "CS-TY02", "assets/test-catalog/individual/flux-shoulder-press.png"],
    ["Flux Longpull", "CS-TY09", "assets/test-catalog/individual/flux-longpull.png"],
    ["Flux Dip / Chin Assist", "CS-TY24", "assets/test-catalog/individual/flux-dip-chin-assist.png"],
    ["Fuel Chest Press", "CS-ASN001", "assets/test-catalog/individual/fuel-chest-press.png"],
    ["Fuel Shoulder Press", "CS-ASN003", "assets/test-catalog/individual/fuel-shoulder-press.png"],
    ["Fuel Seated Row", "CS-ASN004", "assets/test-catalog/individual/fuel-seated-row.png"],
    ["Fuel Tricep Press", "CS-ASN007", "assets/test-catalog/individual/fuel-tricep-press.png"],
    ["Force Chest Press", "CS-MWH001", "assets/test-catalog/individual/force-chest-press.png"],
    ["Force Incline Chest Press", "CS-MWH002", "assets/test-catalog/individual/force-incline-chest-press.png"],
    ["Force Row", "CS-MWH006", "assets/test-catalog/individual/force-row.png"],
    ["Force 45 Degree Leg Press", "CS-XH022", "assets/test-catalog/individual/force-45-degree-leg-press.png"]
  ];

  function productCards(items) {
    return items
      .map(([name, code, description]) => {
        const fullName = code ? `${name} ${code}` : name;
        return `
          <article class="test-product-card">
            <h4>${fullName}</h4>
            <p>${description}</p>
          </article>
        `;
      })
      .join("");
  }

  function bulletChips(items) {
    return items
      .map((item) => `<span class="test-highlight">${item}</span>`)
      .join("");
  }

  function simpleList(items) {
    return items
      .map((item) => `<article class="test-product-card"><h4>${item}</h4><p>Source headline retained from the provided catalog PDFs.</p></article>`)
      .join("");
  }

  root.innerHTML = `
    <section class="test-series-block" id="fusion-series">
      <div class="test-series-grid">
        <div class="test-series-media">
          <img src="assets/test-catalog/fusion-products-a.jpg" alt="Fusion series equipment board" loading="lazy" />
        </div>
        <div class="test-series-copy">
          <p class="catalog-type">Fusion Series</p>
          <h2>Fusion Series</h2>
          <p>
            Fusion is the cleanest candidate for a premium series-led catalog. The PDF gives us strong product boards,
            machine-specific frames, and clear equipment naming without unnecessary catalog noise.
          </p>
          <div class="test-highlights">
            ${bulletChips([
              "Biomechanically optimized steel frame",
              "German industrial commercial cable",
              "Alloy pulleys",
              "Ergonomic lumbar alignment",
              "Premium fibre shroud"
            ])}
          </div>
        </div>
      </div>
      <div class="test-products-wrap">
        <h3>Fusion equipment list</h3>
        <div class="test-products-grid">
          ${productCards(fusionProducts)}
        </div>
      </div>
      <div class="test-gallery">
        <figure><img src="assets/test-catalog/fusion-highlights.jpg" alt="Fusion highlights" loading="lazy" /></figure>
        <figure><img src="assets/test-catalog/fusion-products-b.jpg" alt="Fusion products board B" loading="lazy" /></figure>
        <figure><img src="assets/test-catalog/fusion-products-c.jpg" alt="Fusion products board C" loading="lazy" /></figure>
        <figure><img src="assets/test-catalog/fusion-products-d.jpg" alt="Fusion products board D" loading="lazy" /></figure>
      </div>
    </section>

    <section class="test-series-block" id="cardio-range">
      <div class="test-series-copy">
        <p class="catalog-type">Cardio Range</p>
        <h2>Cardio families</h2>
        <p>Instead of one long mixed grid, the cardio floor is broken into clear families so a buyer can scan the range faster.</p>
      </div>
      <div class="test-family-grid">
        ${cardioFamilies.map((family) => `
          <article class="test-family-card">
            <div class="test-family-media">
              <img src="${family.image}" alt="${family.title}" loading="lazy" />
            </div>
            <div class="test-family-copy">
              <h3>${family.title}</h3>
              <p>${family.summary}</p>
            </div>
            <div class="test-products-grid">
              ${simpleList(family.products)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="test-series-block" id="strength-series">
      <div class="test-series-copy">
        <p class="catalog-type">Strength Series</p>
        <h2>Strength series structure</h2>
        <p>The new structure keeps each series separate, shows a cleaner machine image, and keeps the product lineup underneath.</p>
      </div>
      <div class="test-family-grid">
        ${strengthFamilies.map((family) => `
          <article class="test-family-card">
            <div class="test-family-media">
              <img src="${family.image}" alt="${family.title}" loading="lazy" />
            </div>
            <div class="test-family-copy">
              <p class="catalog-type">${family.title}</p>
              <h3>${family.title}</h3>
              <p>${family.summary}</p>
              <div class="test-highlights">${bulletChips(family.highlights)}</div>
            </div>
            <div class="test-products-grid">
              ${simpleList(family.products)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="test-series-block" id="racks-benches">
      <div class="test-series-copy">
        <p class="catalog-type">Racks + Benches</p>
        <h2>Planning equipment beyond selectorized machines</h2>
        <p>Racks, cable motion, benches, and support hardware now sit in their own block instead of getting buried in the same catalog stream.</p>
      </div>
      <div class="test-family-grid">
        ${rackFamilies.map((family) => `
          <article class="test-family-card">
            <div class="test-family-media">
              <img src="${family.image}" alt="${family.title}" loading="lazy" />
            </div>
            <div class="test-family-copy">
              <h3>${family.title}</h3>
              <p>${family.summary}</p>
            </div>
            <div class="test-products-grid">
              ${simpleList(family.products)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="test-series-block" id="featured-machines">
      <div class="test-series-copy">
        <p class="catalog-type">Individual Equipment</p>
        <h2>Individual machine cards with image + headline</h2>
        <p>This is the extra layer you asked for on top of the series view: direct machine cards using the extracted product renders.</p>
      </div>
      <div class="test-machine-grid">
        ${featuredMachines.map(([name, code, image]) => `
          <article class="test-machine-card">
            <div class="test-machine-media">
              <img src="${image}" alt="${name}" loading="lazy" />
            </div>
            <div class="test-machine-copy">
              <p class="catalog-type">Individual Equipment</p>
              <h3>${name}</h3>
              <p>${code}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="test-series-block" id="free-weights">
      <div class="test-series-grid">
        <div class="test-series-media">
          <img src="assets/test-catalog/free-weights.png" alt="Free weights and accessories" loading="lazy" />
        </div>
        <div class="test-series-copy">
          <p class="catalog-type">Free Weights + Accessories</p>
          <h2>Free weights and accessory lineup</h2>
          <p>The PDF also includes the supporting floor equipment needed to complete a commercial setup beyond machines alone.</p>
          <div class="test-products-grid">
            ${simpleList([
              "Dumbbells and kettlebells",
              "Weight plates",
              "Kettlebell racks and holders",
              "Dumbbell racks",
              "Bumper plate racks",
              "Resistance bands",
              "Medicine balls",
              "Battle ropes",
              "Jump boxes",
              "Massage gun",
              "Foam roller",
              "TRX",
              "Yoga mat"
            ])}
          </div>
        </div>
      </div>
    </section>
  `;
})();
