'use strict';
import { ThemeAdapter } from './index'
import { index_seedFromImage } from './theme/utils';
export function utils_keyToLabel(key) {
    return (key.includes('-') ? key.split('-') : key.replace(/([A-Z][a-z])/g, ' $1').split(' ')).map(e => e.slice(0, 1).toUpperCase() + e.slice(1, e.length)).join(' ');
}
export function utils_randomColor() {
    let color = '#';
    for (let i = 0; 6 > i; i++)
        color += '0123456789ABCDEF'[Math.floor(16 * Math.random())];
    return color;
}
export function generatePalleteFromURL(URL) {
    return new Promise(async (resolve, reject) => {
        try {
            const t = ThemeAdapter.fromColor(
                await index_seedFromImage(URL)
            );
            resolve(t);
        } catch (e) {
            console.error(e);
            reject(e);
        }
    });
}