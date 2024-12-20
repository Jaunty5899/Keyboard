import backspace from "./assets/backspace.svg";
import shift from "./assets/shift.svg";

export default function Digit({ alpha }) {
  return alpha.map((e) => {
    return (
      <>
        <div className="key">{e}</div>
        {e == "P" && (
          <>
            <div className="line-break"></div>
          </>
        )}
        {e == "L" && (
          <>
            <div className="line-break"></div>
            <div className="key shift"></div>
          </>
        )}
        {e == "M" && (
          <>
            <div className="key backspace"></div>
            <div className="line-break"></div>
          </>
        )}
        {e == "123" && (
          <>
            <div className="key language"></div>
            <div className="key voice"></div>
            <div className="key space">space</div>
            <div className="key search">Search</div>
          </>
        )}
      </>
    );
  });
}
