const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.avif'];
export function isImageValid(image) {
	return IMAGE_EXTENSIONS.some(ext => image.toLowerCase().endsWith(ext));
}

export function getTokenFromLocalStorage() {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('token');
	}
}
