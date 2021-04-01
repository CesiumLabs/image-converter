/// <reference types="node" />

declare type formats = 'image/png' | 'image/jpeg';

declare function imageConverter(source: string | Buffer, type?: formats): Promise<Buffer>;

declare namespace imageConverter {
	const MIME_TYPE: {
        	MIME_JPEG: string;
        	MIME_JPG: string;
        	MIME_PNG: string;
    	};

    	const version: string;

    	function getBuffer(url: string): Promise<Buffer>
}

export = imageConverter;
