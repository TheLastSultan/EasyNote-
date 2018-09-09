export const createTagging = (tagging) => (
  $.ajax ({
    url: '/api/taggings',
    method: 'POST',
    data: { tagging }
  })
);

// tagging = {note_id: 3, tag_id: 12}
