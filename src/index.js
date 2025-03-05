document.addEventListener("DOMContentLoaded", () => {
  const dashboardIcon = document.querySelector('#dashboard > a > img');
  if (dashboardIcon) dashboardIcon.src = "../../assets/icons/white-dashboard.svg";

  const loanApplicationIcon = document.querySelector('#loan-application > a > img');
  if (loanApplicationIcon) loanApplicationIcon.src = "../../assets/icons/white-apply-for-loan.svg";

  const loanStatusIcon = document.querySelector('#loan-status > a > img');
  if (loanStatusIcon) loanStatusIcon.src = "../../assets/icons/white-loan-status.svg";

  const settingsIcon = document.querySelector('#settings > a > img');
  if (settingsIcon) settingsIcon.src = "../../assets/icons/white-settings.svg";
})
/**
 * on page load, swap icon to its white variant
 */