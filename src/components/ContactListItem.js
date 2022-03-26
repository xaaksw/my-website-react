function ContactListItem(props) {
  return (
    <li className="m-3 ">
      <a
        className="p-3 btn btn-outline-light fw-bold"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        {props.name}
      </a>
    </li>
  );
}
export default ContactListItem;
//
