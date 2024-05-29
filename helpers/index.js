const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg'];
export function isImageValid(image) {
	return IMAGE_EXTENSIONS.some(ext => image.toLowerCase().endsWith(ext));
}
