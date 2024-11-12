import Form from "../components/Form";
import ViewLogs from "../components/ViewLogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center mt-20">
        <Form />
        <ViewLogs />
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
