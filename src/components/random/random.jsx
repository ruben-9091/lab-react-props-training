import "./random.css"

function Random ({ min, max}) {

    const randomNumber = Math.floor(Math.random() * (max-min +1)) + min
    return (
        <div className="random-number">
            Random value between {min} and {max} = {randomNumber}
        </div>

    )
}

export default Random