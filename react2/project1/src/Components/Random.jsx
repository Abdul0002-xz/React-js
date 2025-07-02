function Random(){

    let number = Math.round(Math.random()*100)

    return <h4 style={{'backgroundColor' : 'red'}}>
        The random number is : {number}
    </h4>
}

export default Random