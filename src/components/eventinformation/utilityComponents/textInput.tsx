

function textInput(props: any){
    return(
        <>
            <label className="form-label">{props.title}</label>
            <input
              type="props.type"
              id={props.id}
              placeholder={props.placeholder}
            ></input>
        </>
    )
}

export default textInput;