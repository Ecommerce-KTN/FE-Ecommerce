import React, { useState, useRef } from 'react';
import { IconButton, Typography } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined, FormatListBulleted, Link as LinkIcon } from '@mui/icons-material';

function Multiline() {
  const [anchorPosition, setAnchorPosition] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const editorRef = useRef(null);
  const maxChars = 1000;

  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      const editorTop = rect.top > 40 ? rect.top - 40 : rect.bottom + 10;

      setAnchorPosition({
        top: editorTop,
        left: rect.left + rect.width / 2,
      });
    } else {
      setAnchorPosition(null);
    }
  };

  const handleFormatText = (command) => {
    document.execCommand(command, false, null);
  };

  const handleCreateLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
  };

  const handleInput = (e) => {
    const text = e.currentTarget.textContent || '';
    if (text.length <= maxChars) {
      setCharCount(text.length);
    } else {
      const truncatedText = text.slice(0, maxChars);
      e.currentTarget.textContent = truncatedText;
      setCharCount(maxChars);
    }
  };

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onMouseUp={handleMouseUp}
        style={{
          width: '95%',
          height: '150px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflowY: 'auto',
        }}
      ></div>
      <Typography variant="caption" color={charCount >= maxChars ? 'red' : 'black'}>
        {charCount}/{maxChars} characters
      </Typography>
      {anchorPosition && (
        <div
          style={{
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
          }}
        >
          <IconButton size="small" onClick={() => handleFormatText('bold')}>
            <FormatBold />
          </IconButton>
          <IconButton size="small" onClick={() => handleFormatText('italic')}>
            <FormatItalic />
          </IconButton>
          <IconButton size="small" onClick={() => handleFormatText('underline')}>
            <FormatUnderlined />
          </IconButton>
          <IconButton size="small" onClick={() => handleFormatText('insertUnorderedList')}>
            <FormatListBulleted />
          </IconButton>
          <IconButton size="small" onClick={handleCreateLink}>
<LinkIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default Multiline;