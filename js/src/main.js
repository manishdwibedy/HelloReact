/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    getDefaultProps: function () {
        return{
            name: 'Manish'
        }
    },
    aboutme: function () {
        alert("This is for " + this.props.name + " : " + this.props.children);
    },
    render: function() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <a onClick={this.aboutme} href="#">About {this.props.name}</a>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <CommentBox name="React">
            A JS library for building user interfaces.
        </CommentBox>
        <CommentBox name="JSX">
            JSX is a preprocessor step that adds XML syntax to JavaScript.
        </CommentBox>
        <CommentBox name={false}>
            Hello from React
        </CommentBox>
    </div>,
    document.getElementById('example')
);
