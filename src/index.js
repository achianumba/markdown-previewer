import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./assets/bootstrap.min.css";
import "./index.css";
import marked from "marked";

const MarkdownPreviewer = () => {
  const [value, setValue] = useState(`
# Heading 1
## Heading 2
_Italicized text_
	
__Bold text__
---
This link points to [FreeCodeCamp](https://www.freecodecamp.org).
---

#### Remember your JS map method?

\`\`\`
someArray.map((currentValue, index, array) => {
	// Do stuff to each element in the array
});
\`\`\`
	
It can also be used in-place like so:
\`[1, 2, 3].map((currentValue) => currentValue * 2;\`
---
<pre>
<code>
//Preformatted code also does the trick. Let's double the ages of the devs in the following object.
let devs = [
	{
	name: John,
	age: 24
	},
	{
	name: James,
	age: 26
	},
		{
	name: Terry,
	age: 21
	}
]
</code>
</pre>
---
A bulleted list:
* Foo
* Bar
* Spam
---
	
> This chunk of text is a block quote.
> Its line(s) will all be indented a bit from the rest of the text.


This project was built with MarkedJS, Bootstrap, SASS, and React.
	
![A random Image](https://source.unsplash.com/random/200x100)
`);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  marked.setOptions({ breaks: true });
  return (
    <>
      <div className="row w-100 mb-4">
        <h1 className="col-12 text-light text-center mb">Markdown Previewer</h1>
      </div>
      <div
        id="markdown"
        className="row w-100 d-flex flex-sm-wrap justify-content-sm-center justify-content-md-around m-0"
      >
        <Editor val={value} handleChange={handleChange} />

        <Preview output={{ __html: marked(value) }} />
      </div>
    </>
  );
};

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      className="form-control col-sm-10 col-md-5 h-sm-50 mb-4"
      value={props.val}
      onChange={props.handleChange}
    />
  );
};

const Preview = (props) => {
  return (
    <div
      id="preview"
      className="col-sm-10 col-md-5 bg-light rounded mb-4"
      dangerouslySetInnerHTML={props.output}
    />
  );
};

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));