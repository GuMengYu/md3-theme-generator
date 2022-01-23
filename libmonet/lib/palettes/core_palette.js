'use strict';
import { lstarFromInt } from '../utils/color_utils.js';
import { CAM16, HCT } from '../hct.js';
import { TonalPalette } from './tonal_palette.js';

export class CorePalette {
    constructor(argb) {
        const cam = CAM16.fromIntInViewingConditions(argb);
        var JSCompiler_inline_result = new HCT(cam.hue, cam.chroma, lstarFromInt(argb));
        const hue = JSCompiler_inline_result.hue;
        this.a1 = new TonalPalette(hue, Math.max(48, JSCompiler_inline_result.chroma));
        this.a2 = new TonalPalette(hue, 16);
        this.a3 = new TonalPalette(hue + 60, 24);
        this.n1 = new TonalPalette(hue, 4);
        this.n2 = new TonalPalette(hue, 8);
        this.error = new TonalPalette(25, 84);
    }
};