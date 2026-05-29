# Raid Review

Raid Review is a static, browser-based Classic Era World of Warcraft combat log reviewer for raid leaders and officers. Upload a raw `WoWCombatLog.txt` file and the page parses it locally to surface practical raid review signals without requiring a backend or sending logs to a server.

## What It Tracks

- Boss and combined trash segments
- Top DPS, top healers, and total casts
- Sunder Armor and Expose Armor accountability
- Important cooldown uptime and missing-use checks, including Death Wish, Combustion, Power Infusion, Rapid Fire, Adrenaline Rush, and Blade Flurry
- Boss debuff uptime, including curses, Faerie Fire, Demoralizing Shout, Thunder Clap, Winter's Chill, Shadow Weaving, and Improved Scorch
- On-use trinket usage and undead-only trinket warnings, including caster trinkets such as Restrained Essence of Sapphiron and Hibernation Crystal
- In-combat consumable usage, including Greater Stoneshield, Mighty Rage Potion, mana potions, and runes
- Windfury Totem uptime
- Ignite drop warnings
- Player death reviews
- Low activity players by active time

## Privacy

Logs are processed entirely in the user's browser. The site does not upload, store, or transmit combat logs anywhere. This makes it suitable for static hosting providers such as GitHub Pages, Netlify, Vercel, and Cloudflare Pages.

## Running Locally

Because the app is static, you can open `index.html` directly in a browser.

For a local web server:

```bash
npx serve .
```

Or with Python:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deploying To GitHub Pages

1. Create a GitHub repository.
2. Add these files to the repository root:
   - `index.html`
   - `styles.css`
   - `raid-review-20260529-14.js`
   - `assets/`
   - `screenshots/`
   - `README.md`
3. Commit and push to GitHub.
4. In the repository, go to `Settings` -> `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save the settings.

GitHub Pages will publish the site at a URL like:

```text
https://your-username.github.io/your-repository-name/
```

## Notes

- Upload the raw WoW combat log from the WoW `Logs` folder, not copied chat text.
- Very large logs may take a little time to parse because all work happens client-side.
- Current analysis is focused on Classic Era raid leadership review, especially Naxx-style officer questions.
