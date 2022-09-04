
export default function Example() {
    return (
        <div className=" pt-2 box-content "  >
            <div className="flex justify-between container mx-auto items-center">
                <div className=" text-xl font-medium font-impact text-white  py-4"  >
                    <a className="inline-block align-top  hover:text-amber-400" href="/" >FC BACELONA</a>
                </div>
                <div className='flex'>
                    <div className="flex gap-5 pr-3">
                        <a className="inline-block align-top font-impact font-semibold text-white  hover:text-amber-400  py-4 px-[20px]" href="/">Match</a>
                        <a className="inline-block align-top font-impact font-semibold text-white  hover:text-amber-400  py-4 px-[20px]" href="/">Glory</a>
                        <a className="inline-block align-top font-impact font-semibold text-white  hover:text-amber-400  py-4 px-[20px]" href="/">Line up</a>
                        <a className="inline-block align-top font-impact font-semibold text-white  hover:text-amber-400  py-4 px-[20px]" href="/">Team</a>
                        <a className="inline-block align-top font-impact font-semibold text-white  hover:text-amber-400  py-4 px-[20px]" href="/">About us</a>

                        <img src={require('../assets/logo.png')} alt="logo"  width={50} height={40} ></img>
                    </div>
                </div>
            </div>

        </div>
    )
}