function ChangeUnits(props) {

    const changeUnits = (newUnit) => {
        props.handleUnitsChange(newUnit)
    }

    return(
        <>
        <button onClick={() => changeUnits('F')}>
        Fahrenheit
        </button>

        <button onClick={() => changeUnits('C')}>
        Celsius
        </button>
        </>
)
}

export default ChangeUnits;