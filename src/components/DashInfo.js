import { connect } from "react-redux";

function DashInfo(props) {
  let { user } = props;

  return (
    <section>
      <div className="container justify-center flex flex-col flex-row-lg justify-space-between pd-2">
        <div className="image-container flex flex-lg-35 justify-center">
          <img src="/img_avatar.png" alt="user-avatar" className="avatar-img" />
        </div>
        <ul className="mt-2 flex-lg-60">
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-sc-lg-sm text-light bold">
              User Name:{" "}
            </h4>
            <p className="text-xsm text-sc-lg-xsm text-light">
              {user.firstName} {user.lastName}
            </p>
          </li>
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-sc-lg-sm text-light bold">
              Email address:{" "}
            </h4>
            <p className="text-xsm text-sc-lg-xsm text-light">{user.email}</p>
          </li>
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-sc-lg-sm text-light bold">Address: </h4>
            <p className="text-xsm text-sc-lg-xsm text-light">
              {user.house} {user.street} {user.postalCode} {user.country}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer
  };
}

export default connect(mapStateToProps)(DashInfo);
