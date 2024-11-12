import Form from "../components/Form";
import ViewLogs from "../components/ViewLogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-20">
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
