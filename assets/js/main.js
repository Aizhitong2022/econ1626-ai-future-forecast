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

document.addEventListener("DOMContentLoaded", () => {
  setupScenarioSwitcher();
});
