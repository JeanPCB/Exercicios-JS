function setDate() {
    const mainSection = document.querySelector( '#main-section' );
    const data = new Date();
    const weekDay = setWeekDay( data.getDay() );
    const day = leftZero( data.getDate() );
    const month = setMonth( data.getMonth() );
    const year = leftZero( data.getFullYear() );
    const hours = leftZero( data.getHours() );
    const minutes = leftZero( data.getMinutes() );
    const seconds = leftZero( data.getSeconds() );

    function setFullDate() {
        const resultDiv = document.querySelector( '#result' );
        const p = createElement( 'p' );
        p.textContent = getFullDate();
        resultDiv.appendChild( p );
    }

    function setFullTime() {
        const resultDiv = document.querySelector( '#result' );
        const p = createElement( 'p' );
        p.textContent = getFullTime();
        resultDiv.appendChild( p );
    }

    function getFullDate() {
        return `${ weekDay }, ${ day } de ${ month } de ${ year }`;
    }

    function getFullTime() {
        return `${ hours }:${ minutes }:${ seconds }`;
    }

/* Maneira mais sucinta ao invés de Switch */
    function setMonth( month ) {
        const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
        return months[ month ];
    }

    function setWeekDay( day ) {
        switch( day ) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
        }
    }

    function divResult() {
        const newDiv = createElement( 'div' );
        newDiv.setAttribute( 'id', 'result' );
        return mainSection.appendChild( newDiv );
    }

    function leftZero( num ) {
        return num >= 10 ? num : `0${ num }`;
    }

    function createElement( element ) {
        return document.createElement( element );
    }

    divResult();
    setFullDate();
    setFullTime();
}

setDate()