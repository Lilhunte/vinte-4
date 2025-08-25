from playwright.sync_api import sync_playwright

def take_screenshot(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Listen for and print console logs
    page.on("console", lambda msg: print(f"BROWSER LOG: {msg.text}"))

    page.goto("http://localhost:8000/menu.html", wait_until="networkidle")
    page.wait_for_timeout(1000) # Wait for any JS rendering
    page.screenshot(path="jules-scratch/verification/menu_initial_load_debug.png")
    browser.close()

with sync_playwright() as playwright:
    take_screenshot(playwright)
