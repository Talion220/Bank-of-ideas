import HomeTopAuthors from "./homeTop/HomeTopAuthors";
import HomeTopFilials from "./homeTop/HomeTopFilials";
import HomeTopBusinessProcesses from "./homeTop/HomeTopBusinessProcesses";

import "./homeTop.module.css";

function HomeTop() {
  return (
    <div className="homeTop">
      <HomeTopAuthors />
      <HomeTopFilials />
      <HomeTopBusinessProcesses />
    </div>
  );
}

export default HomeTop;
