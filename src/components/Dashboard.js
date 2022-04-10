import Blog from "./Blog";
import Footer from "./Footer";
import DashInfo from "./DashInfo";

export default function Dashboard(props) {
  return (
    <>
      <DashInfo />
      <Blog />
      <Footer />
    </>
  );
}
