# Comprehensive Test Plan & Test Documentation for Korla Website

## 1. Test Plan

### 1.1 Objective
The primary objective of this test plan is to combine manual functional testing and automated test execution (Playwright) on [https://korla.nl/](https://korla.nl/) to ensure stability, user experience, and correct functional flow.

### 1.2 Scope
* **In-Scope:**
  * Homepage accessibility and title validation (Smoke Testing).
  * User Login functionality (using valid, invalid, and empty credentials).
  * Navigation and display of the My Account dashboard.
  * Automated testing scripts using Playwright (`smoke.spec.js`, `login.spec.js`).
* **Out-of-Scope:**
  * Payment gateway and credit card processing during checkout.
  * Performance and security penetration testing.

### 1.3 Test Strategy & Methods
* **Functional & Automated Testing:** Validating core user journeys via Playwright automated scripts and manual executions.
* **Black-Box Testing:** Testing system behavior via UI without inspecting internal backend code.
* **Boundary Value Analysis:** Validating length restrictions and input constraints for username and password fields.
* **Negative Testing:** Submitting invalid parameters to verify error messages and boundary limits.

### 1.4 Tools Used
* **Automation Framework:** Playwright (JavaScript)
* **Browser:** Google Chrome (DevTools)
* **Documentation:** Markdown (`.md`)
* **Version Control:** Git & GitHub

---

## 2. Test Scenarios & Detailed Test Cases

### 2.1 Automated Test Scenarios (Playwright Coverage)

#### Scenario 1: Smoke Test - Homepage Verification
* **Test File:** `tests/smoke.spec.js`
* **Test Title:** Korla.nl Homepage Title Check
* **Objective:** Verify that the main website is accessible and loads with the correct title.

| Step # | Action / Step | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to `https://korla.nl` | The page loads successfully. |
| 2 | Verify the browser tab title | Title contains the keyword "korla" (case-insensitive). |

---

#### Scenario 2: Functional Test - User Login
* **Test File:** `tests/login.spec.js`
* **Test Title:** User Can Login Successfully
* **Objective:** Verify that a registered user can log in and view their account navigation menu.

| Step # | Action / Step | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to the login page (`/my-account/`) | Login page form is visible. |
| 2 | Enter credentials (`totifo2869@dreameg.com`) | Form inputs are filled correctly. |
| 3 | Submit login form | User logs in successfully and `.woocommerce-MyAccount-navigation` element is visible. |

---

### 2.2 Manual Test Scenarios

#### Test Case ID: TC_LOG_001
* **Test Title:** Login Attempt with Unregistered Email (Negative Test)
* **Module:** My Account / Login
* **Priority:** High
* **Pre-conditions:** The email address used must NOT exist in the database.

| Step # | Test Steps | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to `https://korla.nl/my-account/` | The My Account page loads successfully. |
| 2 | Enter `totifo2869@dreameg.com` in the username field. | Email is accepted in the input field. |
| 3 | Enter `totifo2869` in the password field. | Password input characters are masked. |
| 4 | Click the "Log in" button. | An explicit error notification appears informing the user that the account is unknown. |

---

## 3. Bug Report

**Bug ID:** BUG-001  
**Title:** Invalid Login error message display issue  
**Severity:** Medium  
**Priority:** High  

### Environment
* **OS:** Windows 11
* **Browser:** Chrome (Latest Version)
* **URL:** [https://korla.nl/my-account/](https://korla.nl/my-account/)

### Steps to Reproduce
1. Navigate to `https://korla.nl/my-account/`
2. Enter an unregistered email into the username field: `totifo2869@dreameg.com`
3. Enter an invalid password into the password field: `totifo2869`
4. Click the "Log in" button.

### Expected Result
The system should display a clear error message such as *"Error: The email address is not registered on this site"* inside a red notification box.

### Actual Result
The page reloaded without displaying any error notification box, remaining on a blank state or failing to inform the user.

### Screenshot
`![Bug Screenshot]