(function () {
  "use strict";

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
    ["Force 45 Degree Leg Press CS-XH022", "Strength | Force Series", "strength", "assets/catalog-items/force-45-degree-leg-press.png", 7.5, 5.5]
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
  const inspector = $("#layout-inspector");
  const imageCache = new Map();
  const saveKey = "cult-equipment-layout-v1";

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
  let camera = { yaw: -0.65, pitch: 0.72, distance: 1.05 };
  let orbitState = null;

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
    const snapshot = JSON.stringify({ roomLength, roomWidth, placed });
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
    placed = snapshot.placed;
    if (!placed.some((item) => item.id === selectedId)) selectedId = "";
    renderAll();
  }

  function getCatalogItem(catalogId) {
    return catalog.find((item) => item.id === catalogId);
  }

  function getSelected() {
    return placed.find((item) => item.id === selectedId);
  }

  function getOrientedSize(item) {
    const swapped = Math.abs(item.rotation % 180) === 90;
    return {
      length: swapped ? item.width : item.length,
      width: swapped ? item.length : item.width
    };
  }

  function isOutside(item) {
    const size = getOrientedSize(item);
    return item.x < 0 || item.y < 0 || item.x + size.length > roomLength || item.y + size.width > roomWidth;
  }

  function overlaps(a, b) {
    const as = getOrientedSize(a);
    const bs = getOrientedSize(b);
    return a.x < b.x + bs.length && a.x + as.length > b.x && a.y < b.y + bs.width && a.y + as.width > b.y;
  }

  function getPlacementState(item) {
    if (isOutside(item)) return "outside";
    if (placed.some((other) => other.id !== item.id && overlaps(item, other))) return "overlap";
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
    room.innerHTML = placed.map((item) => {
      const product = getCatalogItem(item.catalogId);
      const size = getOrientedSize(item);
      const state = getPlacementState(item);
      return `
        <button
          class="layout-placed-item ${item.id === selectedId ? "is-selected" : ""} is-${state}"
          type="button"
          data-placed-id="${item.id}"
          style="left:${item.x * scale}px;top:${item.y * scale}px;width:${size.length * scale}px;height:${size.width * scale}px"
          aria-label="${escapeHtml(product.title)}"
        >
          <img src="${product.image}" alt="" draggable="false" style="transform:rotate(${item.rotation}deg)" />
          <span>${escapeHtml(product.title)}</span>
        </button>
      `;
    }).join("");

    $("#layout-empty-state").hidden = placed.length > 0 || viewMode === "3d";
    updateUsage();
  }

  function syncPlacedGeometry() {
    const scale = roomScale();
    $$("[data-placed-id]", room).forEach((element) => {
      const item = placed.find((placedItem) => placedItem.id === element.dataset.placedId);
      if (!item) return;
      const size = getOrientedSize(item);
      const state = getPlacementState(item);
      element.style.left = `${item.x * scale}px`;
      element.style.top = `${item.y * scale}px`;
      element.style.width = `${size.length * scale}px`;
      element.style.height = `${size.width * scale}px`;
      element.classList.toggle("is-safe", state === "safe");
      element.classList.toggle("is-overlap", state === "overlap");
      element.classList.toggle("is-outside", state === "outside");
      element.classList.toggle("is-selected", item.id === selectedId);
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
        <button type="button" data-add-catalog="${item.id}" aria-label="Add ${escapeHtml(item.title)}">Add</button>
      </article>
    `).join("");
  }

  function addEquipment(catalogId, x = null, y = null) {
    const product = getCatalogItem(catalogId);
    if (!product) return;
    const offset = placed.length % 6;
    const item = {
      id: uid(),
      catalogId,
      x: x == null ? Math.max(0, roomLength / 2 - product.length / 2 + offset * 0.6) : x,
      y: y == null ? Math.max(0, roomWidth / 2 - product.width / 2 + offset * 0.6) : y,
      length: product.length,
      width: product.width,
      rotation: 0
    };
    item.x = Math.min(Math.max(0, item.x), Math.max(0, roomLength - item.length));
    item.y = Math.min(Math.max(0, item.y), Math.max(0, roomWidth - item.width));
    placed.push(item);
    selectedId = item.id;
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
  }

  function updateUsage() {
    const roomArea = roomLength * roomWidth;
    const occupied = placed.reduce((sum, item) => sum + item.length * item.width, 0);
    const percentage = roomArea ? Math.min(999, Math.round((occupied / roomArea) * 100)) : 0;
    $("#layout-usage-label").textContent = `${percentage}% occupied`;
  }

  function renderAll() {
    updateRoomDimensions();
    renderPlaced();
    renderInspector();
    if (viewMode === "3d") draw3D();
  }

  function setView(mode) {
    viewMode = mode;
    $$("[data-layout-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.layoutView === mode));
    const is3D = mode === "3d";
    room.hidden = is3D;
    canvas.hidden = !is3D;
    $("#layout-3d-tip").hidden = !is3D;
    $("#layout-view-kicker").textContent = is3D ? "Interactive 3D View" : "2D Floor Plan";
    $("#layout-help-text").textContent = is3D
      ? "Drag to orbit around the room. Scroll to move closer or farther away."
      : "Drag equipment to position it. Select an item to edit its exact footprint.";
    $(".layout-zoom-controls").hidden = is3D;
    $("#layout-empty-state").hidden = placed.length > 0 || is3D;
    if (is3D) requestAnimationFrame(draw3D);
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
    let px = x - centerX;
    let py = y - centerY;
    const cosY = Math.cos(camera.yaw);
    const sinY = Math.sin(camera.yaw);
    const rx = px * cosY - py * sinY;
    const ry = px * sinY + py * cosY;
    const cosP = Math.cos(camera.pitch);
    const sinP = Math.sin(camera.pitch);
    const rz = z * cosP - ry * sinP;
    const depth = z * sinP + ry * cosP;
    const unit = Math.min(width / Math.max(roomLength, roomWidth), height / Math.max(roomLength, roomWidth)) * 1.25 / camera.distance;
    return {
      x: width / 2 + rx * unit,
      y: height * 0.56 - rz * unit,
      depth,
      unit
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
    backdrop.addColorStop(0, "#141923");
    backdrop.addColorStop(0.68, "#0d1118");
    backdrop.addColorStop(1, "#090c11");
    ctx.fillStyle = backdrop;
    ctx.fillRect(0, 0, width, height);

    const floorCorners = [
      project3D(0, 0, 0, width, height),
      project3D(roomLength, 0, 0, width, height),
      project3D(roomLength, roomWidth, 0, width, height),
      project3D(0, roomWidth, 0, width, height)
    ];
    drawPolygon(floorCorners, "#222936", "#4ec6ef", 1.5);

    const wallHeight = 10;
    const backWall = [
      project3D(0, roomWidth, 0, width, height),
      project3D(roomLength, roomWidth, 0, width, height),
      project3D(roomLength, roomWidth, wallHeight, width, height),
      project3D(0, roomWidth, wallHeight, width, height)
    ];
    const sideWall = [
      project3D(0, 0, 0, width, height),
      project3D(0, roomWidth, 0, width, height),
      project3D(0, roomWidth, wallHeight, width, height),
      project3D(0, 0, wallHeight, width, height)
    ];
    drawPolygon(backWall, "rgba(35,42,53,.76)", "rgba(255,255,255,.12)");
    drawPolygon(sideWall, "rgba(24,30,40,.82)", "rgba(255,255,255,.1)");

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

    const sorted = placed
      .map((item) => ({ item, product: getCatalogItem(item.catalogId), point: project3D(item.x + item.length / 2, item.y + item.width / 2, 0, width, height) }))
      .sort((a, b) => b.point.depth - a.point.depth);

    sorted.forEach(({ item, product, point }) => {
      const state = getPlacementState(item);
      const image = loadImage(product.image);
      const visualWidth = Math.max(item.length, item.width) * point.unit * 1.05;
      const visualHeight = visualWidth * 0.86;
      const baseWidth = item.length * point.unit;
      const baseDepth = item.width * point.unit * Math.sin(camera.pitch);
      ctx.save();
      ctx.globalAlpha = 0.95;
      ctx.fillStyle = state === "outside" ? "rgba(224,65,59,.34)" : state === "overlap" ? "rgba(243,182,0,.25)" : "rgba(78,198,239,.16)";
      ctx.beginPath();
      ctx.ellipse(point.x, point.y + 3, Math.max(8, baseWidth / 2), Math.max(4, baseDepth / 2), 0, 0, Math.PI * 2);
      ctx.fill();
      if (image.complete && image.naturalWidth) {
        ctx.drawImage(image, point.x - visualWidth / 2, point.y - visualHeight, visualWidth, visualHeight);
      } else {
        ctx.fillStyle = "#343b48";
        ctx.fillRect(point.x - visualWidth / 2, point.y - visualHeight, visualWidth, visualHeight);
      }
      if (item.id === selectedId) {
        ctx.strokeStyle = "#4ec6ef";
        ctx.lineWidth = 2;
        ctx.strokeRect(point.x - visualWidth / 2, point.y - visualHeight, visualWidth, visualHeight);
      }
      ctx.restore();
    });

    ctx.fillStyle = "rgba(239,242,247,.82)";
    ctx.font = "600 12px Sora, sans-serif";
    ctx.fillText(`${roomLength} × ${roomWidth} ft`, 22, height - 22);
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
    placed.forEach((item) => {
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
    exportCtx.fillText(`cult equipment · ${roomLength} × ${roomWidth} ft · ${placed.length} items`, padding, 42);
    const link = document.createElement("a");
    link.download = "cult-equipment-gym-layout.png";
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  }

  function saveLayout() {
    try {
      localStorage.setItem(saveKey, JSON.stringify({ roomLength, roomWidth, placed }));
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
      placed = saved.placed.filter((item) => getCatalogItem(item.catalogId));
      areaInput.value = Math.round(roomLength * roomWidth);
      lengthInput.value = roomLength;
      widthInput.value = roomWidth;
      return true;
    } catch {
      return false;
    }
  }

  roomForm.addEventListener("submit", (event) => {
    event.preventDefault();
    roomLength = Math.max(10, Number(lengthInput.value) || 50);
    roomWidth = Math.max(10, Number(widthInput.value) || 40);
    areaInput.value = Math.round(roomLength * roomWidth);
    setupCard.classList.add("is-compact");
    editor.hidden = false;
    pushHistory();
    renderAll();
    editor.scrollIntoView({ behavior: "smooth", block: "start" });
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
    const addButton = event.target.closest("[data-add-catalog]");
    if (addButton) addEquipment(addButton.dataset.addCatalog);
  });
  catalogList.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-catalog-id]");
    if (!card) return;
    event.dataTransfer.setData("text/plain", card.dataset.catalogId);
    event.dataTransfer.effectAllowed = "copy";
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
      renderAll();
      return;
    }
    event.preventDefault();
    selectedId = element.dataset.placedId;
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
      camera = { yaw: -0.65, pitch: 0.72, distance: 1.05 };
      renderAll();
    }
    if (action === "save") saveLayout();
    if (action === "export") exportLayout();
    if (action === "clear" && (placed.length === 0 || window.confirm("Clear every machine from this layout?"))) {
      placed = [];
      selectedId = "";
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
    if (action === "rotate") item.rotation = (item.rotation + 90) % 360;
    if (action === "duplicate") {
      const copy = { ...item, id: uid(), x: item.x + 1, y: item.y + 1 };
      placed.push(copy);
      selectedId = copy.id;
    }
    if (action === "delete") {
      placed = placed.filter((placedItem) => placedItem.id !== item.id);
      selectedId = "";
    }
    pushHistory();
    renderAll();
  });

  canvas.addEventListener("pointerdown", (event) => {
    orbitState = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw: camera.yaw, pitch: camera.pitch };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!orbitState || orbitState.id !== event.pointerId) return;
    camera.yaw = orbitState.yaw + (event.clientX - orbitState.x) * 0.008;
    camera.pitch = Math.min(1.28, Math.max(0.25, orbitState.pitch + (event.clientY - orbitState.y) * 0.006));
    draw3D();
  });
  canvas.addEventListener("pointerup", () => { orbitState = null; });
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
  renderCatalog();
  if (loadSavedLayout()) {
    setupCard.classList.add("has-saved-layout");
  }
})();
