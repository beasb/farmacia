import Remedios from '../assets/remedios.svg'

function Home() {
 
    return (
    
        <>
        <div className="bg-slate-100 flex justify-center">
                <div className='container grid grid-cols-2'>
                   
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja Bem Vindo ao Sistema da Farmacia!</h2>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img src={Remedios} alt="Imagem da de Remedios"  className='w-2/3'/>
                    </div>
                </div>
            </div>
    </>


  )
}

export default Home