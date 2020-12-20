import React from 'react';

export const ArrowLeft = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="icon-arrow-left bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
  </>
);

export const ArrowRight = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="icon-arrow-right bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </>
);

export const Loading = () => (
  <>
    <div className="icon-loading flex justify-center items-center"
      style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: '9999', background: 'rgba(0, 0, 0, 0.1)' }}>
      <div className="spinner-grow" role="status" style={{ width: '5rem', height: '5rem' }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </>
);

export const BookmarkInsert = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="icon-bookmark-insert bi bi-bookmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
    </svg>
  </>
);

export const BookmarkRemove = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="icon-bookmark-remove bi bi-bookmark-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      <path fillRule="evenodd" d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708z" />
    </svg>
  </>
);