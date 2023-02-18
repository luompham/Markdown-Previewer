class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {



        this.setState({
            input: event.target.value
        })



    }

    render() {

        return (

            <div className='wrapper'>



                <textarea onChange={this.handleChange} id='editor' value={this.state.input}>

                </textarea>

                <div className='preview-wrapper'>


                    <div id="preview">{this.state.input}

                    </div>

                </div>






            </div>
        )

    }


}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


