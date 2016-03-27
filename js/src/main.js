/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        isLanguage: React.PropTypes.bool
    },
    getInitialState: function () {
        return {
            value : 1
        }
    },
    componentDidMount: function () {
        this.setState({
            value : this.state.value + 9
        });
    },
    _addByOne: function () {
        console.log("Clicked");
    },
    aboutme: function () {
        alert("This is for " + this.props.name + " : " + this.props.children);
    },
    render: function() {

        var greeting = "World";

        if(this.props.isLanguage){
            greeting = (<Language name={this.props.name} />)
        }
        return (
                <div>
                    <h1>Hello {greeting}</h1>
                    State - {this.state.value} <br/>
                    <button onClick={this._addByOne}>Click ME</button>
                </div>
        );
    }
});

var Language = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    render: function() {
        return (
            <span>
                {this.props.name}
            </span>
        );
    }
});

ReactDOM.render(
    <div>
        <CommentBox name="React" isLanguage={true}>
            A JS library for building user interfaces.
        </CommentBox>
        <CommentBox name="JSX" isLanguage={true}>
            JSX is a preprocessor step that adds XML syntax to JavaScript.
        </CommentBox>
        <CommentBox isLanguage={false}>
            Hello from React
        </CommentBox>
    </div>,
    document.getElementById('example')
);
