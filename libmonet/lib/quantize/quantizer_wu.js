'use strict';
import * as quantize from './quantizer'
export class QuantizerWu {
    constructor() {
        this.weights = [];
        this.momentsR = [];
        this.momentsG = [];
        this.momentsB = [];
        this.moments = [];
        this.cubes = [];
    }
    volume(cube, moment) {
        return moment[QuantizerWu.getIndex(cube.r1, cube.g1, cube.b1)] - moment[QuantizerWu.getIndex(cube.r1, cube.g1, cube.b0)] - moment[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b1)] + moment[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b0)] - moment[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b1)] + moment[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b0)] + moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b1)] - moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b0)];
    }
    bottom(cube, direction, moment) {
        switch (direction) {
            case 'red':
                return -moment[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b1)] + moment[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b0)] + moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b1)] - moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b0)];
            case 'green':
                return -moment[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b1)] + moment[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b0)] + moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b1)] - moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b0)];
            case 'blue':
                return -moment[QuantizerWu.getIndex(cube.r1, cube.g1, cube.b0)] + moment[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b0)] + moment[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b0)] - moment[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b0)];
            default:
                throw Error('unexpected direction $direction');
        }
    }
    top(cube, direction, position, moment) {
        switch (direction) {
            case 'red':
                return moment[QuantizerWu.getIndex(position, cube.g1, cube.b1)] - moment[QuantizerWu.getIndex(position, cube.g1, cube.b0)] - moment[QuantizerWu.getIndex(position, cube.g0, cube.b1)] + moment[QuantizerWu.getIndex(position, cube.g0, cube.b0)];
            case 'green':
                return moment[QuantizerWu.getIndex(cube.r1, position, cube.b1)] - moment[QuantizerWu.getIndex(cube.r1, position, cube.b0)] - moment[QuantizerWu.getIndex(cube.r0, position, cube.b1)] + moment[QuantizerWu.getIndex(cube.r0, position, cube.b0)];
            case 'blue':
                return moment[QuantizerWu.getIndex(cube.r1, cube.g1, position)] - moment[QuantizerWu.getIndex(cube.r1, cube.g0, position)] - moment[QuantizerWu.getIndex(cube.r0, cube.g1, position)] + moment[QuantizerWu.getIndex(cube.r0, cube.g0, position)];
            default:
                throw Error('unexpected direction $direction');
        }
    }

    maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
        const bottomR = this.bottom(cube, direction, this.momentsR), bottomG = this.bottom(cube, direction, this.momentsG), bottomB = this.bottom(cube, direction, this.momentsB), bottomW = this.bottom(cube, direction, this.weights);
        let max = 0, cut = -1, halfR, halfG, halfB, halfW;
        for (let i = first; i < last; i++) {
            halfR = bottomR + this.top(cube, direction, i, this.momentsR);
            halfG = bottomG + this.top(cube, direction, i, this.momentsG);
            halfB = bottomB + this.top(cube, direction, i, this.momentsB);
            halfW = bottomW + this.top(cube, direction, i, this.weights);
            if (0 === halfW)
                continue;
            let tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB, tempDenominator = 1 * halfW, temp = tempNumerator / tempDenominator;
            halfR = wholeR - halfR;
            halfG = wholeG - halfG;
            halfB = wholeB - halfB;
            halfW = wholeW - halfW;
            0 !== halfW && (tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB, tempDenominator = 1 * halfW, temp += tempNumerator / tempDenominator, temp > max && (max = temp, cut = i));
        }
        return new quantize.quantizer_wu_MaximizeResult(cut, max);
    };
    cut(one, two) {
        const wholeR = this.volume(one, this.momentsR), wholeG = this.volume(one, this.momentsG), wholeB = this.volume(one, this.momentsB), wholeW = this.volume(one, this.weights), maxRResult = this.maximize(one, 'red', one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW), maxGResult = this.maximize(one, 'green', one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW), maxBResult = this.maximize(one, 'blue', one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
        let direction;
        const maxR = maxRResult.maximum, maxG = maxGResult.maximum, maxB = maxBResult.maximum;
        if (maxR >= maxG && maxR >= maxB) {
            if (0 > maxRResult.cutLocation)
                return false;
            direction = 'red';
        } else
            direction = maxG >= maxR && maxG >= maxB ? 'green' : 'blue';
        two.r1 = one.r1;
        two.g1 = one.g1;
        two.b1 = one.b1;
        switch (direction) {
            case 'red':
                one.r1 = maxRResult.cutLocation;
                two.r0 = one.r1;
                two.g0 = one.g0;
                two.b0 = one.b0;
                break;
            case 'green':
                one.g1 = maxGResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g1;
                two.b0 = one.b0;
                break;
            case 'blue':
                one.b1 = maxBResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g0;
                two.b0 = one.b1;
                break;
            default:
                throw Error('unexpected direction ' + direction);
        }
        one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
        two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
        return true;
    };
    variance(cube) {
        const dr = this.volume(cube, this.momentsR), dg = this.volume(cube, this.momentsG), db = this.volume(cube, this.momentsB), xx = this.moments[QuantizerWu.getIndex(cube.r1, cube.g1, cube.b1)] - this.moments[QuantizerWu.getIndex(cube.r1, cube.g1, cube.b0)] - this.moments[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b1)] + this.moments[QuantizerWu.getIndex(cube.r1, cube.g0, cube.b0)] - this.moments[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b1)] + this.moments[QuantizerWu.getIndex(cube.r0, cube.g1, cube.b0)] + this.moments[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b1)] - this.moments[QuantizerWu.getIndex(cube.r0, cube.g0, cube.b0)], hypotenuse = dr * dr + dg * dg + db * db, volume = this.volume(cube, this.weights);
        return xx - hypotenuse / volume;
    };
    createBoxes() {
        this.cubes = Array.from({ length: 256 }).fill(0).map(() => new quantize.quantizer_wu_Box());
        const volumeVariance = Array.from({ length: 256 }).fill(0);
        this.cubes[0].r0 = 0;
        this.cubes[0].g0 = 0;
        this.cubes[0].b0 = 0;
        this.cubes[0].r1 = 32;
        this.cubes[0].g1 = 32;
        this.cubes[0].b1 = 32;
        let generatedColorCount = 256, next = 0;
        for (let i = 1; 256 > i; i++) {
            this.cut(this.cubes[next], this.cubes[i]) ? (volumeVariance[next] = 1 < this.cubes[next].vol ? this.variance(this.cubes[next]) : 0, volumeVariance[i] = 1 < this.cubes[i].vol ? this.variance(this.cubes[i]) : 0) : (volumeVariance[next] = 0, i--);
            next = 0;
            let temp = volumeVariance[0];
            for (let j = 1; j <= i; j++)
                volumeVariance[j] > temp && (temp = volumeVariance[j], next = j);
            if (0 >= temp) {
                generatedColorCount = i + 1;
                break;
            }
        }
        return new quantize.quantizer_wu_CreateBoxesResult(generatedColorCount);
    };
};

QuantizerWu.getIndex = function (r, g, b) {
    return (r << 10) + (r << 6) + r + (g << 5) + g + b;
};
