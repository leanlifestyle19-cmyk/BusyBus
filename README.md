# BusyBus 🚌

Personal Singapore bus commuter PWA — built for daily adult use.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete app — 2,057 lines, all CSS/HTML/JS |
| `sw.js` | Service worker — offline shell |
| `manifest.json` | PWA manifest |
| `README.md` | This file |

---

## Setup — Deploy to GitHub Pages

1. Upload all 4 files to a GitHub repository root
2. Settings → Pages → Source → main → / (root)
3. Open your URL — live immediately, zero backend needed

---

## Features

### Tier 1 — Core
| Feature | Notes |
|---|---|
| Saved destinations (up to 8) | Editable in Settings, no PIN needed |
| Quick stop lookup | Type any 5-digit stop code on Home screen |
| LED arrival board | Dark display style, colour-coded by urgency |
| Compact / Full view toggle | 3-row compact or full detail per bus |
| Journey mode with stop countdown | Tap "passed a stop" to count down |
| Time-aware home screen | Work card first before noon, Home card first after 5pm |
| Dark / Light theme toggle | ☀️ Ocean (light) · 🌙 Navy (dark) |
| Camera bus scanner | Photograph a bus to confirm the number |

### Tier 2 — Useful extras
| Feature | Notes |
|---|---|
| Recent stops | Last 5 looked-up stops, shown as chips on Home |
| Favourite services | Star bus numbers — shows live times on Home screen |
| Notes per destination | Personal reminder shown when journey starts (e.g. "Exit B, 3 min walk") |

### Tier 3 — Power features
| Feature | Notes |
|---|---|
| Nearby stops (GPS) | Finds nearest stops using device GPS + busrouter.sg data |
| Watch Bus notifications | Polls every 30s, fires notification when bus < N min away |
| Commute stats | Total trips, weekly count, avg wait, top buses and stops |
| AI assistant (Gemini) | Free-form Singapore bus queries — routes, transfers, NR buses |

---

## AI Setup (optional, free)

1. Get a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Settings → AI Assistant → paste key → Save Settings
3. If you get a 404 error, change the model in the dropdown (key access varies)

---

## Watch Bus Setup

1. Settings → Notifications → tap **Enable** to grant permission
2. Set alert threshold (2 / 3 / 5 / 8 min)
3. On Arrivals screen, tap **👁 Watch** on any bus service
4. Browser notification fires when the bus is within your threshold

---

## Bus Data

Bus arrivals from [arrivelah2.busrouter.sg](https://arrivelah2.busrouter.sg) — free community service, no key needed. Falls back to demo data if temporarily offline.

Nearby stop directory from [busrouter.sg](https://busrouter.sg) — loaded once on first Nearby use, cached for 7 days.

**Custom LTA proxy (optional):** If arrivelah2 ever goes offline permanently, add your own Cloudflare Worker URL in Settings → AI Assistant section (ltaProxy field not exposed in UI; edit localStorage key `bb2_cfg` directly, or contact developer).

---

## ⚠️ Deploy Checklist

Every deploy:
- [ ] Bump `CACHE = 'busybus-vN'` in `sw.js`
- [ ] Upload `sw.js` AND `index.html` together
- [ ] Test on GitHub Pages URL on real phone (not localhost/preview)

---

## Privacy

All data stored locally in `localStorage` and `IndexedDB` on your device. Nothing sent to any server except:
- **Gemini API** — your queries and destination names sent to Google's API
- **arrivelah2.busrouter.sg** — stop codes sent to fetch arrivals
- **busrouter.sg** — one-time fetch of the bus stop directory

Gemini key stored in localStorage — visible in browser DevTools on this device.

---

*BusyBus v1.0 · Built with Claude Sonnet 4.6 · Singapore · June 2026*# BusyBus