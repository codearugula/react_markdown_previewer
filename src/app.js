import React from "react";
import { marked } from 'marked'

let markdown = `
# heading1

## heading2
https://www.google.com
\`\`\`
var x = 0;
var y = 1;
var z = x + y;
\`\`\`
\`Math.round(3.2)\`
- list item 1
- list item 2

>Here's a Block Quote!
**BOLD text in mundane times**
![rando logo](https://pic.onlinewebfonts.com/svg/img_211187.png)
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: markdown
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        marked.setOptions({
            breaks: true
        });
        this.setState({ value: e.target.value});
    }

    render() {
        return (
            <div id="wrapper">
                #wrapper
                <div id="textareaWrapper">
                    #textareaWrapper<br />
                    <textarea id="editor" value={this.state.value} onChange={this.handleChange}></textarea>
                </div>
                <div id="previewWrapper">
                    #previewWrapper
                    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.value) }} />
                </div>
            </div>
            )
    }

}

export default App;