import ListItem from "../ListItem/ListItem";
function List() {
  return (
    <div className="list">
      <div className="list__filters">
        <span>Most interesting blockchain activity</span>
        <span>
          Filter:<span className="list__filters--options"> TOP ACTIVITY</span>
        </span>
      </div>
      {[...Array(20)].map((el, i) => (
        <ListItem key={i + 1} index={i + 1}></ListItem>
      ))}
    </div>
  );
}
export default List;
