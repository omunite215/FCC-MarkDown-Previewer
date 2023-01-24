import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [text, setText] = useState(`
  # Welcome To My MarkDown Previewer
  ## This would H2 type Heading
  [credits: Free Code Camp](https://www.freecodecamp.org)
  \`code\`
  \`\`\`
  {
    "firstname": "Om",
    "LastName": "Patel",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote!

  ![alt text](https://cdn-icons-png.flaticon.com/512/9494/9494100.png)

  **This Text is Bold**
  `);
  marked.setOptions({
    breaks: true
  })
  return (
    <>
    <div className="App">
      <div className="p-3 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        <div className="text-light bg-primary d-flex p-2 border-primary-subtle rounded-3 mb-2"> <img
            src={require("./star.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top mt-2"
          /><h1>Editor</h1></div>
      <textarea
        id="editor" className="pt-5 ps-5 mb- -5"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text} rows="10" cols="80"
      ></textarea>
      <div className="p-3 text-light bg-primary-subtle">
      <div className="text-light bg-primary d-flex p-2 border-primary-subtle rounded-3"> <img
            src={require("./star.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top mt-2"
          /><h1>Previewer</h1></div>
      <div
        id="preview" className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mt-2"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
      </div>
    </div>
    <div>Project by Om Patel</div>
    </div>
    </>
  );
}

export default App;
