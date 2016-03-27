/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        isPerson: React.PropTypes.bool
    },
    aboutme: function () {
        alert("This is for " + this.props.name + " : " + this.props.children);
    },
    render: function() {
        return (
            <div>
                <h1>
                    Hello from <Language name={this.props.name} />
                </h1>

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
        <CommentBox>
            Hello from React
        </CommentBox>
    </div>,
    document.getElementById('example')
);
