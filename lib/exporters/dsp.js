'use strict';
import { ThemeExporter } from './base.js';

export class DspExporter extends ThemeExporter {
    constructor() {
        super(...arguments)
    }
    generate() {
        var JSCompiler_inline_result = {
            dateCreated: new Date(Date.now()).toUTCString(),
            author: 'Material Design',
            version: '0.0.1',
            name: 'Material'
        };
        return [
            {
                path: `${this.name}/dsp.json`,
                content: JSON.stringify({
                    dsp_spec_version: JSCompiler_inline_result.version,
                    last_updated_by: JSCompiler_inline_result.name,
                    last_updated: JSCompiler_inline_result.dateCreated,
                    settings: {
                        name: JSCompiler_inline_result.name,
                        package_version: JSCompiler_inline_result.version,
                        build_tool: 'StyleDictionary',
                        snippet_trigger_prefix: 'md_',
                        build_status_label: 'dev',
                        build_params: './config.js',
                        languages: [
                            {
                                label: 'Coffeescript',
                                export_tokens: false,
                                snippet_id: 'coffeescript',
                                syntax: 'text/x-coffeescript'
                            },
                            {
                                label: 'C',
                                export_tokens: false,
                                snippet_id: 'c',
                                syntax: 'text/x-csrc'
                            },
                            {
                                label: 'C#',
                                export_tokens: false,
                                snippet_id: 'csharp',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'CSS',
                                export_tokens: true,
                                snippet_id: 'css',
                                syntax: 'text/css',
                                'ext-com_adobe_xd-styledictionary_id': 'css'
                            },
                            {
                                label: 'Flutter (Dart)',
                                export_tokens: true,
                                snippet_id: 'dart',
                                syntax: 'application/vnd.dart',
                                'ext-com_adobe_xd-styledictionary_id': 'flutter'
                            },
                            {
                                label: 'F#',
                                export_tokens: false,
                                snippet_id: 'fsharp',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'Go',
                                export_tokens: false,
                                snippet_id: 'go',
                                syntax: 'text/x-go'
                            },
                            {
                                label: 'Groovy',
                                export_tokens: false,
                                snippet_id: 'groovy',
                                syntax: 'text/x-groovy'
                            },
                            {
                                label: 'Handlebars',
                                export_tokens: false,
                                snippet_id: 'handlebars',
                                syntax: 'text/x-handlebars-template'
                            },
                            {
                                label: 'HTML',
                                export_tokens: false,
                                snippet_id: 'html',
                                syntax: 'text/html'
                            },
                            {
                                label: 'Android (Java)',
                                export_tokens: true,
                                snippet_id: 'java',
                                syntax: 'text/x-java',
                                'ext-com_adobe_xd-styledictionary_id': 'android'
                            },
                            {
                                label: 'JavaScript',
                                export_tokens: true,
                                snippet_id: 'javascript',
                                syntax: 'text/javascript',
                                'ext-com_adobe_xd-styledictionary_id': 'js'
                            },
                            {
                                label: 'JavaScript React',
                                export_tokens: false,
                                snippet_id: 'javascriptreact',
                                syntax: 'text/jsx'
                            },
                            {
                                label: 'Less',
                                export_tokens: false,
                                snippet_id: 'less',
                                syntax: 'text/x-less'
                            },
                            {
                                label: 'Lua',
                                export_tokens: false,
                                snippet_id: 'lua',
                                syntax: 'text/x-lua'
                            },
                            {
                                label: 'iOS (Objective-C)',
                                export_tokens: false,
                                snippet_id: 'objective-c',
                                syntax: 'text/x-objectivec',
                                'ext-com_adobe_xd-styledictionary_id': 'ios'
                            },
                            {
                                label: 'Objective-C++',
                                export_tokens: false,
                                snippet_id: 'objective-cpp',
                                syntax: 'text/x-c++src'
                            },
                            {
                                label: 'Pug',
                                export_tokens: false,
                                snippet_id: 'jade',
                                syntax: 'text/html'
                            },
                            {
                                label: 'Python',
                                export_tokens: false,
                                snippet_id: 'python',
                                syntax: 'text/x-python'
                            },
                            {
                                label: 'Razor (cshtml)',
                                export_tokens: false,
                                snippet_id: 'razor',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'Ruby',
                                export_tokens: false,
                                snippet_id: 'ruby',
                                syntax: 'text/x-ruby'
                            },
                            {
                                label: 'Rust',
                                export_tokens: false,
                                snippet_id: 'rust',
                                syntax: 'text/x-rustsrc'
                            },
                            {
                                label: 'SCSS',
                                export_tokens: true,
                                snippet_id: 'scss',
                                syntax: 'text/x-sass',
                                'ext-com_adobe_xd-styledictionary_id': 'scss'
                            },
                            {
                                label: 'SASS',
                                export_tokens: false,
                                snippet_id: 'sass',
                                syntax: 'text/x-sass'
                            },
                            {
                                label: 'ShaderLab',
                                export_tokens: false,
                                snippet_id: 'shaderlab',
                                syntax: 'text/x-vertex'
                            },
                            {
                                label: 'iOS (Swift)',
                                export_tokens: true,
                                snippet_id: 'swift',
                                syntax: 'text/x-swift',
                                'ext-com_adobe_xd-styledictionary_id': 'ios-swift'
                            },
                            {
                                label: 'TypeScript',
                                export_tokens: false,
                                snippet_id: 'typescript',
                                syntax: 'text/typescript'
                            },
                            {
                                label: 'TypeScript React',
                                export_tokens: false,
                                snippet_id: 'typescriptreact',
                                syntax: 'text/typescript-jsx'
                            },
                            {
                                label: 'Markdown',
                                export_tokens: false,
                                snippet_id: 'markdown',
                                syntax: 'text/x-markdown'
                            }
                        ]
                    },
                    import: [
                        { src: 'data/tokens.json' },
                        { src: 'data/fonts.json' },
                        { src: 'data/components.json' },
                        { src: 'data/docs.json' }
                    ]
                }, null, 2),
                mimeType: 'application/json'
            },
            this.generateTokens(JSCompiler_inline_result),
            this.generateComponents(JSCompiler_inline_result),
            this.generateDocs(JSCompiler_inline_result),
            this.generateFonts(JSCompiler_inline_result)
        ];
    }

