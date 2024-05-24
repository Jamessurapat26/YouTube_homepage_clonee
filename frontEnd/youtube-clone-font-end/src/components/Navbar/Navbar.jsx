import "./NavStyle.css"
function Navbar() {
  return (
    <section id="navbar">
      <div className="-star">
        <div className="-ham-btn">
          <img src="https://placehold.co/24x24/png" alt="" />
        </div>
        <div className="-logo">
          <img src="https://placehold.co/90x20/png" width={90} height={20} alt="" />
        </div>
      </div>
      <div className="-center">
        <div className="-search">
          <div className="-search-box">
            <input type="text" className="-search-input" />
          </div>
          <div className="-search-btn">Q</div>
        </div>
        <div className="-mic">M</div>
      </div>
      <div className="-end">
        <div className="-end-item">x</div>
        <div className="-end-item">x</div>
        <div className="-end-item">x</div>
      </div>
    </section>
  )
}

export default Navbar