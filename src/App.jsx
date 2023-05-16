import { useLoaderData } from "react-router-dom";
import ChocolateTable from "./components/ChocolateTable";
import { useState } from "react";

const App = () => {
  const loadedChocolate = useLoaderData();
  const [allChocolates, setAllChocolates ] = useState(loadedChocolate)
  console.log(loadedChocolate)
  return (
    <div>
      <h1 className="py-4 text-5xl font-bold text-purple-600 text-center">Chocolate Management System {loadedChocolate.length}</h1>
      <div className="container mx-auto p-6">
        <table className="md:w-10/12 mx-auto border bg-white">
          <thead style={{ background: 'radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)' }}>
            <tr>
              <th className="px-6 py-6 border-b border-gray-200 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-6 border-b border-gray-200 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-6 border-b border-gray-200 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-6 border-b border-gray-200 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-6 border-b border-gray-200 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              allChocolates.map(chocolate => <ChocolateTable key={chocolate._id} chocolate={chocolate} allChocolates={allChocolates} setAllChocolates={setAllChocolates}></ChocolateTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;