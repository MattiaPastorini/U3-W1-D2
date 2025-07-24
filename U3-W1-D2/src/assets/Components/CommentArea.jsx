import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import PropTypes from "prop-types";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization: "Bearer TUO_TOKEN_AUTENTICAZIONE",
          },
        }
      );
      if (!res.ok) throw new Error("Errore nella fetch");
      const data = await res.json();
      setComments(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzcyYTc4Y2RkZjAwMTU1ZDY3YWEiLCJpYXQiOjE3NTMzNjU5ODUsImV4cCI6MTc1NDU3NTU4NX0.D-bL2rrZ1TJh5niTSsOHKrn51fp2IflCnOzKGKNapRQ",
            },
          }
        );
        if (!res.ok) throw new Error("Errore nella fetch");
        const data = await res.json();
        setComments(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="mt-3">
      {isLoading && <Loading />}
      {hasError && <Error />}
      <AddComment asin={asin} onNewComment={fetchComments} />
      <CommentsList comments={comments} onDelete={fetchComments} />
    </div>
  );
};

CommentArea.propTypes = {
  asin: PropTypes.string.isRequired,
};

export default CommentArea;
