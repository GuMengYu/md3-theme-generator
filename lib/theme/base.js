'use strict';
import { intFromHex, CorePalette } from '../../libmonet/lib/index';
import { KEY_COLORS } from './defaults.js';
import { BASELINE_1P } from './baseline_1p.js';
import { BASELINE_3P } from './baseline_3p.js';
import { checks_isThemeBaseline, color_utils_numberToHex, tonal_group_tonesToTonalGroup, tonal_group_convertTonalGroupToMap } from './utils.js';

export class ThemeAdapterBase {
    constructor(props) {
        this.props = props;
    }
    get isBaseline() {
        return checks_isThemeBaseline(this.save());
    }
    get is3p() {
        return this.props.is3p;
    }
    get styles() {
        return this.props.is3p ? BASELINE_3P.styles : BASELINE_1P.styles;
    }
    get imageUrl() {
        return this.props.imageUrl;
    }
    get light() {
        var _b, _c;
        const overrides = this.props.isBaseline ? null === BASELINE_3P || void 0 === BASELINE_3P ? void 0 : BASELINE_3P.light : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.light) && void 0 !== _c ? _c : {};
        var p = this.palettes, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0;
        return {
            primary: null !== (JSCompiler__a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== JSCompiler__a ? JSCompiler__a : p.get('P-40'),
            onPrimary: null !== (JSCompiler__b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== JSCompiler__b ? JSCompiler__b : p.get('P-100'),
            primaryContainer: null !== (JSCompiler__c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== JSCompiler__c ? JSCompiler__c : p.get('P-90'),
            onPrimaryContainer: null !== (JSCompiler__d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== JSCompiler__d ? JSCompiler__d : p.get('P-10'),
            secondary: null !== (JSCompiler__e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p.get('S-40'),
            onSecondary: null !== (JSCompiler__f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== JSCompiler__f ? JSCompiler__f : p.get('S-100'),
            secondaryContainer: null !== (JSCompiler__g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== JSCompiler__g ? JSCompiler__g : p.get('S-90'),
            onSecondaryContainer: null !== (JSCompiler__h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== JSCompiler__h ? JSCompiler__h : p.get('S-10'),
            tertiary: null !== (JSCompiler__j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p.get('T-40'),
            onTertiary: null !== (JSCompiler__k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== JSCompiler__k ? JSCompiler__k : p.get('T-100'),
            tertiaryContainer: null !== (JSCompiler__l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== JSCompiler__l ? JSCompiler__l : p.get('T-90'),
            onTertiaryContainer: null !== (JSCompiler__m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== JSCompiler__m ? JSCompiler__m : p.get('T-10'),
            error: null !== (JSCompiler__o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== JSCompiler__o ? JSCompiler__o : p.get('E-40'),
            errorContainer: null !== (JSCompiler__p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== JSCompiler__p ? JSCompiler__p : p.get('E-90'),
            onError: null !== (JSCompiler__q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== JSCompiler__q ? JSCompiler__q : p.get('E-100'),
            onErrorContainer: null !== (JSCompiler__r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== JSCompiler__r ? JSCompiler__r : p.get('E-10'),
            background: null !== (JSCompiler__s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== JSCompiler__s ? JSCompiler__s : p.get('N-99'),
            onBackground: null !== (JSCompiler__t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== JSCompiler__t ? JSCompiler__t : p.get('N-10'),
            surface: null !== (JSCompiler__u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== JSCompiler__u ? JSCompiler__u : p.get('N-99'),
            onSurface: null !== (JSCompiler__v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== JSCompiler__v ? JSCompiler__v : p.get('N-10'),
            surfaceVariant: null !== (JSCompiler__w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== JSCompiler__w ? JSCompiler__w : p.get('NV-90'),
            onSurfaceVariant: null !== (JSCompiler__x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== JSCompiler__x ? JSCompiler__x : p.get('NV-30'),
            outline: null !== (JSCompiler__y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== JSCompiler__y ? JSCompiler__y : p.get('NV-50'),
            inverseOnSurface: null !== (JSCompiler__z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== JSCompiler__z ? JSCompiler__z : p.get('N-95'),
            inverseSurface: null !== (JSCompiler__0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p.get('N-20')
        };
    }
    get dark() {
        var _b, _c;
        const overrides = this.props.isBaseline ? null === BASELINE_3P || void 0 === BASELINE_3P ? void 0 : BASELINE_3P.dark : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.dark) && void 0 !== _c ? _c : {};
        var p = this.palettes, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0;
        return {
            primary: null !== (JSCompiler__a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== JSCompiler__a ? JSCompiler__a : p.get('P-80'),
            onPrimary: null !== (JSCompiler__b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== JSCompiler__b ? JSCompiler__b : p.get('P-20'),
            primaryContainer: null !== (JSCompiler__c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== JSCompiler__c ? JSCompiler__c : p.get('P-30'),
            onPrimaryContainer: null !== (JSCompiler__d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== JSCompiler__d ? JSCompiler__d : p.get('P-90'),
            secondary: null !== (JSCompiler__e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p.get('S-80'),
            onSecondary: null !== (JSCompiler__f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== JSCompiler__f ? JSCompiler__f : p.get('S-20'),
            secondaryContainer: null !== (JSCompiler__g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== JSCompiler__g ? JSCompiler__g : p.get('S-30'),
            onSecondaryContainer: null !== (JSCompiler__h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== JSCompiler__h ? JSCompiler__h : p.get('S-90'),
            tertiary: null !== (JSCompiler__j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p.get('T-80'),
            onTertiary: null !== (JSCompiler__k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== JSCompiler__k ? JSCompiler__k : p.get('T-20'),
            tertiaryContainer: null !== (JSCompiler__l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== JSCompiler__l ? JSCompiler__l : p.get('T-30'),
            onTertiaryContainer: null !== (JSCompiler__m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== JSCompiler__m ? JSCompiler__m : p.get('T-90'),
            error: null !== (JSCompiler__o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== JSCompiler__o ? JSCompiler__o : p.get('E-80'),
            errorContainer: null !== (JSCompiler__p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== JSCompiler__p ? JSCompiler__p : p.get('E-30'),
            onError: null !== (JSCompiler__q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== JSCompiler__q ? JSCompiler__q : p.get('E-20'),
            onErrorContainer: null !== (JSCompiler__r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== JSCompiler__r ? JSCompiler__r : p.get('E-90'),
            background: null !== (JSCompiler__s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== JSCompiler__s ? JSCompiler__s : p.get('N-10'),
            onBackground: null !== (JSCompiler__t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== JSCompiler__t ? JSCompiler__t : p.get('N-90'),
            surface: null !== (JSCompiler__u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== JSCompiler__u ? JSCompiler__u : p.get('N-10'),
            onSurface: null !== (JSCompiler__v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== JSCompiler__v ? JSCompiler__v : p.get('N-90'),
            surfaceVariant: null !== (JSCompiler__w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== JSCompiler__w ? JSCompiler__w : p.get('NV-30'),
            onSurfaceVariant: null !== (JSCompiler__x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== JSCompiler__x ? JSCompiler__x : p.get('NV-80'),
            outline: null !== (JSCompiler__y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== JSCompiler__y ? JSCompiler__y : p.get('NV-60'),
            inverseOnSurface: null !== (JSCompiler__z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== JSCompiler__z ? JSCompiler__z : p.get('N-10'),
            inverseSurface: null !== (JSCompiler__0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p.get('N-90')
        };
    }
    get androidLight() {
        var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidLight, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0, JSCompiler__1, JSCompiler__2, JSCompiler__3, JSCompiler__4, JSCompiler__5, JSCompiler__6, JSCompiler__7, JSCompiler__8, JSCompiler__9, JSCompiler__10, JSCompiler__11, JSCompiler__12, JSCompiler__13, JSCompiler__14, JSCompiler__15, JSCompiler__16, JSCompiler__17, JSCompiler__18, JSCompiler__19, JSCompiler__20, JSCompiler__21, JSCompiler__22, JSCompiler__23, JSCompiler__24, JSCompiler__25;
        return {
            colorAccentPrimary: null !== (JSCompiler__b = null !== (JSCompiler__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== JSCompiler__a ? JSCompiler__a : p.get('P-90')) && void 0 !== JSCompiler__b ? JSCompiler__b : color_utils_numberToHex(key.a1.tone(90)),
            colorAccentPrimaryVariant: null !== (JSCompiler__d = null !== (JSCompiler__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== JSCompiler__c ? JSCompiler__c : p.get('P-40')) && void 0 !== JSCompiler__d ? JSCompiler__d : color_utils_numberToHex(key.a1.tone(40)),
            colorAccentSecondary: null !== (JSCompiler__f = null !== (JSCompiler__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p.get('S-90')) && void 0 !== JSCompiler__f ? JSCompiler__f : color_utils_numberToHex(key.a2.tone(90)),
            colorAccentSecondaryVariant: null !== (JSCompiler__h = null !== (JSCompiler__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== JSCompiler__g ? JSCompiler__g : p.get('S-40')) && void 0 !== JSCompiler__h ? JSCompiler__h : color_utils_numberToHex(key.a2.tone(40)),
            colorAccentTertiary: null !== (JSCompiler__k = null !== (JSCompiler__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p.get('T-90')) && void 0 !== JSCompiler__k ? JSCompiler__k : color_utils_numberToHex(key.a3.tone(90)),
            colorAccentTertiaryVariant: null !== (JSCompiler__m = null !== (JSCompiler__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== JSCompiler__l ? JSCompiler__l : p.get('T-40')) && void 0 !== JSCompiler__m ? JSCompiler__m : color_utils_numberToHex(key.a3.tone(40)),
            textColorPrimary: null !== (JSCompiler__p = null !== (JSCompiler__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== JSCompiler__o ? JSCompiler__o : p.get('N-10')) && void 0 !== JSCompiler__p ? JSCompiler__p : color_utils_numberToHex(key.n1.tone(10)),
            textColorSecondary: null !== (JSCompiler__r = null !== (JSCompiler__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== JSCompiler__q ? JSCompiler__q : p.get('NV-30')) && void 0 !== JSCompiler__r ? JSCompiler__r : color_utils_numberToHex(key.n2.tone(30)),
            textColorTertiary: null !== (JSCompiler__t = null !== (JSCompiler__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== JSCompiler__s ? JSCompiler__s : p.get('NV-50')) && void 0 !== JSCompiler__t ? JSCompiler__t : color_utils_numberToHex(key.n2.tone(50)),
            textColorPrimaryInverse: null !== (JSCompiler__v = null !== (JSCompiler__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== JSCompiler__u ? JSCompiler__u : p.get('N-95')) && void 0 !== JSCompiler__v ? JSCompiler__v : color_utils_numberToHex(key.n1.tone(95)),
            textColorSecondaryInverse: null !== (JSCompiler__x = null !== (JSCompiler__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== JSCompiler__w ? JSCompiler__w : p.get('N-80')) && void 0 !== JSCompiler__x ? JSCompiler__x : color_utils_numberToHex(key.n1.tone(80)),
            textColorTertiaryInverse: null !== (JSCompiler__z = null !== (JSCompiler__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== JSCompiler__y ? JSCompiler__y : p.get('N-60')) && void 0 !== JSCompiler__z ? JSCompiler__z : color_utils_numberToHex(key.n1.tone(60)),
            colorBackground: null !== (JSCompiler__1 = null !== (JSCompiler__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p.get('N-95')) && void 0 !== JSCompiler__1 ? JSCompiler__1 : color_utils_numberToHex(key.n1.tone(95)),
            colorBackgroundFloating: null !== (JSCompiler__3 = null !== (JSCompiler__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== JSCompiler__2 ? JSCompiler__2 : p.get('N-98')) && void 0 !== JSCompiler__3 ? JSCompiler__3 : color_utils_numberToHex(key.n1.tone(98)),
            colorSurface: null !== (JSCompiler__5 = null !== (JSCompiler__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== JSCompiler__4 ? JSCompiler__4 : p.get('N-98')) && void 0 !== JSCompiler__5 ? JSCompiler__5 : color_utils_numberToHex(key.n1.tone(98)),
            colorSurfaceVariant: null !== (JSCompiler__7 = null !== (JSCompiler__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== JSCompiler__6 ? JSCompiler__6 : p.get('N-90')) && void 0 !== JSCompiler__7 ? JSCompiler__7 : color_utils_numberToHex(key.n1.tone(90)),
            colorSurfaceHighlight: null !== (JSCompiler__9 = null !== (JSCompiler__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== JSCompiler__8 ? JSCompiler__8 : p.get('N-100')) && void 0 !== JSCompiler__9 ? JSCompiler__9 : color_utils_numberToHex(key.n1.tone(100)),
            surfaceHeader: null !== (JSCompiler__11 = null !== (JSCompiler__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== JSCompiler__10 ? JSCompiler__10 : p.get('N-90')) && void 0 !== JSCompiler__11 ? JSCompiler__11 : color_utils_numberToHex(key.n1.tone(90)),
            underSurface: null !== (JSCompiler__13 = null !== (JSCompiler__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== JSCompiler__12 ? JSCompiler__12 : p.get('N-0')) && void 0 !== JSCompiler__13 ? JSCompiler__13 : color_utils_numberToHex(key.n1.tone(0)),
            offState: null !== (JSCompiler__15 = null !== (JSCompiler__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== JSCompiler__14 ? JSCompiler__14 : p.get('N-20')) && void 0 !== JSCompiler__15 ? JSCompiler__15 : color_utils_numberToHex(key.n1.tone(20)),
            accentSurface: null !== (JSCompiler__17 = null !== (JSCompiler__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== JSCompiler__16 ? JSCompiler__16 : p.get('NV-95')) && void 0 !== JSCompiler__17 ? JSCompiler__17 : color_utils_numberToHex(key.a2.tone(95)),
            textPrimaryOnAccent: null !== (JSCompiler__19 = null !== (JSCompiler__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== JSCompiler__18 ? JSCompiler__18 : p.get('N-10')) && void 0 !== JSCompiler__19 ? JSCompiler__19 : color_utils_numberToHex(key.n1.tone(10)),
            textSecondaryOnAccent: null !== (JSCompiler__21 = null !== (JSCompiler__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== JSCompiler__20 ? JSCompiler__20 : p.get('NV-30')) && void 0 !== JSCompiler__21 ? JSCompiler__21 : color_utils_numberToHex(key.n2.tone(30)),
            volumeBackground: null !== (JSCompiler__23 = null !== (JSCompiler__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== JSCompiler__22 ? JSCompiler__22 : p.get('N-25')) && void 0 !== JSCompiler__23 ? JSCompiler__23 : color_utils_numberToHex(key.n1.tone(25)),
            scrim: null !== (JSCompiler__25 = null !== (JSCompiler__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== JSCompiler__24 ? JSCompiler__24 : p.get('N-80')) && void 0 !== JSCompiler__25 ? JSCompiler__25 : color_utils_numberToHex(key.n1.tone(80))
        };
    }
    get androidDark() {
        var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidDark, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0, JSCompiler__1, JSCompiler__2, JSCompiler__3, JSCompiler__4, JSCompiler__5, JSCompiler__6, JSCompiler__7, JSCompiler__8, JSCompiler__9, JSCompiler__10, JSCompiler__11, JSCompiler__12, JSCompiler__13, JSCompiler__14, JSCompiler__15, JSCompiler__16, JSCompiler__17, JSCompiler__18, JSCompiler__19, JSCompiler__20, JSCompiler__21, JSCompiler__22, JSCompiler__23, JSCompiler__24, JSCompiler__25;
        return {
            colorAccentPrimary: null !== (JSCompiler__b = null !== (JSCompiler__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== JSCompiler__a ? JSCompiler__a : p.get('P-90')) && void 0 !== JSCompiler__b ? JSCompiler__b : color_utils_numberToHex(key.a1.tone(90)),
            colorAccentPrimaryVariant: null !== (JSCompiler__d = null !== (JSCompiler__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== JSCompiler__c ? JSCompiler__c : p.get('P-70')) && void 0 !== JSCompiler__d ? JSCompiler__d : color_utils_numberToHex(key.a1.tone(70)),
            colorAccentSecondary: null !== (JSCompiler__f = null !== (JSCompiler__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p.get('S-90')) && void 0 !== JSCompiler__f ? JSCompiler__f : color_utils_numberToHex(key.a2.tone(90)),
            colorAccentSecondaryVariant: null !== (JSCompiler__h = null !== (JSCompiler__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== JSCompiler__g ? JSCompiler__g : p.get('S-70')) && void 0 !== JSCompiler__h ? JSCompiler__h : color_utils_numberToHex(key.a2.tone(70)),
            colorAccentTertiary: null !== (JSCompiler__k = null !== (JSCompiler__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p.get('T-90')) && void 0 !== JSCompiler__k ? JSCompiler__k : color_utils_numberToHex(key.a3.tone(90)),
            colorAccentTertiaryVariant: null !== (JSCompiler__m = null !== (JSCompiler__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== JSCompiler__l ? JSCompiler__l : p.get('T-70')) && void 0 !== JSCompiler__m ? JSCompiler__m : color_utils_numberToHex(key.a3.tone(70)),
            textColorPrimary: null !== (JSCompiler__p = null !== (JSCompiler__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== JSCompiler__o ? JSCompiler__o : p.get('N-95')) && void 0 !== JSCompiler__p ? JSCompiler__p : color_utils_numberToHex(key.n1.tone(95)),
            textColorSecondary: null !== (JSCompiler__r = null !== (JSCompiler__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== JSCompiler__q ? JSCompiler__q : p.get('NV-80')) && void 0 !== JSCompiler__r ? JSCompiler__r : color_utils_numberToHex(key.n2.tone(80)),
            textColorTertiary: null !== (JSCompiler__t = null !== (JSCompiler__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== JSCompiler__s ? JSCompiler__s : p.get('NV-60')) && void 0 !== JSCompiler__t ? JSCompiler__t : color_utils_numberToHex(key.n2.tone(60)),
            textColorPrimaryInverse: null !== (JSCompiler__v = null !== (JSCompiler__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== JSCompiler__u ? JSCompiler__u : p.get('N-10')) && void 0 !== JSCompiler__v ? JSCompiler__v : color_utils_numberToHex(key.n1.tone(10)),
            textColorSecondaryInverse: null !== (JSCompiler__x = null !== (JSCompiler__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== JSCompiler__w ? JSCompiler__w : p.get('N-30')) && void 0 !== JSCompiler__x ? JSCompiler__x : color_utils_numberToHex(key.n1.tone(30)),
            textColorTertiaryInverse: null !== (JSCompiler__z = null !== (JSCompiler__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== JSCompiler__y ? JSCompiler__y : p.get('N-50')) && void 0 !== JSCompiler__z ? JSCompiler__z : color_utils_numberToHex(key.n1.tone(50)),
            colorBackground: null !== (JSCompiler__1 = null !== (JSCompiler__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p.get('N-10')) && void 0 !== JSCompiler__1 ? JSCompiler__1 : color_utils_numberToHex(key.n1.tone(10)),
            colorBackgroundFloating: null !== (JSCompiler__3 = null !== (JSCompiler__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== JSCompiler__2 ? JSCompiler__2 : p.get('N-10')) && void 0 !== JSCompiler__3 ? JSCompiler__3 : color_utils_numberToHex(key.n1.tone(10)),
            colorSurface: null !== (JSCompiler__5 = null !== (JSCompiler__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== JSCompiler__4 ? JSCompiler__4 : p.get('N-20')) && void 0 !== JSCompiler__5 ? JSCompiler__5 : color_utils_numberToHex(key.n1.tone(20)),
            colorSurfaceVariant: null !== (JSCompiler__7 = null !== (JSCompiler__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== JSCompiler__6 ? JSCompiler__6 : p.get('N-30')) && void 0 !== JSCompiler__7 ? JSCompiler__7 : color_utils_numberToHex(key.n1.tone(30)),
            colorSurfaceHighlight: null !== (JSCompiler__9 = null !== (JSCompiler__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== JSCompiler__8 ? JSCompiler__8 : p.get('N-35')) && void 0 !== JSCompiler__9 ? JSCompiler__9 : color_utils_numberToHex(key.n1.tone(35)),
            surfaceHeader: null !== (JSCompiler__11 = null !== (JSCompiler__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== JSCompiler__10 ? JSCompiler__10 : p.get('N-30')) && void 0 !== JSCompiler__11 ? JSCompiler__11 : color_utils_numberToHex(key.n1.tone(30)),
            underSurface: null !== (JSCompiler__13 = null !== (JSCompiler__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== JSCompiler__12 ? JSCompiler__12 : p.get('N-0')) && void 0 !== JSCompiler__13 ? JSCompiler__13 : color_utils_numberToHex(key.n1.tone(0)),
            offState: null !== (JSCompiler__15 = null !== (JSCompiler__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== JSCompiler__14 ? JSCompiler__14 : p.get('N-20')) && void 0 !== JSCompiler__15 ? JSCompiler__15 : color_utils_numberToHex(key.n1.tone(20)),
            accentSurface: null !== (JSCompiler__17 = null !== (JSCompiler__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== JSCompiler__16 ? JSCompiler__16 : p.get('NV-95')) && void 0 !== JSCompiler__17 ? JSCompiler__17 : color_utils_numberToHex(key.a2.tone(95)),
            textPrimaryOnAccent: null !== (JSCompiler__19 = null !== (JSCompiler__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== JSCompiler__18 ? JSCompiler__18 : p.get('N-10')) && void 0 !== JSCompiler__19 ? JSCompiler__19 : color_utils_numberToHex(key.n1.tone(10)),
            textSecondaryOnAccent: null !== (JSCompiler__21 = null !== (JSCompiler__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== JSCompiler__20 ? JSCompiler__20 : p.get('NV-30')) && void 0 !== JSCompiler__21 ? JSCompiler__21 : color_utils_numberToHex(key.n2.tone(30)),
            volumeBackground: null !== (JSCompiler__23 = null !== (JSCompiler__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== JSCompiler__22 ? JSCompiler__22 : p.get('N-25')) && void 0 !== JSCompiler__23 ? JSCompiler__23 : color_utils_numberToHex(key.n1.tone(25)),
            scrim: null !== (JSCompiler__25 = null !== (JSCompiler__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== JSCompiler__24 ? JSCompiler__24 : p.get('N-80')) && void 0 !== JSCompiler__25 ? JSCompiler__25 : color_utils_numberToHex(key.n1.tone(80))
        };
    }
    get tonalGroups() {
        return Object.assign({
            primary: this.primaryGroup,
            secondary: this.secondaryGroup,
            tertiary: this.tertiaryGroup,
            neutral: this.neutralGroup,
            neutralVariant: this.neutralVariantGroup,
            error: this.errorGroup
        }, this.props.overrides.tonalGroups);
    }
    getColorGroup(key, tones) {
        var _a;
        const groups = null !== (_a = this.props.overrides.tonalGroups) && void 0 !== _a ? _a : {}, overrideGroup = Object(groups)[key];
        return overrideGroup ? overrideGroup : tonal_group_tonesToTonalGroup(tones);
    };
    get primaryGroup() {
        return this.getColorGroup('primary', this.props.tones.a1);
    }
    get secondaryGroup() {
        return this.getColorGroup('secondary', this.props.tones.a2);
    }
    get tertiaryGroup() {
        return this.getColorGroup('tertiary', this.props.tones.a3);
    }
    get neutralGroup() {
        return this.getColorGroup('neutral', this.props.tones.n1);
    }
    get neutralVariantGroup() {
        return this.getColorGroup('neutralVariant', this.props.tones.n2);
    }
    get errorGroup() {
        return this.getColorGroup('error', this.props.tones.error);
    }
    get primary() {
        return tonal_group_convertTonalGroupToMap('P', this.primaryGroup);
    }
    get secondary() {
        return tonal_group_convertTonalGroupToMap('S', this.secondaryGroup);
    }
    get tertiary() {
        return tonal_group_convertTonalGroupToMap('T', this.tertiaryGroup);
    }
    get neutral() {
        return tonal_group_convertTonalGroupToMap('N', this.neutralGroup);
    }
    get neutralVariant() {
        return tonal_group_convertTonalGroupToMap('NV', this.neutralVariantGroup);
    }
    get error() {
        return tonal_group_convertTonalGroupToMap('E', this.errorGroup);
    }
    get palettes() {
        let entries = [];
        entries = entries.concat(Array.from(this.primary.entries()));
        entries = entries.concat(Array.from(this.secondary.entries()));
        entries = entries.concat(Array.from(this.tertiary.entries()));
        entries = entries.concat(Array.from(this.neutral.entries()));
        entries = entries.concat(Array.from(this.neutralVariant.entries()));
        entries = entries.concat(Array.from(this.error.entries()));
        return new Map(entries);
    }
    get seedValue() {
        return this.props.seed;
    }
    get source() {
        var _a, _b, _c, _d, _e, _f;
        const p = this.palettes, source = this.props.overrides.source;
        return Object.assign(Object.assign({}, source), {
            seed: this.seedValue,
            imageUrl: this.imageUrl,
            primary: null !== (_a = null === source || void 0 === source ? void 0 : source.primary) && void 0 !== _a ? _a : this.getPrimaryTonal('P', p),
            secondary: null !== (_b = null === source || void 0 === source ? void 0 : source.secondary) && void 0 !== _b ? _b : this.getPrimaryTonal('S', p),
            tertiary: null !== (_c = null === source || void 0 === source ? void 0 : source.tertiary) && void 0 !== _c ? _c : this.getPrimaryTonal('T', p),
            neutral: null !== (_d = null === source || void 0 === source ? void 0 : source.neutral) && void 0 !== _d ? _d : this.getPrimaryTonal('N', p),
            neutralVariant: null !== (_e = null === source || void 0 === source ? void 0 : source.neutralVariant) && void 0 !== _e ? _e : this.getPrimaryTonal('NV', p),
            error: null !== (_f = null === source || void 0 === source ? void 0 : source.error) && void 0 !== _f ? _f : this.getPrimaryTonal('E', p)
        });
    }

    getPrimaryTonal(prefix, palettes) {
        return (null !== palettes && void 0 !== palettes ? palettes : this.palettes).get(`${prefix}-40`);
    };

    setCustomColor(key, value) {
        var _a, _b, _c, _d;
        this.props.isBaseline = false;
        null !== (_a = (_c = this.props.overrides).source) && void 0 !== _a ? _a : _c.source = Object.assign({}, this.source);
        this.props.overrides.source[key] = value;
        if (KEY_COLORS.includes(key)) {
            null !== (_b = (_d = this.props.overrides).tonalGroups) && void 0 !== _b ? _b : _d.tonalGroups = {};
            try {
                var JSCompiler_inline_result = intFromHex(value);
            } catch (error) {
                console.log(`error converting [${value}] to number`, error), JSCompiler_inline_result = intFromHex('#000000');
            }
            var keyTones = new CorePalette(JSCompiler_inline_result);
            switch (key) {
                case 'primary':
                    this.props.overrides.tonalGroups.primary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'secondary':
                    this.props.overrides.tonalGroups.secondary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'tertiary':
                    this.props.overrides.tonalGroups.tertiary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'error':
                    this.props.overrides.tonalGroups.error = tonal_group_tonesToTonalGroup(keyTones.error);
                    break;
                case 'neutral':
                    this.props.overrides.tonalGroups.neutral = tonal_group_tonesToTonalGroup(keyTones.n1);
                    break;
                case 'neutralVariant':
                    this.props.overrides.tonalGroups.neutralVariant = tonal_group_tonesToTonalGroup(keyTones.n2);
            }
        }
    };
    save() {
        const theme = {
            light: this.light,
            dark: this.dark,
            androidLight: void 0,
            androidDark: void 0,
            primary: this.primaryGroup,
            secondary: this.secondaryGroup,
            tertiary: this.tertiaryGroup,
            neutral: this.neutralGroup,
            neutralVariant: this.neutralVariantGroup,
            error: this.errorGroup,
            styles: this.styles,
            source: this.source
        };
        console.log('saved theme', theme);
        return theme;
    }
};