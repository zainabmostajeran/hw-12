import "./App.css";
import { Header } from "./components/Header";
import { Lesson } from "./components/lesson";
import { Clients } from "./components/clients";
import { Manage } from "./components/manage";
import { Unseen } from "./components/unseen";
import { Helping } from "./components/Helping";
import { Design } from "./components/design";
import { Smith } from "./components/smith";
import { Caring } from "./components/caring";
import { TopFoter } from "./components/topfoter";
import { Footer } from "./components/footer";

function app() {
  return (
    <>
      <div className="font-Inter">
        <Header />
        <Lesson />
        <Clients />
        <Manage />
        <Unseen />
        <Helping />
        <Design />
        <Smith />
        <Caring />
        <TopFoter />
        <Footer />
      </div>
    </>
  );
}
export default app;
