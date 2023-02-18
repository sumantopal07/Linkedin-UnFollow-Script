(() => {
  let count = 0;
  function getAllButtons() {
    return document.querySelectorAll('button.is-following') || [];
  }
  async function unfollowAll() {
    const buttons = getAllButtons();

    for (let button of buttons) {
      count = count + 1;

      const name = button.parentElement.querySelector(
        '.follows-recommendation-card__name',
      ).innerText;
      console.log(`Unfollow #${count}:`, name);

      window.scrollTo(0, button.offsetTop - 260);
      button.click();

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  async function run() {
    await unfollowAll(); // To click all button in current screen
    window.scrollTo(0, document.body.scrollHeight);    // scroll to next page
    await new Promise((resolve) => setTimeout(resolve, 4000));  // wait for 4 seconds for next page to load, you can increase or decrease the value based on your internet speed
    const buttons = getAllButtons();
    if (buttons.length) run();
  }
  run();
})();
