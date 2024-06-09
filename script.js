function updateStyle() {
    const display = document.getElementById('display').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const borderRadius = document.getElementById('border-radius').value;
    const outline = document.getElementById('outline').value;
    const borderWidth = document.getElementById('border-width').value;
    const borderStyle = document.getElementById('border-style').value;
    const borderColor = document.getElementById('border-color').value;
    const backgroundColor = document.getElementById('background-color').value;
    const cursor = document.getElementById('cursor').value;

    let cssCode = `
.button {
    margin: auto;
    display: ${display};
    width: ${width}px;
    height: ${height}px;
    border-radius: ${borderRadius}px;
    outline: ${outline}px solid;
    border: ${borderWidth}px ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};
    cursor: ${cursor};
`;

    if (display === 'flex') {
        const alignItems = document.getElementById('align-items').value;
        const justifyContent = document.getElementById('justify-content').value;
        cssCode += `
    align-items: ${alignItems};
    justify-content: ${justifyContent};
`;
        document.getElementById('flex-options').style.display = 'block';
        document.getElementById('grid-options').style.display = 'none';
    } else if (display === 'grid') {
        const gridTemplate = document.getElementById('grid-template').value;
        const columnGap = document.getElementById('column-gap-value').value;
        const rowGap = document.getElementById('row-gap-value').value;
        const gridRowStart = document.getElementById('grid-row-start').value;
        const gridRowEnd = document.getElementById('grid-row-end').value;
        const gridColumnStart = document.getElementById('grid-column-start').value;
        const gridColumnEnd = document.getElementById('grid-column-end').value;

        cssCode += `
    grid-template-${gridTemplate}: ${gridTemplate};
    ${gridTemplate === 'column' ? `column-gap: ${columnGap}px;` : `row-gap: ${rowGap}px;`}
    grid-row: ${gridRowStart} / ${gridRowEnd};
    grid-column: ${gridColumnStart} / ${gridColumnEnd};
`;
        document.getElementById('grid-options').style.display = 'block';
        document.getElementById('flex-options').style.display = 'none';

        document.getElementById('column-gap').style.display = gridTemplate === 'column' ? 'block' : 'none';
        document.getElementById('row-gap').style.display = gridTemplate === 'row' ? 'block' : 'none';
    }

    cssCode += '\n}';
    document.getElementById('css-code').innerText = cssCode;

    // Apply styles to the sample button
    const button = document.querySelector('.button');
    button.style.margin = 'auto';
    button.style.display = display;
    button.style.width = `${width}px`;
    button.style.height = `${height}px`;
    button.style.borderRadius = `${borderRadius}px`;
    button.style.outline = `${outline}px solid`;
    button.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
    button.style.backgroundColor = backgroundColor;
    button.style.cursor = cursor;

    if (display === 'flex') {
        button.style.alignItems = document.getElementById('align-items').value;
        button.style.justifyContent = document.getElementById('justify-content').value;
    } else if (display === 'grid') {
        button.style.gridTemplate = gridTemplate;
        if (gridTemplate === 'column') {
            button.style.columnGap = `${columnGap}px`;
        } else {
            button.style.rowGap = `${rowGap}px`;
        }
        button.style.gridRow = `${gridRowStart} / ${gridRowEnd}`;
        button.style.gridColumn = `${gridColumnStart} / ${gridColumnEnd}`;
    }

    // Store CSS code in local storage for the next page
    localStorage.setItem('buttonCSS', cssCode);
}

function goToAnimationPage() {
    window.location.href = 'animation.html';
}

// Initialize with default styles
updateStyle();
