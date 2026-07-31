(function () {
  "use strict";

  function structureImage(label, symbol, color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" viewBox="0 0 300 220"><rect width="300" height="220" rx="22" fill="#f4f5f1"/><rect x="42" y="28" width="216" height="150" rx="14" fill="${color}" fill-opacity=".16" stroke="${color}" stroke-width="6"/><text x="150" y="113" text-anchor="middle" font-family="Arial" font-size="54" font-weight="700" fill="${color}">${symbol}</text><text x="150" y="204" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#15191f">${label}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  const catalog = [
    ["CS-XG-V12", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-xg-v12.png", 7.1, 3.1],
    ["CS-AC800", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-ac800.png", 7.2, 3.1],
    ["CS-V6", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-v6.png", 7.1, 3.2],
    ["CS-T919", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-t919.png", 7.3, 3.2],
    ["CS-XZ8001S", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-xz8001s.png", 7.2, 3.1],
    ["CS-XZ8003C Curved Treadmill", "Cardio | Treadmills", "cardio", "assets/catalog-items/cardio-cs-xz8003c.png", 7.0, 3.5],
    ["CS-E12-V5", "Cardio | Ellipticals", "cardio", "assets/catalog-items/cardio-cs-e12-v5.png", 6.6, 2.5],
    ["CS-E17", "Cardio | Ellipticals", "cardio", "assets/catalog-items/cardio-cs-e17.png", 6.8, 2.6],
    ["LED Console Bike", "Cardio | Upright Bikes", "cardio", "assets/catalog-items/cardio-led-console-bike.png", 4.2, 2.2],
    ["Recumbent Bike", "Cardio | Recumbent Bikes", "cardio", "assets/catalog-items/cardio-recumbent-bike.png", 5.5, 2.2],
    ["Spinning Bike", "Cardio | Spinning Bikes", "cardio", "assets/catalog-items/cardio-spinning-bike.png", 4.2, 2.1],
    ["Air Bike", "Cardio | High Intensity", "cardio", "assets/catalog-items/cardio-air-bike.png", 4.4, 2.3],
    ["Squat Rack CS-XH021", "Strength | Racks + Stations", "strength", "assets/catalog-items/strength-squat-rack-cs-xh021.png", 6.0, 6.0],
    ["Functional Trainer CS-H005A", "Strength | Functional Training", "strength", "assets/catalog-items/strength-functional-trainer-cs-h005a.png", 5.4, 4.2],
    ["Half Rack CS-G890", "Strength | Racks + Stations", "strength", "assets/catalog-items/strength-half-rack-cs-g890.png", 5.8, 5.5],
    ["Fusion K601 Horizontal Leg Curl", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k601-horizontal-leg-curl.png", 6.8, 3.6],
    ["Fusion K602 Seated Leg Extension", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k602-seated-leg-extension.png", 5.0, 3.8],
    ["Fusion K606 Shoulder Press", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k606-shoulder-press.png", 5.0, 4.2],
    ["Fusion K607 Chest Fly Rear Delt", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k607-chest-fly-rear-delt.png", 5.2, 4.2],
    ["Fusion K608 Chest Press", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k608-chest-press.png", 5.2, 4.2],
    ["Fusion K609 Assist Dip Chin", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k609-assist-dip-chin.png", 5.0, 4.2],
    ["Fusion K623 Seated Leg Curl", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k623-seated-leg-curl.png", 5.4, 3.8],
    ["Fusion K634 Seated Row", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k634-seated-row.png", 5.6, 4.0],
    ["Fusion K635 High Pulley", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k635-high-pulley.png", 5.0, 4.0],
    ["Fusion K681 High PulleyRow Single Handle", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k681-high-pulleyrow-single-handle.png", 5.4, 4.0],
    ["Fusion K682 Multipress Chest and Shoulder", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k682-multipress-chest-and-shoulder.png", 5.6, 4.4],
    ["Fusion K683 Abductor & Adductor", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k683-abductor-adductor.png", 5.2, 4.0],
    ["Fusion K684A Leg Curl Extension", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k684a-leg-curl-extension.png", 5.4, 4.0],
    ["Fusion K685 Biceps Triceps", "Strength | Fusion Series", "strength", "assets/catalog-items/fusion/fusion-k685-biceps-triceps.png", 4.8, 3.8],
    ["Flow Chest Press CS-M1-001", "Strength | Flow Series", "strength", "assets/catalog-items/flow-chest-press.png", 5.2, 4.2],
    ["Flow Shoulder Press CS-M1-003", "Strength | Flow Series", "strength", "assets/catalog-items/flow-shoulder-press.png", 5.2, 4.2],
    ["Flow Seated Row CS-M1-004", "Strength | Flow Series", "strength", "assets/catalog-items/flow-seated-row.png", 5.5, 4.0],
    ["Flow Assisted Dip / Chin CS-M1-008", "Strength | Flow Series", "strength", "assets/catalog-items/flow-assisted-dip-chin.png", 5.0, 4.0],
    ["Flux Chest Press CS-TY01", "Strength | Flux Series", "strength", "assets/catalog-items/flux-chest-press.png", 5.0, 4.0],
    ["Flux Shoulder Press CS-TY02", "Strength | Flux Series", "strength", "assets/catalog-items/flux-shoulder-press.png", 5.0, 4.0],
    ["Flux Longpull CS-TY09", "Strength | Flux Series", "strength", "assets/catalog-items/flux-longpull.png", 5.5, 4.0],
    ["Flux Dip / Chin Assist CS-TY24", "Strength | Flux Series", "strength", "assets/catalog-items/flux-dip-chin-assist.png", 5.0, 4.0],
    ["Fuel Chest Press CS-ASN001", "Strength | Fuel Series", "strength", "assets/catalog-items/fuel-chest-press.png", 5.0, 4.0],
    ["Fuel Shoulder Press CS-ASN003", "Strength | Fuel Series", "strength", "assets/catalog-items/fuel-shoulder-press.png", 5.0, 4.0],
    ["Fuel Seated Row CS-ASN004", "Strength | Fuel Series", "strength", "assets/catalog-items/fuel-seated-row.png", 5.4, 4.0],
    ["Fuel Tricep Press CS-ASN007", "Strength | Fuel Series", "strength", "assets/catalog-items/fuel-tricep-press.png", 4.8, 3.8],
    ["Force Chest Press CS-MWH001", "Strength | Force Series", "strength", "assets/catalog-items/force-chest-press.png", 6.0, 5.0],
    ["Force Incline Chest Press CS-MWH002", "Strength | Force Series", "strength", "assets/catalog-items/force-incline-chest-press.png", 6.2, 5.0],
    ["Force Row CS-MWH006", "Strength | Force Series", "strength", "assets/catalog-items/force-row.png", 6.0, 5.0],
    ["Force 45 Degree Leg Press CS-XH022", "Strength | Force Series", "strength", "assets/catalog-items/force-45-degree-leg-press.png", 7.5, 5.5],
    ["Structural Pillar", "Structure | Pillar", "structure", structureImage("Pillar", "P", "#f3b600"), 2, 2],
    ["Washroom 7 x 3 ft", "Structure | Washroom", "structure", structureImage("Washroom", "WC", "#4ec6ef"), 7, 3],
    ["Free-form Reserved Space", "Structure | Free space", "structure", structureImage("Free space", "+", "#f8387d"), 10, 8]
  ].map((item, index) => ({
    id: `catalog-${index + 1}`,
    title: item[0],
    meta: item[1],
    category: item[2],
    image: item[3],
    length: item[4],
    width: item[5]
  }));

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const roomForm = $("#layout-room-form");
  const areaInput = $("#layout-area");
  const lengthInput = $("#layout-length");
  const widthInput = $("#layout-width");
  const editor = $("#layout-editor");
  const setupCard = $("#layout-setup");
  const room = $("#layout-room");
  const viewport = $("#layout-stage-viewport");
  const canvas = $("#layout-3d-canvas");
  const ctx = canvas.getContext("2d");
  const catalogList = $("#layout-catalog-list");
  const searchInput = $("#layout-catalog-search");
  const selectedSummary = $("#layout-selected-summary");
  const selectedList = $("#layout-selected-list");
  const inspector = $("#layout-inspector");
  const imageCache = new Map();
  const saveKey = "cult-equipment-layout-v1";
  const roomShapes = {
    rectangle: [[0, 0], [1, 0], [1, 1], [0, 1]],
    "l-shape": [[0, 0], [0.58, 0], [0.58, 0.42], [1, 0.42], [1, 1], [0, 1]],
    "z-shape": [[0, 0], [0.68, 0], [0.68, 0.28], [1, 0.28], [1, 1], [0.32, 1], [0.32, 0.72], [0, 0.72]],
    "s-shape": [[0.3, 0], [1, 0], [1, 0.7], [0.7, 0.7], [0.7, 1], [0, 1], [0, 0.3], [0.3, 0.3]],
    "t-shape": [[0.32, 0], [0.68, 0], [0.68, 0.34], [1, 0.34], [1, 0.66], [0.68, 0.66], [0.68, 1], [0.32, 1], [0.32, 0.66], [0, 0.66], [0, 0.34], [0.32, 0.34]],
    "u-shape": [[0, 0], [0.28, 0], [0.28, 0.64], [0.72, 0.64], [0.72, 0], [1, 0], [1, 1], [0, 1]],
    corner: [[0, 0], [0.68, 0], [0.68, 0.28], [0.28, 0.28], [0.28, 1], [0, 1]],
    blunt: [[0, 0], [0.72, 0], [1, 0.28], [1, 1], [0, 1]]
  };

  let roomLength = 50;
  let roomWidth = 40;
  let placed = [];
  let selectedId = "";
  let activeCategory = "all";
  let viewMode = "2d";
  let zoom = 1;
  let history = [];
  let historyIndex = -1;
  let dragState = null;
  let camera = { yaw: -0.72, pitch: 1.08, distance: 1 };
  let orbitState = null;
  let drag3DState = null;
  let equipment3DHitAreas = [];
  let roomShape = "rectangle";
  let underlay = null;
  let floors = [{ id: "floor-1", name: "Floor 1", length: 50, width: 40, shape: "rectangle", underlay: null }];
  let activeFloorId = "floor-1";
  let selectedIds = new Set();
  let groupMode = false;

  function activePlaced() {
    return placed.filter((item) => (item.floorId || "floor-1") === activeFloorId);
  }

  function syncActiveFloorConfig() {
    const floor = floors.find((item) => item.id === activeFloorId);
    if (!floor) return;
    floor.length = roomLength;
    floor.width = roomWidth;
    floor.shape = roomShape;
    floor.underlay = underlay;
  }

  function activateFloor(floorId) {
    syncActiveFloorConfig();
    const floor = floors.find((item) => item.id === floorId);
    if (!floor) return;
    activeFloorId = floor.id;
    roomLength = Number(floor.length) || 50;
    roomWidth = Number(floor.width) || 40;
    roomShape = floor.shape || "rectangle";
    underlay = floor.underlay || null;
    selectedId = "";
    selectedIds = new Set();
    areaInput.value = Math.round(roomLength * roomWidth);
    lengthInput.value = roomLength;
    widthInput.value = roomWidth;
    $("#layout-upload-status").textContent = underlay ? underlay.name : "PNG, JPG, SVG, PDF or DXF";
    $("#layout-remove-underlay").hidden = !underlay;
    updateShapeButtons();
    renderAll();
  }

  function updateShapeButtons() {
    $$('[data-room-shape]').forEach((button) => button.classList.toggle("is-active", button.dataset.roomShape === roomShape));
  }

  function roomShapePoints() {
    return (roomShapes[roomShape] || roomShapes.rectangle).map(([x, y]) => ({ x: x * roomLength, y: y * roomWidth }));
  }

  function roomShapeClip() {
    return (roomShapes[roomShape] || roomShapes.rectangle).map(([x, y]) => `${x * 100}% ${y * 100}%`).join(",");
  }

  function pointInPolygon(point, polygon) {
    let inside = false;
    for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index++) {
      const currentPoint = polygon[index];
      const previousPoint = polygon[previous];
      const cross = (point.y - previousPoint.y) * (currentPoint.x - previousPoint.x)
        - (point.x - previousPoint.x) * (currentPoint.y - previousPoint.y);
      const onSegment = Math.abs(cross) < 0.001
        && point.x >= Math.min(previousPoint.x, currentPoint.x) - 0.001
        && point.x <= Math.max(previousPoint.x, currentPoint.x) + 0.001
        && point.y >= Math.min(previousPoint.y, currentPoint.y) - 0.001
        && point.y <= Math.max(previousPoint.y, currentPoint.y) + 0.001;
      if (onSegment) return true;
      const intersects = ((currentPoint.y > point.y) !== (previousPoint.y > point.y))
        && (point.x < (previousPoint.x - currentPoint.x) * (point.y - currentPoint.y) / (previousPoint.y - currentPoint.y || 0.0001) + currentPoint.x);
      if (intersects) inside = !inside;
    }
    return inside;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function uid() {
    return `placed-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function pushHistory() {
    const snapshot = JSON.stringify({ roomLength, roomWidth, roomShape, floors, activeFloorId, placed });
    if (history[historyIndex] === snapshot) return;
    history = history.slice(0, historyIndex + 1);
    history.push(snapshot);
    historyIndex = history.length - 1;
    if (history.length > 60) {
      history.shift();
      historyIndex -= 1;
    }
  }

  function restoreHistory(nextIndex) {
    if (nextIndex < 0 || nextIndex >= history.length) return;
    historyIndex = nextIndex;
    const snapshot = JSON.parse(history[historyIndex]);
    roomLength = snapshot.roomLength;
    roomWidth = snapshot.roomWidth;
    roomShape = snapshot.roomShape || "rectangle";
    floors = (snapshot.floors || [{ id: "floor-1", name: "Floor 1" }]).map((floor) => ({
      ...floor,
      length: Number(floor.length) || 50,
      width: Number(floor.width) || 40,
      shape: floor.shape || "rectangle",
      underlay: floor.underlay || null
    }));
    activeFloorId = snapshot.activeFloorId || floors[0].id;
    placed = snapshot.placed;
    if (!placed.some((item) => item.id === selectedId)) selectedId = "";
    const floor = floors.find((item) => item.id === activeFloorId) || floors[0];
    roomLength = floor.length;
    roomWidth = floor.width;
    roomShape = floor.shape;
    underlay = floor.underlay;
    areaInput.value = Math.round(roomLength * roomWidth);
    lengthInput.value = roomLength;
    widthInput.value = roomWidth;
    renderAll();
  }

  function getCatalogItem(catalogId) {
    return catalog.find((item) => item.id === catalogId);
  }

  function getSelected() {
    return activePlaced().find((item) => item.id === selectedId);
  }

  function getCatalogQuantity(catalogId) {
    return activePlaced().filter((item) => item.catalogId === catalogId).length;
  }

  function getOrientedSize(item) {
    const radians = (item.rotation % 360) * Math.PI / 180;
    const cosine = Math.abs(Math.cos(radians));
    const sine = Math.abs(Math.sin(radians));
    return {
      length: item.length * cosine + item.width * sine,
      width: item.length * sine + item.width * cosine
    };
  }

  function getFootprintCorners(item) {
    const size = getOrientedSize(item);
    const centerX = item.x + size.length / 2;
    const centerY = item.y + size.width / 2;
    const radians = (item.rotation % 360) * Math.PI / 180;
    const cosine = Math.cos(radians);
    const sine = Math.sin(radians);
    return [
      [-item.length / 2, -item.width / 2],
      [item.length / 2, -item.width / 2],
      [item.length / 2, item.width / 2],
      [-item.length / 2, item.width / 2]
    ].map(([localX, localY]) => ({
      x: centerX + localX * cosine - localY * sine,
      y: centerY + localX * sine + localY * cosine
    }));
  }

  function isOutside(item) {
    const size = getOrientedSize(item);
    if (item.x < 0 || item.y < 0 || item.x + size.length > roomLength || item.y + size.width > roomWidth) return true;
    if (roomShape === "rectangle") return false;
    const polygon = roomShapePoints();
    return ![
      { x: item.x, y: item.y },
      { x: item.x + size.length, y: item.y },
      { x: item.x + size.length, y: item.y + size.width },
      { x: item.x, y: item.y + size.width }
    ].every((corner) => pointInPolygon(corner, polygon));
  }

  function overlaps(a, b) {
    const as = getOrientedSize(a);
    const bs = getOrientedSize(b);
    return a.x < b.x + bs.length && a.x + as.length > b.x && a.y < b.y + bs.width && a.y + as.width > b.y;
  }

  function getPlacementState(item) {
    if (isOutside(item)) return "outside";
    if (activePlaced().some((other) => other.id !== item.id && overlaps(item, other))) return "overlap";
    return "safe";
  }

  function roomScale() {
    const availableWidth = Math.max(280, viewport.clientWidth - 56);
    const availableHeight = Math.max(280, viewport.clientHeight - 56);
    return Math.min(availableWidth / roomLength, availableHeight / roomWidth) * zoom;
  }

  function updateRoomDimensions() {
    const scale = roomScale();
    room.style.width = `${roomLength * scale}px`;
    room.style.height = `${roomWidth * scale}px`;
    room.style.setProperty("--layout-grid-size", `${scale}px`);
    $("#layout-room-label").textContent = `${roomLength} × ${roomWidth} ft`;
    $("#layout-area-label").textContent = `${Math.round(roomLength * roomWidth).toLocaleString("en-IN")} sq ft`;
    $("#layout-zoom-label").textContent = `${Math.round(zoom * 100)}%`;
  }

  function renderPlaced() {
    const scale = roomScale();
    const underlayMarkup = underlay
      ? underlay.type === "application/pdf"
        ? `<object class="layout-underlay" data="${underlay.data}" type="application/pdf" aria-label="Uploaded floor plan"></object>`
        : `<img class="layout-underlay" src="${underlay.data}" alt="Uploaded gym floor plan" />`
      : "";
    room.innerHTML = `<div class="layout-room-surface" style="clip-path:polygon(${roomShapeClip()})">${underlayMarkup}</div>` + activePlaced().map((item) => {
      const product = getCatalogItem(item.catalogId);
      const size = getOrientedSize(item);
      const state = getPlacementState(item);
      return `
        <button
          class="layout-placed-item ${selectedIds.has(item.id) || item.id === selectedId ? "is-selected" : ""} is-${state}"
          type="button"
          data-placed-id="${item.id}"
          style="left:${item.x * scale}px;top:${item.y * scale}px;width:${size.length * scale}px;height:${size.width * scale}px;--item-rotation:${item.rotation}deg;--visual-width:${Math.max(18, item.length * scale - 8)}px;--visual-height:${Math.max(18, item.width * scale - 8)}px"
          aria-label="${escapeHtml(product.title)}"
        >
          <img class="layout-placed-visual" src="${product.image}" alt="" draggable="false" />
          <span class="layout-placed-name">${escapeHtml(product.title)}</span>
        </button>
      `;
    }).join("");

    $("#layout-empty-state").hidden = activePlaced().length > 0 || viewMode === "3d";
    updateUsage();
  }

  function syncPlacedGeometry() {
    const scale = roomScale();
    $$("[data-placed-id]", room).forEach((element) => {
      const item = activePlaced().find((placedItem) => placedItem.id === element.dataset.placedId);
      if (!item) return;
      const size = getOrientedSize(item);
      const state = getPlacementState(item);
      element.style.left = `${item.x * scale}px`;
      element.style.top = `${item.y * scale}px`;
      element.style.width = `${size.length * scale}px`;
      element.style.height = `${size.width * scale}px`;
      element.style.setProperty("--item-rotation", `${item.rotation}deg`);
      element.style.setProperty("--visual-width", `${Math.max(18, item.length * scale - 8)}px`);
      element.style.setProperty("--visual-height", `${Math.max(18, item.width * scale - 8)}px`);
      element.classList.toggle("is-safe", state === "safe");
      element.classList.toggle("is-overlap", state === "overlap");
      element.classList.toggle("is-outside", state === "outside");
      element.classList.toggle("is-selected", selectedIds.has(item.id) || item.id === selectedId);
    });
    updateUsage();
  }

  function renderCatalog() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = catalog.filter((item) => {
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      const searchMatch = !query || `${item.title} ${item.meta}`.toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });

    $("#layout-catalog-count").textContent = `${filtered.length} items`;
    catalogList.innerHTML = filtered.map((item) => `
      <article class="layout-catalog-card" draggable="true" data-catalog-id="${item.id}">
        <div class="layout-catalog-image">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" draggable="false" />
        </div>
        <div class="layout-catalog-copy">
          <span>${escapeHtml(item.meta)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${item.length} × ${item.width} ft</small>
        </div>
        <div class="layout-catalog-quantity" aria-label="${escapeHtml(item.title)} quantity">
          <button type="button" data-catalog-minus="${item.id}" aria-label="Remove one ${escapeHtml(item.title)}">−</button>
          <strong>${getCatalogQuantity(item.id)}</strong>
          <button type="button" data-catalog-plus="${item.id}" aria-label="Add one ${escapeHtml(item.title)}">+</button>
        </div>
      </article>
    `).join("");
  }

  function renderSelectedSummary() {
    const groups = catalog
      .map((product) => ({ product, quantity: getCatalogQuantity(product.id) }))
      .filter((group) => group.quantity > 0);

    $("#layout-selected-total").textContent = activePlaced().length;
    selectedSummary.classList.toggle("has-items", groups.length > 0);
    selectedList.innerHTML = groups.length
      ? groups.map(({ product, quantity }) => `
          <div class="layout-selected-row">
            <img src="${product.image}" alt="" />
            <span>${escapeHtml(product.title)}</span>
            <div class="layout-selected-stepper">
              <button type="button" data-selected-minus="${product.id}" aria-label="Remove one ${escapeHtml(product.title)}">−</button>
              <strong>${quantity}</strong>
              <button type="button" data-selected-plus="${product.id}" aria-label="Add one ${escapeHtml(product.title)}">+</button>
            </div>
          </div>
        `).join("")
      : '<p class="layout-selected-empty">Add equipment to build your gym plan.</p>';
  }

  function addEquipment(catalogId, x = null, y = null) {
    const product = getCatalogItem(catalogId);
    if (!product) return;
    const offset = activePlaced().length % 6;
    const item = {
      id: uid(),
      catalogId,
      x: x == null ? Math.max(0, roomLength / 2 - product.length / 2 + offset * 0.6) : x,
      y: y == null ? Math.max(0, roomWidth / 2 - product.width / 2 + offset * 0.6) : y,
      length: product.length,
      width: product.width,
      rotation: 0,
      floorId: activeFloorId
    };
    item.x = Math.min(Math.max(0, item.x), Math.max(0, roomLength - item.length));
    item.y = Math.min(Math.max(0, item.y), Math.max(0, roomWidth - item.width));
    placed.push(item);
    selectedId = item.id;
    selectedIds = new Set([item.id]);
    pushHistory();
    renderAll();
  }

  function removeOneEquipment(catalogId) {
    const index = placed.findLastIndex((item) => (item.floorId || "floor-1") === activeFloorId && item.catalogId === catalogId);
    if (index < 0) return;
    const [removed] = placed.splice(index, 1);
    if (removed.id === selectedId) selectedId = "";
    selectedIds.delete(removed.id);
    pushHistory();
    renderAll();
  }

  function renderInspector() {
    const item = getSelected();
    inspector.hidden = !item;
    if (!item) return;
    const product = getCatalogItem(item.catalogId);
    $("#layout-inspector-image").src = product.image;
    $("#layout-inspector-image").alt = product.title;
    $("#layout-inspector-name").textContent = product.title;
    $("#layout-inspector-category").textContent = product.meta;
    $("#layout-item-length").value = item.length.toFixed(1);
    $("#layout-item-width").value = item.width.toFixed(1);
    $("#layout-item-x").value = item.x.toFixed(1);
    $("#layout-item-y").value = item.y.toFixed(1);
    $("#layout-item-rotation").value = Math.round(item.rotation % 360);
  }

  function updateUsage() {
    const roomArea = roomLength * roomWidth;
    const occupied = activePlaced().reduce((sum, item) => sum + item.length * item.width, 0);
    const percentage = roomArea ? Math.min(999, Math.round((occupied / roomArea) * 100)) : 0;
    $("#layout-usage-label").textContent = `${percentage}% occupied`;
  }

  function renderFloors() {
    const tabs = $("#layout-floor-tabs");
    if (!tabs) return;
    tabs.innerHTML = floors.map((floor) => `
      <button class="${floor.id === activeFloorId ? "is-active" : ""}" type="button" data-floor-id="${floor.id}">
        ${escapeHtml(floor.name)} <small>${placed.filter((item) => (item.floorId || "floor-1") === floor.id).length}</small>
      </button>
    `).join("");
  }

  function renderAll() {
    updateShapeButtons();
    updateRoomDimensions();
    renderPlaced();
    renderInspector();
    renderCatalog();
    renderSelectedSummary();
    renderFloors();
    if (viewMode === "3d") requestAnimationFrame(draw3D);
  }

  function setView(mode) {
    viewMode = mode;
    $$("[data-layout-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.layoutView === mode));
    const is3D = mode === "3d";
    room.hidden = false;
    canvas.hidden = false;
    room.classList.toggle("is-hidden", is3D);
    canvas.classList.toggle("is-hidden", !is3D);
    $("#layout-3d-tip").hidden = !is3D;
    $("#layout-view-kicker").textContent = is3D ? "Interactive 3D View" : "2D Floor Plan";
    $("#layout-help-text").textContent = is3D
      ? "Drag a machine to move it. Drag empty space to orbit and scroll to zoom."
      : "Drag equipment to position it. Select an item to edit its exact footprint.";
    $(".layout-zoom-controls").hidden = is3D;
    $("#layout-empty-state").hidden = activePlaced().length > 0 || is3D;
    if (is3D) {
      requestAnimationFrame(() => requestAnimationFrame(draw3D));
    } else {
      requestAnimationFrame(renderAll);
    }
  }

  function loadImage(path) {
    if (imageCache.has(path)) return imageCache.get(path);
    const image = new Image();
    image.src = path;
    imageCache.set(path, image);
    image.addEventListener("load", draw3D, { once: true });
    return image;
  }

  function project3D(x, y, z, width, height) {
    const centerX = roomLength / 2;
    const centerY = roomWidth / 2;
    const offsetX = x - centerX;
    const offsetY = y - centerY;
    const cosYaw = Math.cos(camera.yaw);
    const sinYaw = Math.sin(camera.yaw);
    const rotatedX = offsetX * cosYaw - offsetY * sinYaw;
    const rotatedDepth = offsetX * sinYaw + offsetY * cosYaw;
    const sinPitch = Math.sin(camera.pitch);
    const cosPitch = Math.cos(camera.pitch);
    const horizontalSpan = Math.abs(roomLength * cosYaw) + Math.abs(roomWidth * sinYaw);
    const depthSpan = Math.abs(roomLength * sinYaw) + Math.abs(roomWidth * cosYaw);
    const estimatedWallHeight = Math.max(9, Math.min(14, Math.sqrt(roomLength * roomWidth) * 0.27));
    const projectedHeight = depthSpan * sinPitch + estimatedWallHeight * cosPitch;
    const unit = Math.min(width * 0.88 / horizontalSpan, height * 0.8 / projectedHeight) / camera.distance;
    return {
      x: width / 2 + rotatedX * unit,
      y: height * 0.6 + rotatedDepth * sinPitch * unit - z * cosPitch * unit,
      depth: rotatedDepth + z * 0.08,
      unit
    };
  }

  function screenDeltaToFloor(deltaX, deltaY, axes) {
    const determinant = axes.ax * axes.by - axes.ay * axes.bx;
    if (Math.abs(determinant) < 0.001) return { x: 0, y: 0 };
    return {
      x: (deltaX * axes.by - deltaY * axes.bx) / determinant,
      y: (axes.ax * deltaY - axes.ay * deltaX) / determinant
    };
  }

  function drawPolygon(points, fill, stroke, lineWidth = 1) {
    if (!points.length) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function drawEquipmentLabel(text, centerX, topY, maxWidth = 170) {
    ctx.save();
    ctx.font = "700 10px Sora, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const words = text.split(/\s+/);
    const lines = [];
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (ctx.measureText(candidate).width <= maxWidth || !current) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    });
    if (current) lines.push(current);

    const lineHeight = 13;
    const labelWidth = Math.min(
      maxWidth + 16,
      Math.max(72, ...lines.map((line) => ctx.measureText(line).width + 16))
    );
    const labelHeight = lines.length * lineHeight + 8;
    ctx.fillStyle = "rgba(9,13,18,.88)";
    ctx.fillRect(centerX - labelWidth / 2, topY, labelWidth, labelHeight);
    ctx.fillStyle = "#f5f7f8";
    lines.forEach((line, index) => {
      ctx.fillText(line, centerX, topY + 6 + lineHeight * index + lineHeight / 2);
    });
    ctx.restore();
  }

  function draw3D() {
    if (viewMode !== "3d") return;
    const bounds = canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(bounds.width));
    const height = Math.max(1, Math.round(bounds.height));
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const backdrop = ctx.createLinearGradient(0, 0, 0, height);
    backdrop.addColorStop(0, "#e7ebec");
    backdrop.addColorStop(0.48, "#bfc7ca");
    backdrop.addColorStop(1, "#151a20");
    ctx.fillStyle = backdrop;
    ctx.fillRect(0, 0, width, height);

    const shapePoints = roomShapePoints();
    const floorCorners = shapePoints.map((point) => project3D(point.x, point.y, 0, width, height));
    const floorGradient = ctx.createLinearGradient(0, height * 0.4, 0, height);
    floorGradient.addColorStop(0, "#5c5148");
    floorGradient.addColorStop(0.5, "#302c2a");
    floorGradient.addColorStop(1, "#131619");
    drawPolygon(floorCorners, floorGradient, "rgba(78,198,239,.7)", 1.5);

    const wallHeight = Math.max(11, Math.min(16, Math.sqrt(roomLength * roomWidth) * 0.3));
    shapePoints.forEach((point, index) => {
      const next = shapePoints[(index + 1) % shapePoints.length];
      const wall = [
        project3D(point.x, point.y, 0, width, height),
        project3D(next.x, next.y, 0, width, height),
        project3D(next.x, next.y, wallHeight, width, height),
        project3D(point.x, point.y, wallHeight, width, height)
      ];
      const wallLight = index % 2 ? "rgba(50,60,70,.58)" : "rgba(29,36,44,.68)";
      drawPolygon(wall, wallLight, "rgba(225,239,242,.3)");
    });

    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,.09)";
    const gridStep = Math.max(5, Math.round(Math.max(roomLength, roomWidth) / 10));
    for (let x = gridStep; x < roomLength; x += gridStep) {
      const a = project3D(x, 0, 0.01, width, height);
      const b = project3D(x, roomWidth, 0.01, width, height);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    for (let y = gridStep; y < roomWidth; y += gridStep) {
      const a = project3D(0, y, 0.01, width, height);
      const b = project3D(roomLength, y, 0.01, width, height);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    const mirror = roomShape === "rectangle" ? [
      project3D(roomLength * 0.12, roomWidth, 1.2, width, height),
      project3D(roomLength * 0.88, roomWidth, 1.2, width, height),
      project3D(roomLength * 0.88, roomWidth, wallHeight * 0.72, width, height),
      project3D(roomLength * 0.12, roomWidth, wallHeight * 0.72, width, height)
    ] : [];
    if (mirror.length) drawPolygon(mirror, "rgba(125,191,207,.28)", "rgba(233,249,252,.75)");
    for (let panel = 1; mirror.length && panel < 4; panel += 1) {
      const panelX = roomLength * (0.12 + panel * 0.19);
      const mirrorBottom = project3D(panelX, roomWidth, 1.2, width, height);
      const mirrorTop = project3D(panelX, roomWidth, wallHeight * 0.72, width, height);
      ctx.beginPath();
      ctx.moveTo(mirrorBottom.x, mirrorBottom.y);
      ctx.lineTo(mirrorTop.x, mirrorTop.y);
      ctx.strokeStyle = "rgba(255,255,255,.48)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const accentBand = roomShape === "rectangle" ? [
      project3D(0, roomWidth, wallHeight * 0.78, width, height),
      project3D(roomLength, roomWidth, wallHeight * 0.78, width, height),
      project3D(roomLength, roomWidth, wallHeight * 0.84, width, height),
      project3D(0, roomWidth, wallHeight * 0.84, width, height)
    ] : [];
    if (accentBand.length) drawPolygon(accentBand, "rgba(248,56,125,.82)", "rgba(255,255,255,.3)");

    const sorted = activePlaced()
      .map((item) => {
        const size = getOrientedSize(item);
        return {
          item,
          product: getCatalogItem(item.catalogId),
          point: project3D(item.x + size.length / 2, item.y + size.width / 2, 0, width, height)
        };
      })
      .sort((a, b) => b.point.depth - a.point.depth);

    equipment3DHitAreas = [];
    sorted.forEach(({ item, product, point }) => {
      const state = getPlacementState(item);
      const image = loadImage(product.image);
      const visualWidth = Math.max(42, Math.max(item.length, item.width) * point.unit * 1.32);
      const visualHeight = visualWidth * 0.82;
      const footprint = getFootprintCorners(item).map((corner) => project3D(corner.x, corner.y, 0.02, width, height));
      ctx.save();
      ctx.globalAlpha = 0.95;
      drawPolygon(
        footprint,
        state === "outside" ? "rgba(224,65,59,.34)" : state === "overlap" ? "rgba(243,182,0,.25)" : "rgba(78,198,239,.16)",
        item.id === selectedId ? "#4ec6ef" : "rgba(78,198,239,.46)",
        item.id === selectedId ? 2 : 1
      );
      ctx.translate(point.x, point.y);
      ctx.rotate(-item.rotation * Math.PI / 180);
      if (image.complete && image.naturalWidth) {
        ctx.drawImage(image, -visualWidth / 2, -visualHeight, visualWidth, visualHeight);
      } else {
        ctx.fillStyle = "#343b48";
        ctx.fillRect(-visualWidth / 2, -visualHeight, visualWidth, visualHeight);
      }
      if (item.id === selectedId) {
        ctx.strokeStyle = "#4ec6ef";
        ctx.lineWidth = 2;
        ctx.strokeRect(-visualWidth / 2, -visualHeight, visualWidth, visualHeight);
      }
      ctx.restore();
      drawEquipmentLabel(product.title, point.x, point.y + 8);
      equipment3DHitAreas.push({
        id: item.id,
        left: point.x - visualWidth / 2,
        top: point.y - visualHeight,
        right: point.x + visualWidth / 2,
        bottom: point.y + 34,
        unit: point.unit
      });
    });

    ctx.fillStyle = "rgba(239,242,247,.82)";
    ctx.font = "600 12px Sora, sans-serif";
    ctx.fillText(`${roomLength} × ${roomWidth} ft`, 22, height - 22);
    ctx.fillStyle = "rgba(17,21,28,.7)";
    ctx.font = `800 ${Math.max(13, Math.min(22, width * 0.018))}px Sora, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("CULT EQUIPMENT GYM", width / 2, Math.max(26, height * 0.1));
    ctx.textAlign = "left";
  }

  function exportLayout() {
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 1600;
    exportCanvas.height = Math.max(900, Math.round(1600 * roomWidth / roomLength));
    const exportCtx = exportCanvas.getContext("2d");
    exportCtx.fillStyle = "#f4f5f1";
    exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    const padding = 70;
    const scale = Math.min((exportCanvas.width - padding * 2) / roomLength, (exportCanvas.height - padding * 2) / roomWidth);
    exportCtx.fillStyle = "#ffffff";
    exportCtx.fillRect(padding, padding, roomLength * scale, roomWidth * scale);
    exportCtx.strokeStyle = "#2c3038";
    exportCtx.lineWidth = 4;
    exportCtx.strokeRect(padding, padding, roomLength * scale, roomWidth * scale);
    exportCtx.strokeStyle = "rgba(44,48,56,.12)";
    exportCtx.lineWidth = 1;
    for (let x = 1; x < roomLength; x += 1) {
      exportCtx.beginPath();
      exportCtx.moveTo(padding + x * scale, padding);
      exportCtx.lineTo(padding + x * scale, padding + roomWidth * scale);
      exportCtx.stroke();
    }
    for (let y = 1; y < roomWidth; y += 1) {
      exportCtx.beginPath();
      exportCtx.moveTo(padding, padding + y * scale);
      exportCtx.lineTo(padding + roomLength * scale, padding + y * scale);
      exportCtx.stroke();
    }
    activePlaced().forEach((item) => {
      const product = getCatalogItem(item.catalogId);
      const size = getOrientedSize(item);
      const image = loadImage(product.image);
      const x = padding + item.x * scale;
      const y = padding + item.y * scale;
      const w = size.length * scale;
      const h = size.width * scale;
      exportCtx.fillStyle = getPlacementState(item) === "safe" ? "rgba(78,198,239,.12)" : "rgba(243,182,0,.18)";
      exportCtx.fillRect(x, y, w, h);
      if (image.complete && image.naturalWidth) exportCtx.drawImage(image, x, y, w, h);
      exportCtx.fillStyle = "#11141a";
      exportCtx.font = `600 ${Math.max(12, Math.min(22, scale * 0.42))}px Sora, sans-serif`;
      exportCtx.fillText(product.title.slice(0, 28), x + 5, y + h - 7, Math.max(20, w - 10));
    });
    exportCtx.fillStyle = "#11141a";
    exportCtx.font = "700 26px Sora, sans-serif";
    exportCtx.fillText(`cult equipment · ${roomLength} × ${roomWidth} ft · ${activePlaced().length} items`, padding, 42);
    const link = document.createElement("a");
    link.download = "cult-equipment-gym-layout.png";
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  }

  function saveLayout() {
    try {
      localStorage.setItem(saveKey, JSON.stringify({ roomLength, roomWidth, roomShape, underlay, floors, activeFloorId, placed }));
      const saveButton = $("[data-layout-action='save']");
      const previous = saveButton.textContent;
      saveButton.textContent = "Saved";
      setTimeout(() => { saveButton.textContent = previous; }, 1200);
    } catch {
      return;
    }
  }

  function loadSavedLayout() {
    try {
      const saved = JSON.parse(localStorage.getItem(saveKey) || "null");
      if (!saved || !Array.isArray(saved.placed)) return false;
      roomLength = Number(saved.roomLength) || 50;
      roomWidth = Number(saved.roomWidth) || 40;
      roomShape = saved.roomShape || "rectangle";
      underlay = saved.underlay || null;
      floors = (Array.isArray(saved.floors) && saved.floors.length ? saved.floors : [{ id: "floor-1", name: "Floor 1" }]).map((floor) => ({
        ...floor,
        length: Number(floor.length) || roomLength,
        width: Number(floor.width) || roomWidth,
        shape: floor.shape || roomShape,
        underlay: floor.underlay || null
      }));
      activeFloorId = saved.activeFloorId && floors.some((floor) => floor.id === saved.activeFloorId) ? saved.activeFloorId : floors[0].id;
      placed = saved.placed.filter((item) => getCatalogItem(item.catalogId)).map((item) => ({ ...item, floorId: item.floorId || "floor-1" }));
      const floor = floors.find((item) => item.id === activeFloorId) || floors[0];
      roomLength = floor.length;
      roomWidth = floor.width;
      roomShape = floor.shape;
      underlay = floor.underlay;
      areaInput.value = Math.round(roomLength * roomWidth);
      lengthInput.value = roomLength;
      widthInput.value = roomWidth;
      return true;
    } catch {
      return false;
    }
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function dxfToSvg(text) {
    const rows = text.split(/\r?\n/);
    const pairs = [];
    for (let index = 0; index + 1 < rows.length; index += 2) {
      pairs.push([rows[index].trim(), rows[index + 1].trim()]);
    }
    const lines = [];
    for (let index = 0; index < pairs.length; index += 1) {
      if (pairs[index][0] !== "0" || pairs[index][1].toUpperCase() !== "LINE") continue;
      const entity = {};
      for (index += 1; index < pairs.length && pairs[index][0] !== "0"; index += 1) {
        const [code, value] = pairs[index];
        if (["10", "20", "11", "21"].includes(code)) entity[code] = Number(value);
      }
      index -= 1;
      if (["10", "20", "11", "21"].every((code) => Number.isFinite(entity[code]))) lines.push(entity);
    }
    if (!lines.length) throw new Error("No LINE entities found in DXF");
    const xs = lines.flatMap((line) => [line["10"], line["11"]]);
    const ys = lines.flatMap((line) => [line["20"], line["21"]]);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const spanX = Math.max(1, maxX - minX);
    const spanY = Math.max(1, maxY - minY);
    const markup = lines.map((line) => `<line x1="${line["10"]}" y1="${maxY - line["20"] + minY}" x2="${line["11"]}" y2="${maxY - line["21"] + minY}" />`).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${spanX} ${spanY}"><rect x="${minX}" y="${minY}" width="${spanX}" height="${spanY}" fill="white"/><g fill="none" stroke="#242a31" stroke-width="${Math.max(spanX, spanY) / 500}">${markup}</g></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  function applyGroupAction(action) {
    const items = activePlaced().filter((item) => selectedIds.has(item.id));
    if (items.length < 2) return;
    const offset = Math.max(0, Number($("#layout-group-offset").value) || 0);
    if (action === "row") {
      const centerY = items.reduce((sum, item) => sum + item.y + getOrientedSize(item).width / 2, 0) / items.length;
      items.forEach((item) => {
        const size = getOrientedSize(item);
        item.y = Math.max(0, Math.min(roomWidth - size.width, centerY - size.width / 2));
      });
    }
    if (action === "column") {
      const centerX = items.reduce((sum, item) => sum + item.x + getOrientedSize(item).length / 2, 0) / items.length;
      items.forEach((item) => {
        const size = getOrientedSize(item);
        item.x = Math.max(0, Math.min(roomLength - size.length, centerX - size.length / 2));
      });
    }
    if (action === "space") {
      const sorted = [...items].sort((a, b) => a.x - b.x);
      let cursor = Math.min(...sorted.map((item) => item.x));
      sorted.forEach((item) => {
        item.x = Math.max(0, Math.min(roomLength - getOrientedSize(item).length, cursor));
        cursor += getOrientedSize(item).length + offset;
      });
    }
    if (action === "offset-x" || action === "offset-y") {
      items.forEach((item, index) => {
        if (action === "offset-x") item.x = Math.max(0, Math.min(roomLength - getOrientedSize(item).length, item.x + offset * index));
        if (action === "offset-y") item.y = Math.max(0, Math.min(roomWidth - getOrientedSize(item).width, item.y + offset * index));
      });
    }
    pushHistory();
    renderAll();
  }

  $$('[data-room-shape]').forEach((button) => button.addEventListener("click", () => {
    roomShape = button.dataset.roomShape;
    syncActiveFloorConfig();
    selectedId = "";
    selectedIds = new Set();
    pushHistory();
    renderAll();
  }));

  $("#layout-floor-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-floor-id]");
    if (button) activateFloor(button.dataset.floorId);
  });
  $("#layout-add-floor").addEventListener("click", () => {
    syncActiveFloorConfig();
    const floor = {
      id: `floor-${Date.now()}`,
      name: `Floor ${floors.length + 1}`,
      length: roomLength,
      width: roomWidth,
      shape: "rectangle",
      underlay: null
    };
    floors.push(floor);
    activateFloor(floor.id);
    pushHistory();
  });
  $("#layout-rename-floor").addEventListener("click", () => {
    const floor = floors.find((item) => item.id === activeFloorId);
    if (!floor) return;
    const name = window.prompt("Floor name", floor.name);
    if (!name || !name.trim()) return;
    floor.name = name.trim().slice(0, 32);
    pushHistory();
    renderFloors();
  });
  $("#layout-delete-floor").addEventListener("click", () => {
    if (floors.length === 1) return;
    const floor = floors.find((item) => item.id === activeFloorId);
    if (!floor || !window.confirm(`Delete ${floor.name} and its equipment?`)) return;
    placed = placed.filter((item) => (item.floorId || "floor-1") !== activeFloorId);
    floors = floors.filter((item) => item.id !== activeFloorId);
    activateFloor(floors[0].id);
    pushHistory();
  });

  $("#layout-group-mode").addEventListener("click", (event) => {
    groupMode = !groupMode;
    event.currentTarget.classList.toggle("is-active", groupMode);
    event.currentTarget.textContent = groupMode ? "Finish selection" : "Group select";
    if (!groupMode) selectedIds = selectedId ? new Set([selectedId]) : new Set();
    renderAll();
  });
  $$('[data-group-action]').forEach((button) => button.addEventListener("click", () => applyGroupAction(button.dataset.groupAction)));

  const uploadInput = $("#layout-plan-upload");
  uploadInput.addEventListener("change", async () => {
    const file = uploadInput.files && uploadInput.files[0];
    if (!file) return;
    const status = $("#layout-upload-status");
    try {
      if (/\.dwg$/i.test(file.name)) throw new Error("DWG is not browser-readable. Export it as DXF, PDF or PNG first.");
      status.textContent = "Reading plan...";
      let data;
      let type = file.type || "image/svg+xml";
      if (/\.dxf$/i.test(file.name)) {
        data = dxfToSvg(await file.text());
        type = "image/svg+xml";
      } else {
        data = await fileToDataUrl(file);
      }
      underlay = { name: file.name, type, data };
      syncActiveFloorConfig();
      status.textContent = file.name;
      $("#layout-remove-underlay").hidden = false;
      pushHistory();
      renderAll();
    } catch (error) {
      status.textContent = error.message || "This plan could not be opened.";
    }
    uploadInput.value = "";
  });
  $("#layout-remove-underlay").addEventListener("click", () => {
    underlay = null;
    syncActiveFloorConfig();
    $("#layout-upload-status").textContent = "PNG, JPG, SVG, PDF or DXF";
    $("#layout-remove-underlay").hidden = true;
    pushHistory();
    renderAll();
  });

  roomForm.addEventListener("submit", (event) => {
    event.preventDefault();
    roomLength = Math.max(10, Number(lengthInput.value) || 50);
    roomWidth = Math.max(10, Number(widthInput.value) || 40);
    areaInput.value = Math.round(roomLength * roomWidth);
    syncActiveFloorConfig();
    setupCard.classList.add("is-compact");
    pushHistory();
    renderAll();
  });

  areaInput.addEventListener("change", () => {
    const area = Number(areaInput.value);
    const length = Number(lengthInput.value);
    if (area > 0 && length > 0) widthInput.value = Math.max(10, area / length).toFixed(1);
  });
  lengthInput.addEventListener("input", () => {
    const length = Number(lengthInput.value);
    const width = Number(widthInput.value);
    if (length > 0 && width > 0) areaInput.value = Math.round(length * width);
  });
  widthInput.addEventListener("input", () => {
    const length = Number(lengthInput.value);
    const width = Number(widthInput.value);
    if (length > 0 && width > 0) areaInput.value = Math.round(length * width);
  });

  searchInput.addEventListener("input", renderCatalog);
  $$(".layout-category-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.layoutCategory;
      $$(".layout-category-tabs button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderCatalog();
    });
  });

  catalogList.addEventListener("click", (event) => {
    const plusButton = event.target.closest("[data-catalog-plus]");
    const minusButton = event.target.closest("[data-catalog-minus]");
    if (plusButton) addEquipment(plusButton.dataset.catalogPlus);
    if (minusButton) removeOneEquipment(minusButton.dataset.catalogMinus);
  });
  catalogList.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-catalog-id]");
    if (!card) return;
    event.dataTransfer.setData("text/plain", card.dataset.catalogId);
    event.dataTransfer.effectAllowed = "copy";
  });

  selectedList.addEventListener("click", (event) => {
    const plusButton = event.target.closest("[data-selected-plus]");
    const minusButton = event.target.closest("[data-selected-minus]");
    if (plusButton) addEquipment(plusButton.dataset.selectedPlus);
    if (minusButton) removeOneEquipment(minusButton.dataset.selectedMinus);
  });

  $("#layout-selected-toggle").addEventListener("click", (event) => {
    const isCollapsed = selectedSummary.classList.toggle("is-collapsed");
    event.currentTarget.textContent = isCollapsed ? "Show" : "Hide";
    event.currentTarget.setAttribute("aria-expanded", String(!isCollapsed));
  });

  viewport.addEventListener("dragover", (event) => {
    if (viewMode !== "2d") return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });
  viewport.addEventListener("drop", (event) => {
    if (viewMode !== "2d") return;
    event.preventDefault();
    const catalogId = event.dataTransfer.getData("text/plain");
    const product = getCatalogItem(catalogId);
    if (!product) return;
    const bounds = room.getBoundingClientRect();
    const scale = roomScale();
    addEquipment(catalogId, (event.clientX - bounds.left) / scale - product.length / 2, (event.clientY - bounds.top) / scale - product.width / 2);
  });

  room.addEventListener("pointerdown", (event) => {
    const element = event.target.closest("[data-placed-id]");
    if (!element) {
      selectedId = "";
      selectedIds = new Set();
      renderAll();
      return;
    }
    event.preventDefault();
    selectedId = element.dataset.placedId;
    if (groupMode || event.shiftKey) {
      if (selectedIds.has(selectedId)) selectedIds.delete(selectedId);
      else selectedIds.add(selectedId);
      renderAll();
      return;
    }
    selectedIds = new Set([selectedId]);
    const item = getSelected();
    dragState = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, x: item.x, y: item.y };
    element.setPointerCapture(event.pointerId);
    renderInspector();
  });
  room.addEventListener("pointermove", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const item = getSelected();
    if (!item) return;
    const scale = roomScale();
    item.x = Math.round((dragState.x + (event.clientX - dragState.startX) / scale) * 10) / 10;
    item.y = Math.round((dragState.y + (event.clientY - dragState.startY) / scale) * 10) / 10;
    syncPlacedGeometry();
    renderInspector();
  });
  room.addEventListener("pointerup", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    dragState = null;
    pushHistory();
    renderAll();
  });

  $$("[data-layout-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.layoutView)));
  $$("[data-layout-zoom]").forEach((button) => button.addEventListener("click", () => {
    zoom = Math.min(2.2, Math.max(0.5, zoom + Number(button.dataset.layoutZoom) * 0.1));
    renderAll();
  }));

  $(".layout-toolbar-actions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-layout-action]");
    if (!button) return;
    const action = button.dataset.layoutAction;
    if (action === "undo") restoreHistory(historyIndex - 1);
    if (action === "redo") restoreHistory(historyIndex + 1);
    if (action === "fit") {
      zoom = 1;
      camera = { yaw: -0.72, pitch: 1.08, distance: 1 };
      renderAll();
    }
    if (action === "save") saveLayout();
    if (action === "export") exportLayout();
    if (action === "clear" && (activePlaced().length === 0 || window.confirm("Clear every item from this floor?"))) {
      placed = placed.filter((item) => (item.floorId || "floor-1") !== activeFloorId);
      selectedId = "";
      selectedIds = new Set();
      pushHistory();
      renderAll();
    }
  });

  inspector.addEventListener("input", (event) => {
    const item = getSelected();
    if (!item) return;
    const value = Number(event.target.value);
    if (!Number.isFinite(value)) return;
    if (event.target.id === "layout-item-length") item.length = Math.max(1, value);
    if (event.target.id === "layout-item-width") item.width = Math.max(1, value);
    if (event.target.id === "layout-item-x") item.x = value;
    if (event.target.id === "layout-item-y") item.y = value;
    if (event.target.id === "layout-item-rotation") item.rotation = ((value % 360) + 360) % 360;
    syncPlacedGeometry();
    if (viewMode === "3d") draw3D();
  });
  inspector.addEventListener("change", () => {
    pushHistory();
    renderAll();
  });
  $(".layout-inspector-actions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-item-action]");
    const item = getSelected();
    if (!button || !item) return;
    const action = button.dataset.itemAction;
    if (action === "rotate") item.rotation = (item.rotation + 15) % 360;
    if (action === "duplicate") {
      const copy = { ...item, id: uid(), x: item.x + 1, y: item.y + 1 };
      placed.push(copy);
      selectedId = copy.id;
      selectedIds = new Set([copy.id]);
    }
    if (action === "delete") {
      placed = placed.filter((placedItem) => placedItem.id !== item.id);
      selectedId = "";
      selectedIds.delete(item.id);
    }
    pushHistory();
    renderAll();
  });

  canvas.addEventListener("pointerdown", (event) => {
    const bounds = canvas.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;
    const hit = [...equipment3DHitAreas].reverse().find((area) => (
      pointerX >= area.left && pointerX <= area.right && pointerY >= area.top && pointerY <= area.bottom
    ));
    if (hit) {
      event.preventDefault();
      selectedId = hit.id;
      selectedIds = new Set([hit.id]);
      const item = getSelected();
      const centerX = item.x + getOrientedSize(item).length / 2;
      const centerY = item.y + getOrientedSize(item).width / 2;
      const origin = project3D(centerX, centerY, 0, bounds.width, bounds.height);
      const alongX = project3D(centerX + 1, centerY, 0, bounds.width, bounds.height);
      const alongY = project3D(centerX, centerY + 1, 0, bounds.width, bounds.height);
      drag3DState = {
        id: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        x: item.x,
        y: item.y,
        axes: {
          ax: alongX.x - origin.x,
          ay: alongX.y - origin.y,
          bx: alongY.x - origin.x,
          by: alongY.y - origin.y
        }
      };
      canvas.setPointerCapture(event.pointerId);
      renderInspector();
      draw3D();
      return;
    }
    orbitState = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw: camera.yaw, pitch: camera.pitch };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (drag3DState && drag3DState.id === event.pointerId) {
      const item = getSelected();
      if (!item) return;
      const movement = screenDeltaToFloor(
        event.clientX - drag3DState.startX,
        event.clientY - drag3DState.startY,
        drag3DState.axes
      );
      const size = getOrientedSize(item);
      item.x = Math.round(Math.min(Math.max(0, drag3DState.x + movement.x), Math.max(0, roomLength - size.length)) * 10) / 10;
      item.y = Math.round(Math.min(Math.max(0, drag3DState.y + movement.y), Math.max(0, roomWidth - size.width)) * 10) / 10;
      renderInspector();
      draw3D();
      return;
    }
    if (!orbitState || orbitState.id !== event.pointerId) return;
    camera.yaw = orbitState.yaw + (event.clientX - orbitState.x) * 0.008;
    camera.pitch = Math.min(1.48, Math.max(0.35, orbitState.pitch + (event.clientY - orbitState.y) * 0.006));
    draw3D();
  });
  canvas.addEventListener("pointerup", (event) => {
    if (drag3DState && drag3DState.id === event.pointerId) {
      drag3DState = null;
      pushHistory();
      renderAll();
    }
    orbitState = null;
  });
  canvas.addEventListener("pointercancel", () => {
    drag3DState = null;
    orbitState = null;
  });
  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    camera.distance = Math.min(2.2, Math.max(0.55, camera.distance + Math.sign(event.deltaY) * 0.08));
    draw3D();
  }, { passive: false });

  const navToggle = $("[data-nav-toggle]");
  const header = $("[data-header]");
  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  window.addEventListener("resize", renderAll);
  if (loadSavedLayout()) {
    setupCard.classList.add("has-saved-layout");
  }
  $("#layout-upload-status").textContent = underlay ? underlay.name : "PNG, JPG, SVG, PDF or DXF";
  $("#layout-remove-underlay").hidden = !underlay;
  pushHistory();
  setView("2d");
  renderAll();
})();
