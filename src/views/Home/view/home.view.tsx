import { NavigationBar, Footer, EnquireNowPopup } from "../../../components";
import { Banner, FirstContent, ContactForm } from "../components";
function HomeView() {
  return (
    <>
      <header className={"navigation-wrap"}>
        <NavigationBar />
      </header>
      <main>
        <Banner />
        <FirstContent />
        <ContactForm />
      </main>
      <footer className="mi-footer mi-bg-primary">
        <Footer />
      </footer>
      <EnquireNowPopup />
    </>
  );
}

export default HomeView;
