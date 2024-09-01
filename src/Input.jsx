const Input = ({colorValue, setColorValue})=>{
    return(
        <div className="input">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input 
                    type="text"
                    placeholder="add color name"
                    required
                    autofocus
                    onChange={(e)=>{setColorValue(e.target.value)}}
                />
            </form>
        </div>
    );
}

export default Input