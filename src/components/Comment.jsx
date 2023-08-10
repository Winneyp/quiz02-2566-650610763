import { comments } from "@/libs/comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  number,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={comments[number].userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {comments[number].username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>
            {comments[number].commentText}
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{comments[number].likeNum}</span>
          </div>
        </div>
      </div>
      {/* map-loop render Reply component here */}
    </div>
  );
};
