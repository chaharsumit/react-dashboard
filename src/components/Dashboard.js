import { connect } from "react-redux"

function Dashboard(props){

  let { user } = props;

  return (
    <section>
      <div className="container justify-center flex flex-col pd-2">
        <div className="image-container flex justify-center">
          <img src="/img_avatar.png" />
        </div>
        <ul className="mt-2">
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-light bold">User Name: </h4>
            <p className="text-xsm text-light">{user.firstName} {user.lastName}</p>
          </li>
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-light bold">Email address: </h4>
            <p className="text-xsm text-light">{user.email}</p>
          </li>
          <li className="bg-primary mb-1 pd-1 user-detail-container">
            <h4 className="text-sm text-light bold">Address: </h4>
            <p className="text-xsm text-light">{user.house} {user.street} {user.postalCode} {user.country}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

function mapStateToProps(state){
  return {
    user: state.currUserReducer
  }
}

export default connect(mapStateToProps)(Dashboard);