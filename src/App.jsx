import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import nozzleIcon from "./assets/nozzle.png";
import cbill from "./assets/cbill.png";
import { Link } from "react-router";
const App = () => {
  return (
    <div>
      <div>
        {/* <h1 className="text-4xl font-semibold">Welcome to Fuel Station Management</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 justify-center text-center gap-2 lg:gap-10">
          <Link to="/nozzle-configuration">
            <Card className="shadow-lg shadow-[#fbe9d3] group">
              <CardHeader>
                <CardTitle>
                  <img
                    
                    className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] border rounded-3xl mx-auto mb-2 group-hover:bg-[#fbe9d3] transition-all"
                    src={nozzleIcon}
                    alt=""
                  />
                </CardTitle>
                <CardTitle className="text-[14px] lg:text-[16px]">Configure Nozzle</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link to="/bill-create">
            <Card className="shadow-lg shadow-[#fbe9d3] group">
              <CardHeader>
                <CardTitle>
                  <img
                   
                    className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] border rounded-3xl mx-auto mb-2 group-hover:bg-[#fbe9d3] transition-all"
                    src={cbill}
                    alt=""
                  />
                </CardTitle>
                <CardTitle className="text-[14px] lg:text-[16px]">Bill Create</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
