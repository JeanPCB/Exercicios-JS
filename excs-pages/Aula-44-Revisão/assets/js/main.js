function main() {
    const form = document.querySelector('form');

    const newDiv = createElement( 'div');
    newDiv.setAttribute( 'id', 'resultado');
    form.appendChild( newDiv );

    form.addEventListener( 'submit', ( e ) => {
        e.preventDefault();
        
        const inputPeso = e.target.querySelector('#input-peso');
        const inputAltura = e.target.querySelector('#input-altura');
        const peso = Number(inputPeso.value.replace(/[,]/g, '.'));
        const altura = Number(inputAltura.value.replace(/[,]/g, '.'));

        if( !peso ) {
            setResult( 'Peso Inválido!', false );
            return;
        }

        if( !altura ) {
            setResult( 'Altura Inválida!', false );
            return;
        }

        const imc = calcImc( peso, altura ).toFixed(2);
        const nivelImc = getNivelImc( imc );
        const msg = `Seu IMC é ${ imc } (${ nivelImc }).`;

        function newParagraph() {
            const newP = createElement( 'p' );
            return newP;
        }

        function calcImc( peso, altura ) {
            return peso / altura ** 2;
        }

        function setResult( msg, isValid ) {
            const p = newParagraph();
            const resultado = form.querySelector( '#resultado' );
            resultado.innerHTML = '';

            p.classList.add( 'p-resultado' );

            if( isValid )
                p.classList.add( 'resultado-valido' );
            else 
                p.classList.add( 'resultado-invalido' );

            p.innerHTML = msg;
            resultado.appendChild( p );
        }

        function getNivelImc( imc ) {
            const nivelImc = [ 'Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III' ];

            if( imc > 39.9 ) return nivelImc[ 5 ];
            if( imc > 34.9 ) return nivelImc[ 4 ];
            if( imc > 29.9 ) return nivelImc[ 3 ];
            if( imc > 24.9 ) return nivelImc[ 2 ];
            if( imc >= 18.5 ) return nivelImc[ 1 ];
            if( imc < 18.5 ) return nivelImc[ 0 ];
        }

        setResult( msg, true );
    } );

    function createElement( element ) {
        return document.createElement( element );
    }
    
}

main()