

export default function LikeSwitch (){

    return (

        <label className="relative inline-flex items-center cursor-pointer  ">
            <input type="checkbox" value="" className="sr-only peer"/>
            <div
                className="group peer ring-0 bg-blue-300  rounded-full outline-none duration-300 after:duration-300 w-[80px] h-[28px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
            </div>
        </label>

    );
};


