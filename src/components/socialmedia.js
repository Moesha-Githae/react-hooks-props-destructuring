import React from "react"

function SocialMedia({socialLinks: {github, linkedin}}) {
  return (
    <div>
      <a href={github}>{github}</a>
      <br />
      <a href={linkedin}>{linkedin}</a>
    </div>
  )
}
export default SocialMedia;