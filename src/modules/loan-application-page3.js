const nextBtn = document.querySelector("button#next");

nextBtn.addEventListener("click", () => {
  const form = document.querySelector("form");
  form.replaceChildren();
  loadPage3(form);

  const circle3 = document.querySelector("#circle-3");
  circle3.id = "";
});

function loadPage3(form) {
  // title: loan details
  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Loan Details";
  p.textContent = `Choose the type of loan you need and specify the amount to support your education`;
  formHeader.append(h1, p);

  // loan-type entry
  const formEntry00 = document.createElement("div");
  formEntry00.classList.add("form-entries");

  const loanType = document.createElement("label");
  loanType.setAttribute("for", "loan-type");
  loanType.textContent = "Loan Type";

  const selectLoanType = document.createElement("select");
  selectLoanType.id = "loan-type";
  selectLoanType.setAttribute("name", "loan-type");

  const defaultLoan = document.createElement("option");
  defaultLoan.value = "default";
  defaultLoan.textContent = "Default";
  const standardLoan = document.createElement("option");
  standardLoan.value = "standard";
  standardLoan.textContent = "Standard";
  const expressLoan = document.createElement("option");
  expressLoan.value = "express";
  expressLoan.textContent = "Express";

  selectLoanType.append(defaultLoan, standardLoan, expressLoan);
  formEntry00.append(loanType, selectLoanType);

  // loan-amount entry
  const formEntry01 = document.createElement("div");
  formEntry01.classList.add("form-entries");

  const loanAmtLabel = document.createElement("label");
  loanAmtLabel.setAttribute("for", "loan-amt");
  loanAmtLabel.textContent = "Requested Loan Amount (₦)";

  const loanAmtInput = document.createElement("input");
  loanAmtInput.type = "number";
  loanAmtInput.name = "loan-amt";
  loanAmtInput.id = "loan-amt";
  loanAmtInput.placeholder = "Enter requested loan amount";

  formEntry01.append(loanAmtLabel, loanAmtInput);

  // loan-purpose entry
  const formEntry02 = document.createElement("div");
  formEntry02.classList.add("form-entries");

  const loanPurpose = document.createElement("label");
  loanPurpose.setAttribute("for", "loan-purpose");
  loanPurpose.textContent = "Loan Purpose";

  const loanPurposeEntry = document.createElement("textarea");
  loanPurposeEntry.name = "loan-purpose";
  loanPurposeEntry.id = "loan-purpose";
  loanPurposeEntry.cols = "30";
  loanPurposeEntry.rows = "10";

  formEntry02.append(loanPurpose, loanPurposeEntry);

  const applicationBtns = document.createElement("div");
  applicationBtns.classList.add("application-btns");

  const backBtn = document.createElement("button");
  backBtn.id = "back";
  backBtn.type = "button";
  backBtn.textContent = "< Back";

  const submitBtn = document.createElement("button");
  submitBtn.id = "next";
  submitBtn.type = "button";
  submitBtn.textContent = "Submit Application";

  applicationBtns.append(backBtn, submitBtn);

  // adding all elements to the page
  form.append(
    formHeader,
    formEntry00,
    formEntry01,
    formEntry02,
    applicationBtns
  );
}
