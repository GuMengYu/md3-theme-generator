'use strict';
import { HCT } from '../hct.js';

export class TonalPalette {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    tone(tone) {
        let argb = putIfAbsent(this.cache, tone, _ => new HCT(this.hue, this.chroma, tone).toInt());
        return argb;
    }
};

function putIfAbsent(map, key, create) {
    if (map.has(key)) {
        return map.get(key)
    }
    const val = create();
    map.set(key, val);
    return val;
}