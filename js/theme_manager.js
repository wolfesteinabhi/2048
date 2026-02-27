function ThemeManager() {
  this.storageKey = "theme";
  this.darkModeClass = "dark-mode";
  this.toggleButton = document.querySelector(".theme-toggle-button");

  this.applyInitialTheme();
  this.bindEvents();
}

ThemeManager.prototype.getSavedTheme = function () {
  try {
    return window.localStorage.getItem(this.storageKey);
  } catch (error) {
    return null;
  }
};

ThemeManager.prototype.saveTheme = function (theme) {
  try {
    window.localStorage.setItem(this.storageKey, theme);
  } catch (error) {
    // Ignore write errors (private mode, disabled storage, etc.)
  }
};

ThemeManager.prototype.isDarkModeEnabled = function () {
  return document.body.classList.contains(this.darkModeClass);
};

ThemeManager.prototype.applyTheme = function (theme) {
  var darkModeEnabled = theme === "dark";
  document.body.classList.toggle(this.darkModeClass, darkModeEnabled);
  this.updateToggleText();
};

ThemeManager.prototype.applyInitialTheme = function () {
  var savedTheme = this.getSavedTheme();
  var theme = savedTheme || "light";
  this.applyTheme(theme);
};

ThemeManager.prototype.updateToggleText = function () {
  if (!this.toggleButton) return;

  this.toggleButton.textContent = this.isDarkModeEnabled()
    ? "Dark mode: On"
    : "Dark mode: Off";
};

ThemeManager.prototype.toggleTheme = function (event) {
  if (event) {
    event.preventDefault();
  }

  var nextTheme = this.isDarkModeEnabled() ? "light" : "dark";
  this.applyTheme(nextTheme);
  this.saveTheme(nextTheme);
};

ThemeManager.prototype.bindEvents = function () {
  if (!this.toggleButton) return;

  this.toggleButton.addEventListener("click", this.toggleTheme.bind(this));
  this.toggleButton.addEventListener("touchend", this.toggleTheme.bind(this));
};
