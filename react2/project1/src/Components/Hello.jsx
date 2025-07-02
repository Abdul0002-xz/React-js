function Hello(){

    let myName = "Abdul";
    let number = 456;
    const fullName = ()=>{
        return "Abdul Fater"
    }

    return <h3>
       Message no : {number} This is the future Speaking and i am your master {myName} and my fullName is {fullName()}
    </h3>
}

export default Hello