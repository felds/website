import React from "react"
// import "../styles.css"

function Avatar({ src }) {
  return (
    <picture className="avatar">
      <img
        src={require("../../static/avatar.png")}
        alt=""
        width="344"
        height="344"
      />
    </picture>
  )
}

function IdentityCard() {
  return (
    <div className="identity-card">
      <div className="identity-card__avatar">
        <Avatar />
      </div>
      <div className="identity-card__text">
        <h1 className="identity-card__name">Luiz “Felds” Liscia</h1>
        <div className="identity-card__description">
          Programador web full stack e mais algumas coisas.
        </div>
        <div className="identity-card__links">
          <a href="https://github.com/felds">Github</a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <IdentityCard />
    </div>
  )
}
