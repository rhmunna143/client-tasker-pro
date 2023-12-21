import useToDoFilter from "../../../Hooks/useToDoFilter";
import ListCard from "../Shared/ListCard";


const ToDo = () => {
    const { todo } = useToDoFilter()

    console.log(todo);
    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">to-do</h2>

            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-20">
                {
                    todo?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default ToDo;