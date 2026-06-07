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

function setupScenarioSwitcher() {
  const buttons = document.querySelectorAll("[data-scenario]");
  const heading = document.querySelector("#scenario-card-heading");
  const copy = document.querySelector("#scenario-card-copy");

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

      heading.textContent = selectedScenario.heading;
      copy.textContent = selectedScenario.copy;
    });
  });
}

function setupStackLayerInteraction() {
  const buttons = document.querySelectorAll("[data-stack-layer]");
  const heading = document.querySelector("#stack-panel-heading");
  const copy = document.querySelector("#stack-panel-copy");

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

      heading.textContent = selectedLayer.heading;
      copy.textContent = selectedLayer.copy;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupScenarioSwitcher();
  setupStackLayerInteraction();
});
