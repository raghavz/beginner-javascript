// JS part starts at 3:30.

// Grab all the elements which we will work with.
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// To hide all panels & then show only the clicked one.
function handleTabClick(event) {
  // Hide all the other tabs, when someone clicks on a tab.
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // Mark all the other tabs as unselected.
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false); // tab.ariaSelected won't work!
  });

  // Mark the clicked tab as selected.
  event.currentTarget.setAttribute('aria-selected', true);

  // Find the tab panel of the clicked tab and show it.
  const tabButtonId = event.currentTarget.id;

  /* METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${tabButtonId}"]`);
  tabPanel.hidden = false;
  */

  /* METHOD 2 - Find the tabPanel in the collection of tabPanels.
   */
  const tabPanelsArray = Array.from(tabPanels);
  const tabPanel = tabPanelsArray.find(
    // This implicitly returns a boolean.
    panel => panel.getAttribute('aria-labelledby') === tabButtonId
  );
  tabPanel.hidden = false;
}

// Listen to clicks on the tab buttons.
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
