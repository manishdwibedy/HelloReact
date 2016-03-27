/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    render: function() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.children}
                </p>
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
    </div>,
    document.getElementById('example')
);
