function underscoreAnim() {
    const underscoreTitle = document.querySelector( '.underscore-std' );
    const underscoreHover = [ ...document.querySelectorAll( '.underscore-hover' ) ];
    const linkBtn = [ ...document.querySelectorAll( '.link-btn' ) ];
    const nbspSpan = [ ...document.querySelectorAll( '.hidden-nbsp-span' ) ];

    let intervalBtn = null;
    let intervalTitle = null;

    function setIntervalTitle() {
        intervalTitle = setInterval( () => underscoreTitle.classList.toggle( 'underscore-std' ), 530 );
        return intervalTitle;
    }

    function setIntervalBtn( index ) {
        intervalBtn = setInterval( () => underscoreHover[ index ].classList.toggle( 'underscore-hover' ), 530 );
        return intervalBtn;
    }

    function nbspChange( index ) {
        const nbsp = nbspSpan [ index ];
        if( nbsp.style.display != 'inline')
            nbsp.style.display = 'inline';
        else
            nbsp.style.display = 'none';
    }

    function hoverBtnAnim( index ) {
        linkBtn[ index ].addEventListener( 'mouseover', () => {
            nbspChange( index );
            setIntervalBtn( index );
            clearInterval( intervalTitle );
        } );
        linkBtn[ index ].addEventListener( 'mouseout', () => {
            nbspChange( index );
            clearInterval( intervalBtn );
            underscoreHover[ index ].classList = 'underscore-hover';
        } );
    }

    function clearAnimOnClick( index ) {
        linkBtn[ index ].addEventListener( 'click', () => {
            nbspChange( index );
            clearInterval( intervalBtn );
            underscoreHover[ index ].classList = 'underscore-hover';
        } );
    }

    for( let i = 0; i < linkBtn.length; i++ ) {
        hoverBtnAnim( i );
        clearAnimOnClick( i );
    }

    setIntervalTitle();
}

function preventAnchorHref() {
    const anchorMobile = document.querySelectorAll( '.anchor-mobile' );

    function screenWidthCheck() {
        if( window.innerWidth < 1200) {
            for( i = 0; i < anchorMobile.length; i++ ) {
                anchorMobile[ i ].addEventListener( 'click', (e) => e.preventDefault() );
            }
        }
    }

    screenWidthCheck();
}

underscoreAnim();
preventAnchorHref();
