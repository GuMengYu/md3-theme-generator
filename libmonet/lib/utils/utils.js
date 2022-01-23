'use strict';

export function math_utils_signum(input) {
    return 0 > input ? -1 : 0 === input ? 0 : 1;
}
export function math_utils_clamp(max, input) {
    return Math.min(Math.max(input, 0), max);
}
export function math_utils_sanitizeDegrees(degrees) {
    return 0 > degrees ? degrees % 360 + 360 : 360 <= degrees ? degrees % 360 : degrees;
}