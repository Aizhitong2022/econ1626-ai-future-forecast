const scenarioContent = {
  baseline: {
    heading: "Patchy Abundance",
    copy: "Tokens continue to get cheaper and agent tools become easier to use. Students, freelancers, software developers and SMEs adopt AI for micro-automation, but data governance, energy costs, workflow redesign and verification skills lag behind model capability."
  },
  upside: {
    heading: "Trusted Clean AI Stack",
    copy: "Australia expands local AI infrastructure while keeping energy costs, water use and data security under control. Local processing reduces adoption friction for regulated sectors, and SMEs gain better AI literacy support."
  },
  downside: {
    heading: "Bottlenecked Abundance",
    copy: "Listed token prices fall, but real agent costs rise because complex workflows consume many input, output and reasoning tokens. Energy constraints, data centre resistance and platform concentration limit broad access."
  }
};

const stackLayerContent = {
  "cheap-tokens": {
    heading: "Cheap Tokens",
    copy: "Lower inference prices reduce marginal experimentation cost, making it easier for ordinary users to test small AI tasks repeatedly."
  },
  "good-enough-models": {
    heading: "Good-enough Models",
    copy: "Everyday models do not need to be the strongest frontier systems; they need to be reliable enough and cheap enough for common work."
  },
  "local-compute": {
    heading: "Local Compute",
    copy: "Lower-cost local compute can support prototyping, privacy-sensitive workflows and small-team experimentation alongside cloud AI."
  },
  "local-data-processing": {
    heading: "Local Data Processing",
    copy: "Keeping sensitive data within trusted Australian processing arrangements can reduce adoption friction in regulated sectors."
  },
  "energy-cooling": {
    heading: "Energy and Cooling Infrastructure",
    copy: "AI abundance depends on electricity, cooling, water, storage and grid connection, not software pricing alone."
  },
  "natural-language-agents": {
    heading: "Natural-language Agents",
    copy: "Agent interfaces lower the command barrier by letting users delegate tasks in plain language while still requiring verification."
  }
};

const timelineDefaults = {
  inferenceAffordability: 65,
  dataTrust: 55,
  energyReadiness: 50,
  agentUsability: 60
};

const timelinePresets = {
  patchy: {
    inferenceAffordability: 50,
    dataTrust: 35,
    energyReadiness: 30,
    agentUsability: 35
  },
  trusted: {
    inferenceAffordability: 78,
    dataTrust: 76,
    energyReadiness: 75,
    agentUsability: 74
  },
  bottlenecked: {
    inferenceAffordability: 24,
    dataTrust: 12,
    energyReadiness: 10,
    agentUsability: 8
  }
};

const timelineLabels = {
  inferenceAffordability: "inference affordability",
  dataTrust: "data trust",
  energyReadiness: "energy readiness",
  agentUsability: "agent usability"
};

function setupScenarioSwitcher() {
  const buttons = document.querySelectorAll("[data-scenario]");
  const heading = document.querySelector("#scenario-card-heading");
  const copy = document.querySelector("#scenario-card-copy");
  const panel = document.querySelector(".scenario-card");

  if (!buttons.length || !heading || !copy) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const scenarioKey = button.dataset.scenario;
      const selectedScenario = scenarioContent[scenarioKey];

      if (!selectedScenario) {
        return;
      }

      buttons.forEach((currentButton) => {
        const isSelected = currentButton === button;
        currentButton.classList.toggle("is-active", isSelected);
        currentButton.setAttribute("aria-pressed", String(isSelected));
      });

      panel?.classList.add("is-changing");

      window.setTimeout(() => {
        heading.textContent = selectedScenario.heading;
        copy.textContent = selectedScenario.copy;
        panel?.classList.remove("is-changing");
      }, 120);
    });
  });
}

function setupStackLayerInteraction() {
  const buttons = document.querySelectorAll("[data-stack-layer]");
  const heading = document.querySelector("#stack-panel-heading");
  const copy = document.querySelector("#stack-panel-copy");
  const panel = document.querySelector(".stack-panel");

  if (!buttons.length || !heading || !copy) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const layerKey = button.dataset.stackLayer;
      const selectedLayer = stackLayerContent[layerKey];

      if (!selectedLayer) {
        return;
      }

      buttons.forEach((currentButton) => {
        const isSelected = currentButton === button;
        currentButton.classList.toggle("is-active", isSelected);
        currentButton.setAttribute("aria-pressed", String(isSelected));
      });

      panel?.classList.add("is-changing");

      window.setTimeout(() => {
        heading.textContent = selectedLayer.heading;
        copy.textContent = selectedLayer.copy;
        panel?.classList.remove("is-changing");
      }, 120);
    });
  });
}

