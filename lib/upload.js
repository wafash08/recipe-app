import { UPLOAD_URL } from '@/constants/url';

export async function uploadImage(file) {
	try {
		const res = await fetch(UPLOAD_URL, {
			method: 'POST',
			headers: {
				'Content-Type':
					'multipart/form-data; boundary=<calculated when request is sent>',
			},
			body: file,
		});
		if (!res.ok) {
			throw res.status;
		}
		return res;
	} catch (error) {
		console.log('Error: ', error);
		throw error;
	}
}
