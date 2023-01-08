import Slider from "./components/slider";
import Stories from "./components/stories";
import Calendar from "./components/calendar";
import Card from "./components/card";

const calendarData = [
  {
    type: "gallery",
  },
  {
    type: "story",
  },
  {
    type: "spotify",
  },
  {
    type: "default",
  },
];

export default function Home() {
  return (
    <main className="w-screen h-full">
      <Calendar />
    </main>
  );
}
