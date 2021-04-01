/// <reference types="node" />

declare type formats = 'image/png' | 'image/jpeg';

/**
 * Resolves webp image format
 * @param {string|Buffer} source Image source
 * @param {formats} [type] Mime type
 * @returns {Promise<Buffer>}
 */
declare function imageConverter(source: string | Buffer, type?: formats): Promise<Buffer>;

declare namespace imageConverter {
	const MIME_TYPE: {
        	MIME_JPEG: string;
        	MIME_JPG: string;
        	MIME_PNG: string;
    	};

    	const version: string;

	/**
	 * Returns buffer source
	 * @param {string} url Image source url
	 * @returns {Promise<Buffer>}
	 */
    	function getBuffer(url: string): Promise<Buffer>
}

export = imageConverter;
