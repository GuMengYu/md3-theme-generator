// CorePalette, intFromHex
import { CorePalette, intFromHex } from '../../libmonet/lib/index';
import { checks_isTheme3p, checks_isThemeBaseline } from './utils.js';
import { ThemeAdapterBase } from './base.js';
import { DEFAULT_COLORS } from './defaults.js';
import { BASELINE_1P } from './baseline_1p.js';
import { BASELINE_3P } from './baseline_3p.js';

export class ThemeAdapter extends ThemeAdapterBase {
};
ThemeAdapter.fromColor = function (value, is3p, overrides = {}) {
    console.log('theme adapter from color');
    const keyTones = new CorePalette(intFromHex(value));
    return new ThemeAdapter({
        tones: keyTones,
        seed: value,
        is3p,
        overrides,
        blend: false,
        isBaseline: false
    });
};
ThemeAdapter.baselineSeed = function (is3p) {
    const baseline = DEFAULT_COLORS.baseline;
    return is3p ? baseline.context_3p : baseline.context_1p;
};
ThemeAdapter.fromTheme = function (theme) {
    var _a, _b, _c;
    console.log('theme adapter from theme', theme);
    const is3p = checks_isTheme3p(theme), seed = null !== (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _a ? void 0 : _a.seed) && void 0 !== _b ? _b : ThemeAdapter.baselineSeed(is3p), imageUrl = null === (_c = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _c ? void 0 : _c.imageUrl, keyTones = new CorePalette(intFromHex(seed)), themeOverrides = {
        light: theme.light,
        dark: theme.dark,
        tonalGroups: {
            primary: theme.primary,
            secondary: theme.secondary,
            tertiary: theme.tertiary,
            neutral: theme.neutral,
            neutralVariant: theme.neutralVariant,
            error: theme.error
        },
        source: theme.source
    }, isBaseline = checks_isThemeBaseline(theme);
    return new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        imageUrl,
        isBaseline,
        overrides: themeOverrides,
        blend: false
    });
};
ThemeAdapter.default = function (is3p = false) {
    console.log('theme adapter default');
    const seed = ThemeAdapter.baselineSeed(is3p), keyTones = new CorePalette(intFromHex(seed));
    return is3p ? new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: BASELINE_3P.primary,
                secondary: BASELINE_3P.secondary,
                tertiary: BASELINE_3P.tertiary,
                neutral: BASELINE_3P.neutral,
                neutralVariant: BASELINE_3P.neutralVariant,
                error: BASELINE_3P.error
            }
        },
        blend: false,
        isBaseline: true
    }) : new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: BASELINE_1P.primary,
                secondary: BASELINE_1P.secondary,
                tertiary: BASELINE_1P.tertiary,
                neutral: BASELINE_1P.neutral,
                neutralVariant: BASELINE_1P.neutralVariant,
                error: BASELINE_1P.error
            }
        },
        blend: false,
        isBaseline: true
    });
};