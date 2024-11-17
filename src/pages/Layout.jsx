import GameList from "@/components/GameList";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <GameList />
      </main>
    </div>
  );
};

export default Layout;
