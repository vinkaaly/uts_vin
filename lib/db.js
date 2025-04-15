let comments = [];
let ratings = [];

export function getComments() {
  return comments;
}

export function addComment(comment) {
  comments.push(comment);
  return comments;
}

export function addRating(value) {
    ratings.push(value);
    const totalVotes = ratings.length;
    const average = (ratings.reduce((a, b) => a + b, 0) / totalVotes).toFixed(1);
    return { average, totalVotes };
  }
  
  export function getRating() {
    const totalVotes = ratings.length;
    const average = totalVotes
      ? (ratings.reduce((a, b) => a + b, 0) / totalVotes).toFixed(1)
      : 0;
    return { average, totalVotes };
  }
