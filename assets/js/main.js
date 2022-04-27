function underscoreAnim() {
    const underscoreTitle = document.querySelector( '.underscore-std' );
    const underscoreHover = [ ...document.querySelectorAll( '.underscore-hover' ) ];
    const linkBtn = [ ...document.querySelectorAll( '.link-btn' ) ];

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

    function hoverBtnAnim( index ) {
        linkBtn[ index ].addEventListener( 'mouseover', () => {
            setIntervalBtn( index );
            clearInterval( intervalTitle );
        } );
        linkBtn[ index ].addEventListener( 'mouseout', () => {
            setIntervalTitle();
            clearInterval( intervalBtn );
            underscoreHover[ index ].classList = 'underscore-hover';
        } );
    }

    hoverBtnAnim( 0 );
    setIntervalTitle();
}

underscoreAnim()
