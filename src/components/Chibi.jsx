function Chibi({ chibi }) {
  return (
    <div>
      <h2>{chibi.edition}</h2>
      <img src={"./assets/" + chibi.edition + ".png"} alt="" />
    </div>
  );
}

export default Chibi;
