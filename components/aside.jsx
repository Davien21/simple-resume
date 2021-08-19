import Menu from "./menu";

function Aside({ className }) {
  return (
    <aside className={className}>
      <span className="title ">Menu</span>
      <Menu />
    </aside>
  );
}

export default Aside;
