import Slider from "./components/slider";
import Stories from "./components/stories";
import Calendar from "./components/calendar";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-2">
      <p className="mb-6">Welcome to my experimental lab</p>

      {/* <div className="mb-8">
        <Slider />
      </div> */}

      {/* <div className="mb-8">
        <Stories />
      </div> */}

      {/* <div className="mb-8">
        <Calendar />
      </div> */}

      <div className="mb-8">
        <Card />
      </div>
    </main>
  );
}
