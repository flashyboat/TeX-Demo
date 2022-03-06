document.getElementById('eqn').addEventListener("input", () => {
    document.getElementById('eqnDisplay').innerHTML = `<div> $$ ${document.getElementById('eqn').value} $$</dvi>`;
    renderMathInElement(document.getElementById('eqnDisplay'), {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        // • rendering keys, e.g.:
        throwOnError: false
    });
});