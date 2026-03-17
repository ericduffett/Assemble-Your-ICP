import { toPng } from 'html-to-image';

export async function exportResultCard(element: HTMLElement): Promise<void> {
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
