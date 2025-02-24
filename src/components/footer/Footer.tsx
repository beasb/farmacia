
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-300 text-white h-30">
               
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmacia | Copyright: {data}
                        </p>

                </div>
            </div>
        </>
    )
}

export default Footer