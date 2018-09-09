# EasyNote
[Live Demo](https://easynote.herokuapp.com/#/)  
[Design Doc](https://github.com/juzen2003/EasyNote/wiki)

[EasyNote](https://easynote.herokuapp.com/#/), a single-page clone of [Evernote](https://evernote.com/), is an application to create and organize rich-text notes online. It allows user to create an account, create notes, and manage them via notebooks and tags easily.

### Technologies

EasyNote is built with
* Ruby on Rails for data management on backend
* React and Redux for dynamic frontend
* PostgreSQL database

## Feature
### User Authentication
User can sign up or login securely.

![User Auth](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/home.png)

### Notes CRUD, with rich-text editor
User is able to create notes with rich-text editor.

![Notes ](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/notes.png)

### Notebooks
Notes can be organized by Notebooks.

![Notebooks ](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/notebooks.png)

Notes belonging to individual notebook is displayed.

![Notebook Notes ](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/notebooks_notes.png)

### Tags
Notes can be tagged with multiple tags

![Tags ](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/tags.png)

Notes belongs to individual tag is displayed.

![Tag Notes ](https://github.com/juzen2003/EasyNote/blob/master/easyNote_readme_image/tags_notes.png)

### MISC
+ Modal, when icons are clicked, open up notebooks and tags index table with modals.
```js
openModal() {
  if (this.props.modal === "/notebooks" || this.props.modal === "/tags") {
    const modals = document.getElementsByClassName(`${this.props.modal.slice(1)}-modal-area`);
    for(let i = 0; i < modals.length; i++) {
      if(modals[i].classList.contains("is-open") === false) {
        modals[i].classList.add("is-open");
      }
    }
  }
}
```
+ Configure and render the rich-text editor (React-Quill)
```js
const toolbar = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ color: [] }, { background: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ align: [] }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  ["blockquote", "code-block"],
  ["link", "image"],
  ['clean']
];
```
```js
<ReactQuill
  value={this.state.body_with_style || ""}
  modules={{toolbar}}
  placeholder="Start Typing here..."
  onChange={this.handleBodyChange}
/>
```

## Application Structure
1. NavSide Bar
 + Create-note button
 + Navigate through notes, notebooks, and tags
 + logout button
2. Rich-text editor
 + Create and edit notes, implemented with [React-Quill](https://github.com/zenoamaro/react-quill)
3. Notes
 + Display all notes
4. Notebooks
 + Display all notebooks
 + Display notes in each notebook
5. Tags
 + Display all tags
 + Display notes with each tag

## Challenges
* Handle many to many association for notes and tags, and properly display results on frontend.
* Reuse the same main page for notes/notebooks/tag, and properly show and hide modals.
* To properly use React-Quill, it required reading through API since some methods are defined slightly different.

## Future Features and Improvement
### Search
* Allow user to search notes by title
* Allow user to search by tags and notebooks

### Separate Delete page
* Add separate deleting page to for user to confirm the deletion on each note

### MISC
* Allow user to remove a specific tag for an individual note
  * deleting tagging only without affecting notes and tags
* Sort notes
  * sort notes with created/updated time
