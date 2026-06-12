(function () {
  const form = document.querySelector("#lead-form");
  const header = document.querySelector("[data-header]");
  const heroVideo = document.querySelector(".hero-video");
  const heroSource = heroVideo?.querySelector("source");
  const switchChips = document.querySelectorAll(".switch-chip");
  const revealTargets = document.querySelectorAll(".reveal");
  const ownerVideos = document.querySelectorAll(".owner-video video");
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

  function switchHeroVideo(button) {
    if (!button || !heroVideo || !heroSource) return;
    const src = button.dataset.heroVideoTarget;
    const poster = button.dataset.heroVideoPoster || "";
    if (!src || heroSource.src === src) return;

    switchChips.forEach((chip) => chip.classList.toggle("is-active", chip === button));
    heroVideo.pause();
    heroSource.src = src;
    heroVideo.poster = poster;
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
    const payload = getPayload(form);
    const endpoint = window.CULTSPORT_LEAD_ENDPOINT || form.dataset.endpoint || "";

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

      form.reset();
      fillTrackingFields();
      setStatus(endpoint ? "Thanks. The team will call you shortly." : "Thanks. Form is ready; add the Zapier webhook URL before going live.", "success");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again in a moment.", "error");
    } finally {
      submit.disabled = false;
      submit.textContent = "Get a call back";
    }
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("scroll", playVisibleOwnerVideos, { passive: true });
  window.addEventListener("scroll", revealOnScroll, { passive: true });
  form?.addEventListener("submit", handleSubmit);
  switchChips.forEach((chip) => {
    chip.addEventListener("click", () => switchHeroVideo(chip));
  });
  fillTrackingFields();
  propagateUtms();
  setHeaderState();
  revealOnScroll();
  playVisibleOwnerVideos();
  heroVideo?.play().catch(() => {});
})();
