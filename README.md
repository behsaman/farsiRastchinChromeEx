# 🚀 Vazirmatn & RTL Web Customizer
**A premium, minimal, and smart web accessibility extension developed by BEHSAMAN.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

## ✨ An Elegant Gift to the Persian Community / هدیه‌ای به فارسی‌زبانان عزیز

> **«تقدیم به فارسی‌زبانان عزیز؛ برای تجربه‌ای زیباتر، بومی‌تر و منظم‌تر در وب.» — BEHSAMAN**
> 
> Reading Persian/Arabic text on default web layouts can be exhausting due to poor font rendering and misaligned left-to-right (LTR) structures. This extension was crafted as a completely free, open-source gift to the Persian community to bring the masterfully designed **Vazirmatn** font and seamless Right-to-Left (RTL) typography to every corner of the internet.

---

## 🛠️ Key Features

- **🔴 Ultimate Master Toggle:** Instantly enable or disable the entire extension with a single click without messing up your configuration.
- **✒️ Native Vazirmatn Injection:** Forces beautiful, high-legibility Vazirmatn typography across any webpage dynamically.
- **↔️ Smart RTL Layout Engine:** Auto-aligns grids, text bodies, inputs, and textareas to a clean Right-to-Left format.
- **⚡ Code-Snippet Isolation (Developer Friendly):** When toggled on, it selectively skips code elements (`<pre>`, `<code>`, `<kbd>`, etc.) and syntax-highlighted blocks. Your code remains perfectly LTR and monospaced while the prose stays beautifully RTL.
- **🧩 Icon-Font Protection:** Uses strict, predictive CSS selectors to isolate and preserve web-icons (FontAwesome, Material Icons, Glyphicons, SVGs, and brand logos) so layouts never break into blank squares.
- **💾 Lightweight & Persistent State:** Minimal footprints utilizing `chrome.storage` to instantly save and sync your preferences across tabs seamlessly.

---

## 📦 Architecture & Directory Structure

```text
├── manifest.json       # App configuration & permissions (Manifest V3)
├── popup.html          # Clean & modern dashboard UI
├── popup.js            # Frontend logic & state controller
├── content.js          # High-performance CSS injection script
├── icon16.png          # App favicon icon
├── icon48.png          # Dashboard management icon
└── icon128.png         # Main storefront and installation asset
