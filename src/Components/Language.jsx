import React from 'react'

function Language() {

    const LanguageList =[
        {
            id:1,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
            
        },
        {
            id:2,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae",
           
        },
        {
            id:3,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563",
            
        },
        {
            id:4,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61",
           
        },
        {
            id:5,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8",
        }
    ],
    PopularGenre=[
        {
            id:1,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e",
            
        },
        {
            id:2,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69",
           
        },
        {
            id:3,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905",
            
        },
        {
            id:4,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76",
           
        },
        {
            id:5,
            image:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63",
        }

    ]
  return (
    
   <>
    <h4 className='text-light ms-5 mt-4'>Popular Languages</h4>
        <div className='d-flex  pt-4 ps-5 px-5 md:px-16 gap-4 md:gap-5'>
          
            {LanguageList.map((item)=>(
                <div className='border border-secondary rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  shadow-gray-800'  >
                    
                    <img src={item.image} className='w-full z-[1] ' />
                    
                </div>
    
            ))}
            
        </div>
        <h4 className='text-light ms-5 mt-4'>Popular Genres</h4>
        <div className='d-flex  pt-4 ps-5 px-5 md:px-16 gap-4 md:gap-5'>
          
            {PopularGenre.map((item)=>(
                <div className='border border-secondary rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  shadow-gray-800'  >
                    
                    <img src={item.image} className='w-full z-[1] ' />
                    
                </div>
    
            ))}
            
        </div>
   </>
  )
}

export default Language