function setupForecastTimeline() {
  const inputs = Array.from(document.querySelectorAll("[data-timeline-input]"));
  const path = document.querySelector("#custom-timeline-path");
  const pointsGroup = document.querySelector("#custom-timeline-points");
  const interpretation = document.querySelector("#timeline-interpretation-text");
  const customValuesText = document.querySelector("#timeline-custom-values");
  const presetButtons = Array.from(document.querySelectorAll("[data-timeline-preset]"));

  if (!inputs.length || !path || !pointsGroup || !interpretation) {
    return;
  }

  const chart = {
    left: 64,
    right: 612,
    top: 36,
    bottom: 288
  };
  const years = [2026, 2027, 2028, 2029, 2030];

  function clamp(value) {
    return Math.min(100, Math.max(0, value));
  }

  function pointFor(value, index) {
    const xStep = (chart.right - chart.left) / (years.length - 1);
    const x = chart.left + xStep * index;
    const y = chart.bottom - (clamp(value) / 100) * (chart.bottom - chart.top);

    return { x, y };
  }

  function valuesToPath(values) {
    return values
      .map((value, index) => {
        const point = pointFor(value, index);
        const command = index === 0 ? "M" : "L";
        return `${command}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
      })
      .join(" ");
  }

  function readSettings() {
    return inputs.reduce((settings, input) => {
      settings[input.dataset.timelineInput] = Number(input.value);
      return settings;
    }, { ...timelineDefaults });
  }

  function scoreSettings(settings) {
    return (
      0.3 * settings.inferenceAffordability +
      0.25 * settings.dataTrust +
      0.25 * settings.energyReadiness +
      0.2 * settings.agentUsability
    );
  }

  function buildCustomValues(settings) {
    const score = scoreSettings(settings);

    return [
      18,
      22 + score * 0.15,
      26 + score * 0.35,
      30 + score * 0.52,
      34 + score * 0.66
    ].map((value) => Math.round(clamp(value)));
  }

  function updateOutputs(settings) {
    inputs.forEach((input) => {
      const output = document.querySelector(`#${input.id}-value`);

      if (output) {
        output.textContent = String(settings[input.dataset.timelineInput]);
      }
    });
  }

  function updatePoints(values) {
    pointsGroup.replaceChildren();

    values.forEach((value, index) => {
      const point = pointFor(value, index);
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", point.x.toFixed(1));
      circle.setAttribute("cy", point.y.toFixed(1));
      circle.setAttribute("r", "4.5");
      circle.setAttribute("aria-label", `${years[index]} custom index ${value}`);
      pointsGroup.appendChild(circle);
    });
  }

  function updateInterpretation(settings, values) {
    const weakestKey = Object.keys(settings).reduce((weakest, key) => {
      return settings[key] < settings[weakest] ? key : weakest;
    }, "inferenceAffordability");
    const value2030 = values[values.length - 1];
    const pathTone = value2030 >= 70 ? "coordinated" : "patchy";

    interpretation.textContent = `At these settings, AI integration reaches approximately ${value2030} by 2030. The path is strongest when cheap inference is matched by local data trust, energy readiness and usable agents; with ${timelineLabels[weakestKey]} as the weakest setting, adoption remains ${pathTone} rather than automatic.`;
  }

  function setActivePreset(activePreset) {
    presetButtons.forEach((button) => {
      const isActive = button.dataset.timelinePreset === activePreset;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateTimeline(activePreset = "") {
    const settings = readSettings();
    const values = buildCustomValues(settings);

    path.setAttribute("d", valuesToPath(values));
    updatePoints(values);
    if (customValuesText) {
      customValuesText.textContent = `Custom path: ${values.join(", ")}.`;
    }
    updateOutputs(settings);
    updateInterpretation(settings, values);
    setActivePreset(activePreset);
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => updateTimeline());
  });

  presetButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      const preset = timelinePresets[button.dataset.timelinePreset];

      if (!preset) {
        return;
      }

      inputs.forEach((input) => {
        const value = preset[input.dataset.timelineInput];

        if (typeof value === "number") {
          input.value = String(value);
        }
      });

      updateTimeline(button.dataset.timelinePreset);
    });
  });

  updateTimeline();
}

function setupSideToc() {
  const tocLinks = document.querySelectorAll(".side-toc a");

  if (!tocLinks.length) {
    return;
  }

  const sections = Array.from(tocLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  function setActiveLink(sectionId) {
    tocLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
      link.removeAttribute("aria-current");
      }
    });
  }

  let ticking = false;

  function updateActiveLink() {
    const currentSection = sections.reduce((activeSection, section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 170) {
        return section;
      }

      return activeSection;
    }, sections[0]);

    setActiveLink(currentSection.id);
    ticking = false;
  }

  function requestActiveLinkUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveLink);
      ticking = true;
    }
  }

  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("href").slice(1);
      setActiveLink(sectionId);
      window.setTimeout(requestActiveLinkUpdate, 220);
    });
  });

  window.addEventListener("scroll", requestActiveLinkUpdate, { passive: true });
  window.addEventListener("resize", requestActiveLinkUpdate);
  requestActiveLinkUpdate();
}

document.addEventListener("DOMContentLoaded", () => {
  setupScenarioSwitcher();
  setupForecastTimeline();
  setupStackLayerInteraction();
  setupSideToc();
});
