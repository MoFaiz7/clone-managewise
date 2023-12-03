import { Nav } from "./components";
import { Heroes, Features, Exploremore, Integration, Need, Pricing, Testimonials, Dontmiss, ManageWise } from "./sections";


const App = () => {
  return (
    <main className="w-full px-5 bg-[#FDF2EC] h-[100vh]">
      <Nav />
      <Heroes />
      <Features/>
      <br/>
      <Exploremore/>

      <Integration/>
      <Need/>
      <Pricing/>
      <Testimonials/>
      <Dontmiss/>
      <ManageWise/>
    </main>
  );
};

export default App;