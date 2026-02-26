import Image from 'next/image';
import './Carousel.css';

const images = [
    { src: '/carousel_next.png', alt: 'Logo Next' },
    { src: '/carousel_react.png', alt: 'Logo React' },
    { src: '/carousel_php.png', alt: 'Logo PHP' },
    { src: '/carousel_mysql.png', alt: 'Logo Mysql' },
    { src: '/carousel_python.png', alt: 'Logo Python' },
    { src: '/carousel_n8n.png', alt: 'Logo n8n' },
    { src: '/carousel_git.png', alt: 'Logo Git Hub' },
    { src: '/carousel_googleads.png', alt: 'Logo Google Ads' },
    { src: '/carousel_metaads.png', alt: 'Logo Meta Ads' },
];

const renderCarouselItems = () => (
    images.map((item, index) => (
        <div key={index}> 
            <Image 
                src={item.src} 
                alt={item.alt} 
                width={200} 
                height={50}
                style={{ objectFit: 'cover' }}
            />
        </div>
    ))
);

const Carousel = function() {
    return (
        <div className='carousel'>
            <div className='group'>
                {renderCarouselItems()}
            </div>
            <div aria-hidden className='group'>
                {renderCarouselItems()}
            </div>
        </div>
    );
}

export default Carousel;