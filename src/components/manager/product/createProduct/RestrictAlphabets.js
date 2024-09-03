

function restrictAlphabets ( e, inputValue )
{
  const x = e.which || e.keycode;
  const hasDot = inputValue.includes( '.' );
  if ( x === 8 || x === 46 || ( x >= 48 && x <= 57 ) || ( x === 190 && !hasDot ) )
  {
    return true;
  } else
  {
    e.preventDefault();
  }
}

export default restrictAlphabets;
