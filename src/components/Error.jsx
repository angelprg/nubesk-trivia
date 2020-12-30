const Error = ({ retryHandler }) => {
  return (
    <div className="error-container">
      <div class="alert alert-danger" role="alert">
        Error retrieving data
      </div>
      <div className="btn btn-primary" onClick={retryHandler}>
        Intentar nuevamente
      </div>
    </div>
  );
};
export default Error;
