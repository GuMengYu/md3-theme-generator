'use strict';
import { android_capitalize, android_xmlifyProperty } from './utils.js';
import { ThemeExporter } from './base.js';

class AndroidExporter extends ThemeExporter {
    constructor() {
        super(...arguments);
        this.themeName = 'AppTheme';
        this.lightBaseTheme = 'Theme.Material3.Light.NoActionBar';
        this.darkBaseTheme = 'Theme.Material3.Dark.NoActionBar';
        this.serializer = new XMLSerializer();
    }
    generate() {
        const rootElement = getDocumentRoot()[1], lightColors = this.generateColorSet(getDocumentRoot()[0], this.theme.light, { prefix: void 0 }), darkColors = this.generateColorSet(getDocumentRoot()[0], this.theme.dark, {
            isLight: false,
            prefix: void 0
        });
        var doc = getDocumentRoot()[0];
        const list = [], colors = Object.assign({}, this.theme.source), colorsToExclude = [
            'neutral',
            'neutralVariant',
            'primary',
            'secondary',
            'tertiary'
        ];
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(colors)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            if (key && value && !colorsToExclude.includes(key, 0)) {
                const colorElement = doc.createElement('color');
                colorElement.setAttribute('name', key);
                colorElement.appendChild(doc.createTextNode(value.toUpperCase()));
                list.push(colorElement);
            }
        }
        for (const node of lightColors)
            rootElement.appendChild(node);
        for (const node of darkColors)
            rootElement.appendChild(node);
        for (const node of list)
            rootElement.appendChild(node);
        return [
            {
                path: `${this.name}/${'values/colors.xml'}`,
                content: this.serializer.serializeToString(rootElement).replace(/\n/g, '\n    '),
                mimeType: 'text/xml'
            },
            this.generateThemeXML(this.theme.light),
            this.generateThemeXML(this.theme.dark, {
                isLight: false,
                path: 'values-night/themes.xml'
            })
        ];
    }

    generateThemeXML(colors, options) {
        var _a;
        const rootElement = getDocumentRoot()[1], doc = getDocumentRoot()[0], styleElement = doc.createElement('style');
        styleElement.setAttribute('name', this.themeName);
        true !== (null === options || void 0 === options ? void 0 : options.isLight) && void 0 !== (null === options || void 0 === options ? void 0 : options.isLight) || styleElement.setAttribute('parent', this.lightBaseTheme);
        false === (null === options || void 0 === options ? void 0 : options.isLight) && styleElement.setAttribute('parent', this.darkBaseTheme);
        const keys = Object.keys(colors).filter(obj => 'colors' !== obj);
        for (const key of keys) {
            const itemElement = doc.createElement('item');
            let name = key;
            switch (key) {
                case 'inverseSurface':
                    name = 'colorSurfaceInverse';
                    break;
                case 'inverseOnSurface':
                    name = 'colorOnSurfaceInverse';
                    break;
                case 'background':
                    name = 'android:color' + android_capitalize(name);
                    break;
                default:
                    name = 'color' + android_capitalize(name);
            }
            itemElement.setAttribute('name', name);
            itemElement.appendChild(doc.createTextNode('@color/' + android_xmlifyProperty(key, {
                isLight: null === options || void 0 === options ? void 0 : options.isLight,
                prefix: null === options || void 0 === options ? void 0 : options.prefix
            })));
            styleElement.appendChild(itemElement);
        }
        styleElement.append(generatePrimaryInverseThemeAttribute(doc, options));
        rootElement.appendChild(styleElement);
        return {
            path: `${this.name}/${null !== (_a = null === options || void 0 === options ? void 0 : options.path) && void 0 !== _a ? _a : 'values/themes.xml'}`,
            content: this.serializer.serializeToString(rootElement).replace(/\n/g, '\n    '),
            mimeType: 'text/xml'
        };
    };
    generateColorSet(doc, colors, options) {
        const list = [], isLight = void 0 === (null === options || void 0 === options ? void 0 : options.isLight) || options.isLight;
        for (const [key__tsickle_destructured_3, value__tsickle_destructured_4] of Object.entries(colors)) {
            const key = key__tsickle_destructured_3, value = value__tsickle_destructured_4;
            if (!key || !value)
                continue;
            const colorElement = doc.createElement('color');
            colorElement.setAttribute('name', android_xmlifyProperty(key, {
                isLight,
                prefix: null === options || void 0 === options ? void 0 : options.prefix
            }));
            colorElement.appendChild(doc.createTextNode(value.toUpperCase()));
            list.push(colorElement);
        }
        var JSCompiler_temp_const = list.push;
        const isLight$jscomp$0 = void 0 === (null === options || void 0 === options ? void 0 : options.isLight) || options.isLight, colorElement$jscomp$0 = doc.createElement('color');
        colorElement$jscomp$0.setAttribute('name', android_xmlifyProperty('primaryInverse', {
            isLight: isLight$jscomp$0,
            prefix: null === options || void 0 === options ? void 0 : options.prefix
        }));
        isLight$jscomp$0 ? colorElement$jscomp$0.appendChild(doc.createTextNode(this.theme.primary.luminance80.toUpperCase())) : colorElement$jscomp$0.appendChild(doc.createTextNode(this.theme.primary.luminance40.toUpperCase()));
        JSCompiler_temp_const.call(list, colorElement$jscomp$0);
        return list;
    };
};

export function getDocumentRoot() {
    const xmlDoc = document.implementation.createDocument(null, ''), rootElement = xmlDoc.createElement('resources');
    return [
        xmlDoc,
        rootElement
    ];
}

export function generatePrimaryInverseThemeAttribute(doc, options) {
    const element = doc.createElement('item');
    element.setAttribute('name', 'colorPrimaryInverse');
    element.appendChild(doc.createTextNode('@color/' + android_xmlifyProperty('primaryInverse', {
        isLight: void 0 === (null === options || void 0 === options ? void 0 : options.isLight) || options.isLight,
        prefix: null === options || void 0 === options ? void 0 : options.prefix
    })));
    return element;
}