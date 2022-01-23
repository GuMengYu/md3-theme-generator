'use strict';
import { WHITE_POINT_D65, intFromXyzComponents } from '../utils/color_utils.js';

export class LabPointProvider {
    toInt(point) {
        var l = point[0];
        const e = 216 / 24389, kappa = 24389 / 27, fy = (l + 16) / 116, fx = point[1] / 500 + fy, fz = fy - point[2] / 200, fx3 = fx * fx * fx, fz3 = fz * fz * fz;
        var xyz = [
            (fx3 > e ? fx3 : (116 * fx - 16) / kappa) * WHITE_POINT_D65[0],
            (8 < l ? fy * fy * fy : l / kappa) * WHITE_POINT_D65[1],
            (fz3 > e ? fz3 : (116 * fz - 16) / kappa) * WHITE_POINT_D65[2]
        ];
        return intFromXyzComponents(xyz[0], xyz[1], xyz[2]);
    }
    distance(from, to) {
        const dL = from[0] - to[0], dA = from[1] - to[1], dB = from[2] - to[2];
        return dL * dL + dA * dA + dB * dB;
    }
};