import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const widths = [320, 375, 430, 768, 1024, 1440, 1920];

test("primary routes and controls work", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /privacy, made visible/i })).toBeVisible();
  await expect(page.locator(".media-stage")).toHaveAttribute("data-hydrated", "true", {
    timeout: 20_000,
  });

  await page.getByRole("button", { name: "Pause motion" }).click();
  await expect(page.getByRole("button", { name: "Play motion" })).toBeVisible();

  await page.getByRole("button", { name: /is this the final/i }).click();
  await expect(page.getByText(/complete disclosure framework/i)).toBeHidden();
  await page.getByRole("button", { name: /does one search use uploaded photos/i }).click();
  await expect(page.getByText(/has not been verified/i)).toBeVisible();

  await page.goto("/privacy-policy", { waitUntil: "domcontentloaded" });
  const search = page.getByRole("searchbox", { name: "Search the policy" });
  await expect(search).toHaveAttribute("data-hydrated", "true", { timeout: 20_000 });
  await search.fill("facial");
  await expect(page.getByRole("heading", { name: /facial image processing/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /payments and subscriptions/i })).toHaveCount(0);
  await page.getByRole("button", { name: "Clear policy search" }).click();
  await expect(page.getByRole("heading", { name: /payments and subscriptions/i })).toBeVisible();

  await page.goto("/delete-account", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /backend connection required/i })).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);

  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /why there is no form yet/i })).toBeVisible();
});

for (const width of widths) {
  test(`home has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 700 ? 860 : 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });
}

test("reduced motion keeps content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /follow the data/i })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /introduction and privacy commitment/i }),
  ).toBeVisible();
});

test("internal links are not broken", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const links = await page
    .locator('a[href^="/"]')
    .evaluateAll(
      (anchors) =>
        Array.from(
          new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).getAttribute("href"))),
        ).filter(Boolean) as string[],
    );
  for (const href of links) {
    const response = await page.request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }
});

test("capture reviewed desktop and mobile screenshots", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Captured once from the Chromium project");
  await mkdir("artifacts/screenshots", { recursive: true });

  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await desktop.goto("/", { waitUntil: "domcontentloaded" });
  await expect(desktop.getByRole("heading", { name: /privacy, made visible/i })).toBeVisible();
  await desktop.screenshot({
    path: "artifacts/screenshots/home-desktop-1440.png",
    fullPage: true,
    caret: "initial",
  });
  await desktop.close();

  const mobile = await browser.newPage({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    reducedMotion: "reduce",
  });
  await mobile.goto("/", { waitUntil: "domcontentloaded" });
  await expect(mobile.getByRole("heading", { name: /privacy, made visible/i })).toBeVisible();
  await mobile.screenshot({
    path: "artifacts/screenshots/home-mobile-375.png",
    fullPage: true,
    caret: "initial",
  });
  await mobile.close();
});
