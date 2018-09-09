export const createNote = (note) => (
  $.ajax ({
    url: '/api/notes',
    method: 'POST',
    data: { note }
  })
);

export const updateNote = (note) => (
  $.ajax ({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: { note }
  })
);

export const fetchNote = (id) => (
  $.ajax ({
    url: `/api/notes/${id}`,
    method: 'GET',
  })
);

export const fetchAllNotes = () => (
  $.ajax ({
    url: '/api/notes',
    method: 'GET',
  })
);

export const deleteNote = (id) => (
  $.ajax ({
    url: `/api/notes/${id}`,
    method: 'DELETE'
  })
);

// this is for fetching notes from a notebook
export const fetchNotebookNotes = (notebookId) => (
  $.ajax ({
    url: `/api/notebooks/${notebookId}/notes`,
    method: 'GET',
  })
);
