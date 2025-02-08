const AlertDialog = () => {
  return (
    <div>
      <div role="alert" className="alert shadow-lg">
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
        <button className="btn btn-sm">See</button>
      </div>
    </div>
  );
};

export default AlertDialog;
