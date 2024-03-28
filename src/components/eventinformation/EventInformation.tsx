import { useState } from "react";
import Producers from "../../models/fakedata.json";

function EventInformation() {
  const [execProducer, setExecProducer] = useState();
  const [producers, setProducers] = useState<string[]>([]);
  const [producersAssistants, setProducersAssistants] = useState<string[]>([]);

  function setProducersAssistantsList(assistant:string){
    if(producersAssistants.includes(assistant)){
      return;
    }
    else{
      setProducersAssistants([...producersAssistants, assistant])
    }
  }

  function setProducersList(producer:string){
    if(producers.includes(producer)){
      return;
    }
    else{
      setProducers([...producers, producer])
    }
  }

  return (
    <div className="">
      <img
        className="img-fluid mx-auto d-block"
        src="../../WebbLogo.jpg"
        alt=""
      />
      <form className="pb-5">
        <div className="d-flex flex-row justify-content-evenly pb-3">
          <div className="d-flex flex-column">
            <label className="form-label">Webb Event Name:</label>
            <input type="text" id="webbEventName" placeholder=""></input>
          </div>
          <div className="d-flex flex-column">
            <label className="form-label">Client Event Name:</label>
            <input className="" type="text"></input>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-evenly pb-3">
          <div className="d-flex flex-column">
            <label className="form-label">Client Name:</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column">
            <label className="form-label">Exec Producer:</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-evenly pb-5">
          <div className="d-flex flex-column">
            <div className="dropdown">
              <button
                className="btn btn-black text-white border-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Producers
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {Producers.Producers.map((producer) => {
                  return (
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setProducersList(producer.Name)}
                      >
                        {producer.Name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul>
            {producers.map((producer) => (
                <li>{producer}</li>
              ))}
              </ul>
          </div>
          <div className="d-flex flex-column">
            <div className="dropdown">
              <button
                className="btn btn-black text-white dropdown-toggle border-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Producer's Assistants
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {Producers.ProducerAssistants.map((assistant: any) => {
                  return (
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => setProducersAssistantsList(assistant.Name)}
                      >
                        {assistant.Name}
                      </a>
                      
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul>
              {producersAssistants.map((assistant) => (
                <li>{assistant}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary border-white" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventInformation;
