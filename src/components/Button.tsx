function Button() {
  return (
    <>
      <a
        href="https://tot.wiki/wiki/Cards"
        className="btn btn-outline-success m-2"
        type="button"
        target="_blank" //opens in new tab
      >
        Card Mode
      </a>

      <a
        href="https://tot.wiki/wiki/Cards"
        className="btn btn-outline-primary"
        type="button"
        target="_blank" //opens in new tab
      >
        Skills Mode
      </a>
    </>
  );
}

export default Button;
