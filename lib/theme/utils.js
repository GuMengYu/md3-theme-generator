'use strict';
// { hexFromInt, intFromRgb, QuantizerWu, LabPointProvider, labFromInt, score }
import { hexFromInt, intFromRgb, QuantizerWu, LabPointProvider, labFromInt, quantizer_wsmeans_DistanceAndIndex, score } from '../../libmonet/lib/index';
import { BASELINE_1P } from './baseline_1p.js';
import { BASELINE_3P } from './baseline_3p.js';

export function checks_isTheme3p(theme) {
    var _a, _b;
    return 'Roboto' === (null === (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.styles) || void 0 === _a ? void 0 : _a.headline1) || void 0 === _b ? void 0 : _b.fontFamilyName);
}
export function checks_isThemeBaseline(theme) {
    let match$jscomp$0 = true;
    const target = checks_isTheme3p(theme) ? BASELINE_3P : BASELINE_1P, checkGroup = (name, group, targetGroup) => {
        if (match$jscomp$0) {
            let match;
            (match = checks_isSameColor(group.luminance0, targetGroup.luminance0)) && (match = checks_isSameColor(group.luminance10, targetGroup.luminance10));
            match && (match = checks_isSameColor(group.luminance20, targetGroup.luminance20));
            match && (match = checks_isSameColor(group.luminance30, targetGroup.luminance30));
            match && (match = checks_isSameColor(group.luminance40, targetGroup.luminance40));
            match && (match = checks_isSameColor(group.luminance50, targetGroup.luminance50));
            match && (match = checks_isSameColor(group.luminance60, targetGroup.luminance60));
            match && (match = checks_isSameColor(group.luminance70, targetGroup.luminance70));
            match && (match = checks_isSameColor(group.luminance80, targetGroup.luminance80));
            match && (match = checks_isSameColor(group.luminance90, targetGroup.luminance90));
            match && (match = checks_isSameColor(group.luminance95, targetGroup.luminance95));
            match && (match = checks_isSameColor(group.luminance98, targetGroup.luminance98));
            match && (match = checks_isSameColor(group.luminance100, targetGroup.luminance100));
            match$jscomp$0 = match;
        }
        match$jscomp$0 || console.log(`theme adapter ${name} group mismatch`, group, targetGroup);
    };
    checkGroup('primary', theme.primary, target.primary);
    checkGroup('secondary', theme.secondary, target.secondary);
    checkGroup('tertiary', theme.tertiary, target.tertiary);
    checkGroup('neutral', theme.neutral, target.neutral);
    checkGroup('neutralVariant', theme.neutralVariant, target.neutralVariant);
    checkGroup('error', theme.error, target.error);
    console.log(`theme adapter baseline match: ${match$jscomp$0}`);
    return match$jscomp$0;
}
export function checks_isSameColor(target, expected) {
    return (null === target || void 0 === target ? void 0 : target.toUpperCase()) === (null === expected || void 0 === expected ? void 0 : expected.toUpperCase());
}
export function color_utils_numberToHex(value) {
    try {
        return hexFromInt(value);
    } catch (error) {
        return console.log(`error converting [${value}] to hex`, error), '#000000';
    }
}
export function tonal_group_tonesToTonalGroup(tones) {
    return {
        luminance100: color_utils_numberToHex(tones.tone(100)),
        luminance99: color_utils_numberToHex(tones.tone(99)),
        luminance98: color_utils_numberToHex(tones.tone(98)),
        luminance95: color_utils_numberToHex(tones.tone(95)),
        luminance90: color_utils_numberToHex(tones.tone(90)),
        luminance80: color_utils_numberToHex(tones.tone(80)),
        luminance70: color_utils_numberToHex(tones.tone(70)),
        luminance60: color_utils_numberToHex(tones.tone(60)),
        luminance50: color_utils_numberToHex(tones.tone(50)),
        luminance40: color_utils_numberToHex(tones.tone(40)),
        luminance35: color_utils_numberToHex(tones.tone(35)),
        luminance30: color_utils_numberToHex(tones.tone(30)),
        luminance25: color_utils_numberToHex(tones.tone(25)),
        luminance20: color_utils_numberToHex(tones.tone(20)),
        luminance10: color_utils_numberToHex(tones.tone(10)),
        luminance0: color_utils_numberToHex(tones.tone(0))
    };
}
export function tonal_group_convertTonalGroupToMap(prefix, group) {
    const map = new Map();
    map.set(`${prefix}-100`, group.luminance100);
    map.set(`${prefix}-99`, group.luminance99);
    map.set(`${prefix}-98`, group.luminance98);
    map.set(`${prefix}-95`, group.luminance95);
    map.set(`${prefix}-90`, group.luminance90);
    map.set(`${prefix}-80`, group.luminance80);
    map.set(`${prefix}-70`, group.luminance70);
    map.set(`${prefix}-60`, group.luminance60);
    map.set(`${prefix}-50`, group.luminance50);
    map.set(`${prefix}-40`, group.luminance40);
    map.set(`${prefix}-35`, group.luminance35);
    map.set(`${prefix}-30`, group.luminance30);
    map.set(`${prefix}-25`, group.luminance25);
    map.set(`${prefix}-20`, group.luminance20);
    map.set(`${prefix}-10`, group.luminance10);
    map.set(`${prefix}-0`, group.luminance0);
    return map;
}
export const defaults_COLORS_3P = {
    seed: '#6750A4',
    primary: '#6750A4',
    secondary: '#625B71',
    tertiary: '#7D5260',
    neutral: '#605D62',
    neutralVariant: '#605D66',
    error: '#BA1B1B'
};
export const defaults_COLORS_1P = {
    seed: '#0B57D0',
    primary: '#0B57D0',
    secondary: '#00639B',
    tertiary: '#146C2E',
    neutral: '#5E5E5E',
    neutralVariant: '#585F65',
    error: '#BA1B1B'
};
function safeUrlBuildersFromBlob(
    e
) {
    return URL.createObjectURL(e);
}
function indexUnwrapSafeUrl(e) {
    return e;
}
async function image_utils_decodeToImageData(
    e
) {
    const t =
            safeUrlBuildersFromBlob(
                new Blob([e], { type: "image/png" })
            ),
        n = await new Promise((e, n) => {
            const r = new Image();
            (r.onload = () => {
                e(r);
            }),
                (r.onerror = () => {
                    n();
                }),
                (r.src =
                    indexUnwrapSafeUrl(
                        t
                    ));
        }),
        r = document.createElement("canvas").getContext("2d");
    return (
        (r.canvas.width = 112),
        (r.canvas.height = 112),
        r.drawImage(
            n,
            0,
            0,
            n.width,
            n.height,
            0,
            0,
            r.canvas.width,
            r.canvas.height
        ),
        r.getImageData(0, 0, n.width, n.height)
    );
}
// The user of the api has to implement decodeImageData
export async function image_utils_bufferToPixels(buffer) {
    const imageBytes = new Uint8Array(buffer), imageData = await image_utils_decodeToImageData(imageBytes), pixels = [];
    for (let i = 0; i < imageData.data.length; i += 4)
        255 > imageData.data[i + 3] || pixels.push(intFromRgb([
            imageData.data[i],
            imageData.data[i + 1],
            imageData.data[i + 2]
        ]));
    return pixels;
}
// The user of the api has to implement decodeImageData
export async function index_seedFromImage(image) {
    const imageBuffer = 'string' === typeof image ? await (await fetch(image)).arrayBuffer() : image;
    var pixels = await image_utils_bufferToPixels(imageBuffer), quantizer = new QuantizerWu(), JSCompiler__a;
    quantizer.weights = Array.from({ length: 35937 }).fill(0);
    quantizer.momentsR = Array.from({ length: 35937 }).fill(0);
    quantizer.momentsG = Array.from({ length: 35937 }).fill(0);
    quantizer.momentsB = Array.from({ length: 35937 }).fill(0);
    quantizer.moments = Array.from({ length: 35937 }).fill(0);
    var JSCompiler__a$jscomp$0;
    const countByColor = new Map();
    for (let i = 0; i < pixels.length; i++) {
        const pixel = pixels[i];
        255 > (pixel & 0xff000000) >> 24 >>> 0 || countByColor.set(pixel, (null !== (JSCompiler__a$jscomp$0 = countByColor.get(pixel)) && void 0 !== JSCompiler__a$jscomp$0 ? JSCompiler__a$jscomp$0 : 0) + 1);
    }
    for (const [pixel__tsickle_destructured_1, count__tsickle_destructured_2] of countByColor.entries()) {
        const pixel = pixel__tsickle_destructured_1, count = count__tsickle_destructured_2, red = (pixel & 16711680) >> 16, green = (pixel & 65280) >> 8, blue = pixel & 255, index = QuantizerWu.getIndex((red >> 3) + 1, (green >> 3) + 1, (blue >> 3) + 1);
        quantizer.weights[index] = (null !== (JSCompiler__a = quantizer.weights[index]) && void 0 !== JSCompiler__a ? JSCompiler__a : 0) + count;
        quantizer.momentsR[index] += count * red;
        quantizer.momentsG[index] += count * green;
        quantizer.momentsB[index] += count * blue;
        quantizer.moments[index] += count * (red * red + green * green + blue * blue);
    }
    for (let r = 1; 33 > r; r++) {
        const area = Array.from({ length: 33 }).fill(0), areaR = Array.from({ length: 33 }).fill(0), areaG = Array.from({ length: 33 }).fill(0), areaB = Array.from({ length: 33 }).fill(0), area2 = Array.from({ length: 33 }).fill(0);
        for (let g = 1; 33 > g; g++) {
            let line = 0, lineR = 0, lineG = 0, lineB = 0, line2 = 0;
            for (let b = 1; 33 > b; b++) {
                const index = QuantizerWu.getIndex(r, g, b);
                line += quantizer.weights[index];
                lineR += quantizer.momentsR[index];
                lineG += quantizer.momentsG[index];
                lineB += quantizer.momentsB[index];
                line2 += quantizer.moments[index];
                area[b] += line;
                areaR[b] += lineR;
                areaG[b] += lineG;
                areaB[b] += lineB;
                area2[b] += line2;
                const previousIndex = QuantizerWu.getIndex(r - 1, g, b);
                quantizer.weights[index] = quantizer.weights[previousIndex] + area[b];
                quantizer.momentsR[index] = quantizer.momentsR[previousIndex] + areaR[b];
                quantizer.momentsG[index] = quantizer.momentsG[previousIndex] + areaG[b];
                quantizer.momentsB[index] = quantizer.momentsB[previousIndex] + areaB[b];
                quantizer.moments[index] = quantizer.moments[previousIndex] + area2[b];
            }
        }
    }
    var colorCount = quantizer.createBoxes().resultCount;
    const colors = [];
    for (let i = 0; i < colorCount; ++i) {
        const cube = quantizer.cubes[i], weight = quantizer.volume(cube, quantizer.weights);
        if (0 < weight) {
            const r = Math.round(quantizer.volume(cube, quantizer.momentsR) / weight), g = Math.round(quantizer.volume(cube, quantizer.momentsG) / weight), b = Math.round(quantizer.volume(cube, quantizer.momentsB) / weight);
            colors.push(-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255);
        }
    }
    const pixelToCount = new Map(), points = [], pixels$jscomp$0 = [], pointProvider = new LabPointProvider();
    let pointCount = 0;
    for (let i = 0; i < pixels.length; i++) {
        const inputPixel = pixels[i], pixelCount = pixelToCount.get(inputPixel);
        void 0 === pixelCount ? (pointCount++, points.push(labFromInt(inputPixel)), pixels$jscomp$0.push(inputPixel), pixelToCount.set(inputPixel, 1)) : pixelToCount.set(inputPixel, pixelCount + 1);
    }
    const counts = [];
    for (let i = 0; i < pointCount; i++) {
        const count = pixelToCount.get(pixels$jscomp$0[i]);
        void 0 !== count && (counts[i] = count);
    }
    let clusterCount = Math.min(256, pointCount);
    0 < colors.length && (clusterCount = Math.min(clusterCount, colors.length));
    const clusters = [];
    for (let i = 0; i < colors.length; i++)
        clusters.push(labFromInt(colors[i]));
    const additionalClustersNeeded = clusterCount - clusters.length;
    if (0 === colors.length && 0 < additionalClustersNeeded)
        for (let i = 0; i < additionalClustersNeeded; i++)
            clusters.push([
                100 * Math.random(),
                201 * Math.random() + -100,
                201 * Math.random() + -100
            ]);
    const clusterIndices = [];
    for (let i = 0; i < pointCount; i++)
        clusterIndices.push(Math.floor(Math.random() * clusterCount));
    const indexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
        indexMatrix.push([]);
        for (let j = 0; j < clusterCount; j++)
            indexMatrix[i].push(0);
    }
    const distanceToIndexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
        distanceToIndexMatrix.push([]);
        for (let j = 0; j < clusterCount; j++)
            distanceToIndexMatrix[i].push(new quantizer_wsmeans_DistanceAndIndex());
    }
    const pixelCountSums = [];
    for (let i = 0; i < clusterCount; i++)
        pixelCountSums.push(0);
    for (let iteration = 0; 10 > iteration; iteration++) {
        for (let i = 0; i < clusterCount; i++) {
            for (let j = i + 1; j < clusterCount; j++) {
                const distance = pointProvider.distance(clusters[i], clusters[j]);
                distanceToIndexMatrix[j][i].distance = distance;
                distanceToIndexMatrix[j][i].index = i;
                distanceToIndexMatrix[i][j].distance = distance;
                distanceToIndexMatrix[i][j].index = j;
            }
            distanceToIndexMatrix[i].sort();
            for (let j = 0; j < clusterCount; j++)
                indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
        }
        let pointsMoved = 0;
        for (let i = 0; i < pointCount; i++) {
            const point = points[i], previousClusterIndex = clusterIndices[i], previousDistance = pointProvider.distance(point, clusters[previousClusterIndex]);
            let minimumDistance = previousDistance, newClusterIndex = -1;
            for (let j = 0; j < clusterCount; j++) {
                if (distanceToIndexMatrix[previousClusterIndex][j].distance >= 4 * previousDistance)
                    continue;
                const distance = pointProvider.distance(point, clusters[j]);
                distance < minimumDistance && (minimumDistance = distance, newClusterIndex = j);
            }
            -1 !== newClusterIndex && 3 < Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)) && (pointsMoved++, clusterIndices[i] = newClusterIndex);
        }
        if (0 === pointsMoved && 0 !== iteration)
            break;
        const componentASums = Array(clusterCount).fill(0), componentBSums = Array(clusterCount).fill(0), componentCSums = Array(clusterCount).fill(0);
        for (let i = 0; i < clusterCount; i++)
            pixelCountSums[i] = 0;
        for (let i = 0; i < pointCount; i++) {
            const clusterIndex = clusterIndices[i], point = points[i], count = counts[i];
            pixelCountSums[clusterIndex] += count;
            componentASums[clusterIndex] += point[0] * count;
            componentBSums[clusterIndex] += point[1] * count;
            componentCSums[clusterIndex] += point[2] * count;
        }
        for (let i = 0; i < clusterCount; i++) {
            const count = pixelCountSums[i];
            clusters[i] = 0 === count ? [
                0,
                0,
                0
            ] : [
                componentASums[i] / count,
                componentBSums[i] / count,
                componentCSums[i] / count
            ];
        }
    }
    const argbToPopulation = new Map();
    for (let i = 0; i < clusterCount; i++) {
        const count = pixelCountSums[i];
        if (0 === count)
            continue;
        const possibleNewCluster = pointProvider.toInt(clusters[i]);
        argbToPopulation.has(possibleNewCluster) || argbToPopulation.set(possibleNewCluster, count);
    }
    const ranked = score(argbToPopulation);
    return hexFromInt(ranked[0]);
}
