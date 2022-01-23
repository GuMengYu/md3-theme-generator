import libmonet from '../libmonet';
import { ThemeAdapter, ComposeExporter } from '../lib/index.js';

//console.log(libmonet)
//console.log(theme_generator)
let adapter = ThemeAdapter.fromColor('#deadbe', true)
adapter.save()


function dark(self) {
    var _b, _c;
    const overrides = self.props.isBaseline ? null === BASELINE_3P || void 0 === BASELINE_3P ? void 0 : BASELINE_3P.dark : null !== (_c = null === (_b = self.props.overrides) || void 0 === _b ? void 0 : _b.dark) && void 0 !== _c ? _c : {};
    var p = self.palettes, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0;
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

console.log(dark(adapter))