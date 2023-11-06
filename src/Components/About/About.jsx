import React from 'react'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='py-4 md:py-0 w-full'>
            <div className="md:mt-0 mt-6 md:h-[calc(100vh-128px)] px-4 md:px-0 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center gap-y-2 md:gap-4">
                    <div className="">
                        <img src={about} className='h-96 w-96 object-fit' />
                    </div>
                    <div className="">
                        <h6 className="text-base font-semibold mb-4">About the snickers</h6>
                        <h1 className="text-4xl md:text-7xl mb-4">BEHIND THE BAR.</h1>
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aspernatur, consectetur officia incidunt amet quidem esse adipisci labore eligendi sit enim at tempora. Veritatis animi alias, numquam quod soluta officia quis provident harum minus ratione eligendi quisquam laboriosam est cupiditate temporibus sed? Necessitatibus in quod sunt quos. Iusto ipsa tenetur alias maxime sunt dolores eveniet. Praesentium officiis facere saepe placeat, voluptates eos itaque minima molestiae repudiandae ipsam eaque sed accusamus nesciunt labore. Magnam consequuntur, veniam alias corrupti eaque voluptatibus dolorum aliquam deleniti blanditiis, quisquam, incidunt animi quaerat! Maxime minima aut explicabo quidem sit alias incidunt sapiente modi dolores ducimus porro ad, provident quisquam voluptate ea recusandae possimus beatae facere nostrum est pariatur quasi illum hic rem. Magnam amet nulla atque maiores aspernatur ullam perferendis eos sed molestias aliquam unde aperiam suscipit cumque ut natus nihil itaque, reprehenderit eius nemo quisquam.</p>
                    </div>
            </div>
    </div>
  )
}

export default About