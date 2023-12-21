import useOngoingFilter from "../../../Hooks/useOngoingFilter";
import ListCard from "../Shared/ListCard";

const Ongoing = () => {
    const { ongoing } = useOngoingFilter();

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center"> ongoing</h2>

            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-10">
                {
                    ongoing?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Ongoing;