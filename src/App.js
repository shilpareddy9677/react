
export default function App(){
  return (
    <div>
      
            <div className="form-content">
                <div className="row">

                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Patient Name" value=""/>
                    </div>

                    <div class="form-group">
                        <select className="form-control" placeholder="select Male/Female" value="">
                        <option name="M">Male</option>
                        <option name="F">Female</option>
                        </select>                       
                    </div>

                    </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Age *" value=""/>
                        </div>
                    </div>

                    <div className="col-md-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone Number *" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Date *" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Time *" value=""/>
                            </div>
                    </div>

                </div>
            </div>
        </div>
      </section>
    </div>
  )
}


