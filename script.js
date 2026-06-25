(function () {
  const form = document.querySelector("#lead-form");
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const heroVideo = document.querySelector(".hero-video");
  const heroSource = heroVideo?.querySelector("source");
  const switchChips = document.querySelectorAll(".switch-chip");
  const seriesCarousel = document.querySelector("[data-series-carousel]");
  const seriesCarouselTrack = document.querySelector("#series-carousel-track");
  const seriesCarouselLink = document.querySelector("#series-carousel-link");
  const revealTargets = document.querySelectorAll(".reveal");
  const ownerVideos = document.querySelectorAll(".owner-video video");
  const catalogFilterButtons = document.querySelectorAll("[data-catalog-filter]");
  const catalogCards = document.querySelectorAll("[data-catalog-category]");
  const catalogAddButtons = document.querySelectorAll(".catalog-add");
  const quoteTray = document.querySelector("#quote-tray");
  const quoteCount = document.querySelector("#quote-count");
  const quoteDrawer = document.querySelector("#quote-drawer");
  const quoteList = document.querySelector("#quote-list");
  const quoteReviewButton = document.querySelector("#quote-review");
  const quoteCloseButton = document.querySelector("#quote-close");
  const quoteScrollForm = document.querySelector("#quote-scroll-form");
  const selectedProductsInput = document.querySelector("#selected-products");
  const whatsappFloat = document.querySelector(".whatsapp-float");
  const posterCache = new Map();
  const quoteItems = [];
  const quoteStorageKey = "cult-equipment-quote-items";
  const whatsappNumber = "917625030537";
  const defaultWhatsappMessage = "Hey, I have visited the website, Need more info!";
  const params = new URLSearchParams(window.location.search);
  const trackedParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "campaign_id",
    "adgroup_id",
    "gclid"
  ];

  function setHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function closeNavMenu() {
    header?.classList.remove("is-nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  function toggleNavMenu() {
    if (!header || !navToggle) return;
    const isOpen = header.classList.toggle("is-nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function playVisibleOwnerVideos() {
    ownerVideos.forEach((video) => {
      const rect = video.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      if (visible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }

  function generatePosterFromVideo(src) {
    if (!src) return Promise.resolve("");
    if (posterCache.has(src)) return posterCache.get(src);

    const posterPromise = new Promise((resolve) => {
      const preview = document.createElement("video");
      let settled = false;

      function finish(value) {
        if (settled) return;
        settled = true;
        preview.pause();
        preview.removeAttribute("src");
        preview.load();
        resolve(value || "");
      }

      function captureFrame() {
        try {
          const canvas = document.createElement("canvas");
          const width = preview.videoWidth || 1280;
          const height = preview.videoHeight || 720;
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext("2d");
          if (!context) {
            finish("");
            return;
          }

          context.drawImage(preview, 0, 0, width, height);
          finish(canvas.toDataURL("image/jpeg", 0.82));
        } catch {
          finish("");
        }
      }

      preview.muted = true;
      preview.playsInline = true;
      preview.preload = "auto";
      preview.src = src;

      preview.addEventListener(
        "loadeddata",
        () => {
          const frameTime = Number.isFinite(preview.duration) && preview.duration > 0.12 ? 0.12 : 0;
          if (frameTime > 0) {
            preview.addEventListener(
              "seeked",
              () => {
                captureFrame();
              },
              { once: true }
            );

            try {
              preview.currentTime = frameTime;
            } catch {
              captureFrame();
            }
          } else {
            captureFrame();
          }
        },
        { once: true }
      );

      preview.addEventListener(
        "error",
        () => {
          finish("");
        },
        { once: true }
      );
    });

    posterCache.set(src, posterPromise);
    return posterPromise;
  }

  async function ensurePosterForButton(button) {
    if (!button) return "";
    if (button.dataset.heroVideoPoster) return button.dataset.heroVideoPoster;
    const poster = await generatePosterFromVideo(button.dataset.heroVideoTarget);
    if (poster) button.dataset.heroVideoPoster = poster;
    return poster;
  }

  async function hydrateHeroPosters() {
    const posterResults = await Promise.all(
      Array.from(switchChips).map(async (chip) => {
        const poster = await ensurePosterForButton(chip);
        return { chip, poster };
      })
    );

    const activePoster = posterResults.find(({ chip }) => chip.classList.contains("is-active"))?.poster;
    if (heroVideo && activePoster) heroVideo.poster = activePoster;
  }

  const seriesSlides = [
    {
      title: "Cardio Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Commercial Treadmill", image: "assets/catalog-items/cardio-cs-xg-v12.png" },
        { name: "Recumbent Bike", image: "assets/catalog-items/cardio-recumbent-bike.png", center: true },
        { name: "CS-XZ8003C", image: "assets/catalog-items/cardio-cs-xz8003c.png" }
      ]
    },
    {
      title: "Strength Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Fusion K606 Shoulder Press", image: "assets/catalog-items/fusion/fusion-k606-shoulder-press.png" },
        { name: "Functional Trainer", image: "assets/catalog-items/strength-functional-trainer-cs-h005a.png", center: true },
        { name: "Fusion Chest Press", image: "assets/catalog-items/fusion/fusion-k608-chest-press.png" }
      ]
    },
    {
      title: "Fusion Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Fusion K608 Chest Press", image: "assets/catalog-items/fusion/fusion-k608-chest-press.png" },
        { name: "Fusion K635 High Pulley", image: "assets/catalog-items/fusion/fusion-k635-high-pulley.png", center: true },
        { name: "Fusion K602 Seated Leg Extension", image: "assets/catalog-items/fusion/fusion-k602-seated-leg-extension.png" }
      ]
    },
    {
      title: "Flow Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Dip Chin Assist", image: "assets/catalog-items/flow-assisted-dip-chin.png" },
        { name: "Shoulder Press", image: "assets/catalog-items/flow-shoulder-press.png", center: true },
        { name: "Seated Row", image: "assets/catalog-items/flow-seated-row.png" }
      ]
    },
    {
      title: "Flux Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Chest Press", image: "assets/catalog-items/flux-chest-press.png" },
        { name: "Dip Chin Assist", image: "assets/catalog-items/flux-dip-chin-assist.png", center: true },
        { name: "Long Pull", image: "assets/catalog-items/flux-longpull.png" }
      ]
    },
    {
      title: "Fuel Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Chest Press", image: "assets/catalog-items/fuel-chest-press.png" },
        { name: "Shoulder Press", image: "assets/catalog-items/fuel-shoulder-press.png", center: true, imageClass: "image-shift-left" },
        { name: "Tricep Press", image: "assets/catalog-items/fuel-tricep-press.png", imageClass: "image-fit-right" }
      ]
    },
    {
      title: "Force Series",
      link: "#lead-form-wrap",
      products: [
        { name: "Chest Press", image: "assets/catalog-items/force-chest-press.png" },
        { name: "45 Degree Leg Press", image: "assets/catalog-items/force-45-degree-leg-press.png", center: true, imageClass: "image-shift-left" },
        { name: "Row", image: "assets/catalog-items/force-row.png", imageClass: "image-fit-right" }
      ]
    }
  ];

  function renderSeriesCarousel() {
    if (!seriesCarousel || !seriesCarouselTrack) return;

    const marqueeSlides = [...seriesSlides, ...seriesSlides];
    seriesCarouselTrack.innerHTML = marqueeSlides
      .map(
        (slide, index) => `
          <article class="series-carousel-slide" data-series-slide="${index}">
            <div class="series-carousel-label">
              <p>Collections</p>
              <h2>${slide.title}</h2>
              <span aria-hidden="true"></span>
            </div>
            <div class="series-carousel-products">
              ${slide.products
                .map(
                  (product) => `
                    <div class="series-product${product.center ? " media-center" : ""}">
                      <div class="series-product-image">
                        <img src="${product.image}" alt="${product.name}" loading="eager" class="${product.imageClass || ""}" />
                      </div>
                      <strong>${product.name}</strong>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
        `
      )
      .join("");

    if (seriesCarouselLink) {
      seriesCarouselLink.href = "#lead-form-wrap";
    }
  }

  async function switchHeroVideo(button) {
    if (!button || !heroVideo || !heroSource) return;
    const src = button.dataset.heroVideoTarget;
    const poster = await ensurePosterForButton(button);
    if (!src || heroSource.getAttribute("src") === src) return;

    switchChips.forEach((chip) => chip.classList.toggle("is-active", chip === button));
    heroVideo.pause();
    heroSource.src = src;
    heroVideo.poster = poster || "";
    heroVideo.load();
    heroVideo.play().catch(() => {});
  }

  function revealOnScroll() {
    revealTargets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add("is-visible");
      }
    });
  }

  function normalizeIndianPhone(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (digits.length === 10) return `+91${digits}`;
    if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
    if (String(value || "").trim().startsWith("+91")) return String(value).replace(/\s+/g, "");
    return String(value || "").trim();
  }

  function isValidIndianPhone(value) {
    return /^\+91[6-9]\d{9}$/.test(normalizeIndianPhone(value));
  }

  function fillTrackingFields() {
    const currentPage = document.querySelector("#current-page");
    const currentDate = document.querySelector("#current-date-hidden");
    if (currentPage) currentPage.value = window.location.href;
    if (currentDate) currentDate.value = new Date().toISOString().slice(0, 10);

    trackedParams.forEach((key) => {
      const input = document.getElementById(key);
      if (input) input.value = params.get(key) || "";
    });
  }

  function propagateUtms() {
    const query = window.location.search;
    if (!query) return;
    document.querySelectorAll("[data-propagate-utm]").forEach((link) => {
      try {
        const url = new URL(link.href);
        params.forEach((value, key) => url.searchParams.set(key, value));
        link.href = url.toString();
      } catch {
        return;
      }
    });
  }

  function getPayload(formElement) {
    const data = new FormData(formElement);
    const payload = {};
    data.forEach((value, key) => {
      payload[key] = value;
    });
    payload.Phone = normalizeIndianPhone(payload.Phone);
    payload.form_name = formElement.getAttribute("data-name") || formElement.name || "cultsport Commercial Lead";
    payload.page_title = document.title;
    return payload;
  }

  function syncSelectedProductsField() {
    if (!selectedProductsInput) return;
    selectedProductsInput.value = quoteItems
      .map((item) => `${item.name} x${item.qty}${item.meta ? ` (${item.meta})` : ""}`)
      .join(" | ");
  }

  function buildWhatsappMessage() {
    if (!quoteItems.length) return defaultWhatsappMessage;

    const lines = quoteItems.map((item) => `- ${item.name} x${item.qty}`);
    return [
      "Please submit the form to send your selected equipment quote.",
      "",
      "Selected equipment:",
      ...lines
    ].join("\n");
  }

  function buildSubmittedLeadWhatsappMessage(payload, selectedItems) {
    const lines = [
      "Hey, I have submitted the commercial equipment form.",
      "",
      `Name: ${payload.name || "-"}`,
      `Phone: ${payload.Phone || "-"}`,
      `City: ${payload.City || "-"}`,
      `Timeline: ${payload["Gym-Opening-Timeline"] || "-"}`,
      `Gym Setup Budget: ${payload["Gym-Opening-Budget"] || "-"}`,
      `Requirement: ${payload["Lead-Intent"] || "-"}`
    ];

    if (selectedItems.length) {
      lines.push("", "Selected equipment:");
      selectedItems.forEach((item) => {
        lines.push(`- ${item.name} x${item.qty}`);
      });
    }

    return lines.join("\n");
  }

  function updateWhatsappLink() {
    if (!whatsappFloat) return;
    if (quoteItems.length) {
      whatsappFloat.href = "#lead-form-wrap";
      return;
    }
    whatsappFloat.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsappMessage())}`;
  }

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

  function clearQuoteItems() {
    quoteItems.splice(0, quoteItems.length);
    try {
      window.localStorage.removeItem(quoteStorageKey);
    } catch {
      return;
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
      syncSelectedProductsField();
      saveQuoteItems();
      updateWhatsappLink();
      return;
    }

    if (total === 0) {
      quoteList.innerHTML = `<p class="quote-empty">No products added yet.</p>`;
      syncSelectedProductsField();
      saveQuoteItems();
      updateWhatsappLink();
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

    syncSelectedProductsField();
    saveQuoteItems();
    updateWhatsappLink();
  }

  function setCatalogFilter(filter) {
    catalogFilterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.catalogFilter === filter);
    });

    catalogCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.catalogCategory === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  }

  function addQuoteItem(name, meta) {
    const existing = quoteItems.find((item) => item.name === name);
    if (existing) {
      existing.qty += 1;
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

  async function postLead(payload, endpoint) {
    const encoded = new URLSearchParams(payload);
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      body: encoded
    });
  }

  function setStatus(message, type) {
    const status = form?.querySelector(".form-status");
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${type || ""}`.trim();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const phone = form.querySelector("[name='Phone']");
    const submit = form.querySelector("button[type='submit']");

    if (!form.checkValidity()) {
      setStatus("Please complete all required fields.", "error");
      form.reportValidity();
      return;
    }

    if (!isValidIndianPhone(phone.value)) {
      setStatus("Please enter a valid Indian mobile number starting with +91.", "error");
      phone.focus();
      return;
    }

    phone.value = normalizeIndianPhone(phone.value);
    syncSelectedProductsField();
    const payload = getPayload(form);
    const quoteSnapshot = quoteItems.map((item) => ({
      name: item.name,
      meta: item.meta,
      qty: item.qty
    }));
    const endpoint = window.CULTSPORT_LEAD_ENDPOINT || form.dataset.endpoint || "";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildSubmittedLeadWhatsappMessage(payload, quoteSnapshot))}`;

    submit.disabled = true;
    submit.textContent = "Sending...";
    setStatus("Sending your request to the team.", "");

    try {
      if (endpoint) {
        await postLead(payload, endpoint);
      } else {
        console.info("Lead endpoint missing. Payload preview:", payload);
      }

      window.dataLayer?.push({ event: "lead_form_submit", leadIntent: payload["Lead-Intent"], budget: payload["Gym-Opening-Budget"] });
      if (typeof window.gtag_report_conversion === "function") window.gtag_report_conversion();

      if (quoteSnapshot.length) {
        try {
          window.sessionStorage.setItem("cult-equipment-pending-whatsapp", whatsappUrl);
        } catch {
          window.location.href = whatsappUrl;
          return;
        }
      }

      form.reset();
      clearQuoteItems();
      updateQuoteUi();
      closeQuoteDrawer();
      fillTrackingFields();
      window.location.href = "thank-you.html";
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again in a moment.", "error");
    } finally {
      submit.disabled = false;
      submit.textContent = "Submit";
    }
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("scroll", playVisibleOwnerVideos, { passive: true });
  window.addEventListener("scroll", revealOnScroll, { passive: true });
  navToggle?.addEventListener("click", toggleNavMenu);
  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavMenu);
  });
  document.addEventListener("click", (event) => {
    if (!header?.contains(event.target)) closeNavMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeNavMenu();
  });
  form?.addEventListener("submit", handleSubmit);
  switchChips.forEach((chip) => {
    chip.addEventListener("click", () => switchHeroVideo(chip));
  });
  catalogFilterButtons.forEach((button) => {
    button.addEventListener("click", () => setCatalogFilter(button.dataset.catalogFilter || "all"));
  });
  catalogAddButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addQuoteItem(button.dataset.productName || "Equipment", button.dataset.productMeta || "");
      openQuoteDrawer();
    });
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
  quoteScrollForm?.addEventListener("click", () => {
    closeQuoteDrawer();
  });
  loadQuoteItems();
  renderSeriesCarousel();
  hydrateHeroPosters();
  fillTrackingFields();
  propagateUtms();
  setCatalogFilter("all");
  updateQuoteUi();
  setHeaderState();
  revealOnScroll();
  playVisibleOwnerVideos();
  heroVideo?.play().catch(() => {});
})();
