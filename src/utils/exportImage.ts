import { toPng } from 'html-to-image';

function waitForImages(element: HTMLElement): Promise<void> {
  const images = element.querySelectorAll('img');
  const promises = Array.from(images).map((img) => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
      // Force the browser to decode the image
      img.decode?.().then(resolve, resolve);
    });
  });
  return Promise.all(promises).then(() => {});
}

export async function exportResultCard(element: HTMLElement): Promise<void> {
  // Ensure all images are fully decoded before capturing
  await waitForImages(element);

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
