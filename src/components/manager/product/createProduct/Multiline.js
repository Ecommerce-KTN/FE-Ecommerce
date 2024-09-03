import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined, FormatListBulleted, Link as LinkIcon } from '@mui/icons-material';

function Multiline ( { value, onChange } )
{
  const [ anchorPosition, setAnchorPosition ] = useState( null );
  const [ charCount, setCharCount ] = useState( value.length );
  const [ isBold, setIsBold ] = useState( false );
  const [ isItalic, setIsItalic ] = useState( false );
  const [ isUnderline, setIsUnderline ] = useState( false );
  const [ isList, setIsList ] = useState( false );
  const containerRef = useRef( null );
  const editorRef = useRef( null );
  const maxChars = 1000;

  // Sync content with state
  useEffect( () =>
  {
    if ( editorRef.current )
    {
      editorRef.current.innerHTML = value;
    }
  }, [ value ] );

  const handleMouseUp = ( e ) =>
  {
    const selection = window.getSelection();
    if ( selection && !selection.isCollapsed )
    {
      const range = selection.getRangeAt( 0 );
      const rect = range.getBoundingClientRect();

      const containerRect = containerRef.current.getBoundingClientRect();

      const editorWidth = 220;
      const editorHeight = 40;

      let editorTop = rect.top - containerRect.top > editorHeight
        ? rect.top - containerRect.top - editorHeight
        : rect.bottom - containerRect.top + 10;
      let editorLeft = rect.left - containerRect.left + rect.width / 2 - editorWidth / 2;

      if ( editorLeft + editorWidth > containerRect.width )
      {
        editorLeft = containerRect.width - editorWidth - 10;
      }

      if ( editorLeft < 10 )
      {
        editorLeft = 10;
      }

      if ( editorTop < 10 )
      {
        editorTop = rect.bottom - containerRect.top + 10;
      }

      if ( editorTop + editorHeight > containerRect.height )
      {
        editorTop = rect.top - containerRect.top - editorHeight - 10;
      }

      setAnchorPosition( { top: editorTop, left: editorLeft } );

      setIsBold( document.queryCommandState( 'bold' ) );
      setIsItalic( document.queryCommandState( 'italic' ) );
      setIsUnderline( document.queryCommandState( 'underline' ) );
      setIsList( document.queryCommandState( 'insertUnorderedList' ) );
    } else
    {
      setAnchorPosition( null );
    }
  };

  const handleFormatText = ( command ) =>
  {
    document.execCommand( command, false, null );
    setIsBold( document.queryCommandState( 'bold' ) );
    setIsItalic( document.queryCommandState( 'italic' ) );
    setIsUnderline( document.queryCommandState( 'underline' ) );
    setIsList( document.queryCommandState( 'insertUnorderedList' ) );
  };

  const handleCreateLink = () =>
  {
    const url = prompt( 'Enter URL:' );
    if ( url )
    {
      document.execCommand( 'createLink', false, url );
    }
  };

  const handleInput = ( e ) =>
  {
    const text = e.currentTarget.textContent || '';
    if ( text.length <= maxChars )
    {
      setCharCount( text.length );
      onChange( text );
    } else
    {
      const truncatedText = text.slice( 0, maxChars );
      e.currentTarget.textContent = truncatedText;
      setCharCount( maxChars );
      onChange( truncatedText );
    }
  };

  // Ensure only React handles the content
  const handleBlur = () =>
  {
    const text = editorRef.current.textContent;
    if ( text.length > maxChars )
    {
      const truncatedText = text.slice( 0, maxChars );
      editorRef.current.textContent = truncatedText;
      setCharCount( maxChars );
      onChange( truncatedText );
    }
  };

  return (
    <div ref={ containerRef } style={ { position: 'relative' } }>
      <div
        ref={ editorRef }
        contentEditable
        onInput={ handleInput }
        onMouseUp={ handleMouseUp }
        onBlur={ handleBlur }
        style={ {
          width: '95%',
          height: '150px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflowY: 'auto',
          whiteSpace: 'pre-wrap',
        } }
      >
      </div>
      <Typography variant="caption" color={ charCount >= maxChars ? 'red' : 'black' }>
        { charCount }/{ maxChars } characters
      </Typography>
      { anchorPosition && (
        <div
          style={ {
            position: 'absolute',
            top: anchorPosition.top,
            left: anchorPosition.left,
            backgroundColor: '#f0f0f0',
            padding: '5px',
            borderRadius: '4px',
            display: 'flex',
            gap: '5px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
          } }
        >
          <IconButton size="small" style={ { backgroundColor: isBold ? '#d3d3d3' : 'transparent' } } onClick={ () => handleFormatText( 'bold' ) }>
            <FormatBold />
          </IconButton>
          <IconButton size="small" style={ { backgroundColor: isItalic ? '#d3d3d3' : 'transparent' } } onClick={ () => handleFormatText( 'italic' ) }>
            <FormatItalic />
          </IconButton>
          <IconButton size="small" style={ { backgroundColor: isUnderline ? '#d3d3d3' : 'transparent' } } onClick={ () => handleFormatText( 'underline' ) }>
            <FormatUnderlined />
          </IconButton>
          <IconButton size="small" style={ { backgroundColor: isList ? '#d3d3d3' : 'transparent' } } onClick={ () => handleFormatText( 'insertUnorderedList' ) }>
            <FormatListBulleted />
          </IconButton>
          <IconButton size="small" onClick={ handleCreateLink }>
            <LinkIcon />
          </IconButton>
        </div>
      ) }
    </div>
  );
}

export default Multiline;
