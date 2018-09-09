export const createNotebook = (notebook) => (
  $.ajax ({
    url: '/api/notebooks',
    method: 'POST',
    data: { notebook }
  })
);

export const updateNotebook = (notebook) => (
  $.ajax ({
    url: `/api/notebooks/${notebook.id}`,
    method: 'PATCH',
    data: { notebook }
  })
);

export const fetchNotebook = (id) => (
  $.ajax ({
    url: `/api/notebooks/${id}`,
    method: 'GET',
  })
);

export const fetchAllNotebooks = () => (
  $.ajax ({
    url: '/api/notebooks',
    method: 'GET',
  })
);

export const deleteNotebook = (id) => (
  $.ajax ({
    url: `/api/notebooks/${id}`,
    method: 'DELETE'
  })
);
