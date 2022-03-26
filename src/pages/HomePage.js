import ContactList from "../components/ContactList";

function HomePage() {
  return (
    <div className="header container p-3">
      <h1 className="text-center"> Know more about me - Contact Links</h1>
      <ContactList></ContactList>
    </div>
  );
}

export default HomePage;