    generateTokens(config) {
        return this.createSection(config, 'tokens', base => {
            const addScheme = (section, scheme) => {
                for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(scheme)) {
                    const value = value__tsickle_destructured_2, tokenKey = key__tsickle_destructured_1.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    base.entities.push(createToken({
                        type: 'color',
                        name: `md.sys.color.${tokenKey}.${section}`,
                        category: `sys.color.${section}`,
                        value,
                        config
                    }));
                }
            };
            addScheme('light', this.theme.light);
            addScheme('dark', this.theme.dark);
            const schemeKeys = Object.keys(this.theme.light);
            for (const key of schemeKeys) {
                const tokenKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                base.entities.push(createToken({
                    type: 'alias',
                    name: `md.sys.color.${tokenKey}`,
                    category: 'sys.color',
                    value: `{md.sys.color.${tokenKey}.${'light'}}`,
                    config
                }));
            }
            const tonalKeys = 'primary secondary tertiary neutral neutralVariant error'.split(' ');
            for (const tonalKey of tonalKeys) {
                const tonalGroup = Object(this.theme)[tonalKey], sectionKey = 'neutralVariant' === tonalKey ? 'neutral-variant' : tonalKey;
                for (const [key__tsickle_destructured_3, value__tsickle_destructured_4] of Object.entries(tonalGroup)) {
                    const value = value__tsickle_destructured_4, luminance = key__tsickle_destructured_3.split('luminance')[1];
                    [
                        '98',
                        '35',
                        '25'
                    ].includes(luminance) || base.entities.push(createToken({
                        type: 'color',
                        name: `md.ref.palette.${`${sectionKey}${luminance}`}`,
                        category: 'ref.palette',
                        value,
                        config
                    }));
                }
            }
            base.categories = [
                {
                    id: 'sys.color.light',
                    label: 'Light'
                },
                {
                    id: 'sys.color.dark',
                    label: 'Dark'
                },
                {
                    id: 'sys.color',
                    label: 'Default'
                },
                {
                    id: 'ref.palette',
                    label: 'Palette'
                }
            ];
        });
    };
    generateComponents(config) {
        return this.createSection(config, 'components', () => {
        });
    };
    generateDocs(config) {
        return this.createSection(config, 'docs', () => {
        });
    };

    createSection(config, section, update) {
        const base = {
            dsp_spec_version: config.version,
            last_updated_by: config.name,
            last_updated: config.dateCreated,
            entities: [],
            categories: []
        };
        update(base);
        return {
            path: `${this.name}/data/${section}.json`,
            content: JSON.stringify(base, null, 2),
            mimeType: 'application/json'
        };
    };
    generateFonts(config) {
        return this.createSection(config, 'fonts', base => {
            for (const [key__tsickle_destructured_5, value__tsickle_destructured_6] of Object.entries(this.theme.styles)) {
                const key = key__tsickle_destructured_5, value = value__tsickle_destructured_6;
                let name = key;
                switch (key) {
                    case 'display2':
                        name = 'display-large';
                        break;
                    case 'display3':
                        name = 'display-medium';
                        break;
                    case 'headline1':
                        name = 'display-small';
                        break;
                    case 'headline2':
                        name = 'headline-large';
                        break;
                    case 'headline3':
                        name = 'headline-medium';
                        break;
                    case 'headline4':
                        name = 'headline-small';
                        break;
                    case 'headline5':
                        name = 'title-large';
                        break;
                    case 'subhead1':
                        name = 'title-medium';
                        break;
                    case 'subhead2':
                        name = 'title-small';
                        break;
                    case 'body1':
                        name = 'body-large';
                        break;
                    case 'body2':
                        name = 'body-medium';
                        break;
                    case 'caption':
                        name = 'body-small';
                        break;
                    case 'button':
                        name = 'label-large';
                        break;
                    case 'overline':
                        name = 'label-medium';
                        break;
                    case 'labelSmall':
                        name = 'label-small';
                }
                var JSCompiler_temp_const = base.entities, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.push, JSCompiler_object_inline_name_922 = name, JSCompiler_object_inline_value_923 = value, JSCompiler_object_inline_config_924 = config;
                const token = `md.sys.typescale.${JSCompiler_object_inline_name_922}`;
                var JSCompiler_inline_result = {
                    class: 'collection',
                    type: 'font',
                    id: token,
                    name: token,
                    description: '',
                    tags: [
                        ...JSCompiler_object_inline_name_922.split('.'),
                        'typography'
                    ],
                    last_updated_by: JSCompiler_object_inline_config_924.name,
                    last_updated: JSCompiler_object_inline_config_924.dateCreated,
                    tokens: [
                        {
                            id: `${token}.font`,
                            type: 'custom',
                            value: `${JSCompiler_object_inline_value_923.fontFamilyName}`,
                            key: 'family'
                        },
                        {
                            id: `${token}.line-height`,
                            type: 'size',
                            value: `${JSCompiler_object_inline_value_923.lineHeight}`,
                            key: 'line-height'
                        },
                        {
                            id: `${token}.weight`,
                            type: 'custom',
                            value: `${JSCompiler_object_inline_value_923.fontFamilyStyle}`,
                            key: 'weight'
                        },
                        {
                            id: `${token}.tracking`,
                            type: 'custom',
                            value: `${JSCompiler_object_inline_value_923.letterSpacing}`,
                            key: 'tracking'
                        },
                        {
                            id: `${token}.size`,
                            type: 'custom',
                            value: `${JSCompiler_object_inline_value_923.fontSize}`,
                            key: 'size'
                        }
                    ]
                };
                JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, JSCompiler_inline_result);
            }
        });
    };
};

var createToken = function (options) {
    return {
        class: 'token',
        type: options.type,
        id: options.name,
        name: options.name,
        value: options.value,
        description: '',
        category_id: options.category,
        last_updated_by: options.config.name,
        last_updated: options.config.dateCreated,
        tags: [
            ...options.name.split('.'),
            options.type
        ]
    };
};