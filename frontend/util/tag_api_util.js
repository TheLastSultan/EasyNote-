export const createTag = (tag) => (
  $.ajax ({
    url: '/api/tags',
    method: 'POST',
    data: { tag }
  })
);

export const fetchTag = (id) => (
  $.ajax ({
    url: `/api/tags/${id}`,
    method: 'GET',
  })
);

export const fetchAllTags = () => (
  $.ajax ({
    url: '/api/tags',
    method: 'GET',
  })
);

export const deleteTag = (id) => (
  $.ajax ({
    url: `/api/tags/${id}`,
    method: 'DELETE'
  })
);
