'use strict';
import { android_capitalize, android_xmlifyProperty } from './utils.js';
import { ThemeExporter } from './base.js';

export class ComposeExporter extends ThemeExporter {
    constructor() {
        super(...arguments);
        this.themeName = 'AppTheme';
        this.typographyMapping = new Map([
            [
                'display2',
                'displayLarge'
            ],
            [
                'display3',
                'displayMedium'
            ],
            [
                'headline1',
                'displaySmall'
            ],
            [
                'headline2',
                'headlineLarge'
            ],
            [
                'headline3',
                'headlineMedium'
            ],
            [
                'headline4',
                'headlineSmall'
            ],
            [
                'headline5',
                'titleLarge'
            ],
            [
                'subhead1',
                'titleMedium'
            ],
            [
                'subhead2',
                'titleSmall'
            ],
            [
                'body1',
                'bodyLarge'
            ],
            [
                'body2',
                'bodyMedium'
            ],
            [
                'caption',
                'bodySmall'
            ],
            [
                'button',
                'labelLarge'
            ],
            [
                'overline',
                'labelMedium'
            ],
            [
                'labelSmall',
                'labelSmall'
            ]
        ]);
    }
    generate() {
        const lightColors = generateColors(this.theme.light, { isLight: true }), darkColors = generateColors(this.theme.dark, { isLight: false }), list = [], colors = Object.assign({}, this.theme.source), colorsToExclude = [
            'neutral',
            'neutralVariant',
            'primary',
            'secondary',
            'tertiary'
        ];
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(colors)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            key && value && (colorsToExclude.includes(key, 0) || list.push(`val ${key} = Color(0xFF${android_capitalize(value).slice(1)})`));
        }
        var JSCompiler_inline_result = {
            path: `${this.name}/ui/theme/Color.kt`,
            content: `${'package com.example.compose\nimport androidx.compose.ui.graphics.Color\n\n'}\n${lightColors}\n\n${darkColors}\n\n${list.join('\n')}`,
            mimeType: 'text/plain'
        };
        const lightColorScheme = generateColorScheme(this.theme.light, { isLight: true }), darkColorScheme = generateColorScheme(this.theme.dark, { isLight: false });
        var JSCompiler_inline_result$jscomp$0 = {
            path: `${this.name}/ui/theme/Theme.kt`,
            content: `${'package com.example.compose\n\nimport androidx.compose.foundation.isSystemInDarkTheme\nimport androidx.compose.material3.MaterialTheme\nimport androidx.compose.material3.lightColorScheme\nimport androidx.compose.material3.darkColorScheme\nimport androidx.compose.runtime.Composable\n'}\n ${lightColorScheme} \n ${darkColorScheme}` + ('\n' + `@Composable
fun ${this.themeName}(
useDarkTheme: Boolean = isSystemInDarkTheme(),
content: @Composable() () -> Unit
) {
val colors = if (!useDarkTheme) {
  LightThemeColors
} else {
  DarkThemeColors
}

MaterialTheme(
  colorScheme = colors,
  typography = AppTypography,
  content = content
)
}`),
            mimeType: 'text/plain'
        };
        const typeStrings = [], membersToExclude$jscomp$0 = [''];
        typeStrings.push('package com.example.ui.theme\nimport androidx.compose.material3.Typography\nimport androidx.compose.ui.text.TextStyle\nimport androidx.compose.ui.text.font.Font\nimport androidx.compose.ui.text.font.FontFamily\nimport androidx.compose.ui.text.font.FontWeight\nimport androidx.compose.ui.unit.dp\nimport androidx.compose.ui.unit.sp\n//Replace with your font locations\nval Roboto = FontFamily.Default\n');
        typeStrings.push('val AppTypography = Typography(');
        const keys$jscomp$0 = Object.keys(this.theme.styles);
        for (const key$jscomp$0 of keys$jscomp$0)
            if (!membersToExclude$jscomp$0.includes(key$jscomp$0)) {
                const mappedID = this.typographyMapping.get(key$jscomp$0);
                if (void 0 !== mappedID) {
                    const value = Object(this.theme.styles)[key$jscomp$0];
                    typeStrings.push(`\t${mappedID} = TextStyle(`);
                    var JSCompiler_temp_const = typeStrings, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.push, style = value;
                    const styleStrings = [], membersToExclude = [
                        'paragraphSpacing',
                        'paragraphIndent'
                    ], keys = Object.keys(style);
                    for (const key of keys)
                        membersToExclude.includes(key) || styleStrings.push(`\t\t${processFontProperty(key, Object(style)[key])},`);
                    JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, styleStrings.join('\n'));
                    typeStrings.push('\t),');
                }
            }
        typeStrings.push(')\n');
        return [
            JSCompiler_inline_result,
            JSCompiler_inline_result$jscomp$0,
            {
                path: `${this.name}/ui/theme/Type.kt`,
                content: typeStrings.join('\n'),
                mimeType: 'text/plain'
            }
        ];
    }
};

var generateColors = function (colors, options) {
    const colorStrings = [], keys = Object.keys(colors);
    for (const key of keys)
        'colors' !== key && colorStrings.push(`val ${android_xmlifyProperty(key, { isLight: null === options || void 0 === options ? void 0 : options.isLight })} = Color(0xFF${android_capitalize(Object(colors)[key]).slice(1)})`);
    return colorStrings.join('\n');
};
var generateColorScheme = function (colors, options) {
    const themeStrings = [], keys = Object.keys(colors);
    let declaration = 'private val ';
    declaration = (null === options || void 0 === options ? 0 : options.isLight) ? declaration + 'LightThemeColors = lightColorScheme(\n' : declaration + 'DarkThemeColors = darkColorScheme(\n';
    themeStrings.push(declaration);
    for (const key of keys)
        'colors' !== key && themeStrings.push(`\t${key} = ${android_xmlifyProperty(key, { isLight: null === options || void 0 === options ? void 0 : options.isLight })},`);
    themeStrings.push(')');
    return themeStrings.join('\n');
};

var processFontProperty = function (key, value) {
    switch (key) {
        case 'fontFamilyStyle':
            return 'Italic' === value ? `fontStyle = ${processFontWeight(value)}` : `fontWeight = ${processFontWeight(value)}`;
        case 'letterSpacing':
        case 'lineHeight':
        case 'fontSize':
            return `${key} = ${value}.sp`;
        case 'fontFamilyName':
            return `fontFamily = ${value.replace(' ', '_')}`;
        case 'textDecoration':
            return `${key} = TextDecoration.${android_capitalize(null === value || void 0 === value ? void 0 : value.toLowerCase())}`;
        default:
            return '';
    }
};
var processFontWeight = function (value) {
    switch (value) {
        case 'Regular':
        case 'Normal':
        case 'Plain':
            return 'FontWeight.W400';
        case 'Medium':
            return 'FontWeight.Medium';
        case 'Italic':
            return 'FontStyle.Italic';
        default:
            return value;
    }
};