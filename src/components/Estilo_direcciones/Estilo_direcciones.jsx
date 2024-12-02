
export default function Direcciones({ name }) {
    return (
        <div>
            <article className="w-50 bg-[#375252] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
                <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg"/>
                <p className="text-sm w-full text-gray-400">{name}</p>
            </article>
        </div>
    );
}
