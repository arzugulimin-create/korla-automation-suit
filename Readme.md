# Korla.nl Web Automation & QA Testing Project

This repository contains the Quality Assurance (QA) test suite for `https://korla.nl/`. It covers both manual test planning and automated UI tests using **Playwright** with **JavaScript**.

---

## 📌 Project Overview

- **Target Website:** [Korla.nl](https://korla.nl/)
- **Testing Types:** Manual Testing (Test Plan & Bug Report) + Automated Testing (Playwright)
- **Design Pattern:** Page Object Model (POM)

---

## 📂 Project Structure

```text
korla-automation-suit/
├── pages/                  # Page Object Model (POM) classes
│   └── login.page.js       # Locators and actions for Login Page
├── tests/                  # Automated Playwright test files
│   ├── login.spec.js       # Functional login test
│   └── smoke.spec.js       # Smoke test for homepage
├── test-plan.md            # Test Plan, Manual Test Cases, Bug Report & Scenarios
├── playwright.config.js    # Playwright configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation