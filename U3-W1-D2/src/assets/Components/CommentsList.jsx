import SingleComment from "./SingleComment";

const CommentsList = ({ comments, onDelete }) => (
  <div>
    <h5>Recensioni:</h5>
    <ul className="list-group">
      {comments.map((c) => (
        <SingleComment key={c._id} comment={c} onDelete={onDelete} />
      ))}
    </ul>
  </div>
);

export default CommentsList;
