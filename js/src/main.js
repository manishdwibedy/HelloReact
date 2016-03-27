/**
 * Created by manishdwibedy on 3/27/16.
 */

var CommentBox = React.createClass({
    render: function() {
        return (
            <h1>Hello!!</h1>
        );
    }
});
ReactDOM.render(
    <div>
        <CommentBox />
        <CommentBox />
        <CommentBox />
    </div>,
    document.getElementById('example')
);
