import "../styles/components/ProgressBar.css"

function ProgressBar({ progress }) {

  return (
    <div className="progress">
      <div className="progress-bar">
        <div className="progress-indicator" style={{width: `${progress}%`}} />
      </div>
    </div>
  );
}

export default ProgressBar;
