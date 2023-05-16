import { RxPencil1, RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const ChocolateTable = ({ chocolate, allChocolates, setAllChocolates }) => {
    console.log(allChocolates);
    const {name, photoURL, category, country, _id} = chocolate;
    // chocolate deleting here
    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/chocolates/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json()
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                    'Deleted!',
                    'Your Chocolate has been deleted.',
                    'success'
                    )
                    const remaining = allChocolates.filter(c => c._id !== id);
                    setAllChocolates(remaining); 
                }
            }))
            }
          })
    }
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
                    <RxCross1 onClick={() => handleDelete(_id)} className="p-3 text-5xl rounded" style={{color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'}}></RxCross1>
                </td>
            </tr>
        </>
    );
};

export default ChocolateTable;