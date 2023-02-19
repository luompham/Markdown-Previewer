function ResizeIcon(props) {


    // return (console.log('ResizeIcon: ', a))
    if (props.checkIcon) {
        return (<i title='Zoom out' className="fa-solid fa-down-left-and-up-right-to-center"></i>)
    } else {
        return (<i title='Zoom in' className="fa-solid fa-maximize"></i>)
    }


}





class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: `# Heading 1  \n## Heading 2  \n\n[example link](http://example.com/)\n    \n<span style='color:red'>Inline code</span>    \n\nBlock code.  \n\n- List items 1.  \n- List items 2.  \n\n> This is blockquoted text.  \n\nThis is very heavily **emphasized** __text__.  \n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

            `,
            isResize: false,
            resizePreview: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.resizeEditor = this.resizeEditor.bind(this);
        this.resizePreviewer = this.resizePreviewer.bind(this);

    }

    handleChange(event) {

        this.setState({
            input: event.target.value
        })
    }

    handleClickReset() {

        this.setState({
            input: ''
        })

    }

    resizeEditor() {

        this.setState({
            isResize: !this.state.isResize
        })

    }

    resizePreviewer() {

        this.setState({
            resizePreview: !this.state.resizePreview
        })

    }


    render() {

        const input = marked.parse(this.state.input)


        return (

            <div className='wrapper'>



                <div className='wrapper__editor' style={{ 'display': this.state.resizePreview ? 'none' : 'block' }}>

                    <div className='toolbar'>

                        <i className="fa-brands fa-free-code-camp"></i>
                        <span>Editor</span>

                        <div className='wrap-reset' onClick={this.handleClickReset}>

                            <i title='Reset' className="fa fa-refresh" aria-hidden="true"></i>
                        </div>

                        <div className='wrap-fa-maximize' onClick={this.resizeEditor}>

                            {/* Resize icons */}

                            <ResizeIcon checkIcon={this.state.isResize} />

                        </div>

                    </div>
                    <textarea onChange={this.handleChange} style={{ 'minHeight': this.state.isResize ? '100vh' : '200px' }} id='editor' value={this.state.input}>

                    </textarea>




                </div>

                <div className='wrapper-preview' style={{ 'display': this.state.isResize ? 'none' : 'block' }}>

                    <div className='toolbar'>

                        <i className="fa-brands fa-free-code-camp"></i>
                        <span>Previewer</span>


                        <div className='wrap-fa-maximize resize-icon-previewer' onClick={this.resizePreviewer}>

                            {/* Resize icons */}

                            <ResizeIcon checkIcon={this.state.isResize} />

                        </div>

                    </div>

                    <div className='previewer' id="preview" dangerouslySetInnerHTML={{
                        __html: input,
                    }}>

                    </div>

                </div>






            </div>
        )

    }


}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


