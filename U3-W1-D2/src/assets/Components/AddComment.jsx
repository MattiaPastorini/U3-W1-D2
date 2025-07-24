import { useState } from "react";

const AddComment = ({ asin, onNewComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { comment, rate, elementId: asin };

    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzcyYTc4Y2RkZjAwMTU1ZDY3YWEiLCJpYXQiOjE3NTMzNjU5ODUsImV4cCI6MTc1NDU3NTU4NX0.D-bL2rrZ1TJh5niTSsOHKrn51fp2IflCnOzKGKNapRQ",
        },
        body: JSON.stringify(newComment),
      }
    );

    if (res.ok) {
      setComment("");
      setRate(1);
      onNewComment();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h5>Aggiungi Recensione</h5>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="form-control mb-2"
        placeholder="Scrivi un commento"
        required
      />
      <select
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="form-select mb-2"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">
        Invia
      </button>
    </form>
  );
};

export default AddComment;
