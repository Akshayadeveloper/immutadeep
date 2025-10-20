/**
 * @file immuta-deep.js
 * @description A micro-utility for deep, immutable object/array updates using dot notation.
 * @author Your Name
 */

export function updateDeep(source, path, value) {
    const keys = Array.isArray(path)
        ? path.map(k => (typeof k === 'number' ? k.toString() : k))
        : path.split('.');

    if (source === null || typeof source !== 'object') {
        return keys.length === 0 ? value : (isNaN(parseInt(keys[0])) ? { [keys[0]]: value } : [value]);
    }

    return keys.reduceRight((acc, key, index) => {
        const nextValue = (index === keys.length - 1) ? value : acc;

        const currentSourceParentPath = keys.slice(0, index);
        const currentSourceNode = currentSourceParentPath.reduce((obj, k) => {
            const isIndex = !isNaN(parseInt(k)) && Array.isArray(obj);
            return obj?.[isIndex ? parseInt(k) : k];
        }, source);

        const isArray = Array.isArray(currentSourceNode) || (!isNaN(parseInt(key)) && currentSourceNode === undefined);

        const newParent = isArray
            ? [...(currentSourceNode || [])]
            : { ...currentSourceNode };

        const finalKey = isArray && !isNaN(parseInt(key)) ? parseInt(key) : key;

        newParent[finalKey] = nextValue;

        return newParent;
    }, value);
}
