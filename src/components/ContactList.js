import { contactLinks } from "../contactLinks";
import ContactListItem from "./ContactListItem";

function ContactList() {
  let ContactListItems = contactLinks.map((link) => (
    <ContactListItem name={link.name} url={link.url}></ContactListItem>
  ));
  return (
    <ul className="list-unstyled d-flex justify-content-center flex-wrap ">
      {ContactListItems}
    </ul>
  );
}
export default ContactList;
