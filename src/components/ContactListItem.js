function ContactListItem(props) {
  return (
    <li>
      <a href={props.url} target="_blank">
        {props.name}
      </a>
    </li>
  );
}
export default ContactListItem;
//
