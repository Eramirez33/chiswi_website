import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the index.html file
        html_file_path = os.path.abspath('index.html')

        # Mobile viewport
        await page.set_viewport_size({"width": 375, "height": 667})
        await page.goto(f'file://{html_file_path}')
        await page.screenshot(path="jules-scratch/verification/mobile.png")

        # Tablet viewport
        await page.set_viewport_size({"width": 768, "height": 1024})
        await page.goto(f'file://{html_file_path}')
        await page.screenshot(path="jules-scratch/verification/tablet.png")

        # Desktop viewport
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.goto(f'file://{html_file_path}')
        await page.screenshot(path="jules-scratch/verification/desktop.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
