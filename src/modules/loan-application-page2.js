export function loadPage2(form) {
  // title: academic details
  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Academic Details";
  p.textContent =
    "Provide details about your school and course to confirm your eligibility for the loan.";

  // institution name
  const formEntry00 = document.createElement("div");
  formEntry00.classList.add("form-entries");

  const institutionLabel = document.createElement("label");
  institutionLabel.setAttribute("for", "institution");
  institutionLabel.textContent = "Institution Name";

  const institutionInput = document.createElement("input");
  institutionInput.type = "text";
  institutionInput.name = "institution";
  institutionInput.id = "institution";
  institutionInput.placeholder = "Enter the name of your institution";

  // matric no
  const formEntry01 = document.createElement("div");
  formEntry01.classList.add("form-entries");

  const matricLabel = document.createElement("label");
  matricLabel.setAttribute("for", "matric-no");
  matricLabel.textContent = "Matric Number";

  const matricInput = document.createElement("input");
  matricInput.type = "text";
  matricInput.name = "matric-no";
  matricInput.id = "matric-no";
  matricInput.placeholder = "Enter your matric number";

  // email-telephone
  const emailTelWrapper = document.createElement("div");
  emailTelWrapper.classList.add("email-tel");

  const formEntry02 = document.createElement("div");
  formEntry02.classList.add("form-entries");

  const facultyLabel = document.createElement("label");
  facultyLabel.setAttribute("for", "faculty");
  facultyLabel.textContent = "Faculty";

  const facultyInput = document.createElement("input");
  facultyInput.type = "text";
  facultyInput.name = "faculty";
  facultyInput.id = "faculty";
  facultyInput.placeholder = "Enter your faculty";

  const formEntry03 = document.createElement("div");
  formEntry03.classList.add("form-entries");

  const departmentLabel = document.createElement("label");
  departmentLabel.setAttribute("for", "department");
  departmentLabel.textContent = "Department";

  const departmentInput = document.createElement("input");
  departmentInput.type = "text";
  departmentInput.name = "department";
  departmentInput.id = "department";
  departmentInput.placeholder = "Enter your department";

  // level, year
  const levelYearWrapper = document.createElement("div");
  levelYearWrapper.classList.add("email-tel");

  const formEntry04 = document.createElement("div");
  formEntry04.classList.add("form-entries");

  const studyLevelLabel = document.createElement("label");
  studyLevelLabel.setAttribute("for", "level");
  studyLevelLabel.textContent = "Level of Study";

  const studyLevelInput = document.createElement("select");
  studyLevelInput.name = "level";
  studyLevelInput.id = "level";

  const h1Level = document.createElement("option");
  h1Level.value = "100";
  h1Level.textContent = "100";

  const h2Level = document.createElement("option");
  h2Level.value = "200";
  h2Level.textContent = "200";

  const h3Level = document.createElement("option");
  h3Level.value = "300";
  h3Level.textContent = "300";

  const h4Level = document.createElement("option");
  h4Level.value = "400";
  h4Level.textContent = "400";

  const h5Level = document.createElement("option");
  h5Level.value = "500";
  h5Level.textContent = "500";

  const formEntry05 = document.createElement("div");
  formEntry05.classList.add("form-entries");

  const studyYearLabel = document.createElement("label");
  studyYearLabel.setAttribute("for", "study-year");
  studyYearLabel.textContent = "Year of Study";

  const studyYearInput = document.createElement("select");
  studyYearInput.name = "study-year";
  studyYearInput.id = "study-year";

  const twnty21 = document.createElement("option");
  twnty21.value = "2021";
  twnty21.textContent = "2021";

  const twnty22 = document.createElement("option");
  twnty22.value = "2022";
  twnty22.textContent = "2022";

  const twnty23 = document.createElement("option");
  twnty23.value = "2023";
  twnty23.textContent = "2023";

  const twnty24 = document.createElement("option");
  twnty24.value = "2024";
  twnty24.textContent = "2024";

  const formEntry06 = document.createElement("div");
  formEntry06.classList.add("form-entries");

  const expYrLabel = document.createElement("label");
  expYrLabel.setAttribute("for", "grad-year");
  expYrLabel.textContent = "Expected Year of Graduation";

  const expYrInput = document.createElement("input");
  expYrInput.type = "text";
  expYrInput.name = "grad-year";
  expYrInput.id = "grad-year";
  expYrInput.placeholder = "Expected Year of Graduation";

  const formEntry07 = document.createElement("div");
  formEntry07.classList.add("form-entries");

  const acadStatLabel = document.createElement("label");
  acadStatLabel.setAttribute("for", "academic-stat");
  acadStatLabel.textContent = "Academic Status";

  const acadStatInput = document.createElement("input");
  acadStatInput.type = "text";
  acadStatInput.name = "academic-stat";
  acadStatInput.id = "academic-stat";
  acadStatInput.placeholder = "What's your academic status?";

  const fileUploads = document.createElement("div");
  fileUploads.classList.add("uploads");

  const letterUpload = document.createElement("div");
  letterUpload.classList.add("upload-letter");
  const uploadIcon00 = document.createElement('img');
  uploadIcon00.src = "../../assets/icons/upload.svg";
  uploadIcon00.alt = 'letter-upload';
  const uploadCaption00 = document.createElement('p');
  uploadCaption00.classList.add('upload-texts');
  uploadCaption00.textContent ="Upload Admission Letter";
  const uploadLimit00 =document.createElement('p');
  uploadLimit00.classList.add('upload-limits');
  uploadLimit00.textContent = "(Max of 4MB)";

  const idCardUpload = document.createElement("div");
  idCardUpload.classList.add("upload-letter");
  const uploadIcon01 = document.createElement('img');
  uploadIcon01.src = "../../assets/icons/upload.svg";
  uploadIcon01.alt = 'letter-upload';
  const uploadCaption02 = document.createElement('p');
  uploadCaption02.classList.add('upload-texts');
  uploadCaption02.textContent ="Upload Student ID Card";
  const uploadLimit01 =document.createElement('p');
  uploadLimit01.classList.add('upload-limits');
  uploadLimit01.textContent = "(Max of 4MB)";

  const applicationBtns = document.createElement("div");
  applicationBtns.classList.add("application-btns");
  const backBtn = document.createElement('button');
  backBtn.id = 'back';
  backBtn.type = 'button';
  backBtn.textContent = "< Back";
  const nextPg3Btn = document.createElement('button');
  nextPg3Btn.id = 'next-pg3';
  nextPg3Btn.type = 'button';
  nextPg3Btn.textContent = "Next >";

  formHeader.append(h1, p);
  formEntry00.append(institutionLabel, institutionInput);
  formEntry01.append(matricLabel, matricInput);
  formEntry02.append(facultyLabel, facultyInput);
  formEntry03.append(departmentLabel, departmentInput);
  emailTelWrapper.append(formEntry02, formEntry03);
  studyLevelInput.append(h1Level, h2Level, h3Level, h4Level, h5Level);
  formEntry04.append(studyLevelLabel, studyLevelInput);
  studyYearInput.append(twnty21, twnty22, twnty23, twnty24);
  formEntry05.append(studyYearLabel, studyYearInput);
  levelYearWrapper.append(formEntry04, formEntry05);
  formEntry06.append(expYrLabel, expYrInput);
  formEntry07.append(acadStatLabel, acadStatInput);
  letterUpload.append(uploadIcon00, uploadCaption00, uploadLimit00);
  idCardUpload.append(uploadIcon01, uploadCaption02, uploadLimit01);
  fileUploads.append(letterUpload, idCardUpload);
  applicationBtns.append(backBtn, nextPg3Btn);

  form.append(
    formHeader,
    formEntry00,
    formEntry01,
    emailTelWrapper,
    levelYearWrapper,
    formEntry06,
    formEntry07,
    fileUploads,
    applicationBtns
  );
}
