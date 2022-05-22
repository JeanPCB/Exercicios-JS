function main() {
    const divParagraphs = document.querySelector( '.paragraphs' );
    const paragraphs = divParagraphs.querySelectorAll( 'p' );
    const bodyStyle = getComputedStyle( document.body );
    const bodyBgColor = bodyStyle.backgroundColor;
    
    for( let paragraph of paragraphs ) {
        paragraph.style.backgroundColor = bodyBgColor;
        paragraph.style.color = 'white';
    }
}

main();