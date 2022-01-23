'use strict';
import { math_utils_clamp } from './utils.js';

export const WHITE_POINT_D65 = [
    95.047,
    100,
    108.883
];
export function lstarFromInt(argb) {
    let y = 21.26 * linearized(((argb & 16711680) >> 16) / 255) + 71.52 * linearized(((argb & 65280) >> 8) / 255) + 7.22 * linearized((argb & 255) / 255);
    y /= 100;
    return y <= 216 / 24389 ? 24389 / 27 * y : 116 * Math.pow(y, 1 / 3) - 16;
};
export function hexFromInt(argb) {
    const g = (argb & 65280) >> 8, b = argb & 255, outParts = [
        ((argb & 16711680) >> 16).toString(16),
        g.toString(16),
        b.toString(16)
    ];
    for (const [i__tsickle_destructured_1, part__tsickle_destructured_2] of outParts.entries()) {
        const i = i__tsickle_destructured_1, part = part__tsickle_destructured_2;
        1 === part.length && (outParts[i] = '0' + part);
    }
    return '#' + outParts.join('');
}
export function intFromRgb(rgb) {
    return (-16777216 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255) >>> 0;
}
export function labFromInt(argb) {
    const e = 216 / 24389, kappa = 24389 / 27, redL = 100 * linearized(((argb & 16711680) >> 16) / 255), greenL = 100 * linearized(((argb & 65280) >> 8) / 255), blueL = 100 * linearized((argb & 255) / 255), yNormalized = (0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL) / WHITE_POINT_D65[1];
    let fy;
    fy = yNormalized > e ? Math.pow(yNormalized, 1 / 3) : (kappa * yNormalized + 16) / 116;
    const xNormalized = (0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL) / WHITE_POINT_D65[0], zNormalized = (0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL) / WHITE_POINT_D65[2];
    return [
        116 * fy - 16,
        500 * ((xNormalized > e ? Math.pow(xNormalized, 1 / 3) : (kappa * xNormalized + 16) / 116) - fy),
        200 * (fy - (zNormalized > e ? Math.pow(zNormalized, 1 / 3) : (kappa * zNormalized + 16) / 116))
    ];
}
export function intFromXyzComponents(x, y, z) {
    x /= 100;
    y /= 100;
    z /= 100;
    return intFromRgb([
        Math.round(math_utils_clamp(255, 255 * delinearized(3.2406 * x + -1.5372 * y + -0.4986 * z))),
        Math.round(math_utils_clamp(255, 255 * delinearized(-0.9689 * x + 1.8758 * y + 0.0415 * z))),
        Math.round(math_utils_clamp(255, 255 * delinearized(0.0557 * x + -0.204 * y + 1.057 * z)))
    ]);
}
export function intFromHex(hex) {
    hex = hex.replace('#', '');
    const isThree = 3 === hex.length, isSix = 6 === hex.length, isEight = 8 === hex.length;
    if (!isThree && !isSix && !isEight)
        throw Error('unexpected hex ' + hex);
    let r = 0, g = 0, b = 0;
    isThree ? (r = parseInt(hex.slice(0, 1).repeat(2), 16), g = parseInt(hex.slice(1, 2).repeat(2), 16), b = parseInt(hex.slice(2, 3).repeat(2), 16)) : isSix ? (r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16)) : isEight && (r = parseInt(hex.slice(2, 4), 16), g = parseInt(hex.slice(4, 6), 16), b = parseInt(hex.slice(6, 8), 16));
    return (-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
}
export function intFromLstar(lstar) {
    const fy = (lstar + 16) / 116, kappa = 24389 / 27, cubeExceedEpsilon = fy * fy * fy > 216 / 24389;
    var xyz = [
        (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * WHITE_POINT_D65[0],
        (8 < lstar ? fy * fy * fy : lstar / kappa) * WHITE_POINT_D65[1],
        (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * WHITE_POINT_D65[2]
    ];
    return intFromXyzComponents(xyz[0], xyz[1], xyz[2]);
}
export function linearized(rgb) {
    return 0.04045 >= rgb ? rgb / 12.92 : Math.pow((rgb + 0.055) / 1.055, 2.4);
}
export function delinearized(rgb) {
    return 0.0031308 >= rgb ? 12.92 * rgb : 1.055 * Math.pow(rgb, 1 / 2.4) - 0.055;
}