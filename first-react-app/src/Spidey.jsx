function Spidey(props) {
    const {countHere, superhero} = props;

console.log(countHere)

return (
    <>
    <h3 style={{fontSize: props.countHere}}>{superhero.name}</h3>
    <blockquote>{superhero.catchPhrase}</blockquote>
    <cite>{superhero.alterEgo}</cite>
 </>
)


}
export default Spidey