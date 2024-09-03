import iconlogout from "./image/logout.png"
import avtuser from "./image/imguser.jpg"

function User() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", paddingLeft: "20px " }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className="avt-user" style={{ display: "flex" }}>
          <img src={avtuser} style={{ borderRadius: "50%", width: "35px", height: "35px" }} />
        </div>
        <div className="infor-user">
          <h4 style={{ margin: 0 }}>Jonathon Treat</h4>
          <p style={{ margin: 0 }}>lana@treat.com</p>
        </div>
      </div>
      <div className="button-sign-out" style={{ display: "flex" }}>
        <img src={iconlogout} style={{ width: "20px", height: "20px" }}/>
      </div>
    </div>
  );
}

export default User;

