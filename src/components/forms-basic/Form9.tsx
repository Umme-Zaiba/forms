// File Upload:
// Create a form with a file input.
// Display the name and size of the selected file below the form.


export default function Form9() {
  return (
    <div>
      <form >
        <label>File upload: </label>
        <input type="file" name="file" id="file" />
      </form>
      <p>File name: <span id="filename"></span></p>
      <p>File size: <span id="filesize"></span></p>
    </div>
  )
}
