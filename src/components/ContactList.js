import ContactListItem from "./ContactListItem";

function ContactList() {
  let ContactListItems = links.map((link) => (
    <ContactListItem name={link.name} url={link.url}></ContactListItem>
  ));
  return <ul>{ContactListItems}</ul>;
}

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-ashref/",
  },
  { name: "Twitter", url: "https://twitter.com/ahmedashrefsw" },
  { name: "Withus", url: "https://www.youtube.com/c/WithUss" },
  {
    name: "AIO - All In One product",
    url: "https://www.facebook.com/allMaterialInOnePlace",
  },
  {
    name: "Personal Youtube",
    url: "https://www.youtube.com/channel/UCnqrTQ-YViVPYx5maCLvrew",
  },
  { name: "FacebookPage", url: "https://www.facebook.com/a4raff/" },
  { name: "Instgram", url: "https://www.instagram.com/ahmedashrefsw/" },
  { name: "GitHub", url: "https://github.com/ahmedAshrefsw" },
  {
    name: "SIC - sharing is caring project",
    url: "https://www.facebook.com/ahmed.ashref.sw/posts/4039328866165623",
  },
  { name: "Alog podcast", url: "https://anchor.fm/a-log" },
  { name: "MspCast", url: "https://anchor.fm/mspcast" },
];
export default ContactList;
