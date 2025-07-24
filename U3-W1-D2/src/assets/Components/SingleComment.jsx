const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = async () => {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/${comment._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzcyYTc4Y2RkZjAwMTU1ZDY3YWEiLCJpYXQiOjE3NTMzNjU5ODUsImV4cCI6MTc1NDU3NTU4NX0.D-bL2rrZ1TJh5niTSsOHKrn51fp2IflCnOzKGKNapRQ",
        },
      }
    );
    if (res.ok) {
      onDelete();
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {comment.comment} ({comment.rate}/5)
      </span>
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

export default SingleComment;
