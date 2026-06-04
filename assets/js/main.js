const scenarioContent = {
  baseline: {
    heading: "Baseline Scenario Placeholder",
    copy: "Placeholder: The baseline scenario will be developed after evidence is collected and checked."
  },
  upside: {
    heading: "Upside Scenario Placeholder",
    copy: "Placeholder: The upside scenario will describe a more favourable pathway after research has been verified."
  },
  downside: {
    heading: "Downside Scenario Placeholder",
    copy: "Placeholder: The downside scenario will describe a more constrained pathway after research has been verified."
  }
};

const stackLayerContent = {
  "cheap-tokens": {
    heading: "Cheap Tokens Placeholder",
    copy: "Placeholder: This layer will later explain why lower inference costs may matter for everyday AI use."
  },
  "good-enough-models": {
    heading: "Good-enough Models Placeholder",
    copy: "Placeholder: This layer will later explain how capable everyday models may affect adoption and task design."
  },
  "local-compute": {
    heading: "Local Compute Placeholder",
    copy: "Placeholder: This layer will later examine the role of lower-cost compute located closer to Australian users and institutions."
  },
  "local-data-processing": {
    heading: "Local Data Processing Placeholder",
    copy: "Placeholder: This layer will later consider trust, privacy, latency, and compliance questions around local data handling."
  },
  "energy-cooling": {
    heading: "Energy and Cooling Infrastructure Placeholder",
    copy: "Placeholder: This layer will later connect AI adoption to verified infrastructure constraints and opportunities."
  },
  "natural-language-agents": {
    heading: "Natural-language Agents Placeholder",
    copy: "Placeholder: This layer will later explain how natural-language interfaces may change access to digital work."
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
