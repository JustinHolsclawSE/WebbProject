function EventDates() {
  const duration: number = 8;
  return (
    <div className="border-top border-white">
      <form>
        <div className="d-flex flex-row justify-content-evenly">
          <div className="mb-3">
            <label className="form-label">Event Start Date:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Event End Date:</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        
        <div className="d-flex flex-row justify-content-evenly">
        <div className="mb-3">
          <div>
            <label className="form-label">Load In Date:</label>
            <input type="date" className="form-control" />
          </div>
          <div>
            <label className="form-label">Load In Start: </label>
            <input type="time" className="form-control mb-3" />
            <label className="form-label">Load In End: </label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className=" mb-3">
          <div>
            <label className="form-label">Load Out Date:</label>
            <input type="date" className="form-control" />
          </div>
          <div>
            <label className="form-label">Load Out Start: </label>
            <input type="time" className="form-control mb-3" />
            <label className="form-label">Load Out End: </label>
            <input type="time" className="form-control" />
          </div>
        </div>
        </div>
        
        
        <div className="d-flex flex-row justify-content-evenly mb-3">
          <div>
            <label className="form-label">Crew Travel To Date</label>
            <input type="date" className="form-control" />
          </div>
          <div>
            <label className="form-label">Travel In Start: </label>
            <input type="time" className="form-control mb-3" />
            <label className="form-label">Travel In End: </label>
            <input type="time" className="form-control" />
          </div>
        </div>

        <div className="d-flex flex-row justify-content-evenly mb-3">
          <div>
            <label className="form-label">Crew Travel Return Date:</label>
            <input type="date" className="form-control" />
          </div>
          <div>
            <label className="form-label">Travel In Start: </label>
            <input type="time" className="form-control mb-3" />
            <label className="form-label">Travel In End: </label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary border-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventDates;
