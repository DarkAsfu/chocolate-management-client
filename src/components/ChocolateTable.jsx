import { RxPencil1, RxCross1 } from "react-icons/rx";

const ChocolateTable = ({ chocolate }) => {
    console.log(chocolate);
    const {name, photoURL, category, country, _id} = chocolate;
    return (
        <>

            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img className="h-10 w-10 rounded-full" src={photoURL} alt="User Avatar" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-4">
                    <RxPencil1 className="p-3 text-5xl rounded" style={{color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'}}></RxPencil1>
                    <RxCross1  className="p-3 text-5xl rounded" style={{color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'}}></RxCross1>
                </td>
            </tr>
        </>
    );
};

export default ChocolateTable;