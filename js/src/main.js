/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    render: function() {
        return (
            <h1>Hello {this.props.name}!!</h1>
        );
    }
});
ReactDOM.render(
    <div>
        <CommentBox name="React"/>
        <CommentBox name="JSX"/>
        <CommentBox name="World"/>
    </div>,
    document.getElementById('example')
);
