import GameList from "@/components/GameList";
import GamingLogo from "@/components/GamingLogo";
import Filter from "@/components/Filter";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <GamingLogo />
      </header>
      <div className="m-24">
        <Filter />
      </div>
      <main className="m-24 rounded-md grid grid-cols-4 gap-10">
        <GameList />
      </main>
    </div>
  );
};

export default Layout;
