import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis',
    pure: false
})

export class EllipsisPipe implements PipeTransform {

    /**
     * If no text: displays placehoder
     * If text exists and number max of chars not defined, returns text
     * If text exists and number max of chars defined but text is not long enough, returns text
     * If text exists and number max of chars defined and text is longer, returns sliced text with an ellipsis
     *
     * @param val
     * @param maxChar
     * @returns {string}
     */
    transform(val, maxChar): string {
        if (val) {
            return maxChar === undefined ?
                val : val.length > maxChar ?
                    val.substring(0, maxChar) + '...' : val;
        } else {
            return 'No description'
        }
    }

}
