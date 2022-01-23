'use strict';
import { defaults_COLORS_3P, defaults_COLORS_1P } from './utils.js';

export const KEY_COLORS = 'primary secondary tertiary neutral neutralVariant error'.split(' ');
export const DEFAULT_COLORS = {
    baseline: {
        '3p': defaults_COLORS_3P,
        '1p': defaults_COLORS_1P,
        context_3p: defaults_COLORS_3P.seed,
        context_1p: defaults_COLORS_1P.seed
    },
    theme: {
        green: '#386A20',
        yellow: '#616200',
        red: '#9C4146',
        blue: '#00658E'
    },
    semantic: {
        red: '#DC362E',
        orange: '#C55400',
        yellow: '#B26C00',
        green: '#198639',
        blue: '#1B6EF3'
    },
    white: '#FFFFFF',
    black: '#000000'
};