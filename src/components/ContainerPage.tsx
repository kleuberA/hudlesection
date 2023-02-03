import Illustration from '../assets/images/illustration-mockups.svg';

const ContainerPage = () =>{
    return(
        <div className="flex flex-col lg:flex-row w-4/5 m-auto gap-4 lg:gap-3 items-center containerPage">
            <div className='lg:w-4/5'>
                <img src={Illustration} alt="" />
            </div>
            <div className='flex flex-col gap-4 lg:gap-6 items-center lg:items-start'>
                <h1 className='text-xl lg:text-3xl text-center lg:text-start font-bold text-white'>Build The Community Your Fans Will Love</h1>
                <span className='text-white lg:w-3/5 text-lg text-center lg:text-start'>Huddle re-imagines the way we build communities. 
                    You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion.
                </span>
                <button className='w-60 h-14 rounded-full text-[#674baf] hover:text-white font-bold hover:bg-[#e882e8] bg-white'>Register</button>
            </div>
        </div>
    )
}

export default ContainerPage;