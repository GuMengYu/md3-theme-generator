'use strict';

import pkg from 'jszip';
const { JSZip } = pkg;

export class ThemeExporter {
    constructor(theme, name, downloadBlob) {
        this.theme = theme;
        this.name = name;
        this.downloadBlob = downloadBlob;
    }
    download() {
        this.downloadZip();
    }
    async downloadZip() {
        const exportFiles = this.generate(), zip = new JSZip();
        for (const file of exportFiles)
            zip.file(file.path, file.content);
        const fileName = this.name + '.zip', blob = await zip.generateAsync({ type: 'blob' });
        await this.downloadBlob(blob, fileName);
    };
};
