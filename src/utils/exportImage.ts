import { toPng } from 'html-to-image';

async function waitForImages(element: HTMLElement): Promise<void> {
  const images = element.querySelectorAll('img');
  const promises = Array.from(images).map(async (img) => {
    // If the image hasn't started loading yet, wait for it
    if (!img.complete || img.naturalWidth === 0) {
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    }
    // Force the browser to fully decode the image pixels
    try {
      await img.decode();
    } catch {
      // decode() can fail on some browsers/images — safe to ignore
    }
  });
  await Promise.all(promises);
}

export async function exportResultCard(element: HTMLElement): Promise<void> {
  // Ensure all images are fully decoded before capturing
  await waitForImages(element);

  // First render warms html-to-image's internal cache (fixes blank image on first export)
  await toPng(element, {
    width: 1920,
    height: 1080,
    pixelRatio: 1,
    backgroundColor: '#ffffff',
  });

  // Second render produces the actual export with the image fully embedded
  const dataUrl = await toPng(element, {
    width: 1920,
    height: 1080,
    pixelRatio: 1,
    backgroundColor: '#ffffff',
  });

  const link = document.createElement('a');
  link.download = 'my-icp.png';
  link.href = dataUrl;
  link.click();
}
