//npm i react-world-flags
import Flag from "react-world-flags";
export default function FlagEmoji({ code }) {
  return <Flag code={code} style={{ width: "1.5em", height: "1.5em" }} />;
}
