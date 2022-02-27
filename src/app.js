import React from "react";
import { marked } from 'marked'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: `# heading1\n## heading2\nhttps://www.google.com\n\`\`\`\nvar x = 0;\nvar y = 1;\nvar z = x + y;\n\`\`\`\n\`Math.round(3.2)\`\n- list item 1\n- list item 2\n\n>Here's a Block Quote!<br>**BOLD text in mundane times**<br>![rando logo](https://pic.onlinewebfonts.com/svg/img_211187.png)`
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