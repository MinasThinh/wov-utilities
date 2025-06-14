const n = 16;
const parent = Array.from({ length: n }, (_, i) => i);
const color = Array(n).fill(0);
const relations = [];

function find(u) {
    if (parent[u] !== u) {
        const root = find(parent[u]);
        color[u] ^= color[parent[u]];
        parent[u] = root;
    }
    return parent[u];
}

export function setDS(a, b, sign) {
    const same = sign === "=" ? 0 : 1;
    const ra = find(a);
    const rb = find(b);
    if (ra === rb) return (color[a] ^ color[b]) === same;

    parent[rb] = ra;
    color[rb] = color[a] ^ color[b] ^ same;
    relations.push([a, b, same]);
    return true;
}

export function getDS(a, b) {
    if (find(a) !== find(b)) return "?";
    return (color[a] ^ color[b]) === 0 ? "=" : "#";
}

export function analyzeDS() {
    for (let i = 0; i < n; ++i) {
        parent[i] = i;
        color[i] = 0;
    }
    for (const [a, b, same] of relations) {
        setDS(a, b, same === 0 ? "=" : "#");
    }
}
