function main() {
    const mainSection = document.querySelector( '#main-section' );
    const elements = [
        { tag: 'p', text: 'Frase 1' },
        { tag: 'div', text: 'Frase 2' },
        { tag: 'footer', text: 'Frase 3' },
        { tag: 'section', text: 'Frase 4' }
    ];

    function createElement( element ) {
        return document.createElement( element );
    }

    function createText( content ) {
        return document.createTextNode( content );
    }

    function setElements() {
        const newDiv = document.querySelector( '#result' );

        for( let i = 0; i < elements.length; i++ ) {
            let { tag, text } = elements[ i ];  // isso é igual a: let tag = elements[ i ].tag; let text = elements[ i ].text };
            const newElement = createElement( tag );
            const newElementText = createText( text );
            newElement.appendChild( newElementText );
            newDiv.appendChild( newElement );
        }
    }

    function resultDiv() {
        const newDiv = createElement( 'div' );
        newDiv.setAttribute( 'id', 'result' );
        mainSection.appendChild( newDiv );
    }

    resultDiv();
    setElements();
} 

main()
