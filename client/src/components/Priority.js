import '../styles/components/Priority.css';

function Priority({ priority }) {
  const stars = Array(Math.min
    (
      priority, 5
    )).fill(0).map
    (
      (gold, i) =>
        <h3 key={i} id="star">★</h3>
    ).concat
    (
      Array(Math.max
        (
          5 - priority, 0
        )).fill(0).map
        (
          (black, j) =>
            <h3 key={j + 5}>★</h3>
        )
    )

  return (
    <div className="priority">
      {stars}
    </div>
  );
}

export default Priority;
