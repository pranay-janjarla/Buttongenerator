function updateStyle() {
    const button = document.querySelector('.button');
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

    button.style.display = display;
    button.style.width = `${width}px`;
    button.style.height = `${height}px`;
    button.style.borderRadius = `${borderRadius}px`;
    button.style.outline = `${outline}px solid`;
    button.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
    button.style.backgroundColor = backgroundColor;
    button.style.cursor = cursor;

    let cssCode = `.button {
    margin: auto;
    display: ${display};
    width: ${width}px;
    height: ${height}px;
    border-radius: ${borderRadius}px;
    outline: ${outline}px solid;
    border: ${borderWidth}px ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};
    cursor: ${cursor};
}`;

    if (display === 'flex') {
        const alignItems = document.getElementById('align-items').value;
        const justifyContent = document.getElementById('justify-content').value;
        button.style.alignItems = alignItems;
        button.style.justifyContent = justifyContent;

        cssCode += `
    align-items: ${alignItems};
    justify-content: ${justifyContent};
}`;
    } else {
        const gridTemplate = document.getElementById('grid-template').value;
        const columnGap = document.getElementById('column-gap-value').value;
        const rowGap = document.getElementById('row-gap-value').value;
        const gridRowStart = document.getElementById('grid-row-start').value;
        const gridRowEnd = document.getElementById('grid-row-end').value;
        const gridColumnStart = document.getElementById('grid-column-start').value;
        const gridColumnEnd = document.getElementById('grid-column-end').value;

        button.style.gridTemplate = gridTemplate;
        button.style.columnGap = `${columnGap}px`;
        button.style.rowGap = `${rowGap}px`;
        button.style.gridRowStart = gridRowStart;
        button.style.gridRowEnd = gridRowEnd;
        button.style.gridColumnStart = gridColumnStart;
        button.style.gridColumnEnd = gridColumnEnd;

        cssCode += `
    grid-template: ${gridTemplate};
    column-gap: ${columnGap}px;
    row-gap: ${rowGap}px;
    grid-row-start: ${gridRowStart};
    grid-row-end: ${gridRowEnd};
    grid-column-start: ${gridColumnStart};
    grid-column-end: ${gridColumnEnd};
}`;
    }

    document.getElementById('css-code').textContent = cssCode;

    document.getElementById('flex-options').style.display = display === 'flex' ? 'block' : 'none';
    document.getElementById('grid-options').style.display = display === 'grid' ? 'block' : 'none';
    document.getElementById('column-gap').style.display = display === 'grid' ? 'block' : 'none';
    document.getElementById('row-gap').style.display = display === 'grid' ? 'block' : 'none';
}
