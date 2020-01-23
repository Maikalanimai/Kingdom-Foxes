import React from "react";
import { withRouter } from "react-router-dom";
import "./footer.scss";
import discordIcon from "../../assets/discord.png";
import wynnIcon from "../../assets/wynnpng.png";

function Footer(props) {
  return (
    <footer className="footer">
      <hr />
      <div>
        <button onClick={() => props.history.push("/admin")}>Admin page</button>
        <a href="https://forums.wynncraft.com/threads/89227/">
          <img alt="Wynncraft" src={wynnIcon} className="icon" />
        </a>
        <a href="https://discord.gg/f26TyGn">
          <img src={discordIcon} alt="discord" className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default withRouter(Footer);
