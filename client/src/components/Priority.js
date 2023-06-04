import '../styles/Priority.css';

function Priority({ priority }) {
  const starts = Array(Math.min
    (
      priority, 5
    )).fill
    (
      <h3 id="star">★</h3>
    ).concat
    (
      Array(Math.max
        (
          5 - priority, 0
        )).fill
        (
          <h3>★</h3>
        )
    );

  return (
    <div className="priority">
      {starts}
    </div>
  );
}

export default Priority;
