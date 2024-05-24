import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";

function Main() {
  return (
    <section id="main-layout">
      <Navbar />
      <Sidebar />
      <Content />
    </section>
  );
}
export default Main;
